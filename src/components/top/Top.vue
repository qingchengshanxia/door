<template>
  <!-- 顶部 -->
  <div class="top">
    <div class="nav clearfix">
      <div class="left">
        <div class="logo">
          <span>公司门户</span>
        </div>
      </div>
      <div class="right">
        <div class="search">
          <input type="text" />
          <span>
            <i class="iconfont icon-sousuo"></i>
            <span>搜索</span>
          </span>
        </div>
        <div class="person">
          <span @click="goLogin" v-if="!isLogin">
            <i class="iconfont icon-denglu"></i> 登陆
          </span>
          <span v-else>
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="iconfont icon-ai-user"></i> 个人中心
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="goMy">我的信息</el-dropdown-item>
                <el-dropdown-item @click.native="outLogin">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
      </div>
    </div>
    <div class="lang">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ curLang }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            @click.native="switchLang($t('basic.top.language1'))"
          >{{$t("basic.top.language1")}}</el-dropdown-item>
          <el-dropdown-item
            @click.native="switchLang($t('basic.top.language2'))"
          >{{$t("basic.top.language2")}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      curLang: "",
      searchVal: "",
      isLogin: true
    };
  },
  props: [],
  components: {},
  methods: {
    switchLang(val) {
      this.curLang = val;
      let lang = this.$i18n.locale === "zh" ? "en" : "zh";
      this.$i18n.locale = lang;
      localStorage.setItem("lang", this.$i18n.locale);
    },
    goLogin() {
      this.$router.replace({ path: "/login" });
    },
    goMy() {
      //跳转个人中心
    },
    outLogin() {
      //退出登录
      this.$router.replace({ path: "/login" });
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    this.curLang =
      this.$i18n.locale === "zh"
        ? this.$t("basic.top.language1")
        : this.$t("basic.top.language2");
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {}
};
</script>
<style scoped lang="scss">
.top {
  height: 60px;
  line-height: 60px;
  background-color: #4af;
  border-bottom: 1px solid #3099ee;
  overflow: hidden;
  .nav {
    width: 1200px;
    margin: 0 auto;
    .left {
      width: 300px;
      float: left;
      .logo {
        span {
          font-size: 28px;
          color: #fff;
          font-weight: bold;
          margin-left: 10px;
          letter-spacing: 4px;
          font-family: "Courier New", Courier, monospace;
          user-select: none;
        }
      }
    }
    .right {
      float: right;
      .person {
        float: right;
        span {
          color: #fff;
          margin-right: 10px;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: #ddd;
          }
          .icon-denglu {
            font-size: 16px;
          }
        }
      }
      .search {
        float: right;
        width: 380px;
        > input {
          float: left;
          width: 280px;
          border: 0;
          padding: 5px 10px;
          font-size: 14px;
          height: 22px;
          margin-top: 14px;
          line-height: 22px;
          background-color: #fff;
          color: #333;
        }
        > span {
          float: left;
          width: 80px;
          height: 32px;
          line-height: 32px;
          color: #fff;
          border: 0;
          padding: 0;
          background-color: #2c8ee0;
          margin-top: 14px;
          text-indent: 10px;
          font-size: 14px;
          cursor: pointer;
          user-select: none;
          &:hover {
            background: #66bbff;
          }
          &:active {
            background-color: #2c8ee0;
          }
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .lang {
    position: absolute;
    top: 0;
    right: 20px;
    div {
      font-size: 12px;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>