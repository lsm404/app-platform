<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#333"
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

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      theme_color: 1 // 1默认主题2橙色主题
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'rout'

    ]),
    ...mapState({
      variables: state => state.theme.variables
    }),
    routes() {
      // return router.options.routes
      return this.$store.state.user.rout
      // this.$router.addroutes(this.$store.state.user.rout)
      // return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      console.log(meta,'meta')
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
    watch: {
    '$store.state.theme.variables.status': function(val) {
      //1默认马卡龙蓝2橘色3蓝黑色
      if (val == 1) {
        document.documentElement.style.setProperty('--theme-color', '#8CA0D1')
        document.documentElement.style.setProperty('--theme-son-color', '#9BACD6')
      } else if(val == 2){
        document.documentElement.style.setProperty('--theme-color', '#FB986A')
        document.documentElement.style.setProperty('--theme-son-color', '#FDAA84')
      }else{
        document.documentElement.style.setProperty('--theme-color', '#1D2835')
        document.documentElement.style.setProperty('--theme-son-color', '#2A394C')
      }
    }
  }
}
</script>
<style lang="scss">
//全局主题颜色
:root{
   --theme-color:#9BACD6;//主题色
   --theme-son-color:#9BACD6;//主题色
}
//tabs样式修改
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: var(--theme-color) !important;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
  color: var(--theme-color) !important;
}
//主要按钮
.el-button--primary{
  background-color: var(--theme-color) !important;
  border-color: var(--theme-color) !important;;
}
//子级导航划上
.el-menu--vertical{
  >.el-menu--popup,
  .nest-menu .el-submenu>.el-submenu__title,
  .el-menu-item{
    background-color: var(--theme-son-color) !important;
    .is-active{
          background: #fff !important;
    }
  }
}
//子级导航
.sidebar-container{
    & .nest-menu .el-submenu>.el-submenu__title,
    & .el-submenu .el-menu-item{
        background-color: var(--theme-son-color) !important;
      }
}
.menu-wrapper .nest-menu{
  background-color: var(--theme-son-color) !important;
}
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
</style>
