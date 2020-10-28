<template>
  <div class="account-b2">
    <!-- 搜索内容-->
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="登录账号">
          <el-input v-model="formInline.login_account" placeholder="登录账号" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="formInline.nick_name" placeholder="昵称" />
        </el-form-item>
        <el-form-item label="服务商名称">
          <el-input v-model="formInline.business_name" placeholder="服务商名称" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.mobile" placeholder="手机号" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 搜索内容-->

    <!-- 按钮-->
    <div class="btn-list">
      <el-button type="primary" plain size="small" icon="el-icon-circle-plus-outline" @click="addAccount">添加</el-button>
      <el-button type="success" plain size="small" icon="el-icon-video-play">启用（开）</el-button>
      <el-button type="warning" plain size="small" icon="el-icon-video-pause">禁用（关）</el-button>
    </div>

    <!-- 表格数据-->
    <el-table
      ref="multipleTable"
      :data="b2Data"
      :border="true"
      tooltip-effect="dark"
      style="width: 100%"
      :max-height="height"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="39"
      />
      <el-table-column
        fixed
        prop="login_account"
        label="登录账号"
        header-align="center"
        align="center"
        width="150"
      />
      <el-table-column
        prop="nick_name"
        label="昵称"
        header-align="center"
        align="center"
        width="150"
      />
      <el-table-column
        prop="role_name"
        label="角色"
        header-align="center"
        align="center"
        width="120"
      />
      <el-table-column
        prop="business.name"
        label="服务商名称"
        header-align="center"
        align="center"
        width="200"
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
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="switchStatus(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        header-align="center"
        align="center"
        min-width="180"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            plain
            @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="primary"
            plain
            @click="handleEdit(scope.$index, scope.row)"
          >一键登录</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格数据-->

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

  </div>
</template>

<script>
import { b2userList } from '@/api/system'

export default {
  name: 'AccountB2',
  data() {
    return {
      height: 0,
      infoStatus: 0, // 将要去的管理员信息页的状态值；0为去新增管理员、1为去修改管理员
      multipleSelection: [],
      currentPage: 1,
      total: 0,
      formInline: {
        login_account: '',
        nick_name: '',
        business_name: '',
        mobile: ''
      },
      b2Data: [{
        id: 223,
        login_account: 'yiqitong',
        nick_name: '壹企通',
        role_id: 2,
        role_name: '系统管理员',
        business: {
          id: 231,
          name: '金不换'
        },
        mobile: '16688886666',
        login_time: '2020-01-01 10:20',
        last_login_ip: '127.0.0.11',
        status: true
      }, {
        id: 223,
        login_account: 'yiqitong',
        nick_name: '壹企通',
        role_id: 2,
        role_name: '系统管理员',
        business: {
          id: 231,
          name: '金不换'
        },
        mobile: '16688886666',
        login_time: '2020-01-01 10:20',
        last_login_ip: '127.0.0.11',
        status: true
      }, {
        id: 223,
        login_account: 'yiqitong',
        nick_name: '壹企通',
        role_id: 2,
        role_name: '系统管理员',
        business: {
          id: 231,
          name: '金不换'
        },
        mobile: '16688886666',
        login_time: '2020-01-01 10:20',
        last_login_ip: '127.0.0.11',
        status: false
      }]
    }
  },
  created() {
    this.getb2List()
  },
  mounted() {
    this.$nextTick(() => {
      this.height = document.body.clientHeight - 315
    })
  },
  beforeRouteLeave(to, from, next) {
    if (this.infoStatus === 0) {
      to.meta.title = '新增B2管理员'
    } else {
      to.meta.title = '修改B2管理员'
    }
    next()
  },
  methods: {
    // 获取b2用户列表
    async getb2List() {
      try {
        const res = await b2userList()
        if (res.code === 200) {
          this.b2Data = res.data.items
          this.total = res.total
        }
      } catch (e) {
        // TODO handle the exception
      }
    },

    // 全选
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    // 修改
    handleEdit(index, row) {
      this.infoStatus = 1
      this.$router.push(`b2info/${row.id}`)
      console.log(index, row)
    },

    // 开关状态切换
    switchStatus(index, row) {
      console.log(row.status)
    },

    // 查询
    onSubmit() {

    },

    // 新增B2管理员
    addAccount() {
      this.infoStatus = 0
      this.$router.push('b2info/add')
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
  .account-b2 {
    .search {
      padding: 20px 20px 0 20px;
      margin-bottom: 15px;
      border: 1px solid #cccccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    .btn-list {
      margin: 20px 0;
    }
  }
</style>
