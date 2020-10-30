<template>
  <div class="supplierList">
    <div class="add-supplier">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item label="下单时间：">
          <!-- <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="search.startTime" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker placeholder="选择时间" v-model="search.endTime" style="width: 100%;"></el-date-picker>
          </el-col> -->
          <el-date-picker
            v-model="time"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            class="time"
            @change="timeData(time)"
          />
        </el-form-item>
         <el-form-item label="供应商：" class="shop-name">
          <el-input v-model="search.user" placeholder="请输入商品名称或sku"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <p class="supplier-number">共计<span class="number">{{total}}</span>条信息</p>

    <div class="supplier-detail">
      <bill-detail :list-detail="listDetail" />
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
  name: 'billlist',
  components: {
    billDetail: () => import('./component/billDetail.vue')
  },
  data() {
    return {
      listDetail: [
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          levelValue: '' // 选择框值
        },
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          addGrade: [
            {
              value: '1',
              label: '1级'
            },
            {
              value: '2',
              label: '2级'
            },
            {
              value: '3',
              label: '3级'
            }
          ],
          levelValue: '' // 选择框值
        },
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          addGrade: [
            {
              value: '1',
              label: '1级'
            },
            {
              value: '2',
              label: '2级'
            },
            {
              value: '3',
              label: '3级'
            }
          ],
          levelValue: '' // 选择框值
        },
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          addGrade: [
            {
              value: '1',
              label: '1级'
            },
            {
              value: '2',
              label: '2级'
            },
            {
              value: '3',
              label: '3级'
            }
          ],
          levelValue: '' // 选择框值
        },
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          addGrade: [
            {
              value: '1',
              label: '1级'
            },
            {
              value: '2',
              label: '2级'
            },
            {
              value: '3',
              label: '3级'
            }
          ],
          levelValue: '' // 选择框值
        },
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          addGrade: [
            {
              value: '1',
              label: '1级'
            },
            {
              value: '2',
              label: '2级'
            },
            {
              value: '3',
              label: '3级'
            }
          ],
          levelValue: '' // 选择框值
        },
        {
          name: 'Lee',
          grade: 'Ⅲ',
          add: '250',
          productsNumber: '77',
          tsactionsNumber: '8899093',
          time: '2020/9/28',
          addGrade: [
            {
              value: '1',
              label: '1级'
            },
            {
              value: '2',
              label: '2级'
            },
            {
              value: '3',
              label: '3级'
            }
          ],
          levelValue: '' // 选择框值
        }
      ], // 供应商列表
      total: 0, // 列表数目
      currentPage: 1,
      search: {
        user: '',
        startTime: '',
        endTime: ''
      },
      time: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
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

    //  操作
    handleClick(row) {
      console.log({row})
    },

    // 获取时间
    timeData(t) {
      console.log({t})
      console.log('1', new Date(t[1]))
      console.log('0', new Date(t[0]))
      this.search.startTime = new Date(t[0]).getTime()
      this.search.endTime = new Date(t[1]).getTime()
    },
  }
}
</script>

<style lang="scss" scoped>
  .supplierList {
    width: calc(100% -20px);
    margin: 17px 20px;

    .add-supplier {

      .el-form {

        .line {
          text-align: center;
        }
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
