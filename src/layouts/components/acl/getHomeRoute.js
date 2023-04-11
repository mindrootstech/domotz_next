/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'customer') return '/sites-explore'
  else return '/admin/dashboards/analytics'
}

export default getHomeRoute
