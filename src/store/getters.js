const getters = {
  settings: state => state.settings.settings,
  visitedViews: state => state.viewsBar.visitedViews,
  user: state => state.user.user,
  routers: state => state.user.routers,
  dynamicRouters: state => state.user.dynamicRouters
}
export default getters
