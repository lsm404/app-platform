<template>
  <div class="type-seven flex-box">
    <div class="left">
      <div class="cube-box cube-one">
        <i class="el-icon-plus" />
      </div>
      <div class="cube-box cube-two">
        <i class="el-icon-plus" />
      </div>
    </div>
    <div class="right box">
      <div class="upside">
        <div class="cube-box cube-three">
          <i class="el-icon-plus" />
        </div>
      </div>
      <div class="underside flex-box">
        <div class="cube-box cube-four">
          <i class="el-icon-plus" />
        </div>
        <div class="cube-box cube-five">
          <i class="el-icon-plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeSeven'
}
</script>

<style lang="scss" scoped>
.type-seven {
  width: 355px;
  height: 151px;
  flex-wrap: wrap;
  justify-content: space-between;

  .cube-box {
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;;
  }

  .left {
    width: 175px;
    height: 151px;

    .cube-one,
    .cube-two {
      width: 100%;
      height: 73px;
      line-height: 73px;
    }

    .cube-one {
      margin-bottom: 5px;
    }
  }

  .right {
    width: 175px;
    height: 151px;

    .upside {
      width: 100%;
      height: 73px;
      margin-bottom: 5px;

      .cube-three {
        width: 100%;
        height: 100%;
        line-height: 73px;
      }
    }

    .underside {
      justify-content: space-between;
      height: 73px;

      .cube-four,
      .cube-five {
        width: 85px;
        height: 100%;
        line-height: 73px;
      }
    }
  }
}
</style>
