<template>
  <div class="emoji_cp">
    <div class="button"><img @click="changShowFn" src="../../../static/emojis/emotion-o.png"/></div>
    <div v-if="showEmojis" class="emojis_box">
      <div class="emoji_wrap" v-for="item in emojiList" :key="item.index">
        <img @click="clickEmoji" :src="item.img" :data-key="item.key" class="emoji">
      </div>
      <div class="emoji_wrap">
        <span @click="sendMsg" class="emoji_send">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
// import store from '../../stores/globalStore'
import { emojis, emojiToPath } from '../../utils/emojis'
export default {
  props: {
    msg: {
      type: String,
      default: ''
    },
    showEmojis: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showEmojis: false,
      emojiList: []
    }
  },
  created () {
    // 获取表情包
    const emojiList = Object.keys(emojis).map(key => ({
      key: key,
      img: emojiToPath(key)
    }))
    this.emojiList = emojiList
  },
  methods: {
    // 显示或影藏表情选择框
    changShowFn (e) {
      this.$emit('showEmojisFn', !this.showEmojis)
    },
    // 点击表情
    clickEmoji: function (e) {
      const { key } = e.currentTarget.dataset
      this.$emit('updataMsg', this.msg + key)
    },
    sendMsg: function () {
      this.$emit('showEmojisFn', !this.showEmojis)
      this.$emit('sendMsg')
    }
  }
}
</script>

<style scoped lang="scss">
.emoji_cp{
  background-color: #ffffff;
  z-index: 999;
  width: 100%;
  .button{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    img{
      width: 30px;
      height: 30px;
    }
  }
}
.emojis_box{
  background: #fff;
  width: 100%;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.emoji_wrap {
  display: flex;
  flex: 0 0 100rpx;
  height: 50px;
  align-items: center;
  justify-content: center;
}

.emoji {
  width: 28px;
  height: 28px;
}
.emoji_wrap .emoji {
  padding: 5px;
}

.emoji_send {
  color: #fff;
  background: #1aad19;
  border-radius: 5px;
  font-size: 9pt;
  width: 100%;
  text-align: center;
  padding: 5px 0;
}
</style>
