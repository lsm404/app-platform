<template>
  <div class="supplierList">
    <div class="add-supplier">
      <el-button type="primary" size="mini" @click="addSupplier">新增供应商</el-button>
    </div>

    <p class="supplier-number">共计<span class="number">{{total}}</span>条信息</p>

    <div class="supplier-detail">
      <supplier-detail :list-detail="listDetail" />
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
  name: 'Supplierlist',
  components: {
    supplierDetail: () => import('./component/supplierDetail.vue')
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
      currentPage: 1
    }
  },
  methods: {
    addSupplier() {
      this.$router.push('/supplier/supplierInfo')
    },

    handleSizeChange() {
      console.log('分页')
    },

    handleCurrentChange() {
      console.log('分页')
    }
  }
}
</script>

<style lang="scss" scoped>
  .supplierList {
    width: calc(100% -20px);
    margin: 17px 20px;

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
