<template>
  <div>
    <div class="title"><img src="../../../static/images/icon.png"/><span>段子分享库</span></div>
    <article>{{item.text}}</article>
    <div class="btnDiv"><span @click="copyFn"><img src="../../../static/images/copy.png"/></span><span v-if="type=='sc'" @click="removeFn"><img src="../../../static/images/remove.png"/></span><span v-if="type=='sy'" @click="likeFn"><img :src="item.likeStatus ? '../../../../../static/images/love_e.png' : '../../../../../static/images/love_i.png'"/></span><span><button open-type="share"><img src="../../../static/images/share.png"/></button></span></div>
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
  created () {
    // console.log('card index created', this)
    // console.log('card index created', wx)
  },
  // mounted () {
  //   this.item.likeStatus = store.getters.ismyliker(this.item)
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
      var likeStatus = !this.item.likeStatus
      console.log(likeStatus)
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
    }
  }
}
</script>

<style scoped>
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
</style>
