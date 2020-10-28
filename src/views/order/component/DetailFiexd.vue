<template>
  <div class="shopping-detail">
    <p class="supplier-number">共计<span class="number">{{total}}</span>条信息</p>
    <el-table
      :data="listDetail"
      style="width: 100%"
      border
      :header-cell-style='columnStyle'
       :cell-style="cellStyle"
      stripe>

      <el-table-column
        prop="item_name"
        label="订单编号"
        :show-overflow-tooltip="true"
        min-width="200">
      </el-table-column>

      <el-table-column
        prop="item_sn"
        label="下单时间"
        min-width="150">
      </el-table-column>

      <el-table-column
        prop="huiyuan"
        label="订单价格"
        min-width="100">
      </el-table-column>


      <el-table-column
        prop="item_sn"
        label="商品名称"
        min-width="200">
      </el-table-column>

      <el-table-column
        prop="shop_status"
        label="商品状态"
        min-width="100">
      </el-table-column>

       <el-table-column
        prop="shop_status"
        label="售后状态"
        min-width="100">
      </el-table-column>

       <el-table-column
        prop="time"
        label="发货单号"
        min-width="200">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.shop_price"
            size="mini" />
          </template>
      </el-table-column>

      <el-table-column
        prop="shichang"
        label="售后备注"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="addGrade"
        label="操作"
        fixed="right"
        align="center"
        width="200">

        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="view(scope.$index, scope.row)">查看</el-button>
          <el-button class="ui-btn-blue" type="primary" size="mini" @click="offShelf(scope.$index, scope.row)">发货</el-button>
        </template>
      </el-table-column>

      <el-table-column
        prop="addGrade"
        label="售后操作"
        fixed="right"
        align="center"
        width="200">

        <template slot-scope="scope">
          <el-button size="mini" @click="putShelf(scope.$index, scope.row)">退订单</el-button>
          <el-button size="mini" @click="offShelf(scope.$index, scope.row)">退运费</el-button>
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
        total: '6'
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
      view(index, row) {
        this.$router.push({
          name: '订单详情',
          query: {
            id: row.id 
          }
        })
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
      margin-bottom: 15px;

      .base_pic {
        width: 50px;
        height: 50px;
      }

      .cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .el-tooltip {
        width: auto;
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