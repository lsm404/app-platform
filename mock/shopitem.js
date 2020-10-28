import Mock from 'mockjs'
const shopitem = {
  'total': 3,
  'per_page': '20',
  'current_page': '1',
  'last_page': 1,
  'data': [{
    'id': 18,
    'name': 'p',
    'icon': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-12\/20191219144026_icon_avatar_92%E5%A4%8D%E5%88%B6%403x.png?x-oss-process=style%2Fw_120_h_auto',
    'item_count': 48,
    'on_show': 0,
    'created_at': '2019-12-19 10:56:51'
  }, {
    'id': 4,
    'name': '圣诞新品',
    'icon': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-12\/20191218170222_0a3346a137977e13e4c4bcf6f3fc24d3.jpg?x-oss-process=style%2Fw_120_h_auto',
    'item_count': 1,
    'on_show': 1,
    'created_at': '2019-12-17 13:21:35'
  }, {
    'id': 3,
    'name': '年货',
    'icon': 'http:\/\/yiqitong.oss-cn-hangzhou.aliyuncs.com\/Uploads\/image\/2019-12\/20191218170305_0a6ce2f174861e0fdc7fe4b3ac5ac690.jpg?x-oss-process=style%2Fw_120_h_auto',
    'item_count': 83,
    'on_show': 1,
    'created_at': '2019-12-17 10:57:57'
  }],
  'count': 3,
  'code': 0
}
export default [
  {
    url: '/shop/shopitem',
    type: 'get',
    response: (res) => {
      const items = shopitem
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
