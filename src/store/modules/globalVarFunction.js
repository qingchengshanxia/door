//此文件用于 依赖全局变量 的操作
//
export default {
  state: {
    clientHeight: "", //页面可视区的高度
    tableHeight: "", // 是否全屏、有没有标签栏时 表格的固定高度
    isSwitchBoxSize: "", //是否触发页面最大化
    isHideAside: "" //是否隐藏侧边菜单栏
  },
  getters: {},
  mutations: {
    setClientHeight(state, height) {
      //缓存页面可视区的高度，全局可用
      state.clientHeight = height;
    },
    setTableHeightFullNotag(state, height) {
      //缓存 全屏、没有标签栏时 表格的固定高度
      state.tableHeight = height;
    },
    setTableHeightFullTag(state, height) {
      //缓存 全屏、有标签栏时 表格的固定高度
      state.tableHeight = height;
    },
    setTableHeightNofullNotag(state, height) {
      //缓存 非全屏、没有标签栏时 表格的固定高度
      state.tableHeight = height;
    },
    setTableHeightNofullTag(state, height) {
      //缓存 非全屏、有标签栏时 表格的固定高度
      state.tableHeight = height;
    },
    setSwitchBoxSize(state, bool) {
      //是否触发页面最大化
      //bool: T/F
      state.isSwitchBoxSize = bool;
    },
    setSwitchAside(state, bool) {
      //是否触发页面最大化
      //bool: T/F
      state.isHideAside = bool;
    }
  },
  actions: {}
};
