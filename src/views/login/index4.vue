<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >

      <div class="title-container">
        <h3 class="title">{{ title }}</h3>
      </div>

      <div style="height: 300px;">
        <transition name="el-zoom-in-center">
          <div v-show="formShow" class="data-form">
            <el-form-item prop="mobile">
              <span class="svg-container"><svg-icon icon-class="user" /></span>
              <el-input
                ref="mobile"
                v-model="loginForm.mobile"
                placeholder="账号"
                maxlength="11"
                name="mobile"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>

            <el-form-item prop="password">
              <span class="svg-container"><svg-icon icon-class="password" /></span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd"><svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" /></span>
            </el-form-item>

            <el-button
              :loading="loading"
              type="primary"
              style="width:100%;margin-bottom:20px;"
              @click.native.prevent="handleLogin"
            >登录
            </el-button>
          </div>
        </transition>

        <transition name="el-zoom-in-center">
          <div v-show="codeShow" id="login_container" style="position: absolute; left: 50%; top: 55%; transform: translate(-50%, -55%);" />
        </transition>
      </div>

      <div class="sns">
        <el-row>
          <el-col class="label" :span="12"><span>其他登录方式</span></el-col>
          <!-- <el-col class="forgot-password" :span="12"><span>忘记密码？</span></el-col> -->
        </el-row>
        <ul class="items clearfix">
          <li v-show="formShow">
            <a @click="dingLogin(2)">
              <img
                src="https://yiqitong.oss-cn-hangzhou.aliyuncs.com/static/img/dingtalk_logo_horizontal_white.png?x-oss-process=style%2Fw_120_h_auto"
                alt="钉钉登录"
              >
            </a>
          </li>
          <li v-show="codeShow">
            <a @click="changeLogin(1)">账号登录</a>
          </li>
        </ul>
      </div>
    </el-form>

    <div class="footer">
      <span>© 2019 浙江壹企通科技发展有限公司</span>
      <span><a href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP备19029372号</a></span>
      <span>浙公网安备33011002014090号</span>
    </div>
  </div>
</template>

<script>
import { validUsermobile } from '@/utils/validate'
import defaultSettings from '@/settings'

export default {
  name: 'Login',
  data() {
    const validateUsermobile = (rule, value, callback) => {
      if (!validUsermobile(value)) {
        callback(new Error('请输入正确的账号！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不能小于6位！'))
      } else {
        callback()
      }
    }

    /* window.location.origin + */
    const dingtalkAppId = process.env.VUE_APP_APPID
    // const dingtalkRedirectUrl = encodeURIComponent('http://bms.develop.yqtb2b.com/ding')
    const dingtalkRedirectUrl = encodeURIComponent(window.location.origin + '/ding')

    console.group(dingtalkAppId, dingtalkRedirectUrl)

    return {
      dingtalkAppId: process.env.VUE_APP_APPID,
      title: defaultSettings.title,
      dingtalkUrl: 'https://oapi.dingtalk.com/connect/qrconnect?appid=' + dingtalkAppId + '&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=' + dingtalkRedirectUrl,
      loginForm: {
        mobile: '',
        password: ''
      },
      loginRules: {
        mobile: [{ required: true, trigger: 'blur', validator: validateUsermobile }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      formShow: false,
      codeShow: true
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // console.log(window.location.origin)
  },
  mounted() {
    this.dingLogin(2)
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },

    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 切换登录方式
    changeLogin(type) {
      switch (type) {
        // 账号登录
        case 1:
          this.formShow = true
          this.codeShow = false
          break
        // 钉钉登录
        case 2:
          this.formShow = false
          this.codeShow = true
          break
        default:
          break
      }
    },

    // 切换钉钉登录
    dingLogin(type) {
      const obj = DDLogin({
        id: 'login_container',
        goto: encodeURIComponent(this.dingtalkUrl),
        style: 'border:none;background-color:#FFFFFF;',
        width: '300',
        height: '300'
      })

      this.changeLogin(type)

      const handleMessage = (event) => {
        const origin = event.origin

        // 判断是否来自ddLogin扫码事件
        if (origin === 'https://login.dingtalk.com') {
          const loginTmpCode = event.data
          const url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.dingtalkAppId}&response_type=code&scope=snsapi_login&redirect_uri=${window.location.origin}/ding&loginTmpCode=${loginTmpCode}`
          window.location.href = url
        }
      }
      if (typeof window.addEventListener !== 'undefined') {
        window.addEventListener('message', handleMessage, false)
      } else if (typeof window.attachEvent !== 'undefined') {
        window.attachEvent('onmessage', handleMessage)
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  min-width: 960px;
  background-color: $dark_gray;
  background-image: url(https://yiqitong.oss-cn-hangzhou.aliyuncs.com/static/img/bg_bing_2020-01-01.jpeg);
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  overflow: hidden;

  .login-form {
    position: absolute;
    top: 50%;
    right: 8%;
    transform: translate(-8%, -50%);
    -webkit-transform: translate(-8%, -50%);
    -moz-transform: translate(-8%, -50%);
    -ms-transform: translate(-8%, -50%);
    width: 380px;
    max-width: 100%;
    padding: 20px;
    overflow: hidden;
    opacity: .85;
    background-color: $bg;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;

    .data-form {
      height: 300px;
      padding-top: 45px;
    }
  }

  .sns {
    .label {
      font-size: 14px;
      color: $light_gray;
    }

    .forgot-password {
      font-size: 14px;
      color: $light_gray;
      text-align: right;
    }

    ul.items {
      padding: 0;
      margin: 5px auto 0 auto;

      li {
        list-style: none;
        float: left;
        color: #FFFFFF;

        img {
          width: 60px;
        }
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 22px;
      color: $light_gray;
      margin: 0 auto 30px auto;
      text-align: center;
      font-weight: normal;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .footer {
    width: 100%;
    opacity: .6;
    background-color: $bg;
    position: fixed;
    bottom: 0;
    padding: 10px 30px;

    span {
      font-size: 14px;
      color: $light_gray;
      opacity: .6;
    }
  }
}
</style>
