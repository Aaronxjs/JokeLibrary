<template>
  <div class="message">
    <div class="showMessage" v-if="isShow">
      <div class="header"><span>精选留言</span><span class="link" @click="sendMessageFn">写留言</span></div>
      <div class="content" v-for="message in messages" :key="message.index">
        <div class="left"><img :src="message.avatarUrl"/></div>
        <div class="center">
          <div class="header">
            <div class="name">{{message.nickName}}</div>
            <div class="praise">
              <img src="../../../static/images/praise.png">
              <span>{{message.praise}}</span>
            </div>
          </div>
          <div class="messageText">
            <emojiText :texts="message.text"></emojiText>
          </div>
        </div>
      </div>
    </div>
    <div class="sendMessage" v-if="!isShow">
      <div class="header"><span class="link" @click="showMessageFn">精选留言</span><span>写留言</span></div>
      <form bindsubmit="bindFormSubmit">
        <div class="textarea">
          <textarea :value="msg" @input="inputMsg" @focus="inputFocus" @blur="blurInput" placeholder="留言评论" name="textarea" />
          <emoji @updataMsg="updataMsg" @sendMsg="sendMsg" @showEmojisFn="showEmojisFn" :msg="msg" :showEmojis="showEmojis"></emoji>
        </div>
        <button @click="sendMsg">留言</button>
      </form>
      <div class="myMessage">
        <div class="title">我的留言</div>
        <div class="content" v-for="(myMessage, index) in myMessages" :key="index">
          <div class="left"><img :src="myMessage.avatarUrl"/></div>
          <div class="center">
            <div class="header">
              <div class="name">{{myMessage.nickName}}</div>
            </div>
            <div class="messageText">
              <emojiText :texts="myMessage.text"></emojiText>
            </div>
            <div class="delete" @click="deleteFn" :data-key="index">删除</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 引入表情包组件
import emoji from '@/components/emoji/emoji'
// 引入显示表情文字组件
import emojiText from '@/components/emojiText/emojiText'
// 表情转化为文字
import { textToEmoji } from '../../utils/emojis'

import userInfo from '../../stores/globalUserInfo'

export default {
  components: {
    emoji,
    emojiText
  },
  props: {
    messages: {
      type: Array,
      default: [
      ]
    },
    myMessages: {
      type: Array,
      default: [
      ]
    },
    textId: {
      type: Number,
      default: 0
    }
  },
  onLoad () {
    this.selectMessages()
    this.selectMyMessages()
  },
  onShow () {
    this.selectMessages()
    this.selectMyMessages()
  },
  data () {
    return {
      msg: '',
      isShow: true,
      showEmojis: false
    }
  },
  methods: {
    sendMessageFn () {
      this.isShow = false
    },
    showMessageFn () {
      this.isShow = true
    },
    blurInput (e) {
      this.msg = e.mp.detail.value
    },
    inputMsg (e) {
      this.msg = e.mp.detail.value
    },
    inputFocus () {
      this.showEmojisFn(false)
    },
    updataMsg (msg) {
      this.msg = msg
    },
    sendMsg () {
      const self = this
      if (self.msg === '') return
      userInfo.commit('setUserInfo', function () {
        const mymessage = {
          avatarUrl: userInfo.getters.getUserInfo.avatarUrl,
          nickName: userInfo.getters.getUserInfo.nickName,
          text: textToEmoji(self.msg),
          praise: 0,
          isShow: true,
          textId: self.textId
        }
        mpvue.showLoading({
          title: '留言中'
        })
        mpvue.cloud.callFunction({
          name: 'add',
          data: mymessage,
          success: res => {
            mpvue.hideLoading()
            self.myMessages.unshift(mymessage)
            self.msg = ''
            mpvue.showToast({
              title: '已留言'
            })
            self.selectMyMessages()
            self.selectMessages()
          },
          fail: res => {
            mpvue.hideLoading()
            mpvue.showToast({
              title: res.result.errMsg
            })
          }
        })
      })
    },
    showEmojisFn (_Boolean) {
      this.showEmojis = _Boolean
    },
    deleteFn (e) {
      const id = e.currentTarget.dataset.key
      const message = this.myMessages.splice(id, 1)
      mpvue.showLoading({
        title: '删除中'
      })
      this.deleteMessage(message[0]._id, () => {
        this.selectMyMessages()
        this.selectMessages()
      })
    },
    selectMessages () {
      mpvue.cloud.init({
        env: 'aaronxu-6ba5fc',
        traceUser: true
      })
      mpvue.cloud.callFunction({
        name: 'selectMessage',
        data: {
          textId: this.textId
        },
        success: res => {
          this.messages = JSON.parse(JSON.stringify(res.result.data))
        },
        fail: res => {
          console.log('fail: ' + res)
          this.messages = []
        }
      })
      console.log('selectMessage')
    },
    selectMyMessages () {
      mpvue.cloud.init({
        env: 'aaronxu-6ba5fc',
        traceUser: true
      })
      mpvue.cloud.callFunction({
        name: 'selectMyMessage',
        data: {
          textId: this.textId
        },
        success: res => {
          this.myMessages = JSON.parse(JSON.stringify(res.result.data))
        },
        fail: res => {
          this.myMessages = []
        }
      })
      console.log('selectMyMessage')
    },
    deleteMessage (_id, _callback) {
      mpvue.cloud.init({
        env: 'aaronxu-6ba5fc',
        traceUser: true
      })
      mpvue.cloud.callFunction({
        name: 'deleteMessage',
        data: {
          _id: _id
        },
        success: res => {
          mpvue.hideLoading()
          mpvue.showToast({
            title: '已删除'
          })
          _callback()
          console.log('success: ' + res)
        },
        fail: res => {
          console.log('fail: ' + res)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.message{
  background-color: #EDECE8;
  width: 100%;
  .header{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .link{
      color: #0DBC79;
    }
  }
  .content{
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left{
      flex: 1;
      img{
        width: 60px;
        height: 60px;
      }
    }
    .center{
      flex: 4;
      margin-bottom: 10px;
      .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        .praise{
          margin-right: 25px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          img{
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  .sendMessage{
    width: 100%;
    .textarea{
      width: 100%;
      background-color: #ffffff;
      textarea{
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
      }
    }
    button{
      background-color: #0DBC79;
      color: #ffffff;
      width: 90%;
      margin: 10px auto;
    }
  }
  .myMessage{
    width: 90%;
    margin: 10px auto;
    .content{
      margin: 5px auto;
    }
    .delete{
      color: #0DBC79;
    }
  }
}
</style>
