const navigation = () => {
  return [
    // {
    //   path: '/admin/dashboards/analytics',
    //   action: '',
    //   subject: 'admin-page',
    //   icon: 'tabler:dashboard',
    //   title: 'Dashboards',
    //   type: 'admin'
    // },
    {
      path: '/admin/sites-explore',
      action: '',
      subject: 'user-page',
      icon: 'tabler:globe',
      title: 'Sites Explore',
      type: 'admin'
    },
    {
      path: '/admin/inventory',
      action: '',
      subject: 'user-page',
      icon: 'tabler:3d-cube-sphere',
      title: 'Inventory',
      type: 'admin'
    },
    {
      title: 'User',
      icon: 'tabler:user',
      type: 'admin',
      children: [
        {
          title: 'Add User',
          path: '/admin/add-user',
          icon: 'tabler:user-plus',
          type: 'admin'

        },
        {
          title: 'All Users',
          path: '/admin/all-user',
          icon: 'tabler:user-check',
          type: 'admin'
        },

      ]
    },

    {
      path: '/inventory',
      action: 'read',
      subject: 'user-page',
      icon: 'tabler:3d-cube-sphere',
      title: 'Inventory',
      type: 'customer'
    },
  ]
}

export default navigation
