<template>
  <!-- <div :class="{'has-logo':showLogo}"> -->
  <div :class="[showLogo?'has-logo':'',theme_color==1?'theme-blue':'theme-orange']">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
// import variable from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      theme_color: 1 // 1默认主题2橙色主题
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    ...mapState({
      variables: state => state.theme.variables
    }),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variable() {
      return variable
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  watch: {
    '$store.state.theme.variables.menuBg': function(val) {
      console.log(val,'val')
      if (val == '#8CA0D1') {
        this.theme_color = 1
      } else {
        this.theme_color = 2
      }
    }
  }
}
</script>
<style lang="scss">

.el-icon-arrow-down:before {
    content: "\E791";
    color: #fff;
    font-size: 14px;
}
.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
}
  .el-scrollbar__view{
    position: relative;
    height: 100%;
  }
  .theme-blue{
    & .nest-menu .el-submenu>.el-submenu__title,
    & .el-submenu .el-menu-item{
        background-color: #9BACD6 !important;
      }
  }
  .theme-orange{
      & .nest-menu .el-submenu>.el-submenu__title,
      & .el-submenu .el-menu-item{
        background-color: #F79F75 !important;
      }
  }
</style>
