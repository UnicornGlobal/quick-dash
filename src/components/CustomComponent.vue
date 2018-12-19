<template>
  <div>
    <h1>
      Custom Component!
    </h1>
    <p>Custom Property: {{ custom }}</p>
  </div>
</template>

<style scoped>
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
    }
  }
</script>
