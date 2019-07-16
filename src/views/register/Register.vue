<template>
  <!-- 注册 -->
  <div class="register">
    <div class="top">注册</div>
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
            @keyup.enter.native="startRegister"
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
            @keyup.enter.native="startRegister"
          ></el-input>
        </el-col>
      </el-row>
      <div class="button">
        <el-button
          type="primary"
          round
          size="mini"
          style="width:100%;box-shadow:0 0 20px rgba(0,0,0,.4);"
          @click="startRegister"
        >注册</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-button type="text">
        <span @click="goLogin">登陆</span>
      </el-button>
    </div>
  </div>
</template>

<script>
import crypto from "crypto-js";
import { setTimeout } from "timers";
export default {
  name: "register",
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  props: [],
  components: {},
  methods: {
    goLogin() {
      this.$router.replace({ path: "/login" });
    },
    startRegister() {
      this.$throttle(this.reqRegister, 1000);
    },
    reqRegister() {
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
        url: this.$api.system.register,
        data: {
          username: this.name,
          password: crypto.MD5(this.pwd).toString()
        },
        success: function(res) {
          this.$message({
            message: "注册成功!",
            showClose: true,
            center: true,
            type: "success"
          });
          setTimeout(() => {
            this.$router.replace({
              name: "login",
              params: { name: this.name }
            });
          }, 2000);
        }.bind(this)
      });
    }
  },
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
.register {
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
}
</style>