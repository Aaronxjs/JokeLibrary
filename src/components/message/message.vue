<template>
  <div class="message">
    <div class="showMessage" v-if="isShow">
      <div class="header"><span>精选留言</span><span class="link" @click="sendMessageFn">写留言</span></div>
      <div class="content" v-for="message in messages" :key="message.index">
        <div class="left"><img :src="message.tx"/></div>
        <div class="center">
          <div class="header">
            <div class="name">{{message.name}}</div>
            <div class="praise">
              <img src="../../../static/images/praise.png">
              <span>{{message.praise}}</span>
            </div>
          </div>
          <div class="messageText">{{message.text}}</div>
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
          <div class="left"><img :src="myMessage.tx"/></div>
          <div class="center">
            <div class="header">
              <div class="name">{{myMessage.name}}</div>
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
export default {
  components: {
    emoji,
    emojiText
  },
  props: {
    messages: {
      type: Array,
      default: [
        {
          tx: '../../../../../static/images/copy.png',
          name: 'Aaron*',
          praise: 100,
          text: '哈哈哈哈哈哈哈哈哈'
        }
      ]
    },
    myMessages: {
      type: Array,
      default: [
      ]
    }
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
      console.log('inputMsg')
      this.showEmojisFn(false)
    },
    updataMsg (msg) {
      this.msg = msg
    },
    sendMsg () {
      if (this.msg === '') return
      const message = {
        tx: '../../../../../static/images/copy.png',
        name: 'Aaron*',
        text: textToEmoji(this.msg)
      }
      console.log(textToEmoji(this.msg))
      this.myMessages.unshift(message)
      this.$set(this.myMessages, 0, message)
      this.msg = ''
      mpvue.showToast({
        title: '已留言'
      })
    },
    showEmojisFn (_Boolean) {
      this.showEmojis = _Boolean
    },
    deleteFn (e) {
      console.log(e.currentTarget)
      const id = e.currentTarget.dataset.key
      this.myMessages.splice(id, 1)
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
          margin-right: 10px;
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
