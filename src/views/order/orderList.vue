<template>
  <div class="orderlist">
    <el-backtop :bottom="80" :right="10" />
        <div class="service-box">
          <el-input placeholder="请输入" v-model="input[0]" class="input-with-select">
            <el-select v-model="value[0]" slot="prepend" class="all-order-select" @change="searchList(value)">
              <el-option
                v-for="item in options.order"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-input>
        </div>
        <div class="service-box">
          <el-input placeholder="请输入" v-model="input[2]" class="input-with-select">
            <el-select v-model="value[1]" slot="prepend" class="all-order-select" @change="searchList(value)">
               <el-option
                v-for="item in options.information"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-input>
        </div>
        <div class="service-box">
          <span>下单时间：</span>
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
        </div>
        <div class="service-box select-box">
          <div class="content-box">
            <span>供应商：</span>
            <el-select v-model="query_data.order_status" class="all-order-select-service" @change="searchList(value)">
              <el-option
                v-for="item in options.order_list_status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="service-box select-box">
          <div class="content-box">
            <span>订单状态：</span>
            <el-select v-model="query_data.order_status" class="all-order-select-service" @change="searchList(value)">
              <el-option
                v-for="item in options.order_list_status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
    <!-- 订单详情 -->
    <DetailFiexd :list-detail="listDetail" />
    <el-pagination
      class="paging"
      :current-page="1"
      :page-sizes="[10,20,30]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="order.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { orderList, exportOrder } from '@/api/order'
import DetailFiexd from './component/DetailFiexd'
// import AfterList from './AfterList'

