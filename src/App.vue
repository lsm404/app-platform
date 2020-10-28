<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/.el-switch__label {
    position: absolute;
    display: none;
    color: #fff;
  }

  /deep/.el-switch__label--left {
    z-index: 1;
    left: 22px;
  }

  /deep/.el-switch__label--right {
    z-index: 1;
    //left: 0px;
  }

  /deep/.el-switch__label.is-active {
    display: block;
  }

  /deep/.el-switch .el-switch__core,
  .el-switch .el-switch__label {
    width: 45px;
  }

  /deep/.the-page {
      position: relative;
      margin: 20px 0;
      height: 35px;

      .el-pagination {
        position: absolute;
        right: 1%;
      }
    }
  /deep/ .el-scrollbar__wrap {
    overflow: auto;
  }
  /deep/ .scroll-container {
    width: 100%;
    height: 50px;
  }
</style>
