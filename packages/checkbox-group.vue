<template>
  <div class="gz-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GzCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="less" scoped></style>
