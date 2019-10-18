const user = {
  userName: 'admin',
  password: 'admin',
  roles: [],
  routers: [
    {
      path: '/',
      name: 'home',
      component: 'home',
      redirect: 'index',
      children: [
        {
          id: 1,
          path: 'index',
          name: '首页',
          icon: 'el-icon-s-home',
          parentId: 0,
          fixed: true,
          component: 'index',
          meta: { fixed: true }
        }
      ]
    },
    {
      path: 'https://github.com/dongdong-cloud/vue-admin',
      name: '项目地址',
      isExternal: true,
      icon: 'fa fa-github'
    },
    {
      id: 2,
      path: '/basic',
      name: '基础组件',
      icon: 'fa fa-cogs',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 3,
          path: 'table',
          name: '表格',
          icon: 'fa fa-table',
          parentId: 2,
          component: 'basic/table'
        },
        {
          id: 4,
          path: 'form',
          name: '表单',
          icon: 'fa fa-wpforms',
          parentId: 2,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 5,
      path: '/menu-1',
      name: '多级菜单',
      icon: 'el-icon-menu',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 6,
          path: 'menu-1-1',
          name: '二级菜单 1',
          icon: 'el-icon-menu',
          parentId: 5,
          component: 'menu-1/menu-1-1',
          children: [
            {
              id: 8,
              path: 'menu-1-1-1',
              name: '三级菜单 1',
              icon: 'el-icon-menu',
              parentId: 6,
              component: 'menu-1/menu-1-1/menu-1-1-1'
            },
            {
              id: 9,
              path: 'menu-1-1-2',
              name: '三级菜单 2',
              icon: 'el-icon-menu',
              parentId: 6,
              component: 'menu-1/menu-1-1/menu-1-1-2'
            }
          ]
        },
        {
          id: 7,
          path: 'menu-1-2',
          name: '二级菜单 2',
          icon: 'el-icon-menu',
          parentId: 5,
          component: 'menu-1/menu-1-2'
        }
      ]
    }
  ]
}

export default user
