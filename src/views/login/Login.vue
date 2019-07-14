<template>
  <!-- 登陆页面 -->
  <div class="login">
    <div class="top">登陆</div>
    <div class="middle">
      <el-row :gutter="5" style="margin-bottom:20px;">
        <el-col :span="6">
          <div style="text-align:center;">手机号：</div>
        </el-col>
        <el-col :span="18">
          <el-input v-model="name" placeholder="请输入手机号" size="mini"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="6">
          <div style="text-align:center;">密码：</div>
        </el-col>
        <el-col :span="18">
          <el-input v-model="pwd" placeholder="请输入密码" size="mini"></el-input>
        </el-col>
      </el-row>
      <div class="button">
        <el-button
          type="primary"
          round
          size="mini"
          style="width:100%;box-shadow:0 0 20px rgba(0,0,0,.4);"
          @click="goHome"
        >登陆</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-button type="text">
        <span @click="goRegister">注册</span>
      </el-button>
    </div>
    <div class="rember">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      bg: "",
      name: "",
      pwd: "",
      isRemember: true
    };
  },
  props: [],
  components: {},
  methods: {
    goHome() {
      if (this.isRemember) {
        localStorage.setItem("username", this.name);
      } else {
        localStorage.removeItem("username");
      }
      this.$router.replace({ path: "/home" });
    },
    goRegister() {
      this.$router.replace({ path: "/register" });
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    let random = parseInt(Math.random() * 1000);
    if (random % 2) {
      this.bg = require("../../assets/images/bg2.jpg");
    } else {
      this.bg = require("../../assets/images/bg3.jpg");
    }
    if (localStorage.getItem("username")) {
      this.name = localStorage.getItem("username");
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
.login {
  .top {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: solid 1px #ddd;
    font-size: 16px;
    margin-bottom: 40px;
  }
  .middle {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 13px;
    line-height: 26px;
  }
  .bottom {
    text-align: right;
    color: #999;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .button {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .rember {
    position: absolute;
    bottom: 20px;
    left: 30px;
  }
}
</style>