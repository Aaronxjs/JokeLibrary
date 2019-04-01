<template>
  <div class="message">
    <div class="showMessage" v-if="ishow">
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
    <div class="sendMessage" v-if="!ishow">
      <div class="header"><span class="link" @click="showMessageFn">精选留言</span><span>写留言</span></div>
      <form bindsubmit="bindFormSubmit">
        <textarea :value="msg" @input="inputMsg" @focus="inputFocus" @blur="blurInput" placeholder="留言评论" name="textarea" />
        <emoji @updataMsg="updataMsg"></emoji>
        <button form-type="submit" @click.stop="sendMsg">留言</button>
      </form>
      <div class="myMessage">
        <div class="title">我的留言</div>
        <div class="content" v-for="myMessage in myMessages" :key="myMessage.index">
          <div class="left"><img :src="myMessage.tx"/></div>
          <div class="center">
            <div class="header">
              <div class="name">{{myMessage.name}}</div>
            </div>
            <div class="messageText">{{message.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入表情包组件
import emoji from '@/components/emoji/emoji'
// 表情转化为文字
import { textToEmoji } from '../../utils/emojis'
export default {
  components: {
    emoji
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
      default: []
    }
  },
  data () {
    return {
      msg: '',
      isShow: true
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
      this.msg = e.detail.value
    },
    inputMsg (e) {
      this.msg = e.detail.value
    },
    updataMsg (msg) {
      this.msg = msg
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
          display: flex;
          align-items: center;
          justify-content: flex-start;
          img{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>
