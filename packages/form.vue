<template>
  <div class="gz-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GzForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide() {
    return {
      Form: this
    }
  }
}
</script>

<style lang="less" scoped></style>
