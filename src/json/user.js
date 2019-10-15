const user = {
  userName: 'admin',
  password: 'admin',
  roles: [],
  routers: [
    {
      id: 1,
      path: '/index',
      name: '首页',
      icon: 'el-icon-s-home',
      parentId: 0,
      fixed: true,
      component: 'home',
      children: [
        {
          id: 3,
          path: '/',
          name: '首页',
          icon: 'el-icon-menu',
          component: 'index'
        }
      ]
    },
    {
      id: 2,
      path: '/user',
      name: '用户管理',
      icon: 'el-icon-user-solid',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 3,
          path: '/user1',
          name: '用户查询',
          icon: 'el-icon-menu',
          parentId: 2,
          component: 'user/user1'
        },
        {
          id: 4,
          path: '/user2',
          name: '用户新增',
          icon: 'el-icon-menu',
          parentId: 2,
          component: 'user/user2'
        }
      ]
    },
    {
      id: 5,
      path: '/other',
      name: '其他模拟菜单',
      icon: 'el-icon-star-on',
      parentId: 0,
      children: [
        {
          id: 6,
          path: '/user/query',
          name: '二级菜单 1',
          icon: 'el-icon-menu',
          parentId: 5,
          component: 'user/user'
        },
        {
          id: 7,
          path: '/user/query',
          name: '二级菜单 2',
          icon: 'el-icon-menu',
          parentId: 5,
          component: 'user/user',
          children: [
            {
              id: 8,
              path: '/user/query',
              name: '三级级菜单 1',
              icon: 'el-icon-menu',
              parentId: 7,
              component: 'user/user'
            },
            {
              id: 9,
              path: '/user/query',
              name: '三级级菜单 2',
              icon: 'el-icon-menu',
              parentId: 7,
              component: 'user/user'
            }
          ]
        }
      ]
    }
  ]
}

export default user
