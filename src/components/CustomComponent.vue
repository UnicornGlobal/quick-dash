<template>
  <div>
    <h1>
      Custom Component!
    </h1>
    <p>Custom Property: {{ custom }}</p>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    color: red;
  }
</style>

<script>
export default {
  name: 'custom-component',
  props: {
    custom: {
      required: false,
      default: 'xxx'
    }
  }
}
</script>
