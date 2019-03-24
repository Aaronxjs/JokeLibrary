<template>
  <div class="body">
    <vcards @updataItems="updataItems" :items="currentlists" :type="type"></vcards>
  </div>
</template>

<script>
import store from '../../stores/globalStore'
import vcards from '@/components/cards/cards'
const oncePushNum = 8 // 每次加载笑话文档的个数

export default {
  components: {
    vcards
  },
  data () {
    return {
      type: 'sc',
      currentlists: [], // 一维数组,当前list
      lists: [] // 一维数组，所有的list
    }
  },
  created () {
    console.log('page index created', this)
    console.log('page index created', wx)
  },
  mounted () {
    console.log('mounted', this)
  },
  onLoad () {
    console.log('love index onLoad', this)
    var self = this
    console.log(store.getters.getliker)
    self.lists = store.getters.getliker
    self.getItemData()
  },
  onReady () {
    console.log('page index onReady', this)
  },
  onShow () {
    console.log('onShow', this)
    this.lists = store.getters.getliker
    this.getItemData()
  },
  onUnload () {
    console.log('onUnload', this)
  },
  onHide () {
    console.log('onHide', this)
  },
  onShareAppMessage (res) {
    console.log(res, '=====>>>>>')
  },
  onPullDownRefresh () {
    this.getItemData()
    mpvue.stopPullDownRefresh()
  },
  onReachBottom () {
    // 到这底部在这里需要做什么事情
    console.log('下拉', mpvue)
    mpvue.showLoading({
      title: '加载中'
    })
    this.getItemData()
    mpvue.hideLoading()
  },
  methods: {
    getItemData () {
      let self = this
      let len = self.currentlists.length
      if (len < self.lists.length) {
        console.log(Object.prototype.toString.call(self.currentlists))
        self.currentlists.push.apply(self.currentlists, self.lists.slice(len, len + oncePushNum)) // 一个数组的元素放入到另外一个数组的所有元素
      // self.$set(self.currentlists, _tabId, self.tab_list_arr[_tabId])
      }

      // self.$set(self.currentlists, _tabId, self.tab_list_arr[_tabId])
      console.log(self.currentlists)
    },
    updataItems (item) {
      console.log(item)
      let itemsId = []
      this.currentlists.forEach((item) => {
        itemsId.push(item._textId)
      })
      let index = itemsId.indexOf(item._textId)
      if (index > -1) {
        this.currentlists.splice(index, 1)
        // this.currentlists.forEach((item, id, arr) => {
        //   this.$set(arr, id, item)
        // })
      }
    }
  }

}
</script>

<style scoped>
</style>
