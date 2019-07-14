import vue from "vue";
import vuex from "vuex";
import login from "./modules/login.js"; //登录
import token from "./modules/token.js"; //token
import menu from "./modules/menu.js"; //菜单
import globalVarFunction from "./modules/globalVarFunction.js"; //全局变量存储
import dictionary from "./modules/dictionary.js"; //数据字典数据管理
import commonrequestdata from "./modules/commonrequestdata.js"; //通用单表接口数据管理

import createLogger from "vuex/dist/logger"; // 修改日志

vue.use(vuex);

const debug = process.env.NODE_ENV !== "production"; // 开发环境中为true，否则为false

export default new vuex.Store({
  modules: {
    login,
    token,
    menu,
    globalVarFunction,
    dictionary,
    commonrequestdata
  },
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
});
