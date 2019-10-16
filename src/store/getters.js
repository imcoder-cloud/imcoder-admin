const getters = {
  settings: state => state.settings.settings,
  visitedViews: state => state.viewsBar.visitedViews,
  showBreadCrumb: state => state.viewsBar.showBreadCrumb,
  user: state => state.user.user,
  routers: state => state.user.routers,
  dynamicRouters: state => state.user.dynamicRouters
}
export default getters
