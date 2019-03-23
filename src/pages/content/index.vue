<template>
  <div class="content">
    <div class="list">
      <article>{{item.text}}</article>
      <div class="btnDiv"><span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUyNTQ1MjYwOTQzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1NzkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxNS4yIDIyNEMyMDggMjI0IDIyLjQgNTM3LjYgMjIuNCA1MzcuNnMyMTQuNCAzMDQgNDkyLjggMzA0IDQ5Mi44LTMwNCA0OTIuOC0zMDRTODIyLjQgMjI0IDUxNS4yIDIyNHpNODMyIDY1Mi44Yy0xMDIuNCA4Ni40LTIxMS4yIDE0MC44LTMyMCAxNDAuOHMtMjE3LjYtNTEuMi0zMjAtMTQwLjhjLTM1LjItMzItNzAuNC02NC05OS4yLTk5LjItNi40LTYuNC05LjYtMTIuOC0xNi0xOS4yIDMuMi02LjQgOS42LTEyLjggMTIuOC0xOS4yIDI1LjYtMzUuMiA1Ny42LTcwLjQgOTIuOC0xMDIuNCA5OS4yLTg5LjYgMjA4LTE0NCAzMjkuNi0xNDRzMjMwLjQgNTQuNCAzMjkuNiAxNDRjMzUuMiAzMiA2NCA2Ny4yIDkyLjggMTAyLjQgMy4yIDYuNCA5LjYgMTIuOCAxMi44IDE5LjItMy4yIDYuNC05LjYgMTIuOC0xNiAxOS4yLTI4LjggMzItNjAuOCA2Ny4yLTk5LjIgOTkuMnoiIGZpbGw9IiNiZmJmYmYiIHAtaWQ9IjI1ODAiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDM0NS42Yy05NiAwLTE2OS42IDc2LjgtMTY5LjYgMTY5LjYgMCA5NiA3Ni44IDE2OS42IDE2OS42IDE2OS42IDk2IDAgMTY5LjYtNzYuOCAxNjkuNi0xNjkuNlM2MDQuOCAzNDUuNiA1MTIgMzQ1LjZ6IG0wIDI5NC40Yy02Ny4yIDAtMTIxLjYtNTQuNC0xMjEuNi0xMjEuNiAwLTY3LjIgNTQuNC0xMjEuNiAxMjEuNi0xMjEuNiA2Ny4yIDAgMTIxLjYgNTQuNCAxMjEuNiAxMjEuNiAwIDY0LTU0LjQgMTIxLjYtMTIxLjYgMTIxLjZ6IiBmaWxsPSIjYmZiZmJmIiBwLWlkPSIyNTgxIj48L3BhdGg+PC9zdmc+"/></span><span class="number">{{item.watch}}</span><span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUyNTQ2NDIzMjMwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMzEgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzODkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIuMDgyMDMxMjUiIGhlaWdodD0iMTIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxNS4zODk0NCA5NTcuODU5ODRjLTIxLjU0NDk2IDAtMzYuODc0MjQtMTQuMjU0MDgtNDAuNzY1NDQtMTguMjY4MTYtMTcuNjIzMDQtMTcuMzU2OC0zNDcuMjU4ODgtMzQyLjIzMTA0LTM5Mi40Mzc3Ni0zOTEuMTY4QzI5LjQ0IDQ5NS43MDgxNiAwIDQyNC42NTI4IDAgMzQ5LjA4MTZzMjkuNDQtMTQ2LjYyNjU2IDgyLjg5MjgtMjAwLjA2OTEyYzUzLjQyMjA4LTUzLjQzMjMyIDEyNC40Nzc0NC04Mi44NzIzMiAyMDAuMDc5MzYtODIuODcyMzIgNzUuNTYwOTYgMCAxNDYuNjA2MDggMjkuNDI5NzYgMjAwLjA1ODg4IDgyLjg3MjMyIDExLjkwOTEyIDExLjkxOTM2IDIyLjczMjggMjQuOTQ0NjQgMzIuMzU4NCAzOC45NTI5NiA5LjYyNTYtMTQuMDE4NTYgMjAuNDQ5MjgtMjcuMDMzNiAzMi4zNDgxNi0zOC45NTI5NiA1My40NDI1Ni01My40NDI1NiAxMjQuNDk3OTItODIuODcyMzIgMjAwLjA3OTM2LTgyLjg3MjMyIDc1LjU2MDk2IDAgMTQ2LjYxNjMyIDI5LjQyOTc2IDIwMC4wNzkzNiA4Mi44NzIzMiA1My40MzIzMiA1My40NjMwNCA4Mi44NjIwOCAxMjQuNTA4MTYgODIuODYyMDggMjAwLjA2OTEyIDAgNzUuNTcxMi0yOS40Mjk3NiAxNDYuNjE2MzItODIuODYyMDggMjAwLjA3OTM2LTQ0LjUwMzA0IDQ4LjIwOTkyLTM3NC4yMzEwNCAzNzMuMTg2NTYtMzkxLjc0MTQ0IDM5MC40NDA5NkM1NTIuMjg0MTYgOTQzLjYwNTc2IDUzNi45MzQ0IDk1Ny44NTk4NCA1MTUuMzg5NDQgOTU3Ljg1OTg0ek0yODIuOTcyMTYgMTE3LjM0MDE2Yy02MS45MjEyOCAwLTEyMC4xMTUyIDI0LjEwNDk2LTE2My44NzA3MiA2Ny44NzA3MkM3NS4zMTUyIDIyOC45ODY4OCA1MS4yIDI4Ny4xOTEwNCA1MS4yIDM0OS4wODE2YzAgNjEuOTAwOCAyNC4xMTUyIDEyMC4xMDQ5NiA2Ny44OTEyIDE2My44ODA5NiA0NS4zMzI0OCA0OS4wNTk4NCAzODguMjgwMzIgMzg3LjAyMDggMzkxLjczMTIgMzkwLjQyMDQ4IDAuMjU2IDAuMjQ1NzYgMC41MTIgMC41MTIgMC43NDc1MiAwLjc2OCAwLjgyOTQ0IDAuNzg4NDggMi43MjM4NCAyLjAyNzUyIDMuODE5NTIgMi40MjY4OCAxLjEwNTkyLTAuMzk5MzYgMy4wNTE1Mi0xLjY3OTM2IDQuMTY3NjgtMi43NzUwNCAzLjg2MDQ4LTMuODE5NTIgMzQ2Ljc5ODA4LTM0MS43ODA0OCAzOTEuNDM0MjQtMzkwLjExMzI4IDQ0LjQ3MjMyLTQ0LjUyMzUyIDY4LjU2NzA0LTEwMi43MTc0NCA2OC41NjcwNC0xNjQuNjA4cy0yNC4xMDQ5Ni0xMjAuMDg0NDgtNjcuODcwNzItMTYzLjg2MDQ4Yy00My43NjU3Ni00My43NjU3Ni0xMDEuOTY5OTItNjcuODcwNzItMTYzLjg3MDcyLTY3Ljg3MDcycy0xMjAuMTA0OTYgMjQuMTA0OTYtMTYzLjg4MDk2IDY3Ljg3MDcyYy0xOC40NjI3MiAxOC40ODMyLTMzLjc1MTA0IDQwLjMyNTEyLTQ1LjQyNDY0IDY0LjkyMTYtNC4yMzkzNiA4LjkyOTI4LTEzLjI0MDMyIDE0LjYzMjk2LTIzLjEzMjE2IDE0LjYzMjk2bDAgMGMtOS44OTE4NCAwLTE4Ljg5MjgtNS43MDM2OC0yMy4xMzIxNi0xNC42MzI5Ni0xMS42NjMzNi0yNC41NzYtMjYuOTQxNDQtNDYuNDI4MTYtNDUuNDQ1MTItNjQuOTIxNkM0MDMuMDQ2NCAxNDEuNDQ1MTIgMzQ0Ljg2MjcyIDExNy4zNDAxNiAyODIuOTcyMTYgMTE3LjM0MDE2eiIgcC1pZD0iNTM5MCIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjwvc3ZnPg=="/></span><span class="number">{{item.like}}</span></div>
    </div>
    <div class="btn">
      <!-- <button @click="praiseFn">
        <img src="../../../static/images/praise.png"/>
      </button>
      <button open-type="share" class="share_btn">
        <img src="../../../static/images/share.png"/>
      </button> -->
    </div>
  </div>
