<template>
  <div class="type-two flex-box">
    <div class="cube-box cube-one">
      <i class="el-icon-plus" />
    </div>
    <div class="cube-box cube-two">
      <i class="el-icon-plus" />
    </div>
    <div class="cube-box cube-three">
      <i class="el-icon-plus" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeTwo'
}
</script>

<style lang="scss" scoped>
.type-two {
  width: 355px;
  height: 99.73px;
  justify-content: space-between;

  .cube-box {
    width: 115px;
    height: 100%;
    line-height: 99.73px;
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }
}
</style>
