<template>
  <div class="qualification">
    <el-form ref="supplierInfo" label-position="left" label-width="90px" :model="supplier_info" :rules="rules">
      <div class="form-top">
        <el-form-item label="供应商名称：" prop="name">
          <el-select v-model="supplier_info.name" placeholder="请选择供应商">
            <el-option
              v-for="item in supplier_list"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态：" prop="name">
          <el-select v-model="supplier_info.name" placeholder="审核状态">
            <el-option
              v-for="item in supplier_list"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>      
      </div>
      <el-form-item label="营业执照：" prop="image">
        <el-upload
          ref="upload"
          :class="{disabled:uploadDisabled}"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :file-list="fileList"
          :limit="1"
          :on-preview="handlePictureCardPreview"
          :on-success="handleAvatarSuccess"
          :on-exceed="handleExceed"
          :before-upload="handleBeforeUpload"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="公司名称：" prop="company_name">
        <el-input v-model="supplier_info.company_name" placeholder="请输入公司名称"></el-input>
      </el-form-item>
      <el-form-item label="税号：" prop="tax_number">
        <el-input v-model="supplier_info.tax_number" placeholder="请输入税号"></el-input>
      </el-form-item>
        <el-form-item label="公司地址：" prop="name">
        <el-input v-model="supplier_info.address" placeholder="请输入公司地址"></el-input>
      </el-form-item>
      <el-form-item label="电话：" prop="mobile">
        <el-input v-model="supplier_info.mobile" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="开户行：" prop="name">
        <el-input v-model="supplier_info.account_bank" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="账号：" prop="account">
        <el-input v-model="supplier_info.account" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <div class="submit">
        <el-form-item>
          <el-button @click="refuse">拒绝</el-button>
          <el-button type="primary" size="mini" @click="addSupplier">通过</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Qualification',
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        const accountReg = /^([1-9]{1})(\d{14}|\d{18})$/
        if (!accountReg.test(value)) {
          return callback(new Error('账号不正确'))
        } else {
          return callback()
        }
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

    var checkCompanyName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写公司名称'))
      }
    }

    var checkTaxNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写税号'))
      } else {
        const taxTeg = /^[A-Z0-9]{15}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/
        if (!taxTeg.test(value)) {
          return callback(new Error('请填写正确的税号'))
        } else {
          return callback()
        }
      }
    }

    var checkImg = (rule, value, callback) => {
      console.log('img', this.dialogImageUrl)
      if (!(this.fileList.length > 0 || this.newFileList.length)) {
        return callback(new Error('请上传营业执照'))
      } else {
        return callback()
      }
    }

    return {
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
        company_name: '',  // 公司名称
        license: '',  //  营业执照
        tax_number: '',  //  税号
        address: '',
        status: '',  //  审核状态
        mobile: '',
        account_bank: '',  //  开户行
        account: ''  //  账号
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
          { validator: checkMobile, trigger: 'change'}
        ],
        company_name: [
          { validator: checkCompanyName, trigger: ['blur', 'change']}
        ],
        tax_number: [
          { validator: checkTaxNum, trigger: ['blur', 'change']}
        ],
        image: [
          { validator: checkImg, trigger: ['blur', 'change']}
        ]
      },
      dialogImageUrl: '',  //  放大图片目录
      dialogVisible: false,  //  放大按钮
      fileList: [],
      newFileList: [],
      status: false  //  上传图片按钮状态
    }
  },
  computed: {
    uploadDisabled: function() {
      return this.fileList.length > 0 || this.newFileList.length > 0 || this.status
    }
  },
  mounted() {
    this.fileList = [
      {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
    ]
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
    },

    //  移除照片
    handleRemove(file, fileList) {
      this.fileList = []
      this.newFileList = []
      this.status = false
    },

    // 查看大图功能
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 上传成功
    handleAvatarSuccess(res, file) {
      console.log({file})
      this.newFileList = [
        {
          name: file.url,
          url: file.url
        }
      ]
    },

    // 超过数量限制
    handleExceed(files, fileList) {
      this.$set(fileList[0], 'raw', files[0])
      this.$set(fileList[0], 'name', files[0].name)
      this.$refs.upload.clearFiles()  //  清除文件
      this.$refs.upload.handleStart(files[0])  // 选择文件后的赋值方法
    },

    //  上传图片之前
    handleBeforeUpload(file) {
      this.status = true
    },

    //  拒绝按钮
    refuse() {
      console.log('refuse')
    }
  }
}
</script>

<style lang="scss" scoped>
  .qualification {
    width: 420px;
    margin: 16px 0 0 20px;

    /deep/ .el-form {
      .form-top {
        width: 620px;
        display: flex;
        justify-content: space-between;
      }

      .submit {
        .el-form-item__content {
          text-align: right;
        }
      }

      .el-form-item__label {
        padding: 0;
      }

      .disabled .el-upload--picture-card {
          display: none;
      }
    }
  }
</style>