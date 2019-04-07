<template>
  <div class="card">
    <div class="title"><img src="/static/images/icon.png"/><span>段子分享库</span></div>
    <article @click="linkToFn">{{item.text}}</article>
    <div class="btnDiv" v-if="type=='ct'"><button @click="copyFn"><img src="/static/images/copy.png"/></button><button @click="likeFn"><img :src="item.likeStatus ? '/static/images/love_e.png' : '/static/images/love_i.png'"/></button><button open-type="share"><img src="/static/images/share.png"/></button></div>
    <div class="btnDiv" v-if="type=='sc'"><button @click="copyFn"><img src="/static/images/copy.png"/></button><button @click="removeFn"><img src="/static/images/remove.png"/></button><button open-type="share"><img src="/static/images/share.png"/></button></div>
    <div class="btnDiv" v-if="type=='sy'"><div class="love" ><img src="/static/images/love_i.png"/></div><div class="loveNum">{{item._love}}</div></div>
  </div>
</template>

<script>
import store from '../../stores/globalStore'
import userInfo from '../../stores/globalUserInfo'
export default {
  props: {
    type: {
      type: String,
      default: 'sy'
    },
    item: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      likeStatus: false
    }
  },
  onLoad () {
    console.log(this.item)
  },
  onShareAppMessage () {
  },
  // computed: {
  //   praise () {
  //     let loveNum = this.item._love
  //     if (loveNum >= 1000) {
  //       loveNum = loveNum / 1000 + 'k'
  //     }
  //     return loveNum
  //   }
  // },
  methods: {
    copyFn (e) {
      mpvue.setClipboardData({
        data: this.item.text,
        success: function (res) {
          mpvue.getClipboardData({
            success: function (res) {
              mpvue.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    },
    likeFn (e) {
      let self = this
      userInfo.commit('setUserInfo', function () {
        var likeStatus = !self.item.likeStatus
        self.$set(self.item, 'likeStatus', likeStatus)
        if (likeStatus) {
          store.commit('pushliker', self.item)
          self.$set(self.item, '_love', self.item._love + 1)
          console.log(self.item)
        } else {
          store.commit('popliker', self.item)
          self.$set(self.item, '_love', self.item._love - 1)
          console.log(self.item)
        }
      })
    },
    removeFn () {
      store.commit('popliker', this.item)
      this.$emit('updataItems', this.item)
    },
    linkToFn () {
      if (this.type === 'ct') return
      // mpvue.navigateTo({
      //   url: '../login/main'
      // })
      mpvue.navigateTo({
        url: '../content/main?item=' + JSON.stringify(this.item)
      })
    }
  }
}
</script>

<style scoped>
.card{
  background-color: #ffffff;
}
.title{
  display: flex;
  align-items: center;
  justify-items: flex-start;
  font-size: 12px;
  color: #cccccc;
  line-height: 16px;
  padding: 10px;
}
.title img{
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.btnDiv{
  text-align: right;
  padding: 10px;
}

.btnDiv img{
  width: 24px;
  height: 24px;
}

.btnDiv button{
  display: inline-block;
  vertical-align: middle;
}
.btnDiv button+button{
  margin-left: 20px;
}
article{
  text-indent:24px;
  font-size: 16px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
button{
  padding: 0px;
  border: 0px;
  line-height: 0px;
  box-sizing: content-box;
}
button::after{ 
  border: none;
}
.button-hover{
  color: #ffffff;
}
.love{
  display: inline-block;
}
.loveNum{
  display: inline-block;
  vertical-align: top;
  margin-left: 0px;
  margin-top: -10px;
  font-size: 12px;
}
</style>
