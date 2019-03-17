<template>
  <div class="body">
    <div class="tabList">
      <span class="tab" v-for="tab in tabs" :key="tab.id">{{tab.text}}</span>
    </div>
    <div class="content">
      <div class="class" v-for="tab_list in tab_list_arr" :key="tab_list.index">
        <card :item="tab_list"></card>
      </div>
    </div>

  </div>



</template>

<script>
import vcard from '@/components/card'
const oncePushNum = 8
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
      tab_list_arr: [],
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
    this.getItemData()
  },
  mounted () {
    console.log('mounted', this)
  },
  onLoad () {
    console.log('page index onLoad', this)
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
    this.getItemData()
    mpvue.hideLoading()
  },
  methods: {
    getItemData () {
      console.log(this.lists)
      if (this.lists.length > 0) {
        let newArr = this.lists.splice(0, oncePushNum)
        this.items = this.items.concat(newArr)
        console.log(this.items)
      } else {}
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
  .list{
    background-color: #ffffff;
    margin: 20rpx;
    padding: 10rpx;
    border-radius: 10rpx;
  }
  .content{
    margin-top: 40px;
    padding: 10rpx 0rpx;
    width:100%;
    height: 100%;
    background-color:#eeeeee; 
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
