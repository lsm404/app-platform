<template>
  <div class="shopping-info">
    <div class="info-detail">
      <div class="detail-img">
        <img :src="shoppingInfo.img" alt="">
      </div>
      <div class="detail-dec">
        <p>商品名称：{{shoppingInfo.item_name}}</p>
        <p>商品名称：{{shoppingInfo.item_name}}</p>
        <p>商品名称：{{shoppingInfo.item_name}}</p>
        <p>商品名称：{{shoppingInfo.item_name}}</p>
        <p>商品名称：{{shoppingInfo.item_name}}</p>
      </div>
    </div>
    <div class="info-txt">
      <p>商品描述：{{shoppingInfo.item_name}}</p>
    </div>
    <div class="info-banner">
      <p class="banner-txt">商品轮播图：</p>
      <div class="banner-img">
        <img v-for="(item, index) in shoppingInfo.bannerImg" :key="index" :src="item" alt="">
      </div>
    </div>
    <div class="info-dec">
      <p class="dec-txt">----商品介绍----</p>
      <div class="dec-img">
        <img v-for="(item, index) in shoppingInfo.bannerImg" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingInfo',
  data() {
    return {
      shoppingInfo: {
        img: 'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
        item_name: '是大家看法上的家乐福',
        bannerImg: [
          'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e',
          'http://imgservice3.suning.cn/uimg1/b2c/image/FkNLx1KmZsT2uF5ooqoZPw.jpg_400w_400h_4e'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .shopping-info {
    margin: 0 20px;

    .info-detail {
      overflow: hidden;

      .detail-img {
        float: left;
        img {
          width: 200px;
          height: 200px;
          border: 1px solid #ccc;
        }
      }

      .detail-dec {
        float: left;
        margin-left: 20px;

        p {
          margin-top: 20px
        }
      }
    }

    .info-txt {
      margin-top: 15px;
    }

    .info-banner {

      .banner-txt {
        margin: 15px 0;
      }
      
      .banner-img {
        img {
          width: 100px;
          height: 100px;
          margin-right: 10px;
          border: 1px solid #ccc;
        }
      }
    }

    .info-dec {
      
      .dec-txt {
        width: 100%;
        text-align: center;
        margin: 15px 0;
      }

      .dec-img {
      }
    }
  }
</style>