// 路由配置里有个属性是component，指路由匹配后渲染的组件，只有这种与路由绑定了组件才能监听到路由变化，只要组件没跟路由建立关联那就不可能监听到路由变化  ---- 在top组件也可监听，事实证明这句话是谬论；
// 唯一不能监听的是，在keep-alive里面对route-view设置if时，无法在子组件监听

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "../views/Home.vue";
import Body from "../views/Body.vue";
import Entry from "../views/Entry.vue";

let router = new Router({
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "/login"
    },
    {
      path: "/entry",
      name: "entry",
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Entry,
      children: [
        {
          path: "/login", //这里多了一个 “/”，因此路径path:"/login"，而不是path:"/entry/login"
          name: "login",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "登陆"
          },
          component: () => import("@/views/login/Login.vue")
        },
        {
          path: "/register",
          name: "register",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "注册"
          },
          component: () => import("@/views/register/Register.vue")
        },
      ]
    },
    {
      path: "/home",
      name: "home",
      meta: {
        requireAuth: false,
        icon: "",
        keepAlive: true,
        title: "首页"
      },
      component: Home,
      redirect: "/home/index",
      children: [
        {
          path: "index",
          name: "index",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "首页"
          },
          component: () => import("@/views/Index.vue")
        },
        {
          path: "news/index",
          name: "newsindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "新闻"
          },
          component: () => import("@/views/home/home-xinwen/New_index.vue")
        },
        {
          path: "notice/index",
          name: "noticeindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "公告"
          },
          component: () => import("@/views/home/home-gonggao/Notice_index.vue")
        },
        {
          path: "resource/index",
          name: "resourceindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "资源"
          },
          component: () => import("@/views/home/home-ziyuan/Resource_index.vue")
        },
        {
          path: "bug/index",
          name: "bugindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "BUG系统"
          },
          component: () => import("@/views/home/home-bug/Bug_index.vue")
        },
        {
          path: "api/index",
          name: "apiindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "API文档"
          },
          component: () => import("@/views/home/home-api/Api_index.vue")
        },
        {
          path: "say/index",
          name: "sayindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "百家言"
          },
          component: () => import("@/views/home/home-baijiayan/Say_index.vue")
        },
        {
          path: "book/index",
          name: "bookindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "品书堂"
          },
          component: () => import("@/views/home/home-pinshutang/Book_index.vue")
        },
        {
          path: "film/index",
          name: "filmindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "电影迷"
          },
          component: () => import("@/views/home/home-dianyingmi/Film_index.vue")
        },
        {
          path: "sport/index",
          name: "sportindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "运动魔"
          },
          component: () => import("@/views/home/home-yundongmo/Sport_index.vue")
        },
        {
          path: "game/index",
          name: "gameindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "游戏党"
          },
          component: () => import("@/views/home/home-youxidang/Game_index.vue")
        },
        {
          path: "technology/index",
          name: "technologyindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "技术狂"
          },
          component: () => import("@/views/home/home-jishukuang/Technology_index.vue")
        },
        {
          path: "activity/index",
          name: "activityindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "线下活动"
          },
          component: () => import("@/views/home/home-xianxiahuodong/Activity_index.vue")
        },
        {
          path: "rice/index",
          name: "riceindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "今日食堂"
          },
          component: () => import("@/views/home/home-jinrishitang/Rice_index.vue")
        },
        {
          path: "attendance/index",
          name: "attendanceindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "考勤"
          },
          component: () => import("@/views/home/home-kaoqin/Attendance_index.vue")
        },
        {
          path: "meet/index",
          name: "meetindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "会议室"
          },
          component: () => import("@/views/home/home-huiyishi/Meet_index.vue")
        },
        {
          path: "organization/index",
          name: "organizationindex",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: true,
            title: "组织架构"
          },
          component: () => import("@/views/home/home-zuzhijiagou/Organization_index.vue")
        },
      ]
    },
    {
      path: "/body",
      name: "body",
      meta: {
        requireAuth: false,
        icon: "",
        keepAlive: true,
        title: ""
      },
      component: Body,
      children: []
    },
    {
      path: "*",
      name: "silingsi",
      meta: {
        requireAuth: false,
        icon: "",
        keepAlive: true,
        title: "404"
      },
      component: () => import("@/views/silingsi/Silingsi.vue")
    }
  ]
});

//登录拦截
router.beforeEach((to, from, next) => {
  if (to.meta.title && to.matched.length) {
    //添加页面标题
    document.title = to.meta.title;
  }
  if (to.matched.length === 0) {
    //如果未匹配到路由
    if (from.path) {
      next({ path: from.path });
    } else {
      next("/login");
    }
    //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else if (to.meta.requireAuth) {
    //是否存在登录的标志
    if (sessionStorage.getItem("token")) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});

export default router;
