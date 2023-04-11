// ** React Imports
import { useContext, useEffect, useState } from 'react'

// ** Component Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

const CanViewNavLink = props => {
  // ** Props
  const [userRole, setUserRole] = useState('')
  const { children, navLink } = props
  useEffect(() => {
    const userData = window.localStorage.getItem('userData')
    const roleData = JSON.parse(userData)
    setUserRole(roleData?.role)
  }, [])
  // ** Hook
  const ability = useContext(AbilityContext)
  if (navLink && navLink.type === userRole) {
    return <>{children}</>
  }
  // if (navLink && navLink.auth === false) {

  // } else {
  //   return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
  // }
}

export default CanViewNavLink
