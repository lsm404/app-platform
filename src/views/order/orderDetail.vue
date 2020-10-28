<template>
  <el-container>
    <el-backtop :bottom="60" :right="30" />
    <el-header>
      <el-row :gutter="20">
        <p class="order-title">订单信息</p>
        <el-col :span="8">
          <div class="order-content">母订单号：{{ data.pay_order_sn }} </div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">子订单总价：{{ data.business }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">支付时间：{{ formData(data.create_time) }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">子订单号： {{ formData(data.pay_time) }}</div>
        </el-col>
        <el-col :span="8">
          <div v-if="data.ticket_card" class="order-content">用户支付方式：{{ data.ticket_card }}</div>
          <div v-else class="order-content">用户支付方式：{{ getPatWa(data.pay_way,data.total_wx) }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">下单时间：{{ data.b1_total_money }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">来源商家：{{ data.b1_total_money }}</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <p class="order-title">收货信息</p>
        <el-col :span="8">
          <div class="order-content">收货人：{{ data.realname }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">收货地址：{{ data.address }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">用户备注：{{ data.address }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">收货人手机号：{{ data.mobile }}</div>
        </el-col>
        
        <el-col :span="8">
          <div class="order-content evaluate">用户评价:{{ data.remark }}</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <p class="order-title">价格运费信息</p>
        <el-col :span="8">
          <div class="order-content">商城价+运费：¥{{ data.b3_total_money }} ( ¥{{ data.b3_item_money }}+¥{{ data.b3_total_fee }} )</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">
            分销价+运费
            <el-popover
              placement="top-start"
              font-size="12px"
              trigger="hover"
              :content="data.b1_expense_rule"
            >
              <el-button slot="reference" class="el-button">
                <i class="el-icon-question" />
              </el-button>
            </el-popover>
            ：¥{{ data.b2_total_money }} ( ¥{{ data.b2_item_money }}+¥{{ data.b2_total_fee }} ) </div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">会员价+运费：¥{{ data.b1_total_money }} ( ¥{{ data.b1_item_money }}+¥{{ data.b1_total_fee }} )</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">成本价：{{ data.cost_price_sum }}</div>
        </el-col>
        <el-col :span="8">
          <div class="order-content">用户评价：{{ data.cost_price_sum }}</div>
        </el-col> 
      </el-row>
      <el-row :gutter="20">
        <p class="order-title">交易状态：{{ dealStatus(data.status) }}</p>
        <el-col :span="8">
          <div class="order-content">{{ dealStatus(data.status) }}</div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table
        :data="data.order_item"
        style="width: 100%"
        border
        stripe
      >
        <el-table-column label="商品详情" min-width="240" >
          <template slot-scope="props">
            <div class="goods_box">
              <img :src="props.row.base_pic" class="base_pic">
              <div class="detaile-content">
                <p class="item_name">
                  {{ props.row.item_name }}
                </p>
                <p style="font-size:12px">SKU ID:{{ props.row.goods_sn }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="子单号"
          prop="order_sn"
          min-width="196"
        />
        <el-table-column label="三方单号" min-width="196">
          <template slot-scope="props">
            <span>{{ props.row.without_order_id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="三方子单号" min-width="196">
          <template slot-scope="props">
            <span>{{ props.row.source_type === 4?props.row.c_without_order_id:props.row.without_order_item_id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="数量"
          prop="number"
        />
        <el-table-column label="商品价格" min-width="200">
          <template slot-scope="props">
            <p>成本价：{{ props.row.cost_price }}+{{ props.row.cost_freight }}</p>
            <p>会员价：{{ props.row.sup_price }}+{{ props.row.sup_price }}</p>
            <p>分销价：{{ props.row.agency_price }}+{{ props.row.agency_price }}</p>
            <p>商城价：</p>
            
          </template>
        </el-table-column>
        <el-table-column label="优惠活动" min-width="150">
          <template slot-scope="props">
            <div v-for="(item,index) in props.row.group_buy_list" :key="index">
              <p style="font-size:13px">{{ getPreferential(item.status)+item.preferential_price+'元' }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          :formatter="orderStatus"
        />
      </el-table>
    </el-main>
  </el-container>

</template>

<script>

import { orderDetail } from '@/api/order'

export default {
  data() {
    return {
      data: {},
      list: []
    }
  },
  created() {
    this.getDatail()
  },
  methods: {
    async getDatail() {
      const id = this.$route.query
      const res = await orderDetail(id)
      if (res.code === 200) {
        const data = res.data || {}
        this.data = data
        this.list = data.order_item
        data.order_item.map(item => {
          item.logistics_msg[0].color = '#f40'
        })
      }
    },
    dealStatus(s) {
      let status = ''
      switch (s) {
        case 0:status = '未支付'
          break
        case 1:status = '已支付'
          break
        default:status = '已关闭'
      }
      return status
    },
    orderStatus(row) {
      const s = row.status
      let status = ''
      switch (s) {
        case 0:status = '未支付'
          break
        case 1:status = '待发货'
          break
        case 2:status = '待收货'
          break
        case 3:status = '待评价'
          break
        case 4:status = '已取消'
          break
        case 5:status = '已评价'
          break
        default:status = '已关闭'
      }
      return status
    },
    getDiscounts(row) {
      const y = row.vouchers_amount
      const r = row.reduce
      if (y > 0) {
        return `优惠${y}元`
      }
      if (r > 0) {
        return `满减${r}元`
      }
    },
    getPreferential(s) {
      let status = ''
      switch (s) {
        case 1:status = '秒杀活动:'
          break
        case 2:status = '拼团活动:'
          break
        case 3:status = '满减活动:'
          break
        case 4:status = '优惠券:'
          break
        default:status = ''
      }
      return status
    },
    // 支付方式
    getPatWa(pay, wx) {
      let pay_way = ''
      if (wx > 0 && (pay == 2 || pay == 3)) {
        pay_way = '混合支付'
      } else {
        switch (pay) {
          case '1':pay_way = '微信支付'
            break
          case '2':pay_way = '余额支付'
            break
          case '3':pay_way = '积分支付'
            break
          case '4':pay_way = '卡券兑换'
            break
          case '5':pay_way = '预付卡支付'
            break
          case '7':pay_way = '工银支付'
            break
        }
      }
      return pay_way
    },
    // 不足10数字前加0
    timeJudge(t) {
      if (t < 10) {
        return '0' + t
      } else {
        return t
      }
    },
    // 时间戳转日期格式
    formData(t) {
      const time = new Date(t * 1000)
      const year = time.getFullYear()
      const month = time.getMonth()
      const date = time.getDate()
      const hour = time.getHours()
      const minute = time.getMinutes()
      const second = time.getSeconds()
      return year + '-' + this.timeJudge(month) + '-' + this.timeJudge(date) + ' ' + this.timeJudge(hour) + ':' + this.timeJudge(minute) + ':' + this.timeJudge(second)
    }
  }
}
</script>

<style lang="scss" scoped>
    /deep/ .el-timeline{
        font-size: 12px;
        padding: 10px 0 0 10px;
        .el-timeline-item{
          padding-bottom: 10px;
        }
        .el-timeline-item__timestamp.is-bottom{
          font-size: 12px;
        }
        .el-divider--horizontal{
          margin: 6px 0 12px 0;
        }
        .el-timeline-item__node--normal{
          left: 0px;
          width: 10px;
          height: 10px;
        }
      }

    /deep/ .el-table {
         margin-bottom: 0;
    }
    /deep/ .el-table th{
      font-size: 15px;
      height: 50px;
      color: #666;
    }
    /deep/ .el-table td{
      font-size: 14px;
    }
    /deep/ .el-popover{
        font-size: 12px !important;
        max-width: 300px;
      }
      /deep/ .el-header{
          height: 100% !important;
          margin: 20px;
          padding: 10px 0px;
        .el-button{
          border: none;
          padding: 0;
        }
        .remark{
          display: block;
          max-width: 280px;
          max-height: 46px;
          overflow: hidden;
        }
        .evaluate{
          display: -webkit-box;
          -webkit-line-clamp:2;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          line-height: 18px;
          padding: 0 !important;
          margin-bottom: 10px;
        }
        .order-title{
          height: 30px;
          line-height: 30px;   
          background: #F8F8F8;
          font-size: 15px;
          color: #3c3c3c;
          padding-left: 10px;
          margin-bottom: 20px;
        }
        .order-content{
          font-size: 12px;
          color: #999;
          padding-bottom: 15px;
        }

        .el-row {
          margin: 0 !important;

          .el-col-8 {
            min-width: 250px;
          }
        }
      }
      /deep/ .el-main{
        margin: 0 20px 20px;
        padding: 0; 
        .btn-detail{
          color:#f40;
          margin-top: -4px;
        }
        .demo-table-expand label {
          width: 90px;
          color: #99a9bf;
        }
        .demo-table-expand .el-form-item {
          margin-right: 0;
          margin-bottom: 0;
          width: 100%;
          text-align: left;
        }
         .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label{
          line-height: 24px;
          font-size: 13px;
        }
        .goods_box{
          display: flex;
          align-items: center;
          .base_pic{
            width: 58px;
            height: 68px;
          }
          .detaile-content{
            min-width: 160px;
            padding-left: 4px;
            line-height: 18px;
            text-align: left;
            font-size: 12px;
            p{
              width: 100%;
            }
          }
        }
      }
      .item_name{
          font-size: 12px;
          line-height: 18px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
      }
      .detaile-name{
        display: -webkit-box;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      .package-box{
        ul{
          padding: 20px 0 10px 0;
          li{
            font-size: 13px;
            line-height: 20px;
          }
        }
        .package-left{
            width: 100%;
            line-height: 18px;
            font-size: 12px;
            display: flex;
            align-items: center;
            flex-wrap:wrap;
            -webkit-flex-wrap: wrap;
            justify-content: center;
            background: #f5f7fa;
            padding: 20px;
            .package-base_pic{
              width:50px;
              height:60px;
            }
            .logistics-detail{
              margin-left: -10px;
              padding-right: 20px;
              p{
                width: 100%;
              }
            }
        }
      }
</style>
