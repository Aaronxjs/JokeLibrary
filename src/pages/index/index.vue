<template>
  <div class="body">
    <van-tabs swipeable animated @change="onChange">
      <van-tab v-for="tab in tabs" :title="tab.text" :key="tab.id" :index="index" :data-index="index">
        <vcard :items="tab_list_arr[index]"></vcard>
      </van-tab>
    </van-tabs>
    <!-- <div class="tabList">
      <span class="tab" v-for="tab in tabs" :key="tab.id" @click="tabFn">{{tab.text}}</span>
    </div>
    <div class="content">
      <vcard :items="tab_list" :isShow="isShowArr[index]" v-for="tab_list in tab_list_arr" :key="tab_list.index" :index="index" :data-index="index"></vcard>
    </div> -->
  </div>
</template>

<script>
// import vanTab from '@/../static/vant/tab/index'
// import vanTabs from '@/../static/vant/tabs/index'

import vcard from '@/components/card'
const oncePushNum = 8 // 每次加载笑话文档的个数
let tabId = 0 // 当前加载的列表类型id

mpvue.cloud.init({env:'aaronxu-6ba5fc'})
const db = mpvue.cloud.database({env:'aaronxu-6ba5fc'}) //[此处ENV可以不屑]
export default {
  components: {
    vcard
  },
  data () {
    return {
      tabs: [

      ],
      tab_list_arr: [], // 二维数组,每种类型笑话存储一个数组
      lists: [
      ]
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
    console.log('page index onLoad', this)
    this.getItemData(tabId)
  },
  onReady () {
    console.log('page index onReady', this)
  },
  onShow () {
    console.log('onShow', this)
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
    console.log('下拉', mpvue)
  },
  onReachBottom () {
    // 到这底部在这里需要做什么事情
    console.log('下拉', mpvue)
    mpvue.showLoading({
      title: '加载中'
    })
    this.getItemData(tabId)
    mpvue.hideLoading()
  },
  methods: {
    getItemData (_tabId) {
      if (Object.prototype.toString.call(this.tab_list_arr[_tabId]) !== '[object Array]') {
        this.tab_list_arr[_tabId] = [].concat(this.lists.slice(0, oncePushNum))
      } else {
        var len = this.tab_list_arr[_tabId].length
        if (len < this.lists.length) {
          this.tab_list_arr[_tabId] = this.tab_list_arr[_tabId].concat(this.lists.slice(len - 1, len + oncePushNum - 1))
        }
      }
      this.$set(this.tab_list_arr, _tabId, this.tab_list_arr[_tabId])
    },
    likeFn (e) {
      console.log(e)
    },
    onChange (e) {
      tabId = e.target.index
      console.log(e)
      this.getItemData(tabId)
    },
    selectDB (_name, _postData, _callBack) {
      if(Object.prototype.toString.call(_postData) === "[object Array]"){
        db.collection(_name).where(_postData).get({
          success:function(res){
            //res.data 包含该记录的数据
            console.log(res.data)
            _callBack.apply(this, res.data)
          }
        })
      }else{
        db.collection(_name).get({
          success:function(res){
            //res.data 包含该记录的数据
            console.log(res.data)
            _callBack.apply(this, res.data)
          }
        })
      }

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
