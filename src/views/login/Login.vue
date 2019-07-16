<template>
  <!-- 登陆页面 -->
  <div class="login">
    <div class="top">登陆</div>
    <div class="middle">
      <el-row :gutter="5" style="margin-bottom:20px;">
        <el-col :span="6">
          <div style="text-align:center;">手机：</div>
        </el-col>
        <el-col :span="18">
          <el-input
            v-model="name"
            placeholder="请输入手机号"
            size="mini"
            @keyup.enter.native="startLogin"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="6">
          <div style="text-align:center;">密码：</div>
        </el-col>
        <el-col :span="18">
          <el-input
            v-model="pwd"
            type="password"
            placeholder="请输入密码"
            size="mini"
            @keyup.enter.native="startLogin"
          ></el-input>
        </el-col>
      </el-row>
      <div class="button">
        <el-button
          type="primary"
          round
          size="mini"
          style="width:100%;box-shadow:0 0 20px rgba(0,0,0,.4);"
          @click="startLogin"
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
import crypto from "crypto-js";

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
    startLogin() {
      this.$throttle(this.goHome, 1000);
    },
    goHome() {
      //登陆成功，进入首页
      if (!this.name) {
        this.$message.closeAll();
        this.$message({
          type: "warning",
          center: true,
          message: "请输入手机号"
        });
        return;
      } else if (!this.$legalPhone(this.name)) {
        this.$message.closeAll();
        this.$message({
          type: "warning",
          center: true,
          message: "请输入正确的手机号"
        });
        return;
      }

      if (!this.pwd) {
        this.$message.closeAll();
        this.$message({
          type: "warning",
          center: true,
          message: "请输入密码"
        });
        return;
      } else if (this.pwd.length < 6) {
        this.$message.closeAll();
        this.$message({
          type: "warning",
          center: true,
          message: "请输入大于6位的密码"
        });
        return;
      }

      this.$http({
        headers: "application/json; charset=utf-8",
        url: this.$api.system.login,
        data: {
          username: this.name,
          password: crypto.MD5(this.pwd).toString()
        },
        success: function(res) {
          if (this.isRemember) {
            sessionStorage.setItem("username", this.name);
          } else {
            sessionStorage.removeItem("username");
          }
          sessionStorage.setItem("token", res.token);
          this.$router.replace({ path: "/home" });
        }.bind(this)
      });
    },
    goRegister() {
      this.$router.replace({ path: "/register" });
    },
    rememberName() {
      if (this.$route.params) {
        this.name = this.$route.params.name;
      } else if (sessionStorage.getItem("username")) {
        this.name = sessionStorage.getItem("username");
      }
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    if (this.$route.params.name) {
      this.name = this.$route.params.name;
      this.pwd = this.$route.params.pwd;
    }
  },
  mounted() {
    let random = parseInt(Math.random() * 1000);
    if (random % 2) {
      this.bg = require("../../assets/images/bg2.jpg");
    } else {
      this.bg = require("../../assets/images/bg3.jpg");
    }
    this.rememberName();
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