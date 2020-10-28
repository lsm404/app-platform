<template>
  <div class="type-three flex-box">
    <div class="cube-box cube-one left">
      <i class="el-icon-plus" />
    </div>
    <div class="right flex-box">
      <div class="cube-box cube-two">
        <i class="el-icon-plus" />
      </div>
      <div class="cube-box cube-three">
        <i class="el-icon-plus" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeThree'
}
</script>

<style lang="scss" scoped>
.type-three {
  width: 355px;
  height: 151px;
  justify-content: space-between;

  .cube-box {
    width: 175px;
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }

  .cube-one {
    height: 151px;
    line-height: 151px;
  }

  .right {
    width: 175px;
    height: 151px;
    flex-wrap: wrap;

    .cube-two {
      margin-bottom: 5px;
    }

    .cube-two,
    .cube-three {
      height: 73px;
      line-height: 73px;
    }
  }
}
</style>
