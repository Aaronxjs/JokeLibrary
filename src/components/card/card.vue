<template>
  <div class="card">
    <div class="title"><img src="/static/images/icon.png"/><span>段子分享库</span></div>
    <article @click="linkToFn">{{item.text}}</article>
    <div class="btnDiv" v-if="type=='ct'"><span @click="copyFn"><img src="/static/images/copy.png"/></span><span @click="likeFn"><img :src="item.likeStatus ? '/static/images/love_e.png' : '/static/images/love_i.png'"/></span><span><button open-type="share"><img src="/static/images/share.png"/></button></span></div>
    <div class="btnDiv" v-if="type=='sc'"><span @click="copyFn"><img src="/static/images/copy.png"/></span><span @click="removeFn"><img src="/static/images/remove.png"/></span><span><button open-type="share"><img src="/static/images/share.png"/></button></span></div>
    <div class="btnDiv" v-if="type=='sy'"><div class="love" ><img src="/static/images/love_i.png"/></div><div class="loveNum">{{item.loveNum || 1000}}</div></div>
  </div>
</template>

<script>
import store from '../../stores/globalStore'
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
      var likeStatus = !this.item.likeStatus
      this.$set(this.item, 'likeStatus', likeStatus)
      if (likeStatus) {
        store.commit('pushliker', this.item)
      } else {
        store.commit('popliker', this.item)
      }
    },
    removeFn () {
      store.commit('popliker', this.item)
      this.$emit('updataItems', this.item)
    },
    linkToFn () {
      if (this.type === 'ct') return
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
  padding-top: 10px;
  padding-right: 10px; 
}

.btnDiv img{
  width: 24px;
  height: 24px;
}

.btnDiv span{
  display: inline-block;
  vertical-align: middle;
}
.btnDiv span+span{
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
