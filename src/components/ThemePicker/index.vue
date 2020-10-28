<template>
  <div id="themepicker">
    <div class="theme" @click="drawer = true">切换主题色</div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
    >
      <p :style="{'background':variables.menuBg}">主题方案</p>
      <ul>
        <li class="bk-blue" @click="getColor(1)" style="background:#8CA0D1"/>
        <li class="bk-orange" @click="getColor(2)" style="background:#f98c58"/>
        <li class="bk-black" @click="getColor(3)" style="background:#1D2835"/>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const version = require('element-ui/package.json').version // element-ui version from node_modules
const ORIGINAL_THEME = '#8CA0D1' // default color

export default {
  name: 'ThemePicker',
  data() {
    return {
      drawer: false,
      theme: ''
    }
  },
  computed: {
    ...mapState({
      variables: state => state.theme.variables
    })
  },
  watch: {
    'variables.menuBg': {
      handler: function(val, oldVal) {
        this.theme = val
        console.log(this.theme, 'theme')
      },
      immediate: true
    },
    async theme(val) {
      const oldVal = this.chalk ? this.theme : ORIGINAL_THEME
      if (typeof val !== 'string') return
      const themeCluster = this.getThemeCluster(val.replace('#', ''))
      const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
      console.log(themeCluster, originalCluster)
      const $message = this.$message({
        message: '  Compiling the theme',
        customClass: 'theme-message',
        type: 'success',
        duration: 0,
        iconClass: 'el-icon-loading'
      })
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
          const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)
          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
        }
      }
      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        await this.getCSSString(url, 'chalk')
      }
      const chalkHandler = getHandler('chalk', 'chalk-style')
      chalkHandler()
      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
        })
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
      })
      this.$emit('change', val)
      $message.close()
    }
  },
  methods: {
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },
    getCSSString(url, variable) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve()
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)
        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))
          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)
          return `#${red}${green}${blue}`
        }
      }
      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)
        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)
        return `#${red}${green}${blue}`
      }
      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    },
    getColor(status) {
      let data = {}
      if (status == 1) {
        data = {
          status,//1默认马卡龙蓝2橘色3蓝黑色
          menuBg: '#8CA0D1', // 菜单整体背景
          subMenuBg: '#9BACD6' // 子菜单背景
        }
      } else if(status == 2){
        data = {
          status,
          menuBg: '#F98C58', // 菜单整体背景
          subMenuBg: '#F79F75' // 子菜单背景
        }
      }else{
        data = {
          status,
          menuBg: '#1D2835', // 菜单整体背景
          subMenuBg: '#2A394C' // 子菜单背景
        }
      }
      this.$store.commit('theme/getVariables', data)
    }
  }
}
</script>

<style lang="scss">
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}
.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}
.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
  #themepicker{
    font-size: 14px;
    line-height: 50px;
    float: right;
    padding-right: 30px;
    p{
      color: #fff;
      text-align: center;
      font-size: 16px;
      padding: 0;
      margin: 0;
    }
    ul{
       overflow: hidden;
      li{
        float: left;
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin: 6px;
        border: 1px solid #efefef;
        cursor: pointer;
        &:hover{
          border: 2px solid #DBDEDF;
        }
      }
    }
  }
</style>
