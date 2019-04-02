<template>
  <div class="emojiText">
    <block v-for="(text, index) in texts" :key="index">
      <span v-if="text.msgType==='text'">{{text.msgCont}}</span>
      <img v-if="text.msgType==='emoji'" :src="text.msgImage" class="emoji"/>
    </block>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      default: []
    }
  },
  onLoad () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .emoji {
    width: 28px;
    height: 28px;
  }
</style>
