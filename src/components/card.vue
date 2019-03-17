<template>
  <div>
    <div class="list" v-for="item in items" :key="item.index">
      <div class="title"><img src="../../static/images/icon.png"/><span>段子分享库</span></div>
      <article>{{item.text}}</article>
      <div class="btnDiv"><span @click="copyFn"><img src="../../static/images/copy.png"/></span><span @click="likeFn"><img src="../../static/images/like_i.png"/></span><span><button open-type="share"><img src="../../static/images/share.png"/></button></span></div>
    </div>
  </div>
</template>

<script>
const oncePushNum = 8
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.btnDiv{
  text-align: right;
}

img{
  width: 32rpx;
  height: 32rpx;
}
.number{
  font-size: 10px;
  color: #cccccc;
}
span{
  display: inline-block;
  vertical-align: middle;
}
span+span{
  margin-left: 10rpx;
}
article{
  font-size: 12px;
}
</style>
