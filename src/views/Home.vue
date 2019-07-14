<template>
  <!-- 有头部脚部侧边栏主页 -->
  <div>
    <v-top></v-top>
    <v-header></v-header>
    <keep-alive>
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
  watch: {}
};
</script>

<style scoped lang="scss">
</style>