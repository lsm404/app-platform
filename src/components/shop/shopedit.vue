<template>
  <div class="border">
    <div class="shopEditHead">
      <!-- <span class="shopEditHeadtitle">
        商品编辑
      </span> -->
      <span class="inputside">产品名称<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">SPUID<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">商品单位<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">成本价<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">会员价<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">库存<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">预警库存<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">商品单位<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">分类名称<el-select v-model="value1" placeholder="请选择" class="select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select></span>
    </div>
    <div class="setLabel">
      <p class="labelItem">
        <span class="textarea">
          <p>商品描述</p>
          <el-input
            v-model="textarea"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </span>
      </p>
    </div>
    <div class="setLabel">
      <p class="labelItem">
        <span class="span">
          <p>标签组</p>
          <el-cascader
            ref="cas"
            :options="options"
            :props="props"
            class="labelInput"
            @change="a"
          />
          <!-- <el-button type="danger" class="delet">删除</el-button> -->
        </span>
      </p>
    </div>
    <div class="thumbnail">
      <span class="thumbnailImg">
        <span class="imguploadtitle">商品主图</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="1"
          :file-list="mainImgList"
          :on-success="upImgList"
           v-if="this.mainImgList.length==0"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <span class="thumbnailTitle">图片建议大小为100px*100px.</span>
      </span>
      <span class="thumbnailImg">
        <span class="imguploadtitle">商品轮播图</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="3"
          :file-list="lbimglist"
          :on-success="upImgList"
           v-if="this.mainImgList.length==0"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <span class="thumbnailTitle">图片建议大小为100px*100px.</span>
      </span>
    </div>
    <div class="thumbnail">
      <p class="labelItem" /><p>
        商品规格
      </p>
      <div v-for="(item,index) in sparr" :key="index">
        <span class="span">
          规则名
          <!-- {{ item }} -->
        </span>
        <el-input v-model="item.name" class="spname" placeholder="请输入内容" />
        <!-- <span class="addspan" @click="setmain(item,index)">设置为主规格</span> -->
        <el-radio v-model="radiolabel"  :label="index" @change="setmain(item,index)">设置为主规格</el-radio>
        <p>
          <span v-for="(value,key) in item.spValue" :key="key" class="spanspi">
            规则值
            <el-input v-model="item.spValue[key]" class="spname" placeholder="请输入内容" />
          </span>
          <span class="addspan" @click="addspi(item.spValue)">添加规格值</span>
        </p>

      </div>

      <!-- <p v-for="(value,index) in item.spValue" :key="index">
        <span class="span">
          规则值
          {{value}}
        </span>
        <el-input v-model="item.name" class="spname" placeholder="请输入内容" />
      </p> -->
      <el-button type="primary" style="margin-top:10px;" @click="addsparr">添加规格项目</el-button>
    </div>
    <div class="thumbnail" v-if="this.sparr[0].name">
      <p v-if="this.sparr[0].name">规格明细</p>
      <table>
        <tr class="tableHead">
          <th>图片</th>
          <th v-for="name in sparr" v-if="name.name" :key="name.name">{{ name.name }}</th>
          <th v-if="this.sparr[0].name">成本价<span>*</span></th>
          <th v-if="this.sparr[0].name">会员价</th>
          <th v-if="this.sparr[0].name">市场价</th>
          <th v-if="this.sparr[0].name">库存</th>
          <th v-if="this.sparr[0].name">库存预警</th>
          <th v-if="this.sparr[0].name">SKU ID</th>
        </tr>
        <tr v-for="(item,index) in sr" v-if="item.sp1" :key="index">
          <td v-if="index%control==0" :rowspan="control">
              <el-upload
              :class="{hide:hideUpload}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :file-list="item.value.img"
                :limit="1"
                >
                <i class="el-icon-plus"></i>
              </el-upload>
          </td>
          <td v-if="index%control==0" :rowspan="control">{{ item.sp1 }}</td>
          <!-- <td v-if="item.sp1">{{ item.sp1 }}</td> -->
          <td v-if="item.sp2">{{ item.sp2 }}</td>
          <td v-if="item.sp3">{{ item.sp3 }}</td>
          <td><el-input id="tableinput" v-model="input" placeholder="请输入内容" /></td>
          <td><el-input v-model="input" placeholder="请输入内容" /></td>
          <td><el-input v-model="input" placeholder="请输入内容" /></td>
          <td><el-input v-model="input" placeholder="请输入内容" /></td>
          <td><el-input v-model="input" placeholder="请输入内容" /></td>
          <td><el-input v-model="input" placeholder="请输入内容" /></td>
        </tr>
      </table>
    </div>
    <!-- <div class="thumbnail">
      <editor-bar v-model="detail" :is-clear="isClear" @change="change" />
    </div> -->

    <div class="thumbnail">
      <span class="thumbnailTitle" @click="w()">商品详情</span>
      <span class="thumbnailImg">
        <span>
          <img>
        </span>
       <div class="detailsImg">
         <draggable :list="lbimglist" :move="onMove" @change="change" @start="start"  @end="end">

                <img v-for="(item,index) in lbimglist" :key="index" :src="item">


         </draggable>
       </div>
        <!-- <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="shop_imgList"
            :on-exchange="changeimglist"
            multiple
            >
            <i class="el-icon-plus"></i>
          </el-upload> -->
         <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="shop_imgList"
            :on-exchange="changeimglist"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>


         <!-- <el-dialog >
            <img width="100%" :src="dialogImageUrl" alt="">
            {{ssss}}
          </el-dialog> -->
          <div>

          </div>
          <span class="thumbnailTitle">图片建议大小为100px*100px.{{dialogImageUrl}}</span>
      </span>
    </div>
  </div>
