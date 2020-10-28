<template>
  <div class="account-b1">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 按钮-->
      <div class="btn-list">
        <el-button type="primary" plain size="small" icon="el-icon-circle-plus-outline" @click="addAccount">添加</el-button>
        <el-button type="success" plain size="small" icon="el-icon-video-play">启用（开）</el-button>
        <el-button type="warning" plain size="small" icon="el-icon-video-pause">禁用（关）</el-button>
        <el-popconfirm
          title="确定删除选中的内容？"
          @onConfirm="multiDelete"
        >
          <el-button slot="reference" type="danger" plain size="small" style="margin-left: 10px" icon="el-icon-delete">删除</el-button>
        </el-popconfirm>
      </div>
      <!-- 按钮-->

      <el-tab-pane label="管理员角色" name="1">
        <!-- 表格数据-->
        <el-table
          ref="multipleTable"
          :data="b1Data"
          :border="true"
          tooltip-effect="dark"
          style="width: 100%"
          :max-height="height"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            fixed
            prop="role_name"
            label="角色名称"
            header-align="center"
            align="center"
            width="220"
          />
          <el-table-column
            prop="role_intro"
            label="昵称"
            header-align="center"
            align="center"
            width="220"
          />
          <el-table-column
            prop="create_time"
            label="创建时间"
            header-align="center"
            align="center"
            width="220"
          />
          <el-table-column
            label="状态"
            header-align="center"
            align="center"
            width="80"
          >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-text="开"
                inactive-text="关"
                inactive-color="#ff4949"
                active-color="#13ce66"
                @change="switchStatus(scope.$index, scope.row)"
              />
            </template>
          </el-table-column>
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
      <!-- 表格数据-->
      </el-tab-pane>
      <el-tab-pane label="系统管理员" name="2">
        <!-- 表格数据-->
        <el-table
          ref="multipleTable"
          :data="b1Data"
          :border="true"
          tooltip-effect="dark"
          style="width: 100%"
          :max-height="height"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            fixed
            prop="login_account"
            label="登录账号"
            header-align="center"
            align="center"
            width="130"
          />
          <el-table-column
            prop="nick_name"
            label="昵称"
            header-align="center"
            align="center"
            width="160"
          />
          <el-table-column
            prop="role_name"
            label="角色"
            header-align="center"
            align="center"
            width="120"
          />
          <el-table-column
            prop="mobile"
            label="手机"
            header-align="center"
            align="center"
            width="120"
          />
          <el-table-column
            prop="login_time"
            label="最后登录"
            header-align="center"
            align="center"
            width="150"
          />
          <el-table-column
            prop="last_login_ip"
            label="登录IP"
            header-align="center"
            align="center"
            width="120"
          />
          <el-table-column
            label="状态"
            header-align="center"
            align="center"
            width="80"
          >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-text="开"
                inactive-text="关"
                inactive-color="#ff4949"
                active-color="#13ce66"
                @change="switchStatus(scope.$index, scope.row)"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="intro"
            label="简介"
            header-align="center"
            align="center"
            width="150"
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
      <!-- 表格数据-->
      </el-tab-pane>

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
      <!-- 分页-->
    </el-tabs>
  </div>
</template>

<script>
// import Yqtswitch from '@/components/common/Yqtswitch'
import { b1userList } from '@/api/system'

export default {
  name: 'AccountB1',
  /* components: {
    Yqtswitch
  }, */
  data() {
    return {
      height: 0,
      activeName: '2',
      currentPage: 1,
      total: 0,
      b1Data: [{
        id: 123,
        login_account: 'yiqitong',
        nick_name: '壹企通',
        role_id: 113,
        role_name: '系统管理员',
        mobile: '18888888888',
        login_time: '2020-01-01 10:20',
        last_login_ip: '127.0.0.11',
        intro: '这是简介的期望多群无多群无',
        status: true
      }, {
        id: 123,
        login_account: 'yiqitong',
        nick_name: '壹企通',
        role_id: 113,
        role_name: '系统管理员',
        mobile: '18888888888',
        login_time: '2020-01-01 10:20',
        last_login_ip: '127.0.0.11',
        intro: '这是简介的期望多群无多群无',
        status: true
      }, {
        id: 123,
        login_account: 'yiqitong',
        nick_name: '壹企通',
        role_id: 113,
        role_name: '系统管理员',
        mobile: '18888888888',
        login_time: '2020-01-01 10:20',
        last_login_ip: '127.0.0.11',
        intro: '这是简介的期望多群无多群无',
        status: false
      }],
      /* b1Data: [
        {
          id: 123,
          role_id: 2,
          role_name: '系统管理员',
          role_intro: '普通管理员',
          create_time: '2020-02-21 21:32:33',
          status: true
        }
      ],  */
      multipleSelection: []
    }
  },
  created() {
    this.getb1List()
  },
  mounted() {
    this.$nextTick(() => {
      this.height = document.body.clientHeight - 280
    })
  },
  beforeRouteLeave(to, from, next) {
    if (this.infoStatus === 0) {
      to.meta.title = '新增B1管理员'
    } else {
      to.meta.title = '修改B1管理员'
    }
    next()
  },
  methods: {
    // 获取b1用户列表
    async getb1List() {
      try {
        const res = await b1userList()
        if (res.code === 200) {
          this.b1Data = res.data.items
          this.total = res.total
        }
      } catch (e) {
        // TODO handle the exception
      }
    },

    // 切换标签
    handleClick(tab) {
      const name = Number(tab.name)
      this.currentPage = 1
      if (name === 1) {
        this.b1Data = [
          {
            id: 123,
            role_id: 2,
            role_name: '系统管理员',
            role_intro: '普通管理员',
            create_time: '2020-02-21 21:32:33',
            status: true
          }
        ]
      } else {
        this.b1Data = [
          {
            id: 123,
            login_account: 'yiqitong',
            nick_name: '壹企通',
            role_id: 113,
            role_name: '系统管理员',
            mobile: '18888888888',
            login_time: '2020-01-01 10:20',
            last_login_ip: '127.0.0.11',
            intro: '这是简介的期望多群无多群无',
            status: true
          }, {
            id: 123,
            login_account: 'yiqitong',
            nick_name: '壹企通',
            role_id: 113,
            role_name: '系统管理员',
            mobile: '18888888888',
            login_time: '2020-01-01 10:20',
            last_login_ip: '127.0.0.11',
            intro: '这是简介的期望多群无多群无',
            status: true
          }, {
            id: 123,
            login_account: 'yiqitong',
            nick_name: '壹企通',
            role_id: 113,
            role_name: '系统管理员',
            mobile: '18888888888',
            login_time: '2020-01-01 10:20',
            last_login_ip: '127.0.0.11',
            intro: '这是简介的期望多群无多群无',
            status: false
          }
        ]
      }
    },

    // 修改
    handleEdit(index, row) {
      this.infoStatus = 1
      console.log(index, row)
      this.$router.push(`b1info/${row.id}`)
    },

    // 删除
    handleDelete(index, row) {
      console.log(index, row)
    },

    // 开关状态切换
    switchStatus(index, row) {
      console.log(row.status)
    },

    // 全选
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    // 多选删除
    multiDelete() {
      console.log('删除选中')
    },

    // 新增管理员
    addAccount() {
      this.infoStatus = 0
      this.$router.push('b1info/add')
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-b1 {
    padding: 10px 0 0 20px;

    .btn-list {
      margin-bottom: 15px;
    }
  }
</style>
