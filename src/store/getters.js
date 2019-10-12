const getters = {
  menu: state => state.settings.menu,
  header: state => state.settings.header,
  visitedViews: state => state.viewsBar.visitedViews,
  cachedViews: state => state.viewsBar.cachedViews
}
export default getters
