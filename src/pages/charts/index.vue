<template>
  <div class="charts">
    <van-tabs swipeable animated @change="onChange">
      <van-tab v-for="tab in tabs" :title="tab.text" :key="tab.id" :index="index" :data-index="index">
        <vcards :items="tab_list_arr[index]" :type="type"></vcards>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import store from '../../stores/globalStore'
import vcards from '@/components/cards/cards'
const oncePushNum = 8 // 每次加载笑话文档的个数
let tabId = 0 // 当前加载的列表类型id

mpvue.cloud.init({env: 'aaronxu-6ba5fc'})
const db = mpvue.cloud.database({env: 'aaronxu-6ba5fc'}) // [此处ENV可以不屑]
export default {
  components: {
    vcards
  },
  data () {
    return {
      type: 'sy',
      tabs: ['最火', '精选'],
      tab_list_arr: [],
      lists: [] // 二维数组,每种类型笑话存储一个数组
    }
  },
  created () {
    // console.log('page index created', this)
    // console.log('page index created', wx)
  },
  mounted () {
    // console.log('mounted', this)
  },
  onLoad () {
    console.log('page index onLoad', this)
    var self = this
    if (Object.prototype.toString.call(self.lists[tabId]) !== '[object Array]') {
      let selectData = {
        name: 'text',
        postData: {'_tabId': tabId}
      }
      self.selectDB(selectData).then((data) => {
        data.forEach((x) => {
          x['text'] = x['_text']
          console.log(store.getters.ismyliker(x))
          x['likeStatus'] = store.getters.ismyliker(x)
          return x
        })
        console.log(data)
        self.lists[tabId] = data
        self.getItemData(tabId)
      })
    }
    let selectData = {
      name: 'tabs'
    }
    console.log(selectData)
    self.selectDB(selectData).then((data) => {
      data.forEach((x) => {
        x['text'] = x['_title']
        return x
      })
      self.tabs = data
      console.log(self.tabs)
    })
  },
  onReady () {
    // console.log('page index onReady', this)
  },
  onShow () {
    console.log(store.getters.getliker)
    if (Object.prototype.toString.call(this.tab_list_arr[tabId]) !== '[object Array]') return
    this.tab_list_arr[tabId].forEach((x) => {
      x['likeStatus'] = store.getters.ismyliker(x)
      return x
    })
  },
  onUnload () {
    // console.log('onUnload', this)
  },
  onHide () {
    // console.log('onHide', this)
  },
  onShareAppMessage (res) {
    // console.log(res, '=====>>>>>')
  },
  onPullDownRefresh () {
    let selectData = {
      name: 'text',
      postData: {'_tabId': tabId}
    }
    this.selectDB(selectData).then((data) => {
      data.forEach((x) => {
        x['text'] = x['_text']
        x['likeStatus'] = store.getters.ismyliker(x)
        return x
      })
      this.tab_list_arr[tabId] = null
      this.lists[tabId] = data
      this.getItemData(tabId)
      mpvue.stopPullDownRefresh()
    })
  },
  onReachBottom () {
    // 到这底部在这里需要做什么事情
    // console.log('下拉', mpvue)
    mpvue.showLoading({
      title: '加载中'
    })
    this.getItemData(tabId)
    mpvue.hideLoading()
  },
  methods: {
    getItemData (_tabId) {
      let self = this
      if (Object.prototype.toString.call(self.tab_list_arr[_tabId]) !== '[object Array]') {
        self.tab_list_arr[_tabId] = [].concat(self.lists[_tabId].slice(0, oncePushNum)) // 此处是返回一个新建数据，而不是传入自身数组
      } else {
        var len = self.tab_list_arr[_tabId].length
        if (len < self.lists[_tabId].length) {
          // this.tab_list_arr[_tabId] = this.tab_list_arr[_tabId].concat(this.lists.slice(len - 1, len + oncePushNum - 1)) // 此处是返回一个新建数据，而不是传入自身数组
          self.tab_list_arr[_tabId].push.apply(null, self.lists[_tabId].slice(len - 1, len + oncePushNum - 1)) // 一个数组的元素放入到另外一个元素
        }
      }
      self.$set(self.tab_list_arr, _tabId, self.tab_list_arr[_tabId])
      // console.log(self.tab_list_arr)
    },
    likeFn (e) {
      console.log(e)
    },
    onChange (e) {
      tabId = e.target.index
      console.log(e)
      let self = this
      if (Object.prototype.toString.call(self.lists[tabId]) !== '[object Array]') {
        let selectData = {
          name: 'text',
          postData: {'_tabId': tabId}
        }
        self.selectDB(selectData).then((data) => {
          data.forEach((x) => {
            x['text'] = x['_text']
            x['likeStatus'] = store.getters.ismyliker(x)
            return x
          })
          self.lists[tabId] = data
          self.getItemData(tabId)
        })
      } else {
        this.tab_list_arr[tabId].forEach((x) => {
          x['likeStatus'] = store.getters.ismyliker(x)
          return x
        })
      }
    },
    selectDB (_property) {
      let {name, postData} = _property
      let promise = new Promise((resolve, reject) => {
        if (Object.prototype.toString.call(postData) === '[object Object]') {
          db.collection(name).where(postData).get({
            success: function (res) {
              // res.data 包含该记录的数据
              resolve(res.data)
              // callBack.apply(this, [res.data])
            }
          })
        } else {
          db.collection(name).get({
            success: function (res) {
              // res.data 包含该记录的数据
              console.log(res.data)
              resolve(res.data)
              // callBack.apply(this, [res.data])
            }
          })
        }
      })
      return promise
    }
  }

}
</script>

<style scoped>
  .van-tabs{
    position: fixed;
    left: 0px;
    top: 0px;
  }
  .body{
    position: relative;
  }
  .tabList{
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    height: 40px;
    background: #ffffff;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  .tabList span{
    font-size: 12px;
    border-radius: 5px;
    text-align: center;
    color: #cccccc;
    box-sizing: border-box;
    width: 40%;
  }

  .content{
    margin-top: 40px;
    padding: 10rpx 0rpx;
    width:100%;
    height: 100%;
    background-color:#eeeeee; 
  }

</style>
