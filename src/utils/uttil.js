var publicCom = {
  a() {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.tableH = document.documentElement.clientHeight
    //     that.tableH = window.tableH
    //   })()
    // }     //写在mounted 动态获取设备高度
    //
    // tableH(val) {
    //   if (!this.timer) {
    //     this.tableH = val
    //     this.timer = true
    //     const that = this
    //     setTimeout(function() {
    //       that.timer = false
    //       console.log(this.tableH)
    //     }, 400)
    //   }
    // }  //写在watch里，监听tableh 自定义高度变化
    //
    //
    // tableH: window.innerHeight * 0.7 //写在data里，自定义可视化区域高度
  }
}
class pub {
  w=(a) => {
    alert(a.isClear)
  }
  a(value, q, that) {
    const _this = that
    value.map(item => {
      console.log(item.length)
      console.log(item[item.length - 1])
    })
    console.log(_this.$refs.cas.getCheckedNodes()[0].pathLabels)
    console.log(_this.$refs.cas.getCheckedNodes()[0])
  }
}
const publick = new pub()
export {
  publicCom, publick
}
