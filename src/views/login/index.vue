<template>
  <div id="login">
    <div class="login-left">
      <div :class="[banner_status == 1 ? 'banner-box' : 'banner-boxs']">
        <el-carousel indicator-position="outside" :height="sum">
          <el-carousel-item v-for="(item, index) in 3" :key="index">
            <p :class="'banner' + index" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="login-right">
      <div
        :class="[
          banner_status == 1
            ? 'login-public login-box'
            : 'login-public login-boxs'
        ]"
      >
        <h5>后台管理系统</h5>
        <div class="login-content">
          <transition name="el-fade-in-linear">
            <el-form v-show="formShow" ref="loginForm" :model="loginForm" :rules="loginRules">
              <el-form-item prop="mobile">
                <el-input
                  ref="mobile"
                  v-model="loginForm.mobile"
                  placeholder="请输入账号"
                  maxlength="11"
                  name="mobile"
                  type="text"
                  tabindex="1"
                  auto-complete="on"
                >
                  <i slot="prefix">
                    <svg-icon icon-class="user" />
                  </i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  show-password
                  placeholder="密码"
                  name="password"
                  tabindex="2"
                  auto-complete="new-password"
                  @keyup.enter.native="handleLogin"
                >
                  <i slot="prefix">
                    <svg-icon icon-class="password" />
                  </i>
                </el-input>
              </el-form-item>
              <el-button
                :loading="loading"
                @click.native.prevent="handleLogin"
              >登录
              </el-button>
            </el-form>
          </transition>
          <transition name="el-fade-in-linear">
            <div v-show="codeShow" id="login_container" style="position: absolute; left: 50%; top: 62%; transform: translate(-50%, -56%)scale(0.7);" />
          </transition>
        </div>
        <div class="sns">
          <el-row>
            <el-col :span="5" class="sns-login">其他登录:</el-col>
            <el-col v-show="formShow" :span="2" class="sns-login">
              <a @click="dingLogin(2)">
                <img
                  src="https://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2020-06/20200610135601_dlogo.png"
                  alt="钉钉登录"
                >
              </a>
            </el-col>
            <el-col v-show="codeShow" :span="2" class="sns-login">
              <i class="el-icon-user-solid" style="font-size: 20px;color: #ff7d00;" @click="codeShow=false,formShow=true"/>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <footer :class="[banner_status == 1 ? 'fonnt-sty' : 'fonnt-scale']">
      © 2018-2020 壹企通提供技术支持
    </footer>
  </div>
</template>

<script>
import { validUsermobile } from '@/utils/validate'
import defaultSettings from '@/settings'

export default {
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
    const dingtalkRedirectUrl = encodeURIComponent(
      window.location.origin + '/ding'
    )

    return {
      banner_status: window.screen.width > 1440 ? 1 : 2,
      dingtalkAppId: process.env.VUE_APP_APPID,
      title: defaultSettings.title,
      dingtalkUrl:
        'https://oapi.dingtalk.com/connect/qrconnect?appid=' +
        dingtalkAppId +
        '&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=' +
        dingtalkRedirectUrl,
      loginForm: {
        mobile: '',
        password: ''
      },
      loginRules: {
        mobile: [
          { required: true, trigger: 'blur', validator: validateUsermobile }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      formShow: true,
      codeShow: false
    }
  },
  computed: {
    sum: function() {
      return this.banner_status === 1 ? '552px' : '380px'
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
  mounted() {
    // this.dingLogin(2)
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
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
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

      const handleMessage = event => {
        const origin = event.origin

        // 判断是否来自ddLogin扫码事件
        if (origin === 'https://login.dingtalk.com') {
          const loginTmpCode = event.data
          const url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${
            this.dingtalkAppId
          }&response_type=code&scope=snsapi_login&redirect_uri=${
            window.location.origin
          }/ding&loginTmpCode=${loginTmpCode}`
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
#login {
  height: 100%;
  .el-carousel__arrow {
    background-color: #a9a7a2bd;
  }
  display: flex;
  .login-left,
  .login-right {
    flex: 1;
  }
  .login-left {
    position: relative;
    .banner-box {
      width: 756px;
      position: absolute;
      top: 48%;
      right: 5%;
      transform: translate(0, -50%);
      -webkit-transform: translate(0, -50%);
    }
    .banner-boxs {
      width: 500px;
      position: absolute;
      top: 48%;
      right: 5%;
      transform: translate(0, -50%);
      -webkit-transform: translate(0, -50%);
    }
    .el-carousel__item p {
      height: 100%;
      background-size: 100% 100%;
    }

    .banner0 {
      background: url("https://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2020-06/20200608143647_banner1.png")
        no-repeat;
    }
    .banner1 {
      background: url("https://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2020-06/20200608143809_banner2.png")
        no-repeat;
    }
    .banner2 {
      background: url("https://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2020-06/20200608143836_banner3.png")
        no-repeat;
    }
  }
  .login-right {
    .login-public {
      width: 336px;
      height: 320px;
      border-radius: 4px;
      -moz-border-radius: 4px;
      -webkit-border-radius: 4px;
      border: 1px solid rgba(235, 235, 235, 1);
      position: relative;
      top: 50%;
      left: 50%;
      h5 {
        background: rgba(255, 248, 241, 1);
        font-size: 18px;
        color: #666666;
        border-bottom: 1px solid rgba(235, 235, 235, 1);
        text-align: center;
      }
    }
    .login-box {
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      h5 {
        height: 72px;
        line-height: 72px;
      }
    }
    .login-boxs {
      transform: translate(-50%, -50%) scale(0.86);
      -webkit-transform: translate(-50%, -50%) scale(0.86);
      h5 {
        height: 72px;
        line-height: 72px;
      }
    }
    .login-content {
      display: flex;
      justify-content: center;
      padding-top: 28px;
      .el-form-item {
        margin-bottom: 16px;
      }
      button {
        width: 286px;
        height: 44px;
        background: rgba(255, 125, 0, 1);
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        border: none;
      }
    }
    .el-input__prefix {
      color: #6e747d;
      padding-left: 6px;
      &:after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 18px;
        background: #e1e1e1;
        position: relative;
        top: 5px;
        left: 8px;
      }
    }
    .el-input--prefix .el-input__inner {
      padding-left: 44px;
      font-size: 15px;
    }
    .el-input {
      width: 286px;
      height: 44px;
      line-height: 44px;
    }

    input {
      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px #fff inset !important;
        -webkit-text-fill-color: #999 !important;
      }
    }
  }
  footer{
    color: #A0A0A0;
  }
  .fonnt-sty {
    height: 36px;
    width: 100%;
    background: rgba(255, 248, 241, 1);
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .fonnt-scale {
    height: 28px;
    width: 100%;
    background: rgba(255, 248, 241, 1);
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
   .sns{
      width: 286px;
      position: absolute;
      left: 8%;
      bottom: 0;
      .el-row{
        display: flex;
        align-items: center;
        height: 40px;
      }
      .sns-login{
        font-size: 13px;
        color: #808080;
        padding: 18px 0;
      }
      a{
        width: 24px;
        height: 24px;
        display: inline-block;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

}
</style>
