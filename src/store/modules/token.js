// 如果token，为单独的接口，则用vuex缓存(因为vuex数据一刷新就没了)
//否则用localStorage
export default {
  state: {
    token: ""
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      //设置token
      state.token = token;
    },
    clearToken(state) {
      //清空token
      state.token = "";
    }
  },
  actions: {}
};
