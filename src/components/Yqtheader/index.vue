/* eslint-disable vue/require-default-prop */
/* eslint-disable vue/require-default-prop */
<template>
  <div class="yqtHeader">
    {{ txt }}
  </div>
</template>

<script>
export default {
  name: 'YqtHeader',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    txt: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .yqtHeader {
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 0 2px 2px 0;
    border-left: 5px solid #009688;
    background-color: #f2f2f2;
  }
</style>
