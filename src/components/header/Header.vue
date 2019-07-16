<template>
  <!-- 头部 -->
  <div class="header clearfix">
    <div class="nav">
      <ul class="clearfix">
        <li
          v-for="(item,index) in menuArr"
          :key="index"
          :class="{'active':activeUrl==item.url}"
          @click="goNav(item.url)"
        >
          <span :class="{'hot':item.hot}">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headers",
  data() {
    return {
      activeUrl: '/home/index',
      menuArr: [
        {
          name: "首页",
          url: "/home/index",
          hot: false
        },
        {
          name: "新闻",
          url: "/home/news/index",
          hot: false
        },
        {
          name: "公告",
          url: "/home/notice/index",
          hot: false
        },
        {
          name: "资源",
          url: "/home/resource/index",
          hot: false
        },
        {
          name: "BUG系统",
          url: "/home/bug/index",
          hot: false
        },
        {
          name: "API文档",
          url: "/home/api/index",
          hot: false
        },
        {
          name: "百家言",
          url: "/home/say/index",
          hot: false
        },
        {
          name: "品书堂",
          url: "/home/book/index",
          hot: false
        },
        {
          name: "电影迷",
          url: "/home/film/index",
          hot: false
        },
        {
          name: "运动魔",
          url: "/home/sport/index",
          hot: false
        },
        {
          name: "游戏党",
          url: "/home/game/index",
          hot: true
        },
        {
          name: "技术狂",
          url: "/home/technology/index",
          hot: false
        },
        {
          name: "线下活动",
          url: "/home/activity/index",
          hot: false
        },
        {
          name: "今日食堂",
          url: "/home/rice/index",
          hot: false
        },
        {
          name: "考勤",
          url: "/home/attendance/index",
          hot: false
        },
        {
          name: "会议室",
          url: "/home/meet/index",
          hot: false
        },
        {
          name: "组织架构",
          url: "/home/organization/index",
          hot: false
        }
      ]
    };
  },
  props: [],
  components: {},
  methods: {
    goNav(url) {
      this.activeUrl = url;
      this.$router.push({path:url});
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    this.activeUrl = this.$route.path; 
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
.header {
  height: 36px;
  background-color: #4af;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  .nav {
    width: 1200px;
    margin: 0 auto;
    height: 36px;
    > ul {
      width: 1200px;
      height: 36px;
      > li {
        display: block;
        float: left;
        &:nth-of-type(6),
        &:nth-of-type(14) {
          position: relative;
          margin-right: 5px;
          &:after {
            content: "";
            height: 20px;
            width: 0;
            border-right: dashed 1px #fff;
            position: absolute;
            top: 8px;
            right: -3px;
          }
        }
        &.active {
          span,
          span:hover {
            background: #2c8ee0;
          }
        }
        span {
          display: block;
          height: 36px;
          line-height: 36px;
          padding: 0 12px;
          font-size: 14px;
          color: #fff;
          cursor: pointer;
          &:hover {
            background: #66bbff;
          }
          &.hot {
            position: relative;
            &:after {
              content: "";
              width: 20px;
              height: 20px;
              color: #fff;
              position: absolute;
              top: -2px;
              right: 0;
              background: transparent url("../../assets/images/hot.png") 0 -24px
                no-repeat;
            }
          }
        }
      }
    }
  }
}
</style>