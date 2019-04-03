import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const userInfoStore = {
  state: {
    userInfo: mpvue.getStorageSync('userInfor') || {}
  },
  mutations: {
    setUserInfo (state, callBack) {
      // const userInfo = this.getters.getUserInfo
      // 查看是否授权
      mpvue.getSetting({
        success (res) {
          console.log(res.authSetting['scope.userInfo'])
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            mpvue.getUserInfo({
              success (res) {
                let userInfo = mpvue.getStorageSync('userInfo')
                if (userInfo.nickName === res.userInfo.nickName) {
                  callBack()
                } else {
                  mpvue.navigateTo({
                    url: '../login/main'
                  })
                }
              }
            })
          } else {
            mpvue.navigateTo({
              url: '../login/main'
            })
          }
        }
      })
    }
  },
  getters: {
    getUserInfo () {
      return mpvue.getStorageSync('userInfo')
    }
  }
}

const userInfo = new Vuex.Store(userInfoStore)

export default userInfo