</template>
<script>
import EditorBar from '../../components/wangEnduit/wangeditor'
import { publick } from '../../utils/uttil'
import draggable from 'vuedraggable'
export default {
  components: { EditorBar ,draggable},
  data() {
    return {
      input: '',
      radiolabel:0,
      isClear: false,
      detail: '<div><p><img src="http://image.suning.cn/uimg/sop/commodity/124753827314281306411578_x.jpg" alt="" _src="http://image.suning.cn/uimg/sop/commodity/124753827314281306411578_x.jpg"><img src="http://image.suning.cn/uimg/sop/commodity/128397176315624483652711_x.jpg" alt="" _src="http://image.suning.cn/uimg/sop/commodity/128397176315624483652711_x.jpg"><img src="https://image.suning.cn/uimg/sop/commodity/206961597474960624939739_x.jpg" alt="" _src="https://image.suning.cn/uimg/sop/commodity/206961597474960624939739_x.jpg"></p></div>',
      props: { multiple: true },
      textarea: '',
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }],
      value1: '',
      sparr: [
        {
          name: '',
          spValue: ['']
        }
      ],
      // spigoods:[
      //   {
      //     name: '',
      //     spValue: ['']
      //   }
      // ],
      s: [
        {
          name: '颜色',
          spValue: ['红', '黄', '蓝']
        },
        {
          name: '尺寸',
          spValue: ['100*100', '100*200', '100*300', '100*400']
        },
        {
          name: '材质',
          spValue: ['丝绸', '棉麻', '涤纶']
        }
      ],
      dialogImageUrl: '',
      dialogVisible: false,
      shopimgList: [],
      mainImgList: [],
      lbimglist: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596620581107&di=f34b7312e5b96167978f6b59f5a4adfd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1310%2F28%2Fc0%2F28040084_1382924258703.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596620905177&di=139bceec8908771891eff6af5675529c&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140630%2F0034034984517471_b.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1724754635,3816185957&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596620965490&di=554945fd6a36f41af3411ffee76828ef&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201804%2F17%2Fa89dce2ce3.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596620996231&di=52a364e9dca59986eecbea669eee2866&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201610%2F27%2F20161027133054_XRUFk.png',
      ],
      hideUpload:true, //上传按钮隐藏
    }
  },
  computed: {
    sr: function() {
      const w = []
      for (var a of this.sparr[0].spValue) {
        if (this.sparr.length == 1) {
          w.push({
            sp1: a,
            sp2: '',
            sp3: '',
            value:{
              img:[{url:'http://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2019-10/20191018172011_%E5%BD%A9%E5%A6%86%E6%8A%A4%E8%82%A4(1080x356).png'}]
            }
          })
        }

        if (this.sparr.length >= 2) {
          for (var b of this.sparr[1].spValue) {
            if (this.sparr.length == 2) {
              w.push({
                sp1: a,
                sp2: b,
                sp3: '',
                value:{
                 img:[{url:'http://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2019-10/20191018172011_%E5%BD%A9%E5%A6%86%E6%8A%A4%E8%82%A4(1080x356).png'}]
                }
              })
            }
            if (this.sparr.length >= 3) {
              for (var c of this.sparr[2].spValue) {
                if (this.sparr.length == 3) {
                  w.push({
                    sp1: a,
                    sp2: b,
                    sp3: c,
                    value:{
                     img:[{url:'http://yiqitong.oss-cn-hangzhou.aliyuncs.com/Uploads/image/2019-10/20191018172011_%E5%BD%A9%E5%A6%86%E6%8A%A4%E8%82%A4(1080x356).png'}]
                    }
                  })
                }
              }
            }
          }
        }
      }
      console.log(w,'ss')
      return w
    },
    control: function() {
      return this.sr.length / this.sparr[0].spValue.length
    },
    spigoods:function(){
      return this.sparr.slice(0)
    }
  },
  created() {
    // publick.w(this)
    console.log(this.add(2, 2, 2))
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      // const relatedElement = relatedContext.item;
      // const draggedElement = draggedContext.item;
      console.log(relatedContext,"relatedContext")
      console.log(draggedContext,"draggedContext")
    },
    change(event){
        console.log(event,"change")
    },
    start(event){
        console.log(event,"start")
    },
    end(event){
        console.log(event,"end")
    },
    changeimglist(file,filelist){
      console.log(file,"changefile")
      console.log(filelist,"change")
    },
    upimgerror(err, file, fileList) {
      this.$message.error(err)
      console.log(file, 'file')
      console.log(fileList, 'fileList')
    },
    upImgList(response, file, fileList) {
      console.log(response, 'response')
      console.log(file, 'file')
      console.log(fileList, 'fileList')
    },
    shop_imgList(response, file, fileList) {
      console.log(response, 'response')
      console.log(file, 'file')
      console.log(fileList, 'fileList')
      console.log(this.shopimgList,'shopimgList')
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 2) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    setmain(sp, index) {
      this.sparr.splice(index, 1)
      this.sparr.unshift(sp)
      this.radiolabel=0
      console.log(this.spigoods,"......",index, ' this.sr')
    },
    addsparr() {
      if (this.sparr.length >= 3) {
        this.$message.error('规格最多可添加三条')
        return
      }
      this.sparr.push({
        'name': '',
        'spValue': ['']
      })
      // this.spigoods=this.sparr.slice(0);
      console.log(this.sparr)
    },
    addspi(a) {
      a.push('')
    },
    add(...values) {
      let sum = 0
      console.log(values)
      for (var val of values) {
        sum += val
      }
      return sum
    },
    change(va) {
      console.log(va)
    },
    // a(value, q) {
    //   value.map(item => {
    //     console.log(item.length)
    //     console.log(item[item.length - 1])
    //   })
    //   console.log(this.$refs.cas.getCheckedNodes()[0].pathLabels)
    //   console.log(this.$refs.cas.getCheckedNodes()[0])
    // },
    w() {
      return publick.w(this)
    },
    a(value, q) {
      return publick.a(value, q, this)
    }
  }
}
</script>
<style lang="scss" scoped>
 /deep/.hide .el-upload--picture-card {
    display: none;
}
table
  {
  border-collapse:collapse;
  background: #F8F8F8;
   table-layout: fixed;
  tr{
    width:94%;
    margin-left: 3%;
    background:#fff;
  }
  td{
    height:30px;
    border: 1px solid #f2f2f2;
    text-align: center;
    padding:5px;
  }
  .tableHead{
    width:100%;
    height:50px;
    background: #F8F8F8;
  }
  /deep/.el-input--mini .el-input__inner{
    width:110px;
    border: 1px solid #C0C4CC;
  }
  }
  .addspan{
    margin-top:10px;
    color:#8CA0D1;
    font-weight:400;
  }
