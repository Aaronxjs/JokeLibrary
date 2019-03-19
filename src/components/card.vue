<template>
  <div class="vcard" :class="{hide: !isShow}">
    <div class="list" v-for="item in items" :key="item.index">
      <div class="title"><img src="../../static/images/icon.png"/><span>段子分享库</span></div>
      <article>{{item.text}}</article>
      <div class="btnDiv"><span @click="copyFn"><img src="../../static/images/copy.png"/></span><span @click="likeFn"><img src="../../static/images/like_i.png"/></span><span><button open-type="share"><img src="../../static/images/share.png"/></button></span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log('card index created', this)
    console.log('card index created', wx)
  },
  onLoad () {
    console.log('page index onLoad', this)
    console.log('page index onLoad', this.isShow)
  }
}
</script>

<style scoped>
.hide{
  display: none;
}
.vcard{
  position: absolute;
  left: 0px;
  top: 0px;
  background-color:#eeeeee; 
}
.list{
  background-color: #ffffff;
  margin: 20rpx;
  padding: 10rpx;
  border-radius: 10rpx;
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
