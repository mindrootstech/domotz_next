/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'customer') return '/inventory'
  else return '/admin/sites-explore'
}

export default getHomeRoute
