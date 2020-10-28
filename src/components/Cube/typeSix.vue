<template>
  <div class="type-six flex-box">
    <div class="left">
      <div class="cube-box cube-one">
        <i class="el-icon-plus" />
      </div>
    </div>
    <div class="right box">
      <div class="upside">
        <div class="cube-box cube-two">
          <i class="el-icon-plus" />
        </div>
      </div>
      <div class="underside flex-box">
        <div class="cube-box cube-three">
          <i class="el-icon-plus" />
        </div>
        <div class="cube-box cube-four">
          <i class="el-icon-plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeSix'
}
</script>

<style lang="scss" scoped>
.type-six {
  width: 355px;
  height: 151px;
  flex-wrap: wrap;
  justify-content: space-between;

 .cube-box {
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }

  .left {
    width: 175px;
    height: 151px;

    .cube-one {
      width: 100%;
      height: 100%;
      line-height: 151px;
    }
  }

  .right {
    width: 175px;
    height: 151px;

    .upside {
      height: 73px;
      width: 100%;
      margin-bottom: 5px;

      .cube-two {
        height: 100%;
        line-height: 73px;
      }
    }

    .underside {
      width: 175px;
      height: 73px;
      justify-content: space-between;

      .cube-three,
      .cube-four {
        width: 85px;
        height: 100%;
        line-height: 73px;
      }
    }
  }
}
</style>
