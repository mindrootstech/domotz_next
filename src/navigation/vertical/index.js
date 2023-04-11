const navigation = () => {
  return [
    {
      path: '/admin/dashboards/analytics',
      action: '',
      subject: 'admin-page',
      icon: 'tabler:smart-home',
      title: 'Dashboards',
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
          type: 'admin'

        },
        {
          title: 'All User',
          path: '/admin/all-user',
          type: 'admin'
        },

      ]
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'user-page',
      icon: 'tabler:shield',
      title: 'Access Control',
      type: 'customer'
    },
  ]
}

export default navigation
