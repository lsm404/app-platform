<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in" :duration="duration">
      <!-- <router-view :key="key" /> -->
      <keep-alive :include="cachedViews">
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data(){
    return{
      duration: { enter: 80, leave: 80 }
    }
  },
  computed: {
    /* key() {
      return this.$route.path
    } */
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
.hasTagsView {
  .app-main {
    /* 91 = navbar + tags-view = 50 + 41 */
    min-height: calc(100vh - 91px);
  }
  .fixed-header+.app-main {
    padding-top: 91px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
