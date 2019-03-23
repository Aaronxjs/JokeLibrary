<template>
  <div>
    <div class="title"><img src="../../../static/images/icon.png"/><span>段子分享库</span></div>
    <article>{{item.text}}</article>
    <div class="btnDiv"><span @click="copyFn"><img src="../../../static/images/copy.png"/></span><span @click="likeFn"><img :src="item.likeStatus ? '../../../../../static/images/like_e.png' : '../../../../../static/images/like_i.png'"/></span><span><button open-type="share"><img src="../../../static/images/share.png"/></button></span></div>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  created () {
    console.log('card index created', this)
    console.log('card index created', wx)
  },
  // mounted () {
  //   console.log(this.items)
  //   this.items = JSON.parse(JSON.stringify(this.lists))
  //   this.items.forEach((item) => {
  //     item.likeStatus = false
  //   })
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
      this.item.likeStatus = !this.item.likeStatus
      console.log(this.item.likeStatus)
    }
  },
  watch: {
    'item.likeStatus': {
      handler (newName, oldName) {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
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
  width: 32px;
  height: 32px;
}

.btnDiv span{
  display: inline-block;
  vertical-align: middle;
}
.btnDiv span+span{
  margin-left: 20px;
}
article{
  text-indent:32px;
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
  background-color: #ffffff;
}
</style>
