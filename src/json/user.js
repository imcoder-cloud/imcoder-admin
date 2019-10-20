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
      id: 2,
      path: 'https://github.com/dongdong-cloud/vue-admin',
      name: 'project',
      icon: 'fa fa-github',
      parentId: 0,
      component: 'home',
      isExternal: true,
      children: [
        {
          id: 3,
          path: 'https://github.com/dongdong-cloud/vue-admin',
          name: '项目地址',
          icon: 'fa fa-github',
          parentId: 2,
          component: 'index',
          isExternal: true,
        }
      ],
    },
    {
      id: 4,
      path: '/basic',
      name: '基础组件',
      icon: 'fa fa-cogs',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 5,
          path: 'table',
          name: '表格',
          icon: 'fa fa-table',
          parentId: 4,
          component: 'basic/table'
        },
        {
          id: 6,
          path: 'form',
          name: '表单',
          icon: 'fa fa-wpforms',
          parentId: 4,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 7,
      path: '/icon',
      name: 'icon',
      component: 'home',
      parentId: 0,
      children: [
        {
          id: 8,
          path: 'index',
          name: '字体图标',
          icon: 'fa fa-fonticons',
          parentId: 7,
          component: 'icon/index',
          meta: { fixed: true }
        }
      ]
    },
    {
      id: 9,
      path: '/editor',
      name: '编辑器',
      icon: 'fa fa-pencil-square',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 10,
          path: 'ueditor',
          name: 'UEditor',
          icon: 'fa fa-pencil-square-o',
          parentId: 9,
          component: 'basic/table'
        },
        {
          id: 11,
          path: 'code',
          name: '代码编辑器',
          icon: 'fa fa-code',
          parentId: 9,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 12,
      path: '/file',
      name: '文件操作',
      icon: 'fa fa-file',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 13,
          path: 'excel',
          name: 'Excel',
          icon: 'fa fa-file-excel-o',
          parentId: 12,
          component: 'basic/table'
        },
        {
          id: 14,
          path: 'zip',
          name: 'Zip',
          icon: 'fa fa-file-archive-o',
          parentId: 12,
          component: 'basic/form'
        },
        {
          id: 15,
          path: 'pdf',
          name: 'PDF',
          icon: 'fa fa-file-pdf-o',
          parentId: 12,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 16,
      path: '/settings',
      name: 'settings',
      icon: 'fa fa-cog',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 17,
          path: 'index',
          name: '系统设置',
          icon: 'fa fa-cog',
          parentId: 16,
          component: 'settings/index'
        }
      ]
    },
    {
      id: 18,
      path: '/donate',
      name: '捐赠',
      icon: 'fa fa-heart',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 19,
          path: 'index',
          name: '打赏',
          icon: 'fa fa-heart',
          parentId: 18,
          component: 'settings/index'
        }
      ]
    },
    {
      id: 20,
      path: '/error',
      name: '错误页面',
      icon: 'fa fa-bug',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 21,
          path: '401',
          name: '401页面',
          icon: 'fa fa-table',
          parentId: 20,
          component: 'basic/table'
        },
        {
          id: 22,
          path: '404',
          name: '404页面',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'basic/form'
        },
        {
          id: 23,
          path: '502',
          name: '502页面',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'basic/form'
        },
        {
          id: 24,
          path: '504',
          name: '504页面',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 25,
      path: '/menu-1',
      name: '多级菜单',
      icon: 'el-icon-menu',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 26,
          path: 'menu-1-1',
          name: '二级菜单 1',
          icon: 'el-icon-menu',
          parentId: 25,
          component: 'menu-1/menu-1-1',
          children: [
            {
              id: 27,
              path: 'menu-1-1-1',
              name: '三级菜单 1',
              icon: 'el-icon-menu',
              parentId: 26,
              component: 'menu-1/menu-1-1/menu-1-1-1'
            },
            {
              id: 28,
              path: 'menu-1-1-2',
              name: '三级菜单 2',
              icon: 'el-icon-menu',
              parentId: 26,
              component: 'menu-1/menu-1-1/menu-1-1-2'
            }
          ]
        },
        {
          id: 29,
          path: 'menu-1-2',
          name: '二级菜单 2',
          icon: 'el-icon-menu',
          parentId: 25,
          component: 'menu-1/menu-1-2'
        }
      ]
    },
    {
      id: 30,
      path: '/link',
      name: '链接',
      icon: 'fa fa-link',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 31,
          path: 'external',
          name: '外部链接',
          icon: 'fa fa-external-link-square',
          parentId: 30,
          component: 'link/external'
        }
      ]
    }
  ]
}

export default user
