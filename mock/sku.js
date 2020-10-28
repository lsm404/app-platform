import Mock from 'mockjs'
const sku = {
  'total': 62,
  'per_page': '20',
  'current_page': '1',
  'last_page': 4,
  'data': [
    {
      'id': 123,
      'name': 'FF',
      'sort': 0,
      'create_time': '2019-12-19 15:32:38',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 102,
      'name': '运动达人',
      'sort': 0,
      'create_time': '2019-08-22 09:42:49',
      'update_time': 1574305555,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 100,
      'name': '豪华文具套装',
      'sort': 0,
      'create_time': '2019-08-21 09:53:03',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 98,
      'name': '文体',
      'sort': 0,
      'create_time': '2019-08-21 09:29:34',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 97,
      'name': '被子',
      'sort': 0,
      'create_time': '2019-08-21 09:20:41',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 96,
      'name': '床单四件套',
      'sort': 0,
      'create_time': '2019-08-21 09:12:59',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 95,
      'name': '超真空保温壶',
      'sort': 0,
      'create_time': '2019-08-20 19:48:28',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 94,
      'name': '家纺',
      'sort': 0,
      'create_time': '2019-08-20 19:33:01',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 93,
      'name': '真空保温杯',
      'sort': 0,
      'create_time': '2019-08-20 19:32:48',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 92,
      'name': '超真空保温杯',
      'sort': 0,
      'create_time': '2019-08-20 19:24:49',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 91,
      'name': '超真空保温杯',
      'sort': 0,
      'create_time': '2019-08-20 19:12:36',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 90,
      'name': '格兰菲帝套装',
      'sort': 0,
      'create_time': '2019-08-20 19:00:47',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 89,
      'name': '圣彼德天丝乳胶被',
      'sort': 0,
      'create_time': '2019-08-20 18:40:14',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 88,
      'name': '雅蔓雷天丝乳胶被',
      'sort': 0,
      'create_time': '2019-08-20 18:29:22',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 87,
      'name': '超真空保温杯',
      'sort': 0,
      'create_time': '2019-08-20 18:25:43',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 86,
      'name': '超真空保温杯',
      'sort': 0,
      'create_time': '2019-08-20 18:16:14',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 85,
      'name': '儿童水壶',
      'sort': 0,
      'create_time': '2019-08-20 18:04:09',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 84,
      'name': '芙若拉舒芯被',
      'sort': 0,
      'create_time': '2019-08-20 18:03:43',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 83,
      'name': '文体',
      'sort': 0,
      'create_time': '2019-08-20 17:47:27',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }, {
      'id': 82,
      'name': '儿童水壶',
      'sort': 0,
      'create_time': '2019-08-20 17:44:13',
      'update_time': null,
      'status': 1,
      'delete_time': null,
      'business_id': 1
    }
  ],
  'count': 62,
  'code': 0
}
export default [
  {
    url: '/shop/skulist',
    type: 'get',
    response: (res) => {
      const items = sku
      return {
        code: 200,
        data: {
          // total: items.length,
          items: items
        }
      }
    }
  }
]
