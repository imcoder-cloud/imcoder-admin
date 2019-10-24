const user = {
  userName: 'admin',
  password: 'admin',
  roles: [],
  routers: [
    {
      path: '/',
      name: 'Home',
      enName: 'Home',
      component: 'home',
      redirect: 'index',
      children: [
        {
          id: 1,
          path: 'index',
          name: '首页',
          enName: 'Home',
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
      name: 'Project',
      enName: 'Project',
      icon: 'fa fa-github',
      parentId: 0,
      component: 'home',
      isExternal: true,
      children: [
        {
          id: 3,
          path: 'https://github.com/dongdong-cloud/vue-admin',
          name: '项目地址',
          enName: 'Project',
          icon: 'fa fa-github',
          parentId: 2,
          component: 'index',
          isExternal: true
        }
      ]
    },
    {
      id: 4,
      path: '/basic',
      name: '基础组件',
      enName: 'Basic',
      icon: 'fa fa-cogs',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 5,
          path: 'table',
          name: '表格',
          enName: 'Table',
          icon: 'fa fa-table',
          parentId: 4,
          component: 'basic/table'
        },
        {
          id: 6,
          path: 'form',
          name: '表单',
          enName: 'Form',
          icon: 'fa fa-wpforms',
          parentId: 4,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 7,
      path: '/icon',
      name: 'Icon',
      enName: 'Icon',
      component: 'home',
      parentId: 0,
      children: [
        {
          id: 8,
          path: 'index',
          name: '字体图标',
          enName: 'Icon',
          icon: 'fa fa-fonticons',
          parentId: 7,
          component: 'icon/index'
        }
      ]
    },
    {
      id: 9,
      path: '/editor',
      name: '编辑器',
      enName: 'Editor',
      icon: 'fa fa-pencil-square',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 10,
          path: 'ueditor',
          name: 'UEditor',
          enName: 'UEditor',
          icon: 'fa fa-pencil-square-o',
          parentId: 9,
          component: 'editor/ueditor'
        },
        {
          id: 11,
          path: 'code',
          name: '代码编辑器',
          enName: 'Code',
          icon: 'fa fa-code',
          parentId: 9,
          component: 'editor/code'
        }
      ]
    },
    {
      id: 12,
      path: '/file',
      name: '文件操作',
      enName: 'File',
      icon: 'fa fa-file',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 13,
          path: 'excel',
          name: 'Excel',
          enName: 'Excel',
          icon: 'fa fa-file-excel-o',
          parentId: 12,
          component: 'file/excel'
        },
        {
          id: 15,
          path: 'pdf',
          name: 'PDF',
          enName: 'PDF',
          icon: 'fa fa-file-pdf-o',
          parentId: 12,
          component: 'basic/form'
        }
      ]
    },
    {
      id: 16,
      path: '/settings',
      name: 'Settings',
      enName: 'Settings',
      icon: 'fa fa-cog',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 17,
          path: 'index',
          name: '系统设置',
          enName: 'Settings',
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
      enName: 'Donate',
      icon: 'fa fa-heart',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 19,
          path: 'index',
          name: '打赏',
          enName: 'Donate',
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
      enName: 'Error Page',
      icon: 'fa fa-bug',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 21,
          path: '401',
          name: '401 页面',
          enName: '401 Page',
          icon: 'fa fa-table',
          parentId: 20,
          component: 'error/401'
        },
        {
          id: 22,
          path: '404',
          name: '404 页面',
          enName: '404 Page',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'error/404'
        },
        {
          id: 23,
          path: '500',
          name: '500 页面',
          enName: '500 Page',
          icon: 'fa fa-wpforms',
          parentId: 20,
          component: 'error/500'
        }
      ]
    },
    {
      id: 25,
      path: '/menu-1',
      name: '多级菜单',
      enName: 'Nested',
      icon: 'el-icon-menu',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 26,
          path: 'menu-1-1',
          name: '二级菜单 1',
          enName: 'Level two 1',
          icon: 'el-icon-menu',
          parentId: 25,
          component: 'menu-1/menu-1-1',
          children: [
            {
              id: 27,
              path: 'menu-1-1-1',
              name: '三级菜单 1',
              enName: 'Level three 1',
              icon: 'el-icon-menu',
              parentId: 26,
              component: 'menu-1/menu-1-1/menu-1-1-1'
            },
            {
              id: 28,
              path: 'menu-1-1-2',
              name: '三级菜单 2',
              enName: 'Level three 2',
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
          enName: 'Level two 2',
          icon: 'el-icon-menu',
          parentId: 25,
          component: 'menu-1/menu-1-2'
        }
      ]
    },
    {
      id: 30,
      path: 'https://github.com/dongdong-cloud/vue-admin',
      name: '链接',
      enName: 'Link',
      icon: 'fa fa-link',
      isExternal: true,
      parentId: 0,
      children: [
        {
          id: 31,
          path: 'https://github.com/dongdong-cloud/vue-admin',
          name: '外部链接',
          enName: 'External Link',
          icon: 'fa fa-external-link-square',
          parentId: 30,
          isExternal: true
        }
      ]
    }
  ]
}

export default user
