// 当前一级目录数据，从登录接口中获取，所以只能用localStorage缓存
// 如果一级目录数据，为单独的接口，则用vuex缓存(因为vuex数据一刷新就没了)
//
export default {
  state: {
    oneLevelMenu: {}
  },
  getters: {},
  mutations: {
    setOneLevelMenu(state, oneLevelMenu) {
      //设置一级菜单目录
      state.oneLevelMenu = oneLevelMenu;
    }
  },
  actions: {}
};
