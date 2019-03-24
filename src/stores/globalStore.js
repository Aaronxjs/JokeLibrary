import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    likeText: mpvue.getStorageSync('likeText') || []
  },
  mutations: {
    pushliker (state, liker) {
      state.likeText.push(liker)
      mpvue.setStorageSync('likeText', state.likeText)
    },
    popliker (state, liker) {
      console.log(this)
      let likeTextId = []
      state.likeText.forEach((item) => {
        likeTextId.push(item._textId)
      })
      let index = likeTextId.indexOf(liker._textId)
      if (index > -1) {
        state.likeText.splice(index, 1)
      }
      mpvue.setStorageSync('likeText', state.likeText)
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
})
