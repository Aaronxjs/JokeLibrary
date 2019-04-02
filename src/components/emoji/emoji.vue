<template>
  <div class="emoji">
    <div class="button"><img @click="showFun" src="../../../static/emojis/emotion-o.png"/></div>
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
    }
  },
  data () {
    return {
      showEmojis: true
    }
  },
  created () {
    // 获取表情包
    const emojiList = Object.keys(emojis).map(key => ({
      key: key,
      img: emojiToPath(key)
    }))
  },
  methods: {
    // 显示或影藏表情选择框
    showFn () {
      this.showEmojis = !this.showEmojis
    },
    // 点击表情
    clickEmoji: function (e) {
      const { key } = e.currentTarget.dataset
      this.$emit('updataMsg', msg + key)
    }
  }
}
</script>

<style scoped lang="scss">
.emoji{
  background-color: #ffffff;
  width: 100%;
  .button{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
.emojis_box{
  background: #fff;
  border-top: 1px solid #ccc;
  height: 150px;
  padding: 10px 25rpx;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.emoji_wrap {
  flex: 0 0 100rpx;
  height: 50px;
  display: flex;
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
