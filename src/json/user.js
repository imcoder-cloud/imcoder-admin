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
      path: '/user',
      name: '组件管理',
      icon: 'fa fa-cogs',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 3,
          path: 'query',
          name: '用户查询',
          icon: 'el-icon-menu',
          parentId: 2,
          component: 'user/user'
        },
        {
          id: 4,
          path: 'add',
          name: '用户新增',
          icon: 'el-icon-menu',
          parentId: 2,
          component: 'user/user1'
        }
      ]
    },
    {
      id: 5,
      path: '/user',
      name: '用户管理',
      icon: 'el-icon-user-solid',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 6,
          path: 'query',
          name: '用户查询',
          icon: 'el-icon-menu',
          parentId: 5,
          component: 'user/user'
        },
        {
          id: 7,
          path: 'add',
          name: '用户新增',
          icon: 'el-icon-menu',
          parentId: 5,
          component: 'user/user1'
        }
      ]
    }
  ]
}

export default user
