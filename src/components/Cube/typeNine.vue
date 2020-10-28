<template>
  <div class="type-nine flex-box">
    <div class="cube-box cube-one">
      <i class="el-icon-plus" />
    </div>
    <div class="cube-box cube-two">
      <i class="el-icon-plus" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeNine'
}
</script>

<style lang="scss" scoped>
.type-nine {
  width: 355px;
  height: 73px;
  justify-content: space-between;

  .cube-box {
    width: 175px;
    height: 100%;
    line-height: 73px;
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }
}
</style>
