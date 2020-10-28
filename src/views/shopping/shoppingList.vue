<template>
  <div class="shoppingList">
    <div class="add-supplier">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="商品名称：" class="shop-name">
          <el-input v-model="formInline.user" placeholder="请输入商品名称或sku"></el-input>
        </el-form-item>
        <el-form-item label="商品分类：">
          <el-select v-model="formInline.region" placeholder="请选择商品分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品编码：">
          <el-input v-model="formInline.user" placeholder="请输入商品编码"></el-input>
        </el-form-item>
        <el-form-item label="商品价格：" class="shop-price">
          <el-col :span="10">
            <el-input v-model="formInline.user" placeholder=""></el-input>
          </el-col>
          <el-col class="line" :span="4">—</el-col>
          <el-col :span="10">
            <el-input v-model="formInline.user" placeholder=""></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="供应商：" class="shop-name">
          <el-input v-model="formInline.user" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item label="商品分类：" class="classify">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <p class="supplier-number">共计<span class="number">{{total}}</span>条信息</p>

    <div class="supplier-detail">
      <shopping-detail :list-detail="listDetail" />
    </div>

    <!-- 分页-->
    <div class="the-page">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[20, 40, 60, 80, 100]"
        :background="true"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingList',
  components: {
    shoppingDetail: () => import('./component/shoppingDetail.vue')
  },
  data() {
    return {
      listDetail: [
        {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
        {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
        {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
        {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
        {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
       {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
       {
          base_pic: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          item_name: '悦鲜活牛乳瓶450ml*24提货、月卡',
          item_sn: '11652888273',
          huiyuan: '77',
          chengben: '8899093',
          shicheng: '2020/9/28',
          shop_status: '上架',
          shop_price: '12',
          levelValue: '' // 选择框值
        },
      ], // 供应商列表
      total: 0, // 列表数目
      currentPage: 1,
      formInline: {
        user: '',
        region: ''
      },
    }
  },
  methods: {
    addSupplier() {
      this.$router.push('/supplier/addSupplier')
    },

    handleSizeChange() {
      console.log('分页')
    },

    handleCurrentChange() {
      console.log('分页')
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
  .shoppingList {
    width: calc(100% -20px);
    margin: 17px 20px;

    /deep/ .el-form {

      .el-form-item {
        margin-right: 25px;
      }

      .el-form-item__label {
        color: #333333;
        font-size: 14px;
      }

      .line {
        text-align: center;
        color: #DCDFE7;
      }

      .classify {
        .el-form-item__content {
          width: 80px;
        }
      }

      .shop-price {
        .el-form-item__content {
          width: 180px;
        }
      }

      .shop-name {

        .el-form-item__content {
          width: 140px;
        }
      }

      .el-input__inner {
        padding: 0 10px;
      }
      .el-input__inner::-webkit-input-placeholder {
        font-size: 12px !important;
        color:#C0C4CC!important;
        font-weight: 500 !important;
      }

      /* Firefox 4-18 */
      .el-input__inner:-moz-placeholder {
        font-size: 12px;
        color: #C0C4CC;
        font-weight: 500;
      }

      /* Firefox 19-50 */
      .el-input__inner::-moz-placeholder {
        font-size: 12px;
        color: #C0C4CC;
        font-weight: 500;
      }

      /* - Internet Explorer 10–11
        - Internet Explorer Mobile 10-11 */
      .el-input__inner:-ms-input-placeholder {
        font-size: 12px !important;
        color: #C0C4CC !important;
        font-weight: 500 !important;
      }

      /* Edge (also supports ::-webkit-input-placeholder) */
      .el-input__inner::-ms-input-placeholder {
       font-size: 12px !important;
        color: #C0C4CC !important;
        font-weight: 500 !important;
      }

      /* CSS Working Draft */
      .el-input__inner::placeholder {
        font-size: 12px !important;
        color: #C0C4CC !important;
        font-weight: 500 !important;
      }
    }

    .supplier-number {
      font-size: 12px;
      color: #B3B3B3;
      margin: 16px 0 6px 0;

      .number {
        color: #777;
      }
    }
  }
</style>
