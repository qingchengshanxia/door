<template>
  <!-- 主页 -->
  <div class="index">
    <div class="banner">
      <el-carousel :interval="6000" height="320px">
        <el-carousel-item v-for="(item,index) in imgSrc" :key="index">
          <div class="banner-img">
            <img :src="item.src" :alt="item.alt" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container clearfix">
      <div class="aside"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      imgSrc: [
        {
          src: require("../assets/images/bg1.jpg"),
          alt: ""
        },
        {
          src: require("../assets/images/bg2.jpg"),
          alt: ""
        },
        {
          src: require("../assets/images/bg3.jpg"),
          alt: ""
        },
        {
          src: require("../assets/images/bg4.jpg"),
          alt: ""
        },
        {
          src: require("../assets/images/bg5.jpeg"),
          alt: ""
        }
      ]
    };
  },
  props: [],
  components: {},
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
.index {
  .banner {
    height: 320px;
    .banner-img {
      img {
        display: inline-block;
        width: 100%;
      }
    }
  }
  .container {
    background-color: #dedede;
    width: 1200px;
    margin:auto;
    .aside {
        height: 600px;
        width: 240px;
        background-color: #ddd;
        float: left;
    }
    .content {
        height: 1200px;
        width: 960px;
        background-color: #999;
        float: right;
    }
  }
}
</style>