</template>

<script>
import vcard from '@/components/card/card'

export default {
  components: {
    vcard
  },
  data () {
    return {
      item: {
        type: Object,
        default: null
      }
    }
  },
  created () {
    console.log('page index created', this)
    console.log('page index created', wx)
  },
  mounted () {
    console.log('mounted', this)
  },
  onLoad (options) {
    console.log('page index onLoad', this)
    this.item = JSON.parse(options.data)
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
  methods: {
    praiseFn () {
      this.item.like++
    }
  }
}
</script>

<style scoped>
  .list{
    background-color: #ffffff;
    margin: 20rpx;
    padding: 10rpx;
    border-radius: 10rpx;
  }
  .content{
    position: relative;
    padding: 20rpx 0rpx;
    width:100%;
    height: 100%;
    background-color:#eeeeee;
  }
.btnDiv{
  text-align: right;
}

img{
  width: 32rpx;
  height: 32rpx;
}
.number{
  font-size: 10px;
  color: #cccccc;
}
span{
  display: inline-block;
  vertical-align: middle;
}
span+span{
  margin-left: 10rpx;
}
article{
  font-size: 18px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
.btn{
  text-align: right;
}
button{
  display: inline-block;
  width: 32px;
  height: 32px;
  padding: 0px;
  line-height: 0;
  margin-right: 20px;
}

button img{
  width: 32px;
  height: 32px;
}
</style>
