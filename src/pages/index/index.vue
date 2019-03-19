<template>
  <div class="body">
    <div class="tabList">
      <span class="tab" v-for="tab in tabs" :key="tab.id" @click="tabFn">{{tab.text}}</span>
    </div>
    <div class="content">
      <vcard :items="tab_list" :isShow="isShowArr[index]" v-for="tab_list in tab_list_arr" :key="tab_list.index" :index="index" :data-index="index"></vcard>
    </div>
  </div>
</template>

<script>
import vcard from '@/components/card'
const oncePushNum = 8 // 每次加载笑话文档的个数
let tabId = 0 // 当前加载的列表类型id
export default {
  components: {
    vcard
  },
  data () {
    return {
      tabs: [
        {
          id: 0,
          text: '内涵段子'
        },
        {
          id: 1,
          text: '节日短信'
        },
        {
          id: 2,
          text: '职场趣事'
        },
        {
          id: 3,
          text: '恋爱必读'
        }
      ],
      tab_list_arr: [], // 二维数组,每种类型笑话存储一个数组
      isShowArr: [],
      lists: [
        {
          text: '今天逛街，发现苹果直营店，人群在买IP4，偶遇一大妈问：“这手机很便宜吗？这么多人排队。',
          watch: 101,
          like: 100
        },
        {
          text: '今天跟朋友吃饭，对方太不讲究了，我都去两次洗手间了，他也没趁机把单买了。。。',
          watch: 101,
          like: 106
        },
        {
          text: '昨天下午家里安排，跟一个妹子相亲，我俩都接到家里的死命令：必须跟对方吃完晚饭才能回家！时间还早，我和妹子在茶馆尴尬无语中。。。然后，妹子一直在抽着烟，玩手机游戏！而我，看她玩的正欢，我从自己包里，拿出了即将完工的，十字绣。。。',
          watch: 101,
          like: 103
        },
        {
          text: '追一女神，结果遭遇情敌竞争：我请她吃KFC，情敌请她吃金钱豹；我带她打车出去玩，情敌开宝马接她；我给她买了个华为高配版手机，情敌给她的是苹果限量版。最后我终于扛不住打算放弃了，没想到情敌已经把她甩了！尼玛！！！怎么步步都比人差这么大一截。。。',
          watch: 101,
          like: 107
        },
        {
          text: '高中同学约我们几个玩的比较好的去他们家聚会，在车站集合他来接我们，我刚到站下车就看到一帮同学已到，手里都提着各种牛奶，各种酒，而我啥都没买，突然灵光一闪，转身追公交大喊“师傅停车！我的东西忘拿了！”我正为我的机智自豪时，只见那车真的停了！……',
          watch: 101,
          like: 110
        },
        {
          text: '隔壁住着一个吹唢呐的，每天早上和晚上都要吹一遍，虽然让人讨厌但也没权力去阻止人家的爱好，于是一天天忍着过。今天早上还在美梦呢老板打电话把我骂了一顿。我一看时间，卧槽！迟到两小时，于是敲门问隔壁为什么今天不吹唢呐？那大哥一边穿衣服一边说：吹那个干什么？你们今天没搞事情，好不容易才睡了个好觉。',
          watch: 101,
          like: 109
        },
        {
          text: '一个朋友去买了个大蛋糕回来，蛋糕上写着诸葛藏藏，我们都纳闷：诸葛藏藏是谁呀？朋友说：就是为了多骗点奶油。',
          watch: 101,
          like: 111
        },
        {
          text: '昨天下午家里安排，跟一个妹子相亲，我俩都接到家里的死命令：必须跟对方吃完晚饭才能回家！时间还早，我和妹子在茶馆尴尬无语中。。。然后，妹子一直在抽着烟，玩手机游戏！而我，看她玩的正欢，我从自己包里，拿出了即将完工的，十字绣。。。',
          watch: 101,
          like: 103
        },
        {
          text: '追一女神，结果遭遇情敌竞争：我请她吃KFC，情敌请她吃金钱豹；我带她打车出去玩，情敌开宝马接她；我给她买了个华为高配版手机，情敌给她的是苹果限量版。最后我终于扛不住打算放弃了，没想到情敌已经把她甩了！尼玛！！！怎么步步都比人差这么大一截。。。',
          watch: 101,
          like: 107
        },
        {
          text: '高中同学约我们几个玩的比较好的去他们家聚会，在车站集合他来接我们，我刚到站下车就看到一帮同学已到，手里都提着各种牛奶，各种酒，而我啥都没买，突然灵光一闪，转身追公交大喊“师傅停车！我的东西忘拿了！”我正为我的机智自豪时，只见那车真的停了！……',
          watch: 101,
          like: 110
        },
        {
          text: '隔壁住着一个吹唢呐的，每天早上和晚上都要吹一遍，虽然让人讨厌但也没权力去阻止人家的爱好，于是一天天忍着过。今天早上还在美梦呢老板打电话把我骂了一顿。我一看时间，卧槽！迟到两小时，于是敲门问隔壁为什么今天不吹唢呐？那大哥一边穿衣服一边说：吹那个干什么？你们今天没搞事情，好不容易才睡了个好觉。',
          watch: 101,
          like: 109
        },
        {
          text: '一个朋友去买了个大蛋糕回来，蛋糕上写着诸葛藏藏，我们都纳闷：诸葛藏藏是谁呀？朋友说：就是为了多骗点奶油。',
          watch: 101,
          like: 111
        },
        {
          text: '昨天下午家里安排，跟一个妹子相亲，我俩都接到家里的死命令：必须跟对方吃完晚饭才能回家！时间还早，我和妹子在茶馆尴尬无语中。。。然后，妹子一直在抽着烟，玩手机游戏！而我，看她玩的正欢，我从自己包里，拿出了即将完工的，十字绣。。。',
          watch: 101,
          like: 103
        },
        {
          text: '追一女神，结果遭遇情敌竞争：我请她吃KFC，情敌请她吃金钱豹；我带她打车出去玩，情敌开宝马接她；我给她买了个华为高配版手机，情敌给她的是苹果限量版。最后我终于扛不住打算放弃了，没想到情敌已经把她甩了！尼玛！！！怎么步步都比人差这么大一截。。。',
          watch: 101,
          like: 107
        },
        {
          text: '高中同学约我们几个玩的比较好的去他们家聚会，在车站集合他来接我们，我刚到站下车就看到一帮同学已到，手里都提着各种牛奶，各种酒，而我啥都没买，突然灵光一闪，转身追公交大喊“师傅停车！我的东西忘拿了！”我正为我的机智自豪时，只见那车真的停了！……',
          watch: 101,
          like: 110
        },
        {
          text: '隔壁住着一个吹唢呐的，每天早上和晚上都要吹一遍，虽然让人讨厌但也没权力去阻止人家的爱好，于是一天天忍着过。今天早上还在美梦呢老板打电话把我骂了一顿。我一看时间，卧槽！迟到两小时，于是敲门问隔壁为什么今天不吹唢呐？那大哥一边穿衣服一边说：吹那个干什么？你们今天没搞事情，好不容易才睡了个好觉。',
          watch: 101,
          like: 109
        },
        {
          text: '一个朋友去买了个大蛋糕回来，蛋糕上写着诸葛藏藏，我们都纳闷：诸葛藏藏是谁呀？朋友说：就是为了多骗点奶油。',
          watch: 101,
          like: 111
        },
        {
          text: '昨天下午家里安排，跟一个妹子相亲，我俩都接到家里的死命令：必须跟对方吃完晚饭才能回家！时间还早，我和妹子在茶馆尴尬无语中。。。然后，妹子一直在抽着烟，玩手机游戏！而我，看她玩的正欢，我从自己包里，拿出了即将完工的，十字绣。。。',
          watch: 101,
          like: 103
        },
        {
          text: '追一女神，结果遭遇情敌竞争：我请她吃KFC，情敌请她吃金钱豹；我带她打车出去玩，情敌开宝马接她；我给她买了个华为高配版手机，情敌给她的是苹果限量版。最后我终于扛不住打算放弃了，没想到情敌已经把她甩了！尼玛！！！怎么步步都比人差这么大一截。。。',
          watch: 101,
          like: 107
        },
        {
          text: '高中同学约我们几个玩的比较好的去他们家聚会，在车站集合他来接我们，我刚到站下车就看到一帮同学已到，手里都提着各种牛奶，各种酒，而我啥都没买，突然灵光一闪，转身追公交大喊“师傅停车！我的东西忘拿了！”我正为我的机智自豪时，只见那车真的停了！……',
          watch: 101,
          like: 110
        },
        {
          text: '隔壁住着一个吹唢呐的，每天早上和晚上都要吹一遍，虽然让人讨厌但也没权力去阻止人家的爱好，于是一天天忍着过。今天早上还在美梦呢老板打电话把我骂了一顿。我一看时间，卧槽！迟到两小时，于是敲门问隔壁为什么今天不吹唢呐？那大哥一边穿衣服一边说：吹那个干什么？你们今天没搞事情，好不容易才睡了个好觉。',
          watch: 101,
          like: 109
        },
        {
          text: '一个朋友去买了个大蛋糕回来，蛋糕上写着诸葛藏藏，我们都纳闷：诸葛藏藏是谁呀？朋友说：就是为了多骗点奶油。',
          watch: 101,
          like: 111
        }
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
      this.isShowArr = this.isShowArr.map((x) => false && x)
      this.isShowArr[_tabId] = true
      this.$set(this.isShowArr, _tabId, this.isShowArr[_tabId])
    },
    copyFn (e) {
      console.log(e.currentTarget.dataset)
      var textArr = e.currentTarget.dataset.eventid.split('_')
      var text = this.items[textArr[textArr.length - 1]].text
      mpvue.setClipboardData({
        data: text,
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
      console.log(e)
    },
    tabFn (e) {
      let eventidArr = e.currentTarget.dataset.eventid.split('_')
      tabId = eventidArr[eventidArr.length - 1]
      this.getItemData(tabId)
    }
  }
}
</script>

<style scoped>
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
