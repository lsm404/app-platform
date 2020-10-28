<template>
  <div class="trade">
    <!-- 按钮 -->
    <div class="btn-list">
      <el-button type="primary" plain size="small" icon="el-icon-circle-plus-outline" @click="add">添加</el-button>
    </div>
    <!-- 按钮 -->

    <!-- 表格数据 -->
    <el-table
      :data="tradeData"
      :border="true"
      tooltip-effect="dark"
      style="width: 100%"
      :max-height="height"
    >
      <el-table-column
        fixed
        prop="name"
        label="行业名称"
        header-align="center"
        align="center"
        width="350"
      />
      <el-table-column
        prop="create_time"
        label="创建时间"
        header-align="center"
        align="center"
        width="350"
      />
      <el-table-column
        fixed="right"
        label="操作"
        header-align="center"
        align="center"
        min-width="150"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            plain
            @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button>
          <el-popconfirm
            title="确定删除选中的内容？"
            @onConfirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button slot="reference" type="danger" plain size="small">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格数据 -->

    <!-- 分页-->
    <div class="the-page">
      <el-pagination
        :current-page="currentPage"
        :background="true"
        :page-sizes="[20, 40, 60, 80, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <!-- 分页-->

    <!-- 对话框 -->
    <el-dialog
      :title="dialogTxt"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-input v-model="name" placeholder="请输入行业名称（必填）" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </span>
    </el-dialog>
    <!-- 对话框 -->
  </div>
</template>

<script>
import { tradeList } from '@/api/system'

export default {
  name: 'Trade',
  data() {
    return {
      height: 0,
      currentPage: 1,
      total: 60,
      dialogTxt: '',
      dialogStatus: 0, // 对话框状态；0为添加，1为修改
      dialogVisible: false,
      name: '', // 行业名称
      tradeData: [
        {
          id: 1,
          name: '银行',
          create_time: '2020-03-02 11:12:33'
        },
        {
          id: 2,
          name: '保险',
          create_time: '2020-03-02 11:13:33'
        },
        {
          id: 3,
          name: '礼品',
          create_time: '2020-03-02 11:14:33'
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    this.$nextTick(() => {
      this.height = document.body.clientHeight - 230
    })
  },
  methods: {
    // 获取行业列表
    async getList() {
      try {
        const res = await tradeList()
        if (res.code === 200) {
          this.tradeData = res.data.items
          this.total = res.total
        }
      } catch (e) {
        // TODO handle the exception
      }
    },

    // 添加
    add() {
      this.dialogStatus = 0
      this.dialogTxt = '添加'
      this.dialogVisible = true
    },

    // 修改
    handleEdit(index, row) {
      this.dialogStatus = 1
      this.dialogTxt = '修改'
      this.name = row.name
      this.dialogVisible = true
    },

    // 删除
    handleDelete(index, row) {

    },

    // 取消
    cancel() {
      this.name = ''
      this.dialogVisible = false
    },

    // 确定提交
    submit() {
      if (this.name) {
        if (this.dialogStatus === 0) {
          console.log('添加')
        } else {
          console.log('修改')
        }
        this.dialogVisible = false
        this.name = ''
      } else {
        this.$message({
          message: '行业名称不能为空！',
          type: 'warning'
        })
      }
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
    .trade {
        padding: 15px 0 0 15px;

        .btn-list {
            margin-bottom: 15px;
        }
    }
</style>
