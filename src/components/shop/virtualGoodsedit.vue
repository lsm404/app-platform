<template>
  <div class="border">
    <div class="shopEditHead">
      <!-- <span class="shopEditHeadtitle">
        商品编辑
      </span> -->
      <span class="inputside">产品名称：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">SPUID：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">成本价：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">市场价：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">会员价：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">库存：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">预警库存：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">充值价格：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">商品单位：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">充值价格：<el-input v-model="input" placeholder="请输入内容" class="input" /></span>
      <span class="inputside">卡供应商：
        <el-select v-model="value1" placeholder="请选择" class="select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select></span>
      <span class="inputside" style="margin-left:2.8%;">导入卡列表：

       <input type="file" value="上传">

      </span>
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
          <p>设置标签</p>
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
          v-if="this.mainImgList.length==0"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="1"
          :file-list="mainImgList"
          :on-success="upImgList"
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
          v-if="this.mainImgList.length==0"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="3"
          :file-list="lbimglist"
          :on-success="upImgList"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <span class="thumbnailTitle">图片建议大小为100px*100px.</span>
      </span>
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
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :show-file-list="false"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :file-list="shopimgList"
          :on-success="shop_imgList"
          :on-error="upimgerror"
          :on-exceed="upimgerror"
          multiple
        >
          <i class="el-icon-plus" />
        </el-upload>
        <!-- <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="shopimgList" alt="">
        </el-dialog> -->
        <span class="thumbnailTitle">图片建议大小为100px*100px.{{ shopimgList }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import EditorBar from '../../components/wangEnduit/wangeditor'
import { publick } from '../../utils/uttil'
export default {
  components: { EditorBar },
  data() {
    return {
      input: '',
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
      spiarr: [
        {
          spi1: '绿色',
          spi2: '220cm*200cm',
          sp3: ''
        }
      ],
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
      lbimglist: []
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
            sp3: ''
          })
        }

        if (this.sparr.length >= 2) {
          for (var b of this.sparr[1].spValue) {
            if (this.sparr.length == 2) {
              w.push({
                sp1: a,
                sp2: b,
                sp3: ''
              })
            }
            if (this.sparr.length >= 3) {
              for (var c of this.sparr[2].spValue) {
                if (this.sparr.length == 3) {
                  w.push({
                    sp1: a,
                    sp2: b,
                    sp3: c
                  })
                }
              }
            }
          }
        }
      }
      return w
    },
    control: function() {
      return this.sr.length / this.sparr[0].spValue.length
    }
  },
  created() {
    // publick.w(this)
    console.log(this.add(2, 2, 2))
  },
  methods: {
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
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
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
      console.log(this.sr, ' this.sr')
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
table, td, th
  {
  // border:1px solid #ccc;
  height: 30px;
  min-width: 100px;
  /deep/.el-input--small .el-input__inner{
    border: 0;
    text-align: center;
  }
  }
.border{
  width:100%;
  height:100%;
  border:1px solid #fff;
  // margin-left:5%;
  // margin-top:20px;
  overflow: hidden;
  padding-bottom:100px;
  margin-bottom:100px;
  .shopEditHead{
  width:100%;
  height:auto;

}
table{
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  td{
   text-align: center;
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
    margin-left:3%;
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
    min-width:220px;
    height:40px;
    line-height: 40px;
    text-align: left;
    margin-left: 2%;
    margin-top:1%;
    font-size:14px;
    .input{
      min-width:100px;
      max-width:130px;
      float: right;
    }
    .select{
      min-width:130px;
      float: right;
    }
  }
  .setLabel{
    width:94%;
    float: left;
    margin-top: -10px;
    // margin-left:3.5%;
    .labelItem{
      width:100%;
      min-height:90px;
      margin-top:30px;
      float: left;
      font-size:14px;
      margin-left: 0.8%;
      // border:1px solid #909399;
      .el-textarea{
        width:59%;
        margin-top: 10px;
      }
      .span{
        float: left;
        width:90%;
        // margin-left:5%;
        margin-top:10px;
        .labelInput{
          width: 66%;
          margin-top: 10px;
        }
        .delet{
           float: right;
        }
      }
    }
  }
}

</style>
