<template>
  <div class="type-four">
    <div class="upside flex-box">
      <div class="cube-box cube-one">
        <el-upload
          action="#"
          list-type="picture"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
      </div>
      <div class="cube-box cube-two">
        <i class="el-icon-plus" />
      </div>
    </div>
    <div class="underside flex-box">
      <div class="cube-box cube-three">
        <i class="el-icon-plus" />
      </div>
      <div class="cube-box cube-four">
        <i class="el-icon-plus" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeFour',
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.type-four {
  width: 355px;
  flex-wrap: wrap;

  .upside, .underside {
    justify-content: space-between;
  }

  .upside {
    margin-bottom: 5px;
  }

  .cube-box {
    width: 175px;
    height: 73px;
    line-height: 73px;
    text-align: center;
    background-color: #eeeeee;
    border: 2px dashed gainsboro;
  }
}
</style>
