// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'
import jwt from 'jwt-decode'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  userlogin: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        const userData = jwt(storedToken)
        setUser({ ...userData })
        setLoading(false)
      } else {
        localStorage.removeItem('userData')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        setUser(null)
        setLoading(false)
        const returnUrl = router.pathname.includes('admin')
        returnUrl ?? router.replace('/admin/login')
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback) => {
    params.role = "admin"
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async response => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.access_token)
        window.localStorage.setItem(authConfig.onTokenExpiration, response.data.refresh_token)
        const returnUrl = router.query.returnUrl
        const userData = jwt(response.data.access_token)
        setUser({ ...userData })
        window.localStorage.setItem('userData', JSON.stringify(userData))
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }
  const userHandleLogin = (params, errorCallback) => {
    axios
      .post(authConfig.userLoginEndpoint, params)
      .then(async response => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.access_token)
        window.localStorage.setItem(authConfig.onTokenExpiration, response.data.refresh_token)
        const returnUrl = router.query.returnUrl
        const userData = jwt(response.data.access_token)
        setUser({ ...userData })
        window.localStorage.setItem('userData', JSON.stringify(userData))
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }


  const handleLogout = () => {
    let refresh_token = window.localStorage.getItem(authConfig.onTokenExpiration)
    axios
      .post(authConfig.logoutEndpoint, { refresh_token: refresh_token }, {
        headers:
        {
          "authorization": `Bearer ${refresh_token}`
        }
      })
      .then(async response => {
        setUser(null)
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
        window.localStorage.removeItem(authConfig.onTokenExpiration)
        router.push('/login')
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })

  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    userlogin: userHandleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
