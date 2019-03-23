<template>
  <div class="vcard">
    <div class="list" v-for="item in items" :key="item.index" :index="index" :data-index="index">
      <vcard :item="item"></vcard>
    </div>
  </div>
</template>

<script>
import vcard from '@/components/card/card'
export default {
  components: {
    vcard
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  created () {
    console.log('card index created', this)
    console.log('card index created', wx)
  }
}
</script>

<style scoped>
.vcard{
  background-color:#eeeeee; 
}
.list{
  background-color: #ffffff;
  margin: 20rpx;
  padding: 10rpx;
  border-radius: 10rpx;
}
</style>