export default {
  components: {
    DetailFiexd,
    // AfterList
  },
  inject: ['reload'],
  data() {
    return {
      options: {
        order_status: [
          {
            value: '1',
            label: '订单状态'
          }, {
            value: '2',
            label: '待审核'
          }, {
            value: '3',
            label: '取消申请'
          }, {
            value: '4',
            label: '通过'
          }, {
            value: '5',
            label: '不通过'
          }, {
            value: '6',
            label: '待复审'
          }, {
            value: '7',
            label: '复审拒绝'
          }, {
            value: '8',
            label: '售后完成'
          }],
        order_list_status: [
          {
            value: '1',
            label: '待支付'
          }, {
            value: '2',
            label: '待发货'
          }, {
            value: '3',
            label: '待收货'
          }, {
            value: '4',
            label: '待评价'
          }, {
            value: '5',
            label: '已取消'
          }, {
            value: '6',
            label: '已评价'
          }, {
            value: '7',
            label: '已关闭'
          }, {
            value: '8',
            label: '已关闭'
          }
        ],
        order_type: [{
          value: '1',
          label: '订单类型'
        }, {
          value: '2',
          label: '仅退款'
        }, {
          value: '3',
          label: '退款退货'
        }, {
          value: '4',
          label: '换货'
        }, {
          value: '5',
          label: '补货'
        }],
        order: [{
          value: '1',
          label: '订单单号查询'
        }, {
          value: '2',
          label: '订单母单号'
        }],
        information: [{
          value: '2',
          label: '订单信息查询'
        }, {
          value: '3',
          label: '商品编号'
        }, {
          value: '4',
          label: '收货人'
        }, {
          value: '5',
          label: '收货手机'
        }, {
          value: '6',
          label: '会员手机'
        }
        ],
        order_source: [{
          value: '2',
          label: '服务商'
        }, {
          value: '3',
          label: '站点'
        }],
        service: [{
          value: '1',
          label: '请选择'
        }, {
          value: '2',
          label: '是'
        }, {
          value: '3',
          label: '否'
        }],
        goods_source: [{
          value: '1',
          label: '请选择'
        }, {
          value: '2',
          label: 'B1自营商品'
        }, {
          value: '3',
          label: 'B2自营商品'
        }, {
          value: '4',
          label: '京东商品'
        }, {
          value: '5',
          label: '苏宁商品'
        }, {
          value: '6',
          label: '虚拟商品'
        }, {
          value: '7',
          label: '全球美妆商品'
        }
        ]
      },
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
      time: '',
      value: ['1', '2', null, '1', '', '1', '1'],
      input: [],
      query_data: {
        order_word: '',
        jd_order_word: '', // 输入订单京东查询内容
        order_msg: '', // 输入订单信息查询
        order_source: '', // 输入订单来源查询
        sel_type: '', // 根据订单号
        sel_order_info: '', // 根据订单信息
        sel_order_from: '', // 根据来源
        sel_order_status: '', // 是否售后
        sel_source_type: '', // 商品来源
        order_status: '',
        goods_id1: '',
        goods_id2: '',
        goods_id3: '',
        start_time: '',
        end_time: '',
        after_sale_id: '',
        after_sale_id1: ''
      },
      order: {},
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
    }
  },
  watch: {
    $route: {
      handler(newRouter) {
        const status = newRouter.query.status
        console.log(status,'status')
        if (status == 1) {
          this.service_page = true
          console.log('1')
        } else {
        }
      },
      immediate: true
    }
  },
  created() {
    this.orderlist()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, 'tab')
      tab.index == '1' ? this.service_page = true : this.service_page = false
      this.$router.push({
        name: '订单列表',
        query: {
          status: tab.index
        }
      })
    },
    async orderlist() {
      const res = await orderList()
      if (res.code === 200) {
        this.order = res.data
      }
    },
    handleSizeChange(val) {
      this.pageSize = val
      const params = {
        pageSize: val,
        current_page: this.current_page
      }
      this.deleteList(params)
    },
    handleCurrentChange(val) {
      this.current_page = val
      const params = {
        current_page: val,
        pageSize: this.pageSize
      }
      this.deleteList(params)
    },
    // 获取时间
    timeData(t) {
      this.query_data.start_time = new Date(t[0]).getTime()
      this.query_data.end_time = new Date(t[1]).getTime()
    },
    // 获取选项
    searchList(val) {
      // 部分字段调整需与后端确认
      // sel_type=1   //根据订单查询
      // keyword=11 //输入订单号的内容
      // jd_order_no=22//输入京东订单号的内容
      // sel_order_info=2 //根据订单信息
      // item_sn=33 //订单信息内容
      // sel_order_from=2 //订单来源
      // b3_name=44//来源内容
      // sel_order_status=1//是否售后
      // tag_group_id=3 //商品标签
      // tag_id=6 //那个标签
      // start_time=2020-02-20+00%3A00%3A00 //开始时间
      // end_time= //结束时间
      // sel_class=61 //商品以及分类id
      // sel_sort=139 //商品分类id
      // sel_category=128//商品分类id
      // sel_source_type=5//商品来源
      this.query_data.sel_type = val[0] // 根据订单号
      this.query_data.sel_order_info = val[1]// 根据订单信息
      this.query_data.sel_order_from = val[2]// 根据来源
      this.query_data.sel_order_status = val[3]// 是否售后
      this.query_data.sel_source_type = val[4]// 商品来源
    },
    // 查询
    getSearch() {
      orderList(this.query_data)
    },
    // 重置
    resetList() {
      this.reload()
    },
    // 导出
    async exportExcel() {
      const res = await exportOrder(this.query_data)
      if (res.code === 200) {
        this.$message('这是一条消息提示')
      } else {
        this.$message('这是一条消息提示')
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.orderlist{
  font-size: 12px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  .paging{
    position: fixed;
    bottom: 0;
    right: 40px;
    background: #fff;
    width: 100%;
    height: 50px;
    text-align: right;
    z-index: 999;
    padding: 10px;
  }
  .time{
    margin-left:4px;
    width: 251px !important;
  }
  /deep/ .el-date-editor .el-range-separator{
    padding: 0;
    margin: 0 10px;
  }
  .el-badge{
    top: -3px;
  }
  .el-badge__content.is-fixed{
    top: 10px;
    right: 0px;
  }
  .el-tabs__item{
      font-size: 15px;
      height: 46px;
      line-height: 46px;
  }
  .all-order-select{
      width: 120px;
    }
  .import{
      width: 153px;
      margin-left: 10px;
  }
  .service-box{
    width: 320px;
    margin:15px 20px 0 0;
    display: inline-flex;
    align-items: center;
    .all-order-select-service{
      width: 90px;
    }
    .content-box{
      width: 50%;
      // display: inline-block;
    }
  }
  .select-box {
    width: 200px;

    .content-box {
      width: 100%;

      .all-order-select-service {
        width: 130px;
      }
    }
  }
  .button-sty{
    text-align: left;
    padding: 30px 10px 10px 20px;
  }
  .reset{
    background: #a7afbd;
    border: 1px solid #a7afbd;
    color: #fff;
  }
  .export-excel{
    background: #C0C4CC;
    border: 1px solid #C0C4CC;
  }
}
</style>
