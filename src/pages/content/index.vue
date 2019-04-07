<template>
  <div class="content">
    <vcard :item="item" :type="type"></vcard>
    <message :textId="item._textId"></message>
  </div>
</template>

<script>
import vcard from '@/components/card/card'
import message from '@/components/message/message'
export default {
  components: {
    vcard,
    message
  },
  data () {
    return {
      type: 'ct',
      item: {}
    }
  },
  onShareAppMessage () {
  },
  onLoad (option) {
    let item = JSON.parse(option.item)
    // this.$set(this.item, JSON.parse(option.item))
    for (let key in item) {
      this.$set(this.item, key, item[key])
    }
    console.log(this.item)
  },
  methods: {

  }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: 100%;
  background-color:#eeeeee; 
}
</style>
