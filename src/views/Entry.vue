<template>
  <!-- 登陆和注册的入口页面 -->
  <div class="entry" :style="{backgroundImage:'url('+bg+')'}">
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      bg: ""
    };
  },
  props: [],
  components: {},
  methods: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    let random = parseInt(Math.random() * 1000);
    if (random % 2) {
      this.bg = require("@/assets/images/bg2.jpg");
    } else {
      this.bg = require("@/assets/images/bg3.jpg");
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {}
};
</script>
<style scoped lang="scss">
.entry {
  background: #fff no-repeat fixed top;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #333;
  .box {
    position: absolute;
    top: 36%;
    right: 10%;
    width: 320px;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
}
</style>