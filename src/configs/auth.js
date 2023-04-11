var admin_base_url = 'http://localhost:5000/v1/api/admin/'
var base_url = 'http://localhost:5000/v1/api/'
export default {
  meEndpoint: '/auth/me',
  loginEndpoint: admin_base_url + 'login',
  userLoginEndpoint: base_url + 'login',
  logoutEndpoint: base_url + 'logout',
  userCreateEndpoint: base_url + 'register',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
