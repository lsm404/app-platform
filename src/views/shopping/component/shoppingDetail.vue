<template>
  <div class="shopping-detail">
    <el-table
      :data="listDetail"
      style="width: 100%"
      border
      :header-cell-style='columnStyle'
       :cell-style="cellStyle"
      stripe>

      <el-table-column
        prop="base_pic"
        label="图片"
        min-width="100">
        <template slot-scope="props" class="goods_box">
          <img :src="props.row.base_pic" class="base_pic">
        </template>
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
        label="会员价"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="chengben"
        label="成本价"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="shichang"
        label="市场价"
        min-width="100">
      </el-table-column>

       <el-table-column
        prop="shop_status"
        label="商品状态"
        min-width="100">
      </el-table-column>

       <el-table-column
        prop="time"
        label="商城价"
        min-width="100">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.shop_price"
            size="mini" />
          </template>
      </el-table-column>

      <el-table-column
        prop="addGrade"
        label="操作"
        fixed="right"
        align="center"
        width="250">

        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="putShelf(scope.$index, scope.row)">上架</el-button>
          <el-button type="primary" size="mini" @click="offShelf(scope.$index, scope.row)">下架</el-button>
          <el-button type="primary" size="mini" @click="edit(scope.$index, scope.row)">编辑查看</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
    name: 'shoppingDetail',
    props: {
      listDetail: {
        type: Array,
        default: [],
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      columnStyle({ row, column, rowIndex, columnIndex }) {
        if (columnIndex !== 8) {
          return 'padding-left: 15px'
        }
      },
      cellStyle({ row, column, rowIndex, columnIndex }) {
        if (columnIndex !== 8) {
          return 'padding-left: 15px'
        }
      },
      putShelf(index, row) {
        console.log('putShelf')
        this.listDetail[index].shop_status = '上架'
      },
      offShelf(index, row) {
        this.listDetail[index].shop_status = '下架'
      },
      edit(index, row) {
        console.log('edit')
      }
    }
}
</script>

<style lang="scss" scoped>
  .shopping-detail {

    /deep/ .el-table {

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
  }
</style>