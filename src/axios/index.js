/**
 *
 * 封装axios，统一拦截、loading加载图、返回状态显示；
 *
 *
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
