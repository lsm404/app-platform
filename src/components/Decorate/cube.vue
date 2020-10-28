/* eslint-disable vue/require-default-prop */
<template>
  <div class="cube">
    <div class="result hand">
      <component :is="cubeType" />
    </div>
    <div v-show="typeStatus" class="cube-content">
      <div class="cube-list flex-box">
        <div v-for="item in cubeList" :key="item.val" class="cube-type">
          <component :is="item.type" />
          <div class="radio-box">
            <el-radio
              v-model="typeRadio"
              :label="item.type"
              border
              size="small"
              @change="setType"
            >{{ item.name }}</el-radio>
          </div>
        </div>
      </div>
      <el-button type="primary" round size="medium">确定</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cube',
  components: {
    typeOne: () => import('../Cube/typeOne'),
    typeTwo: () => import('../Cube/typeTwo'),
    typeThree: () => import('../Cube/typeThree'),
    typeFour: () => import('../Cube/typeFour'),
    typeFive: () => import('../Cube/typeFive'),
    typeSix: () => import('../Cube/typeSix'),
    typeSeven: () => import('../Cube/typeSeven'),
    typeEight: () => import('../Cube/typeEight'),
    typeNine: () => import('../Cube/typeNine')
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    index: Number
  },
  data() {
    return {
      cubeType: 'typeFour',
      cubeList: [
        { type: 'typeFour', name: '二左二右' },
        { type: 'typeOne', name: '一行两个(1)' },
        { type: 'typeNine', name: '一行两个(2)' },
        { type: 'typeTwo', name: '一行三个' },
        { type: 'typeThree', name: '一左二右' },
        { type: 'typeFive', name: '一上二下' },
        { type: 'typeSix', name: '一左三右' },
        { type: 'typeSeven', name: '二左三右' },
        { type: 'typeEight', name: '一行一个' }
      ],
      typeRadio: 'typeFour',
      typeStatus: false
    }
  },
  computed: {
    ...mapGetters([
      'cubeIndex'
    ])
  },
  watch: {
    cubeIndex: function(newVal, oldVal) {
      if (newVal === this.index) {
        this.typeStatus = true
      } else {
        if (this.typeStatus) {
          this.typeStatus = false
        }
      }
    }
  },
  methods: {
    setType(val) {
      this.cubeType = val
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.cube {
  width: 100%;
  position: relative;

  .result {
    padding: 10px;
    position: relative;
  }

  .cube-content {
    position: absolute;
    width: 750px;
    height: 520px;
    padding: 10px;
    border: 2px dashed #eeeeee;
    overflow-y: auto;
    top: 0;
    left: 390px;
    text-align: center;

    .cube-list {
      justify-content: space-between;
      flex-wrap: wrap;

      .cube-type {

        .radio-box {
          margin: 10px 0 20px 0;
        }
      }
    }
  }
}
</style>
