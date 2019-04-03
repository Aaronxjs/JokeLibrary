<template>
  <div class="login">
    <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
    <div>同意微信授权，登录小程序</div>
  </div>
</template>

<script>
import vcards from '@/components/cards/cards'
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
      success (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          mpvue.getUserInfo({
            success (res) {
              var userInfo = mpvue.getStorageSync('userInfo')
              if (userInfo.nickName === res.userInfo.nickName) {
                mpvue.navigateBack()
              }
            }
          })
        }
      }
    })
  },
  methods: {
    bindGetUserInfo (e) {
      console.log(e.mp.detail.userInfo)
      mpvue.setStorageSync('userInfo', e.mp.detail.userInfo)
      mpvue.navigateBack()
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    width: 100%;
    button{
      width: 60%;
      border: 1px solid #0DBC79;
      margin: 400px auto 0px;
    }
    div{
      width: 60%;
      text-align: center;
      margin: 10px auto;
    }
  }

</style>
