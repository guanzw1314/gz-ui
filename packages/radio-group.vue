<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GzRadioGroup',
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 接收到 value 值
    // 将来还需要触发 当前组件的 input 事件
    value: null
  }
}
</script>

<style lang="scss" scoped></style>
