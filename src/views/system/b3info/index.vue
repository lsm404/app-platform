<template>
  <div class="account-info">
    <el-form ref="info" :model="info" :rules="rules" label-position="top">
      <el-form-item label="后台类型">
        <el-select v-model="info.type" disabled placeholder="请选择后台类型" class="item-width">
          <el-option label="B3" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="商城名称">
        <el-input v-model="info.shop_name" placeholder="请输入商城名称" class="item-width" />
      </el-form-item>
      <el-form-item label="商城类型" prop="shop_type">
        <el-select v-model="info.shop_type" disabled placeholder="请选择商城类型" class="item-width">
          <el-option v-for="item in typeList" :key="item.val" :label="item.name" :value="item.val" />
        </el-select>
      </el-form-item>
      <el-form-item label="自营资格" prop="self_support">
        <el-select v-model="info.self_support" placeholder="请选择自营资格" class="item-width">
          <el-option label="没有自营资格" :value="1" />
          <el-option label="自营商品池" :value="2" />
          <el-option label="自营非商品池" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="行业" prop="trade">
        <el-select v-model="info.trade" placeholder="请选择行业" class="item-width">
          <el-option v-for="item in tradeList" :key="item.val" :label="item.name" :value="item.val" />
        </el-select>
      </el-form-item>
      <el-form-item label="商城简介">
        <el-input v-model="info.intro" type="textarea" placeholder="请输入商城简介" class="item-width" />
      </el-form-item>
      <el-form-item label="自营上架维护费收取方式">
        <el-radio-group v-model="info.take_type">
          <el-radio :label="1">按比例收费</el-radio>
          <el-radio :label="2">按件收费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="维护费收取比例（非自营可以不填）">
        <el-input v-model="info.fee_scale" type="number" placeholder="请输入维护费收取比例" class="item-width" />
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
        <el-cascader :area="area" class="item-width" />
      </el-form-item>
      <el-form-item label="启用状态">
        <el-radio-group v-model="info.status">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="客服链接">
        <el-radio-group v-model="info.service_status">
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
      infoStatus: 1, // 信息状态；1为修改，0为新增
      info: {
        type: 3,
        shop_name: '',
        shop_type: 1,
        self_support: 1,
        trade: '',
        intro: '',
        take_type: '',
        fee_scale: '',
        login_account: '',
        nick_name: '',
        password: '',
        pwdAgain: '',
        email: '',
        mobile: '',
        status: 1,
        service_status: 1
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
      },
      typeList: [
        {
          name: '现金商城',
          val: 1
        },
        {
          name: '积分商城',
          val: 2
        },
        {
          name: 'B卡册商城',
          val: 3
        }
      ],
      tradeList: [
        {
          name: '礼品',
          val: 1
        },
        {
          name: '银行',
          val: 2
        },
        {
          name: '保险',
          val: 3
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
      console.log(accountId)
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
    padding-left: 30px;

    .item-width {
      width: 250px;
    }
  }
</style>
