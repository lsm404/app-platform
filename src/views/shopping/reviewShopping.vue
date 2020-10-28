<template>
  <div class="shopping-detail">
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

    <p class="supplier-number">您已选择<span class="number">{{total}}</span>件商品</p>

    <el-table
      ref="multipleTable"
      :data="listDetail"
      style="width: 100%"
      border
      :header-cell-style='columnStyle'
      :cell-style="cellStyle"
      :row-key="getRowKeys"
      @selection-change="selectionChange"
      stripe>

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        prop="base_pic"
        label="商品图片"
        min-width="80">
        <template slot-scope="props" class="goods_box">
          <img :src="props.row.base_pic" class="base_pic">
        </template>
      </el-table-column>

      <el-table-column
        prop="item_name"
        label="供应商名称"
        :show-overflow-tooltip="true"
        min-width="200">
      </el-table-column>


      <el-table-column
        prop="item_name"
        label="商品名称"
        :show-overflow-tooltip="true"
        min-width="200">
      </el-table-column>

      <el-table-column
        prop="item_sn"
        label="商品编号"
        min-width="200">
      </el-table-column>

      <el-table-column
        prop="huiyuan"
        label="供货价"
        min-width="80">
      </el-table-column>

      <el-table-column
        prop="chengben"
        label="市场价"
        min-width="80">
      </el-table-column>

      <el-table-column
        prop="addGrade"
        label="操作"
        fixed="right"
        align="center"
        width="350">

        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="seeDetail(scope.$index, scope.row)">查看详情</el-button>
          <el-button type="primary" size="mini" @click="changeRecode(scope.$index, scope.row)">修改记录</el-button>
          <el-button size="mini" @click="passed(scope.$index, scope.row)">通过</el-button>
          <el-button size="mini" @click="failure(scope.$index, scope.row)">拒绝</el-button>
        </template>
      </el-table-column>

    </el-table>

    <div class="bottom">
      <div style="margin-top: 20px">
        <el-button type="primary" size="mini" @click="allCheckEvent()">选择当前</el-button>
        <el-button type="primary" size="mini" @click="selectAll()">选择全部</el-button>
        <el-button @click="reviewPassed()">批量通过</el-button>
        <el-button @click="reviewFailure()">批量拒绝</el-button>
      </div>
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

    <el-dialog
      title="修改内容"
      :visible.sync="dialogVisible">
      <div class="dialog-content">
        <p>原商品价格：80</p>
        <p>改商品价格：90</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="信息" :visible.sync="dialogInfoVisible">
      <shopping-info></shopping-info>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'reviewShopping',
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
        multipleSelection: '',
        total: 0, // 列表数目
        currentPage: 1,
        multipleSelectionAll: [],  //  所有选中的数据包含跨分页数据
        allCheck: false,
        pageCheck: false,
        checkList: [],
        formInline: {
          user: '',
          region: '',
        },
        dialogVisible: false,  //  弹窗状态
        dialogInfoVisible: false  //  商品详情弹窗
      }
    },
    components: {
      ShoppingInfo: () => import('./component/shoppingInfo.vue')
    },
    watch: {
      watch: {
        listDetail: {
          handler (value) {
            if (this.allCheck) {
              let that = this
              let len = that.checkList.length
              value.forEach(row => {
                for (let i = 0; i < len; i++) {
                  if (row.execId === that.checkList[i].execId) {
                    that.$refs.multipleTable.toggleRowSelection(row, false)
                    break
                  } else {
                    that.$refs.multipleTable.toggleRowSelection(row, true)
                  }
                }
              })
            }
          },
          deep: true
        }
      }
    },
    methods: {
      columnStyle({ row, column, rowIndex, columnIndex }) {
        if (columnIndex !== 8) {
          return 'padding-left: 6px'
        }
      },
      cellStyle({ row, column, rowIndex, columnIndex }) {
        if (columnIndex !== 8) {
          return 'padding-left: 6px'
        }
      },
      seeDetail(index, row) {
        this.dialogInfoVisible = true
      },

      // 下架
      changeRecode(index, row) {
        this.dialogVisible = true
      },
      
      // 关闭弹窗
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

      //  通过
      passed(index, row) {
        console.log('edit')
        this.listDetail.splice(index, 1)
      },

      //  拒绝
      failure(index, row) {
        console.log('view')
      },

      getRowKeys (row) {
        return row.execId
      },

      selectionChange (rows) {
        this.checkList = rows
        this.total = this.checkList.length
        console.log('checklist', this.checkList)
      },

      // 分页全选-全选按钮change事件
      allCheckEvent (val) {
        if (!this.allCheck && !this.pageCheck) {
          this.listDetail.forEach(row => {
            this.pageCheck = true
            this.$refs.multipleTable.toggleRowSelection(row, true)
          })
        }
      },

      // 分页全选-全选时禁用选择框
      checkSelectable (row, index) {
        return !this.allCheck;
      },

      selectAll() {
        console.log('selectAll')
        if (!this.allCheck && !this.pageCheck) {
          this.listDetail.forEach(row => {
            this.$refs.multipleTable.toggleAllSelection()
            this.allCheck = true
          })
        } else {
          this.allCheck = true
        }
      },

      // 审核通过
      reviewPassed() {
        console.log('reviewPassed')
        this.listDetail = []
      },

      // 审核拒绝
      reviewPassed() {
        console.log('reviewPassed')
      },

      onSubmit() {
        console.log('submit!');
      },

      handleSizeChange() {
        console.log('分页')
      },

      handleCurrentChange() {
        console.log('分页')
      },
    }
}
</script>

<style lang="scss" scoped>
  .shopping-detail {
    margin:  0 20px;

    .supplier-number {
      font-size: 12px;
      color: #B3B3B3;
      margin: 16px 0 6px 0;

      .number {
        color: #777;
      }
    }

    /deep/ .el-table {
      margin: 0;

      .base_pic {
        width: 50px;
        height: 50px;
      }

      .cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
    }

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

    /deep/ .el-dialog {
      width: 700px;
      height: 624px;
      overflow: auto;

      .dialog-content {
        margin: 0 20px;
        height: 430px;
        padding: 16px;
        border-radius: 4px;
        border: 1px solid #DCDFE7;

        p {
          margin-bottom: 16px;
        }
      }

      .el-dialog__header, .el-dialog__footer {
        margin: 0 20px;
      }
    }
  }
</style>