<template>
  <div class="login">
    <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
    <span>同意微信授权，登录小程序</span>
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
      canIUse: mpvue.canIUse('button.open-type.getUserInfo')
    }
  },
  onLoad () {
    // 查看是否授权
    mpvue.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          mpvue.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100%;
    button{
      width: 60%;
      border: 1px solid #0DBC79;
      margin: 400px auto 10px;
    }
    span{
      margin: 0xp auto;
    }
  }

</style>
