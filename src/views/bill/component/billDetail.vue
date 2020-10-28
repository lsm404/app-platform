<template>
  <div class="supplier-detail">
    <el-table
      :data="listDetail"
      style="width: 100%"
      border
      stripe>

      <el-table-column
        prop="name"
        min-width="200"
        label="供应商名称">
      </el-table-column>

      <el-table-column
        prop="grade"
        min-width="200"
        label="供应商等级">
      </el-table-column>

      <el-table-column
        prop="add"
        min-width="200"
        label="已添加商品">
      </el-table-column>

      <el-table-column
        prop="productsNumber"
        min-width="200"
        label="上架商品数">
      </el-table-column>

      <el-table-column
        fixed="right"
        min-width="200"
        prop="time"
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleClick(scope.row)" size="small">导出账单</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
    name: 'supplierDetail',
    props: {
      listDetail: {
        type: Array,
        default: [],
      }
    },
    data() {
      return {}
    }

}
</script>

<style lang="scss" scoped>
</style>