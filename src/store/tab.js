//管理菜单相关数据
export default {
    state: {
        isCollapse: false //用于控制菜单展开与收起
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}