table, td, th
  {
  // border:1px solid #ccc;
  // height: 30px;
  min-width: 100px;
  .el-input--small .el-input__inner{
    border: 0;
    text-align: center;
  }
  /deep/.el-upload-list--picture-card .el-upload-list__item{
    width:60px;
    height:60px;
  }
  /deep/.el-icon-plus{
    float: left;
    margin-top: 16px !important;
    margin-left:16px;
  }
  /deep/.el-upload--picture-card{
    width: 60px;
    height: 60px;
  }
  img{
    width:50px;
    height:50px;
  }
  }
.border{
  width:100%;
  height:100%;
  // border:1px solid #fff;
  // margin-left:5%;
  // margin-top:20px;
  overflow: hidden;
  padding-bottom:100px;
  margin-bottom:100px;
  .shopEditHead{
  width:100%;
  height:auto;

   }
   .detailsImg{
     width:100%;
     height: auto;
     div{
       width: 100%;
        img{
       width: 100px;
       height: 100px;
       display: block;
       float: left;
       margin-right: 20px;
     }
     }

   }
.spname{
  width: 13%;
  min-width:150px;
  margin-left:8px;
  margin-top: 10px;
}
  .textarea{
    height:300px;
  }
  .imguploadtitle{
    font-size: 15px;
    color: #333;
    margin-bottom: 20px;
    display: block;
  }
  .thumbnail{                //缩略图
    width: 94%;
    height:auto;
    // min-height:400px;
    padding-bottom: 20px;
    font-size:14px;
    // border: 1px solid #4386F4;
    float: left;
    overflow: hidden;
    .thumbnailTitle{
      float: left;
      width:100%;
      text-align: left;
      height:30px;
      line-height:30px;
      margin-bottom: 10px;
    }
    .thumbnailImg{
      float: left;
      width:auto;
      height:auto;
      margin-right: 20px;
      // margin-bottom: 30px;
      .img{
        width:100px;
        height:100px;
        float: left;
        margin-right:20px;
        margin-top:5px;
      }
      .thumbnailTitle{
        font-size:12px;
        color:#a4a4a4;
      }
    }
  }

  .shopEditHeadtitle{
  width:94%;
  margin-left:3%;
  height:40px;
  // margin-top: 20px;
  line-height:40px;
  float: left;
   span{
    width:5px;
    height:30px;
    background:#4386F4;
    float: left;
    margin-right:20px;
    margin-top: 5px;
  }
  }
   .inputside{
    float: left;
    width:195px;
    height:40px;
    line-height: 40px;
    text-align: left;
    margin-right: 2%;
    margin-top:1%;
    font-size:14px;
    .input{
      min-width:100px;
      max-width:130px;
      float: right;
    }
    .select{
      width:130px;
      float: right;
    }
  }
  .setLabel{
    width:94%;
    float: left;
    // min-height:200px;
    // border:3px solid #304155;
    .labelItem{
      width:100%;
      min-height:90px;
      margin-top:30px;
      float: left;
      font-size:14px;
      // border:1px solid #909399;
      .el-textarea{
        width:59%;
        margin-top: 20px;
      }
      .span{
        float: left;
        width:90%;
        // margin-left:5%;
        // margin-top:2%;
        color:#333333;
        .labelInput{
          width: 66%;
          margin-top: 20px;
        }
        .delet{
           float: right;
        }
      }
    }
  }
}

</style>
