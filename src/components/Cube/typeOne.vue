<template>
  <div class="type-one flex-box">
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
  name: 'TypeOne'
}
</script>

<style lang="scss" scoped>
.type-one {
  width: 355px;
  height: 151px;
  justify-content: space-between;

  .cube-box {
    width: 175px;
    height: 100%;
    line-height: 151px;
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }
}
</style>
