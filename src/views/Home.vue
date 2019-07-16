<template>
  <!-- 有头部脚部侧边栏主页 -->
  <!-- 注：对于 “非keep-alive” 生成的子组件路由，无法监听 -->
  <div>
    <v-top></v-top>
    <v-header></v-header>
    <keep-alive exclude="">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import Top from "../components/top/Top";
import Header from "../components/header/Header";
export default {
  name: "home",
  data() {
    return {};
  },
  props: [],
  components: {
    "v-top": Top,
    "v-header": Header
  },
  methods: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {
    "$route.path": function(to, from) {
      //只能在父组件中监听到路由变化，子组件监听不到变化
    }
  }
};
</script>

<style scoped lang="scss">
</style>