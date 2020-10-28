<template>
  <div class="add-shopping">
      <el-form :inline="true" :model="add_shop" class="demo-form-inline" label-position="left">
        <div class="info">
          <el-form-item label="商品名称：">
            <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品编号：">
            <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="供应商：">
            <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品单价：">
            <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品分类：">
            <el-select v-model="add_shop.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="库存：">
              <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="会员价：">
              <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="市场价：">
              <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商城价：">
              <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="供货价：">
              <el-input v-model="add_shop.item_name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
        </div>
        <div class="desc">
          <el-form-item label="商品描述：">
            <el-input type="textarea" v-model="add_shop.desc"></el-input>
          </el-form-item>
        </div>
        <div class="upload">
          <el-form-item label="商品主图：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
              <div class="el-upload__tip" slot="tip">图片建议大小800px*800px</div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item class="carousel" label="商品轮播：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :limit="3"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
              <div class="el-upload__tip" slot="tip">图片建议大小800px*800px</div>
            </el-upload>
          </el-form-item>
          <div>
            <el-form-item class="carousel dec" label="商品详情：">
              <div class="img-dec">
                <p class="dec-txt">注：支持批量上传，点击可查看大图</p>
              </div>
              <div class="carouse-layout">
                <div class="uploadIcon">
                  <el-upload
                    :show-file-list="false"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    drag
                    list-type="picture-card"
                    :on-success="handlePictureSuccess"
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">支持png/jpg/jpeg格式</div>
                    <div class="el-upload__text top">单张图片不超4M</div>
                    <div class="el-upload__text bottom">拖拽图片可调整排序</div>
                  </el-upload>
                </div>
                <draggable
                  v-model="productForm.productPicList"
                  class="list-group"
                  tag="ul"
                  v-bind="dragOptions"
                  @start="productForm.drag = true"
                  @end="productForm.drag = false"
                >
                  <div v-for="(item,index) in productForm.productPicList" :key="index" v-loading="productForm.loadingapp" class="listitem" @mouseenter="showDelBtn(index)" @mouseleave="hiddenDelBtn">
                    <img v-if="item" :src="item" class="imgSty">
                    <div class="img-active" :class="{'active': index === productForm.currentDelBtn}">
                      <div class="img-btn">
                        <i v-show="index === productForm.currentDelBtn" class="el-icon-zoom-in delIcon" @click="handlePicture(item)"></i>
                        <i v-show="index === productForm.currentDelBtn" class="el-icon-delete delIcon" @click="deleImg(item,index)" />
                      </div>
                    </div>
                  </div>
                </draggable>
              </div> 
            </el-form-item>
          </div>
        </div>
        <div class="shop-btn">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </div>
      </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'addShopping',
  data() {
    return {
      add_shop: {
        item_name: '',
        desc: '',
        imageUrl: '',
        picture_card: []
      },
      dialogImageUrl: '',
      dialogVisible: false,
      productForm: {
        productPicList: [],
        currentDelBtn: -1,
        loadingapp: false,
        drag: false
      }
    }
  },
  components: {
    draggable
  },
  computed: {//这一部分直接拿过来用的
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit')
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlePicture(url) {
      this.dialogImageUrl = url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    },
    handleRemove() {
      console.log('handleRemove')
    },
    //  显示删除图片的图标
    showDelBtn(index) {
      this.productForm.currentDelBtn = index
    },
    //  隐藏删除图片的图标
    hiddenDelBtn() {
      this.productForm.currentDelBtn = -1
    },
    // 删除图片
    deleImg(data, index) {
      this.productForm.productPicList.splice(index, 1)
      this.productForm.currentDelBtn = -1
    },
    handlePictureSuccess(response, file, fileList) {
      console.log(file)
      const isJPG = file.raw.type === 'image/jpeg';
      const isJPG2 = file.raw.type === 'image/jpg';
      const isPNG = file.raw.type === 'image/png';
      // const isGIF = file.raw.type === 'image/gif';
      // const isLt5M = file.raw.size / 1024 < 100;
      // const isSize = this.imgSize(file)
      if (!isJPG && !isJPG2 && !isPNG && !isGIF) {
        this.$message.warning('只支持jpg或png或jpeg图片');
        return
      }
      // if (!isLt5M) {
      //   this.$message.warning('商品图片须小于100K!');
      //   return
      // }

      // if (this.productForm.productPicList.length >= 5) {
      //   this.$message.warning(`当前限制选择 5 张图片`);
      //   return
      // }
      this.productForm.productPicList.push(file.url)
      console.log('123', this.productForm.productPicList)
    },
    handleUploadHttpRequest() {
      console.log('handleUploadHttpRequest')
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-shopping {
    margin: 20px 0 0 20px;
     width: calc(100% - 50px);
     min-width: 450px;

    /deep/ .el-form {
      
      .info {
        max-width: 1400px;

        .el-form-item {

          .el-form-item__content {
            width: 178px;
          }

          .el-form-item__label {
            width: 83px;
          }
        }
      }

      .desc {
        width: 500px;

        .el-form-item {
          .el-form-item__content {
            width: 476px;
            height: 153px;

            .el-textarea {
              height: 100%;
              .el-textarea__inner {
                height: 100%;
              }
            }
          }
        }
      }

      .upload {

        .el-upload__text {
          width: 100%;
          position: absolute;
          top: 22px;
          // left: 50%;
          // margin-left: -75px;
          font-size: 12px;
          color: #BBBBBB;
          text-align: center;
          white-space:pre-wrap;
        }
        
        .top {
          top: 37px;
        }

        .bottom {
          top: 52px;
        }

        .el-upload-dragger {
          width: 200px;
          height: 200px
        }
        .el-form-item__label {
          width: 100%;
          text-align: left;
        }

        .dec {
          width: 100%;

          .img-dec {
            font-size: 14px;
            height: 62px;
            line-height: 62px;
            color: #C0C4CC;
            margin: 0 18px 16px;
            border-bottom: 1px solid #F2F2F2;

            .dec-txt {
              padding-left: 17px;
            }
          }
          
          .el-form-item__content {
            width: 100%;
            background: #FBFBFB;
          }
          .carouse-layout {
            display: flex;
            justify-content: flex-start;
            margin: 0 0 50px 50px;

            .uploadIcon {
              width: 200px;
              height: 200px;
              margin-right: 15px;

              .el-upload--picture-card {
                border: none;
              }
            }

            .list-group {
              display: flex;
              flex-wrap: wrap;
              width: calc(100% - 220px);

              .listitem {
                width: 200px;
                height: 200px;
                margin: 0 15px 15px 0;
                display: inline-block;
                position: relative;
                overflow: hidden;
                
                .imgSty {
                  width: 200px;
                  height: 220px;
                  position: absolute;
                  left: 0;
                  top: 0;
                }

                @keyframes animate{
                  from {
                    height: 0px;
                    top : -200px;
                    opacity: 0;
                  }
                  to {
                    height: 200px;
                    top : 0px;
                    opacity: 1;
                  }
                }

                .imgSty{
                  animation: animate 1s ease-in;
                }

                .img-active{
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                  cursor: default;
                  text-align: center;
                  color: #fff;
                  opacity: 0;
                  font-size: 20px;
                  background-color: rgba(0,0,0,0);
                  transition: opacity 0.5s;
                  
            
                  .img-btn {
                    width: 50px;
                    height: 30px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-left: -25px;
                    margin-top: -15px;

                    .delIcon {
                      color: #fff;
                    }
                  }
                }

                .active{
                  opacity: 1;
                  background-color: rgba(0,0,0, 0.5);
                }
              }
            }
          }
        }

        .carousel {

          .el-form-item__content {
            width: 100%;
          }

          // .carouse-layout {
          //   display: flex;
          //   flex-wrap: wrap;

          //   .uploadIcon {
          //     width: 200px;
          //     height: 200px;
          //     margin-right: 15px;
          //   }

          //   .list-group {

          //     .listitem {
          //       width: 200px;
          //       height: 200px;
          //       margin-right: 15px;
          //       display: inline-block;
          //       position: relative;
          //       overflow: hidden;
                
          //       .imgSty {
          //         width: 200px;
          //         height: 200px;
          //         position: absolute;
          //         left: 0;
          //         top: 0;
          //       }

          //       @keyframes animate{
          //         from {
          //           height: 0px;
          //           top : -200px;
          //           opacity: 0;
          //         }
          //         to {
          //           height: 200px;
          //           top : 0px;
          //           opacity: 1;
          //         }
          //       }

          //       .imgSty{
          //         animation: animate 1s ease-in;
          //       }

          //       .img-active{
          //         position: absolute;
          //         width: 100%;
          //         height: 100%;
          //         left: 0;
          //         top: 0;
          //         cursor: default;
          //         text-align: center;
          //         color: #fff;
          //         opacity: 0;
          //         font-size: 20px;
          //         background-color: rgba(0,0,0,0);
          //         transition: opacity 0.5s;
                  
            
          //         .img-btn {
          //           width: 50px;
          //           height: 30px;
          //           position: absolute;
          //           top: 50%;
          //           left: 50%;
          //           margin-left: -25px;
          //           margin-top: -15px;

          //           .delIcon {
          //             color: #fff;
          //           }
          //         }
          //       }

          //       .active{
          //         opacity: 1;
          //         background-color: rgba(0,0,0, 0.5);
          //       }
          //     }
          //   }
          // }
        }

      }

      .shop-btn {
        width: 100%;
        text-align: right;
      }
    }
  }
</style>