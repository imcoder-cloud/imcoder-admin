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
      type: 'external', // type 菜单类型 默认internal, internal:内部链接, external:外部链接, click:点击事件
      children: [
        {
          id: 3,
          path: 'https://github.com/dongdong-cloud/vue-admin',
          name: '项目地址',
          enName: 'Project',
          icon: 'fa fa-github',
          parentId: 2,
          component: 'index',
          type: 'external'
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
        },
        {
          id: 32,
          path: 'floor',
          name: '楼层切换',
          enName: 'floor',
          icon: 'fa fa-exchange',
          parentId: 4,
          component: 'basic/floor'
        },
        {
          id: 33,
          path: 'select-tree',
          name: '树形选择器',
          enName: 'select-tree',
          icon: 'dd file-tree',
          parentId: 4,
          component: 'basic/select-tree'
        },
        {
          id: 34,
          path: 'tree',
          name: '树形组件',
          enName: 'tree',
          icon: 'dd file-tree',
          parentId: 4,
          component: 'basic/tree'
        },
        {
          id: 35,
          path: 'color-picker',
          name: '颜色选择器',
          enName: 'color picker',
          icon: 'fa fa-cube',
          parentId: 4,
          component: 'basic/color-picker'
        },
        {
          id: 37,
          path: 'count-to',
          name: '动态数字',
          enName: 'count to',
          icon: 'dd num',
          parentId: 4,
          component: 'basic/count-to'
        },
        // {
        //   id: 38,
        //   path: 'sticky',
        //   name: '吸附',
        //   enName: 'sticky',
        //   icon: 'dd num',
        //   parentId: 4,
        //   component: 'basic/sticky'
        // },
        {
          id: 39,
          path: 'image-crop',
          name: '图片剪裁',
          enName: 'image crop',
          icon: 'fa fa-image',
          parentId: 4,
          component: 'basic/image-crop'
        },
        {
          id: 40,
          path: 'share',
          name: '分享组件',
          enName: 'share',
          icon: 'el-icon-share',
          parentId: 4,
          component: 'basic/share'
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
        },
        {
          id: 36,
          path: 'markdown',
          name: 'markdown',
          enName: 'markdown',
          icon: 'dd markdown',
          parentId: 9,
          component: 'editor/markdown'
        },
        {
          id: 41,
          path: 'quill',
          name: 'quill',
          enName: 'quill',
          icon: 'fa fa-file-text-o',
          parentId: 9,
          component: 'editor/quill'
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
          component: 'file/pdf'
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
      type: 'click',
      children: [
        {
          id: 17,
          path: 'settings',
          name: '系统设置',
          enName: 'Settings',
          icon: 'fa fa-cog',
          parentId: 16,
          type: 'click'
        }
      ]
    },
    {
      id: 18,
      path: '/donate',
      name: '打赏',
      enName: 'Donate',
      icon: 'fa fa-heart',
      parentId: 0,
      component: 'home',
      children: [
        {
          id: 19,
          path: 'index',
          name: '捐赠',
          enName: 'Donate',
          icon: 'fa fa-heart',
          parentId: 18,
          component: 'donate/index'
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
      path: 'https://dd-admin.ocreatech.com',
      name: '链接',
      enName: 'Link',
      icon: 'fa fa-link',
      type: 'external',
      parentId: 0,
      children: [
        {
          id: 31,
          path: 'https://dd-admin.ocreatech.com',
          name: '外部链接',
          enName: 'External Link',
          icon: 'fa fa-external-link-square',
          parentId: 30,
          type: 'external'
        }
      ]
    }
  ]
}

export default user
