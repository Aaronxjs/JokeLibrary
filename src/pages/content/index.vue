<template>
  <div class="content">
    <vcard :item="item" :type="type"></vcard>
    <message></message>
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
      type: 'sy',
      item: {}
    }
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
</style>
