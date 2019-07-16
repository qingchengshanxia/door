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
          src: require("../assets/images/bg5.jpg"),
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
  watch: {
    $route: function(to, from) {
      
    }
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      // console.log(vm); //当前组件的实例
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  }
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
    margin: auto;
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