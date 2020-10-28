<template>
  <div class="account-info">
    <el-form ref="info" :model="info" :rules="rules" label-width="120px">
      <el-form-item label="后台类型">
        <el-select v-model="info.type" disabled placeholder="请选择后台类型" class="item-width">
          <el-option label="B2" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="自营资格" prop="self_support">
        <el-select v-model="info.self_support" placeholder="请选择自营资格" class="item-width">
          <el-option label="没有自营资格" :value="1" />
          <el-option label="自营商品池" :value="2" />
          <el-option label="自营非商品池" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="自营上架维护费收取方式">
        <el-radio-group v-model="info.take_type">
          <el-radio :label="1">按比例收费</el-radio>
          <el-radio :label="2">按件收费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="自营商品数量限制">
        <el-input v-model="info.limit_amount" type="number" placeholder="请输入自营商品数量限制" class="item-width" />
      </el-form-item>
      <el-form-item label="服务商名称">
        <el-input v-model="info.business_name" placeholder="请输入服务商名称" class="item-width" />
      </el-form-item>
      <el-form-item label="授信额度">
        <el-input v-model="info.credit_amount" type="number" placeholder="请输入授信额度" class="item-width" />
      </el-form-item>
      <el-form-item label="结算方式">
        <el-radio-group v-model="info.settle_type">
          <el-radio :label="1">周结</el-radio>
          <el-radio :label="2">月结</el-radio>
          <el-radio :label="3">季结</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="结算日：">
        <el-select v-model="info.settle_day" placeholder="请选择自营资格" class="item-width">
          <el-option label="1" :value="1" />
          <el-option label="2" :value="2" />
          <el-option label="3" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="登录账号">
        <el-input v-model="info.login_account" placeholder="请输入登录账号" class="item-width" />
      </el-form-item>
      <el-form-item label="管理员昵称">
        <el-input v-model="info.nick_name" placeholder="请输入管理员昵称" class="item-width" />
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="info.password" placeholder="请输入登录密码" type="password" class="item-width" />
      </el-form-item>
      <el-form-item label="确认密码" prop="pwdAgain">
        <el-input v-model="info.pwdAgain" placeholder="请再次确定密码" type="password" class="item-width" />
      </el-form-item>
      <el-form-item label="联系邮箱" prop="email">
        <el-input v-model="info.email" placeholder="请输入联系邮箱" type="email" class="item-width" />
      </el-form-item>
      <el-form-item label="联系手机" prop="mobile">
        <el-input v-model="info.mobile" placeholder="请输入联系手机" class="item-width" />
      </el-form-item>
      <el-form-item label="所在区域">
        <el-cascader :area="area" />
      </el-form-item>
      <el-form-item label="短信验证码">
        <el-radio-group v-model="info.msg_login">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否添加默认商品">
        <el-radio-group v-model="info.goods_status">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="启用状态">
        <el-radio-group v-model="info.status">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain style="width: 80px" @click="submitForm('info')">提交</el-button>
        <el-button plain style="width: 80px" @click="resetForm('info')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
let id = 0

export default {
  name: 'AccountInfo',
  data() {
    const validatePass = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码长度不能小于6位'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('pwdAgain')
        }
        callback()
      }
    }
    const validatePass2 = (rules, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码长度不能小于6位'))
      } else if (value !== this.info.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      infoStatus: 0, // 信息状态；0为新增、1为修改
      info: {
        type: 2,
        self_support: 1,
        take_type: '',
        limit_amount: '',
        business_name: '',
        credit_amount: '',
        settle_type: '',
        settle_day: '',
        login_account: '',
        nick_name: '',
        password: '',
        pwdAgain: '',
        email: '',
        mobile: '',
        msg_login: 0,
        goods_status: 1,
        status: 1
      },
      rules: {
        role: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        pwdAgain: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        email: [
          { type: 'email', required: true, message: '请输入联系邮箱', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系手机', trigger: 'blur' }
        ]
      },
      area: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 })
              .map(item => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
              }))
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes)
          }, 1000)
        }
      }
    }
  },
  created() {
    this.getId()
  },
  methods: {
    // 获取用户id，内容为add则为新增
    getId() {
      const accountId = this.$route.params.accountId
      if (accountId !== 'add') {
        this.infoStatus = 1
      }
    },

    // 提交
    submitForm(info) {
      this.$refs[info].validate((valid) => {
        if (valid) {
          console.log(info)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    resetForm(info) {
      this.$refs[info].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-info {
    margin-top: 20px;

    .item-width {
      width: 250px;
    }
  }
</style>
