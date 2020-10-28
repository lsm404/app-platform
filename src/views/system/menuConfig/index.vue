<template>
 <div class="menuconfig">
     <div class="custom-tree-container">
        <div class="block">
              <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>
                    <el-button
                      type="text"
                      size="mini"
                      @click="() => append(data)">
                      Append
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click="() => remove(node, data)">
                      Delete
                    </el-button>
                  </span>
                </span>
              </el-tree>
      </div>
</div>
 </div>
</template>
<script>
let id = 0;
export default {
  name: 'AccountB2',
  data() {
    return {
      data : [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }]
    }
  },
  created() {
    // this.getb2List()
  },
  mounted() {
    this.$nextTick(() => {
      this.height = document.body.clientHeight - 315
    })
  },
  beforeRouteLeave(to, from, next) {
    if (this.infoStatus === 0) {
      to.meta.title = '新增B2管理员'
    } else {
      to.meta.title = '修改B2管理员'
    }
    next()
  },
  methods: {
     append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }
    }
  }
</script>
<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
