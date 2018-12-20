<template>
  <div>
    <h1>
      Custom Component!
    </h1>
    <p>Custom Property: {{ custom }}</p>
    <button @click="click">
      clicked {{ count }} times
    </button>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    color: red;
  }
</style>

<script>
  export default {
    props: {
      custom: {
        required: false,
        type: String,
        default: 'xxx'
      }
    },
    data() {
      return {
        count: 0
      }
    },
    methods: {
      click() {
        this.count++
      }
    }
  }
</script>
