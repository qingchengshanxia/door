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
          path: "/login",
          name: "login",
          meta: {
            requireAuth: false,
            icon: "",
            keepAlive: false,
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
            keepAlive: false,
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
        keepAlive: false,
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
            keepAlive: false,
            title: "首页"
          },
          component: () => import("@/views/Index.vue")
        }
      ]
    },
    {
      path: "/body",
      name: "body",
      meta: {
        requireAuth: false,
        icon: "",
        keepAlive: false,
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
        keepAlive: false,
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
    if (localStorage.getItem("hasLogin")) {
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
