<template>
  <div class="addSupplier">

    <div class="select-supplier">
      <el-select v-model="supplier" placeholder="供应商列表：">
        <el-option
          v-for="item in supplier_list"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" size="mini" @click="addSupplier">新增供应商</el-button>
    </div>

    <div class="supplier-info">
      <el-form ref="supplierInfo" label-position="left" label-width="90px" :model="supplier_info" :rules="rules">
        <el-form-item label="供应商名称：" prop="name">
          <el-input v-model="supplier_info.name" placeholder="请输入供应商名称"></el-input>
        </el-form-item>
        <el-form-item label="登录账号：" prop="account">
          <el-input v-model="supplier_info.account" placeholder="请输入您的登录账号"></el-input>
        </el-form-item>
        <el-form-item label="初始密码：" prop="password">
          <el-input type="password" v-model="supplier_info.password" placeholder="请输入您的初始密码"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱：" prop="email">
          <el-input v-model="supplier_info.email" placeholder="请输入常用邮箱"></el-input>
        </el-form-item>
         <el-form-item label="联系手机：" prop="mobile">
          <el-input v-model="supplier_info.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <el-button>编辑</el-button> -->
          <el-button type="primary" size="mini" @click="addSupplier">保存</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AddSupplier',
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      }
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    }
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号'))
      } else {
        if (!(/^1[3456789]\d{9}$/.test(value))) {
          callback(new Error('请输入有效手机号码'))
        } else {
          return callback()
        }
      }
    }
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写邮箱'))
      } else {
          const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
        if (!emailReg.test(value)) {
          callback(new Error('请输入正确的邮箱地址'))
        } else {
          return callback()
        }
      }
    }
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写供应商名称'))
      }
    }

    return {
      supplier: '', // 选中的供应商
      supplier_list: [
        {
          value: '1',
          label: '黄金糕'
        },
        {
          value: '2',
          label: '双皮奶'
        }
      ],
      supplier_info: {
        name: '',
        account: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: ['blur', 'change'] }
        ],
        email: [
          { validator: checkEmail, trigger: ['blur', 'change'] }
        ],
        account: [
          { validator: checkAccount, trigger: ['blur', 'change']}
        ],
        password: [
          { validator: checkPass, trigger: ['blur', 'change']}
        ],
        mobile: [
          { validator: checkMobile, trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    addSupplier() {
      this.$refs.supplierInfo.validate((valid) => {
        if (valid) {
          alert('success')
        } else {
          alert('failure')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .addSupplier {
    margin: 16px 0 0 20px;

    .supplier-info {
      width: 400px;
      margin-top: 30px;

      /deep/ .el-form-item__content {
        text-align: right;
      }

      /deep/ .el-form-item__label {
        padding: 0;
      }
    }
  }
</style>