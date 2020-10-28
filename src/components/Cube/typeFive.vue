<template>
  <div class="type-five">
    <div class="cube-box cube-one">
      <i class="el-icon-plus" />
    </div>
    <div class="underside flex-box">
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
  name: 'TypeFive'
}
</script>

<style lang="scss" scoped>
.type-five {
  width: 355px;

  .cube-box {
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }

  .cube-one {
    width: 100%;
    height: 148px;
    line-height: 148px;
    margin-bottom: 5px;
  }

  .underside  {
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    .cube-two,
    .cube-three {
      width: 175px;
      height: 73px;
      line-height: 73px;
    }
  }
}
</style>
