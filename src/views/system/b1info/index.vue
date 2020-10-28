<template>
  <div class="account-info">
    <el-form ref="info" :model="info" :rules="rules" label-width="100px">
      <el-form-item label="后台类型">
        <el-select v-model="info.type" disabled placeholder="请选择后台类型" class="item-width">
          <el-option label="B1" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="角色分组" prop="role">
        <el-select v-model="info.role" placeholder="请选择角色分组" class="item-width">
          <el-option v-for="item in roleList" :key="item.val" :label="item.name" :value="item.val" />
        </el-select>
      </el-form-item>
      <el-form-item label="管理员昵称">
        <el-input v-model="info.nickName" placeholder="请输入管理员昵称" class="item-width" />
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
      <el-form-item label="短信验证码">
        <el-radio-group v-model="info.msgLogin">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
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
        type: 1,
        role: '',
        nickName: '',
        password: '',
        pwdAgain: '',
        email: '',
        mobile: '',
        msgLogin: 0,
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
      roleList: [
        {
          name: '系统管理员',
          val: '1'
        },
        {
          name: '普通管理员',
          val: '2'
        },
        {
          name: 'B2管理员',
          val: '3'
        },
        {
          name: 'B3管理员',
          val: '4'
        },
        {
          name: '客服',
          val: '5'
        },
        {
          name: '商品运营',
          val: '6'
        }
      ]
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
