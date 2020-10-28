
export default [
  {
    url: '/b1order/order/passMsgSubmit',
    type: 'post',
    response: config => {
      return {
        code: 200
      }
    }
  },
  {
    url: '/b1order/order/afterSalesList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          'total': 1000, // 总条数
          'per_page':'10',
          'salelist': [{
            'id': 1306,
            'user_id': 960,
            'refund_sn': '2002037164141019200002',
            'create_time': 1597719821,
            'refund_money': '0.00', // 退还金额
            'refund_integral': '45950.00',
            'pay_order_id': 2733,
            'status': 7,
            'item_nums': 1,
            'reason': '\u552e\u540e',
            'operate_type': 1, // 类型
            'top_business_id': 1,
            'b2_business_id': 309,
            'is_refund_fee': 0,
            'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
            'property': '',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
            'price': '68.89', // 销售价
            'number': 1,
            'goods_sn':'124234235122',
            'source_type': 1,
            'user_mobile': '18757563157',
            'b2name': '\u6731\u7434\u5546\u57ce',
            'b3name': '\u6731\u7434\u79ef\u5206\u5546\u57ce',
            'fee': '20.00',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1'
          }, {
            'id': 13016,
            'user_id': 960,
            'refund_sn': '2002037164141019200002',
            'create_time': 1597719821,
            'refund_money': '0.00', // 退还金额
            'refund_integral': '45950.00',
            'pay_order_id': 2733,
            'status': 0,
            'item_nums': 1,
            'goods_sn':'124234235122',
            'reason': '\u552e\u540e',
            'operate_type': 2, // 类型
            'top_business_id': 1,
            'b2_business_id': 309,
            'is_refund_fee': 0,
            'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
            'property': '',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
            'price': '68.89', // 销售价
            'number': 1,
            'source_type': 1,
            'user_mobile': '18757563157',
            'b2name': '\u6731\u7434\u5546\u57ce',
            'b3name': '\u6731\u7434\u79ef\u5206\u5546\u57ce',
            'fee': '20.00',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1'
          }, {
            'id': 13306,
            'user_id': 960,
            'refund_sn': '2002037164141019200002',
            'create_time': 1597719821,
            'refund_money': '0.00', // 退还金额
            'refund_integral': '45950.00',
            'pay_order_id': 2733,
            'status': 2,
            'item_nums': 1,
            'goods_sn':'124234235122',
            'reason': '\u552e\u540e',
            'operate_type': 3, // 类型
            'top_business_id': 1,
            'b2_business_id': 309,
            'is_refund_fee': 0,
            'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
            'property': '',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
            'price': '68.89', // 销售价
            'number': 1,
            'source_type': 1,
            'user_mobile': '18757563157',
            'b2name': '\u6731\u7434\u5546\u57ce',
            'b3name': '\u6731\u7434\u79ef\u5206\u5546\u57ce',
            'fee': '20.00',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1'
          }, {
            'id': 13036,
            'user_id': 960,
            'refund_sn': '2002037164141019200002',
            'create_time': 1597719821,
            'refund_money': '0.00', // 退还金额
            'refund_integral': '45950.00',
            'pay_order_id': 2733,
            'status': 4,
            'goods_sn':'124234235122',
            'item_nums': 1,
            'reason': '\u552e\u540e',
            'operate_type': 2, // 类型
            'top_business_id': 1,
            'b2_business_id': 309,
            'is_refund_fee': 0,
            'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
            'property': '',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
            'price': '68.89', // 销售价
            'number': 1,
            'source_type': 1,
            'user_mobile': '18757563157',
            'b2name': '\u6731\u7434\u5546\u57ce',
            'b3name': '\u6731\u7434\u79ef\u5206\u5546\u57ce',
            'fee': '20.00',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1'
          }] }
      }
    }
  },
  {
    url: '/b1order/order/orderDetail',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          'b2_total_money': 20.010000000000001563194018672220408916473388671875,
          'b2_total_fee': '20.00',
          'b2_item_money': 0.01000000000000000020816681711721685132943093776702880859375,
          'b1_total_money': 10.0099999999999997868371792719699442386627197265625, // 订单总价
          'b1_total_fee': '10.00',
          'b1_expense_rule': '运费规则是运费规则是运费规则是运费规则是', // 新增字段运费规则
          'b1_item_money': 0.01000000000000000020816681711721685132943093776702880859375,
          'cost_price_sum': 0.01000000000000000020816681711721685132943093776702880859375,
          'b3_total_money': 0.01000000000000000020816681711721685132943093776702880859375,
          'b3_item_money': '0.01',
          'b3_total_fee': '0.00',
          'id': 2743,
          'business_id': 310,
          'p_business_id': 309,
          'order_id': ['5842'],
          'pay_order_sn': '2002103186086731101908', // 母单号
          'type': 1,
          'status': 1,
          'pay_code': '2002103186086731101908',
          'pay_way': '7', // 用户支付方式逻辑见备忘录
          'user_id': 954,
          'budget_group_id': 0,
          'user_address_id': 573,
          'remark': '商品很好商品很好商品很好商品很好商品很', // 用户评价
          'create_time': 1581318608, // 下单时间
          'pay_time': 1581318622, // 支付时间
          'order_amount': '0.01',
          'fee': '0.00',
          'store_fee': '20.00',
          'agency_fee': '10.00',
          'user_voucher_id': 0,
          'voucher_amount': '0.00',
          'marketing_id': 0,
          'reduce': '0.00',
          'total_amount': '0.01',
          'total_integral': '0.00',
          'total_wx': '0.01',
          'total_wallet': '0.00',
          'check_time': 0,
          'card_ticket_id': 0,
          'realname': '\u4e03\u5b9d', // 收货人
          'mobile': '18757563157', // 收货人手机号
          'province_id': 33,
          'city_id': 3301,
          'area_id': 330106,
          'street_id': 330106011,
          'address': '\u6d59\u6c5f\u7701 \u676d\u5dde\u5e02 \u897f\u6e56\u533a \u848b\u6751\u8857\u9053 \u4fdd\u5bc6', // 收获地址
          'explode_fee': '',
          'is_password': 0,
          'is_pass': 0,
          'recharge_account': '',
          'is_invoice_fee': 0,
          'fee_integral': '0.00',
          'fee_xj': '0.00',
          'integral_rate': '0.00',
          'nickname': '\u4e03\u5b9d',
          'heagurl': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-10\/1571382218308banner.png',
          'username': '18757563157',
          'order_item': [{
            'id': 5713,
            'order_id': 5842,
            'pay_order_id': 2743,
            'p_business_id': 309,
            'business_id': 310,
            'without_order_item_id': '',
            'item_id': 733201,
            'item_name': '下雨了下雨了下雨了，下雨了下雨了下雨了下雨了下雨了，下雨了下雨了下雨了下雨了下雨了，下雨了下雨了下雨乐乐乐乐乐乐额',
            'sn_time':'1597385038',
            'item_desc': '',
            'item_sn': '123123',
            'item_property_id': 2162,
            'property': '2.0\u7c73',
            'number': 1,
            'unit': '\u4e2a',
            'cost_price': '0.01', // 成本价
            'cost_freight': '0.01', // 成本运费
            'sup_price': '0.01', // 会员价
            'sup_freight': '0.01', // 会员运费
            'agency_price': '0.01', // 分销价
            'agency_freight': '0.01', // 分销运费
            'price': '0.01', // 商城价
            'mall_price': '0.03',
            'item_total_amount': '0.00',
            'item_total_voucher_amount': '0.00',
            'has_refund_amount': '0.00',
            'refund_item_num': 0,
            'express_fee': '0.00',
            'user_comment_id': 0,
            'user_vouchers_id': 0,
            'vouchers_amount': '0.00',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-11\/20191114153922_WechatIMG11.jpeg',
            'source_type': 1,
            'recharge_number': '0.00',
            'recharge_type': 0,
            'max_integral': '100.00',
            'order_status': 1,
            'top_business_id': 1,
            'express_company_name': '',
            'express_number': '',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1',
            'without_order_id': '', // 第三方子单号
            'c_without_order_id': null, // 第三方子单号
            'order_sn': '2002103186089354101908', // 子单号
            'reduce': '0.00',
            'limit_buy_item_id': 0,
            'group_buy_user_id': 0,
            'group_buy_list': [{
              'status': 3, // 1秒杀，2拼团，3满减，4优惠券
              'preferential_price': '-1.00'
            },
            {
              'status': 2, // 1秒杀，2拼团，3满减，4优惠券
              'preferential_price': '-0.10'
            },
            {
              'status': 4, // 1秒杀，2拼团，3满减，4优惠券
              'preferential_price': '-0.10'
            }
            ],
            'goods_sn': '7329482947104', // 商品编号
            'expname': '苏宁', // 供货方
            'logistics': '苏宁快递', // 物流公司
            'logistics_sn': '733429808112233164', // 物流单号
            'logistics_msg': [{
              'content': '已达到潍坊市，快递员准备送件',
              'time': '1581658725'
            },
            {
              'content': '济南运转中心，即将发往潍坊市',
              'time': '1581658725'
            },
            {
              'content': '已出库，准备发往西湖运转中心',
              'time': '1581658725'
            },
            {
              'content': '正在包装准备出库',
              'time': '1581658725'
            }
            ]
          }, {
            'id': 57113,
            'order_id': 5842,
            'pay_order_id': 2743,
            'p_business_id': 309,
            'business_id': 310,
            'without_order_item_id': '',
            'item_id': 733201,
            'item_name': 'zzj\u6d4b\u8bd5\u5546\u54c1',
            'sn_time':'1597385038',
            'item_desc': '',
            'item_sn': '123123',
            'item_property_id': 2162,
            'property': '2.0\u7c73',
            'number': 1,
            'unit': '\u4e2a',
            'cost_price': '0.01', // 成本价
            'cost_freight': '0.01', // 成本运费
            'sup_price': '0.01', // 会员价
            'sup_freight': '0.01', // 会员运费
            'agency_price': '0.01', // 分销价
            'agency_freight': '0.01', // 分销运费
            'price': '0.01', // 商城价
            'mall_price': '0.03',
            'item_total_amount': '0.00',
            'item_total_voucher_amount': '0.00',
            'has_refund_amount': '0.00',
            'refund_item_num': 0,
            'express_fee': '0.00',
            'user_comment_id': 0,
            'user_vouchers_id': 0,
            'vouchers_amount': '0.00',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-11\/20191114153922_WechatIMG11.jpeg',
            'source_type': 1,
            'recharge_number': '0.00',
            'recharge_type': 0,
            'max_integral': '100.00',
            'order_status': 1,
            'top_business_id': 1,
            'express_company_name': '',
            'express_number': '',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1',
            'without_order_id': '2002103186089354101908', // 第三方子单号
            'c_without_order_id': null, // 第三方子单号
            'order_sn': '2002103186089354101908', // 子单号
            'reduce': '0.00',
            'limit_buy_item_id': 0,
            'group_buy_user_id': 0,
            'group_buy_list': [{
              'status': 1, // 1秒杀，2拼团，3满减，4优惠券
              'preferential_price': '-5.00'
            }
            ],
            'goods_sn': '7329482947104', // 商品编号
            'expname': '苏宁', // 供货方
            'logistics': '苏宁快递', // 物流公司
            'logistics_sn': '73342980813164', // 物流单号
            'logistics_msg': [{
              'content': '已达到潍坊市，快递员准备送件',
              'time': '1581658725'
            },
            {
              'content': '已出库，准备发往西湖运转中心',
              'time': '1581658725'
            },
            {
              'content': '正在包装准备出库',
              'time': '1581658725'
            }
            ]
          }, {
            'id': 57123,
            'order_id': 5842,
            'pay_order_id': 2743,
            'p_business_id': 309,
            'business_id': 310,
            'without_order_item_id': '',
            'item_id': 733201,
            'item_name': 'zzj\u6d4b\u8bd5\u5546\u54c1',
            'item_desc': '',
            'sn_time':'1597385038',
            'item_sn': '123123',
            'item_property_id': 2162,
            'property': '2.0\u7c73',
            'number': 1,
            'unit': '\u4e2a',
            'cost_price': '0.01', // 成本价
            'cost_freight': '0.01', // 成本运费
            'sup_price': '0.01', // 会员价
            'sup_freight': '0.01', // 会员运费
            'agency_price': '0.01', // 分销价
            'agency_freight': '0.01', // 分销运费
            'price': '0.01', // 商城价
            'mall_price': '0.03',
            'item_total_amount': '0.00',
            'item_total_voucher_amount': '0.00',
            'has_refund_amount': '0.00',
            'refund_item_num': 0,
            'express_fee': '0.00',
            'user_comment_id': 0,
            'user_vouchers_id': 0,
            'vouchers_amount': '0.00',
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-11\/20191114153922_WechatIMG11.jpeg',
            'source_type': 1,
            'recharge_number': '0.00',
            'recharge_type': 0,
            'max_integral': '100.00',
            'order_status': 1,
            'top_business_id': 1,
            'express_company_name': '',
            'express_number': '',
            'source_type_name': 'B1\u81ea\u8425\u5546\u54c1',
            'without_order_id': '', // 第三方子单号
            'c_without_order_id': null, // 第三方子单号
            'order_sn': '2002103186089354101908', // 子单号
            'reduce': '0.00',
            'limit_buy_item_id': 0,
            'group_buy_user_id': 0,
            'group_buy_list': [{
              'status': 1, // 1秒杀，2拼团，3满减，4优惠券
              'preferential_price': '-5.00'
            },
            {
              'status': 2, // 1秒杀，2拼团，3满减，4优惠券
              'preferential_price': '-0.50'
            }
            ],
            'goods_sn': '7329482947104', // 商品编号
            'expname': '苏宁', // 供货方
            'logistics': '苏宁快递', // 物流公司
            'logistics_sn': '73342980813164', // 物流单号
            'logistics_msg': [{
              'content': '已达到潍坊市，快递员准备送件',
              'time': '1581658725'
            },
            {
              'content': '已出库，准备发往西湖运转中心',
              'time': '1581658725'
            },
            {
              'content': '正在包装准备出库',
              'time': '1581658725'
            }
            ]
          }],
          'ticket_card': '', // 用户支付方式如果为空判断pay_wa
          'total_money': 0.01000000000000000020816681711721685132943093776702880859375,
          'business': '\u6731\u7434\u5546\u57ce > \u6731\u7434\u73b0\u91d1\u5546\u57ce'// 来源商家
        }
      }
    }
  },
  {
    url: '/b1order/order/itemRefundDateil',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          'id': 1310,
          'operate_type': 1, // 售后类型
          'refund_sn': '2002267060771019080003',
          'user_id': 954,
          'pay_order_id': 2759,
          'order_id': 5878,
          'without_sheet_id': '',
          'reason_id': 1,
          'order_item_id': 5749,
          'item_nums': 1,
          'refund_money': '0.01',
          'refund_integral': '0.00',
          'reason': '1',
          'proof': ['http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2020-02\/15827060746641582706067395.jpg', 'http://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2019-10/1571997027267%E9%9D%A2%E9%83%A8%E6%8A%A4%E7%90%86.png', 'http://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2019-10/1571997027267%E9%9D%A2%E9%83%A8%E6%8A%A4%E7%90%86.png'],
          'express_company_id': 0,
          'express_number': '',
          'express_mobile': '',
          'return_express_company_id': 0,
          'return_express_number': '',
          'return_express_mobile': '',
          'refuse_reason': '',
          'status': 0,
          'create_time': 1583746232,
          'handle_time': 0,
          'admin_remark': '',
          'b2_business_id': 309,
          'b3_business_id': 310,
          'top_business_id': 1,
          'is_refund_fee': 0,
          'refund_cash': '0.00',
          'reason_content': '信息填写错误',
          'express_company': null,
          'return_express_company': null,
          'order_sn': '2002267060359378101908',
          'pay_order_sn': '2002267060356348101908',
          'order_item': {
            'id': 5749,
            'order_id': 5878,
            'pay_order_id': 2759,
            'p_business_id': 309,
            'business_id': 310,
            'without_order_item_id': '',
            'item_id': 733207,
            'item_name': '测试商品00001',
            'item_desc': '0.01',
            'item_sn': '123132',
            'item_property_id': 0,
            'property': '',
            'number': 1,
            'unit': '1',
            'cost_price': '0.01',
            'sup_price': '0.01',
            'agency_price': '0.01',
            'price': '0.01',
            'mall_price': '0.01',
            'item_total_amount': '0.00',
            'item_total_voucher_amount': '0.00',
            'has_refund_amount': '0.00',
            'refund_item_num': 0,
            'express_fee': '0.00',
            'user_comment_id': 0,
            'user_vouchers_id': 0,
            'vouchers_amount': 0,
            'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2020-02\/20200226135718_article.png',
            'source_type': 1,
            'recharge_number': '0.00',
            'recharge_type': 0,
            'max_integral': '100.00'
          },
          'orders': {
            'id': 5878,
            'type': 1,
            'pay_order_id': 2759,
            'business_id': 310,
            'p_business_id': 309,
            'top_business_id': 1,
            'pay_order_sn': '2002267060356348101908',
            'order_sn': '2002267060359378101908',
            'source_type': 1,
            'without_order_id': '',
            'pay_amount': '0.01',
            'total_amount': '0.01',
            'source': 1,
            'order_status': 1,
            'user_id': 954,
            'user_address_id': 573,
            'express_number': '',
            'express_fee': '0.00',
            'express_company_name': '',
            'express_no': '',
            'pay_code': '2002267060356348101908',
            'payway': '微信支付',
            'create_time': 1582706035,
            'close_time': 1582707835,
            'pay_time': 1582706044,
            'start_delivery_time': 0,
            'confirm_time': 0,
            'auto_confirm_time': 0,
            'user_remark': '',
            'isuse': 1,
            'is_end': 0,
            'last_search_time': 0,
            'merchant_remark': '',
            'realname': '七宝',
            'mobile': '18757563157',
            'province_id': 33,
            'city_id': 3301,
            'area_id': 330106,
            'street_id': 330106011,
            'address': '浙江省 杭州市 西湖区 蒋村街道 保密',
            'vouchers_amount': '0.00',
            'reduce': '0.00',
            'user_vouchers_id': 0,
            'integral': '0.00',
            'group_buy_open_id': 0,
            'group_buy_user_id': 0,
            'limit_buy_item_id': 0,
            'detail': '',
            'last_time': 0,
            'user_delete': 1,
            'refund_money': '0.00',
            'from_city_id': 0,
            'item_evaluate_id': 0,
            'express_code': '',
            'is_confirm': 0,
            'is_invoice': 0,
            'is_invoice_fee': 0,
            'c_without_order_id': null,
            'is_password': 0,
            'budget_group_id': 0,
            'kami': '',
            'b2_service_fee': '0.00',
            'b3_service_fee': '0.00',
            'is_invoice_server': 0,
            'vouchers_integral': '0.00',
            'reduce_integral': '0.00',
            'integral_pay_amount': '0.00',
            'is_recovery': 0,
            'B2Business': '朱琴商城',
            'B3Business': '朱琴现金商城'
          }
        }
      }
    }
  },
  {
    url: '/b1order/order/orderList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          'total': 1000, // 总条数
          'after_sales': 15,
          'per_page':10,
          orderlist: [
            {
              'id': 58234,
              'order_sn': '2002058785642015102222', // 订单编号
              'sup_price': '36927.31', // 订单总价,销售价
              'freight': '6.00',
              'user_mobile': '18953262923', // 用户账号
              'son_list': [
                {
                  'pay_order_id': 2736,
                  'operate_type': 1, // 售后类型
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'number': 1, // 数量
                  'goods_sn': '7329482947104', // 商品编号
                  'price': '18.00',
                  'order_son_sn': '20020587856420151066666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'logistics_sn': '733429808131132164', // 物流单号
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                },
                {
                  'pay_order_id': 2736,
                  'operate_type': 2, // 售后类型
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'number': 1, // 数量
                  'goods_sn': '7329482947104', // 商品编号
                  'price': '18.00',
                  'order_son_sn': '2002058785642015106666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'logistics_sn': '73342980813164', // 物流单号
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                }
              ]
            },
            {
              'id': 58234,
              'order_sn': '2002058785642015102222', // 订单编号
              'sup_price': '36927.31', // 订单总价,销售价
              'freight': '6.00',
              'user_mobile': '18953262923', // 用户账号
              'son_list': [
                {
                  'pay_order_id': 2736,
                  'operate_type': 2, // 售后类型
                  'number': 1, // 数量
                  'price': '18.00',
                  'goods_sn': '7329482947104', // 商品编号
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'order_son_sn': '20020587856420151066666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'logistics_sn': '73342980813164', // 物流单号
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                },
                {
                  'pay_order_id': 2736,
                  'operate_type': 1, // 售后类型
                  'number': 1, // 数量
                  'price': '18.00',
                  'goods_sn': '7329482947104', // 商品编号
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'order_son_sn': '2002058785642015106666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'logistics_sn': '73342980813164', // 物流单号
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                }
              ]
            },
            {
              'id': 58234,
              'order_sn': '2002058785642015102222', // 订单编号
              'sup_price': '36927.31', // 订单总价,销售价
              'freight': '6.00',
              'user_mobile': '18953262923', // 用户账号
              'son_list': [
                {
                  'pay_order_id': 2736,
                  'number': 1, // 数量
                  'operate_type': 1, // 售后类型
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'price': '18.00',
                  'goods_sn': '7329482947104', // 商品编号
                  'order_son_sn': '20020587856420151066666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'logistics_sn': '73342980813164', // 物流单号
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                }
              ]
            },
            {
              'id': 58234,
              'order_sn': '2002058785642015102222', // 订单编号
              'sup_price': '36927.31', // 订单总价,销售价
              'freight': '6.00',
              'user_mobile': '18953262923', // 用户账号
              'son_list': [
                {
                  'pay_order_id': 2736,
                  'operate_type': 1, // 售后类型
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'number': 1, // 数量
                  'price': '18.00',
                  'goods_sn': '7329482947104', // 商品编号
                  'order_son_sn': '20020587856420151066666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'logistics_sn': '73342980813164', // 物流单号
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                },
                {
                  'pay_order_id': 2736,
                  'number': 1, // 数量
                  'operate_type': 1, // 售后类型
                  'goods_sn': '7329482947104', // 商品编号
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'price': '18.00',
                  'order_son_sn': '20020587856420151066666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'logistics_sn': '73342980813164', // 物流单号
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                },
                {
                  'pay_order_id': 2736,
                  'operate_type': 1, // 售后类型
                  'number': 1, // 数量
                  'price': '18.00',
                  'goods_sn': '7329482947104', // 商品编号
                  'item_name': '\u8d6b\u66fc\u5fb7\u591a\u529f\u80fd\u526a\u5200HMD-6101',
                  'base_pic': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-08\/20190820105048_9W4A9328.png',
                  'order_son_sn': '2002058785642015106666', // 订单子编号
                  'express_company_name': '\u82cf\u5b81\u5feb\u9012', // 物流公司
                  'order_status': 0,
                  'create_time': 1580878564, // 下单时间时间戳格式
                  'logistics_sn': '73342980813164', // 物流单号
                  'source_type_name': '\u82cf\u5b81\u5546\u54c1', // 供货方
                  'order_status_name': '\u5f85\u652f\u4ed8', // 订单状态
                  'is_refund': '\u672a\u7533\u8bf7' // 维权状态
                }
              ]
            }
          ]
        }
      }
    }
  },
  {
    url: '/b1order/Order/getGoodsLable',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: [{
          'id': 12,
          'name': '品牌标签'
        }, {
          'id': 13,
          'name': '供应商标签'
        }, {
          'id': 14,
          'name': '搜索标签'
        }]
      }
    }
  },
  {
    url: '/b1order/Order/getTagOptions',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: [{
          'id': 31,
          'name': '金不换'
        }, {
          'id': 32,
          'name': '卓一生活'
        }, {
          'id': 33,
          'name': '有赞'
        }, {
          'id': 34,
          'name': '义务购'
        }, {
          'id': 39,
          'name': '苏宁'
        }, {
          'id': 40,
          'name': '京东'
        }]
      }
    }
  },
  {
    url: '/b1order/Order/getGoodsList',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: [
          {
            'id': 138,
            'class_id': 60,
            'sort_name': '办公耗材',
            'sort_img': '',
            'serial': 0,
            'isuse': 1,
            'created_time': '2019-12-31 23:59:59',
            'updated_time': '2019-12-31 23:59:59'
          }, {
            'id': 139,
            'class_id': 60,
            'sort_name': '家具',
            'sort_img': '',
            'serial': 0,
            'isuse': 1,
            'created_time': '2019-12-31 23:59:59',
            'updated_time': '2019-12-31 23:59:59'
          }
        ]
      }
    }
  },
  {
    url: '/b1order/Order/sortListForSel',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: [
          {
            'id': 15,
            'class_id': 60,
            'sort_name': '耗材',
            'sort_img': '',
            'serial': 0,
            'isuse': 1,
            'created_time': '2019-12-31 23:59:59',
            'updated_time': '2019-12-31 23:59:59'
          }, {
            'id': 17,
            'class_id': 60,
            'sort_name': '家具',
            'sort_img': '',
            'serial': 0,
            'isuse': 1,
            'created_time': '2019-12-31 23:59:59',
            'updated_time': '2019-12-31 23:59:59'
          }
        ]
      }
    }
  }, {
    url: '/b1order/Order/categoryListForSel',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: [
          {
            'id': 148,
            'class_id': 60,
            'sort_name': '办公耗材',
            'sort_img': '',
            'serial': 0,
            'isuse': 1,
            'created_time': '2019-12-31 23:59:59',
            'updated_time': '2019-12-31 23:59:59'
          }, {
            'id': 149,
            'class_id': 60,
            'sort_name': '家具',
            'sort_img': '',
            'serial': 0,
            'isuse': 1,
            'created_time': '2019-12-31 23:59:59',
            'updated_time': '2019-12-31 23:59:59'
          }
        ]
      }
    }
  },
  {
    url: '/b1order/order/getLogistics',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: [
          {
            'id': 100000,
            'code': 100000,
            'name': '自提'
          }, {
            'id': 1,
            'code': 'JH_001',
            'name': 'EMS'
          }, {
            'id': 2,
            'code': 'JH_002',
            'name': '圆通'
          }, {
            'id': 3,
            'code': 'JH_003',
            'name': '韵达'
          }, {
            'id': 4,
            'code': 'JH_004',
            'name': '天天快递'
          }, {
            'id': 5,
            'code': 'JH_005',
            'name': '申通'
          }, {
            'id': 6,
            'code': 'JH_006',
            'name': '中通'
          }, {
            'id': 7,
            'code': 'JH_007',
            'name': '宅急送'
          }, {
            'id': 8,
            'code': 'JH_008',
            'name': '快捷快递'
          }, {
            'id': 9,
            'code': 'JH_009',
            'name': '全峰快递'
          }, {
            'id': 10,
            'code': 'JH_010',
            'name': '国通快递'
          }, {
            'id': 11,
            'code': 'JH_011',
            'name': '德邦物流'
          }, {
            'id': 12,
            'code': 'JH_012',
            'name': '百世汇通'
          }, {
            'id': 13,
            'code': 'JH_013',
            'name': '优速快递'
          }, {
            'id': 14,
            'code': 'JH_014',
            'name': '顺丰'
          }, {
            'id': 15,
            'code': 'JH_015',
            'name': '中铁快运'
          }, {
            'id': 16,
            'code': 'JH_016',
            'name': '速尔'
          }, {
            'id': 17,
            'code': 'JH_017',
            'name': '如风达'
          }, {
            'id': 18,
            'code': 'JH_018',
            'name': '天地华宇'
          }
        ]
      }
    }
  },
  {
    url: '/b1order/order/itemRefundWithAgree',
    type: 'get',
    response: config => {
      return {
        code: 200,
        msg: '操作成功',
        data: {

        }
      }
    }
  }
]

