import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const like = {
  state: {
    likeText: mpvue.getStorageSync('likeText') || []
  },
  mutations: {
    pushliker (state, liker) {
      mpvue.cloud.callFunction({
        name: 'updateLove',
        data: {
          _id: liker._id,
          num: 1
        },
        success: res => {
          state.likeText.push(liker)
          mpvue.setStorageSync('likeText', state.likeText)
          mpvue.showToast(
            {
              title: '已收藏'
            }
          )
          console.log('success: ' + res)
        },
        fail: res => {
          console.log('fail: ' + res)
        }
      })
    },
    popliker (state, liker) {
      mpvue.cloud.callFunction({
        name: 'updateLove',
        data: {
          _id: liker._id,
          num: -1
        },
        success: res => {
          let likeTextId = []
          state.likeText.forEach((item) => {
            likeTextId.push(item._textId)
          })
          let index = likeTextId.indexOf(liker._textId)
          if (index > -1) {
            state.likeText.splice(index, 1)
          }
          mpvue.setStorageSync('likeText', state.likeText)
          mpvue.showToast(
            {
              title: '已删除'
            }
          )
          console.log('success: ' + res)
        },
        fail: res => {
          console.log('fail: ' + res)
        }
      })
    }
  },
  getters: {
    getliker: state => {
      return state.likeText
    },
    ismyliker: state => (liker) => {
      let likeTextId = []
      state.likeText.forEach((item) => {
        likeTextId.push(item._textId)
      })
      let index = likeTextId.indexOf(liker._textId)
      if (index > -1) {
        return true
      } else {
        return false
      }
    }
  }
}

const store = new Vuex.Store(like)

export default store
