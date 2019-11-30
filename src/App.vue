<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // 挂载组件路由
  components: {},
  // 存放父组件向子组件传过来的数据
  props: {},
  // 存放组件中的数据/带返回值的函数
  data () {
    return {}
  },
  // 计算属性/类似于购物车数据变动时
  computed: {},
  // 自动监听data里面的数据
  watch: {
  },
  // 组件加载时,执行里面的逻辑
  created () {},
  // 存放方法/存放实现哪些功能
  methods: {}
}
</script>

<style scoped></style>
