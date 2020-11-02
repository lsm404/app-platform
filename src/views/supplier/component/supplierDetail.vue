<template>
  <div class="supplier-detail">
    <el-table
      :data="listDetail"
      style="width: 100%"
      border
      stripe>

      <el-table-column
        prop="name"
        label="供应商名称"
        min-width="150">
      </el-table-column>

      <el-table-column
        prop="grade"
        label="供应商等级"
        min-width="150">
      </el-table-column>

      <el-table-column
        prop="add"
        label="已添加商品"
        min-width="150">
      </el-table-column>

      <el-table-column
        prop="productsNumber"
        label="上架商品数"
        min-width="150">
      </el-table-column>

      <el-table-column
        prop="tsactionsNumber"
        label="成交额"
        min-width="150">
      </el-table-column>

      <el-table-column
        prop="time"
        label="最后成交时间"
        min-width="180">
      </el-table-column>

      <el-table-column
        prop="addGrade"
        label="供应商评级"
        min-width="180">

        <template slot-scope="scope">
          <el-select v-model="scope.row.levelValue" placeholder="请选择">
            <el-option
              v-for="item in scope.row.addGrade"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
  /deep/ .el-table {
    color: #606266;

    .el-input__inner {
      width: 100px;
    }

  }
</style>