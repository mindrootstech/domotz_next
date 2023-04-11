// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Next Import
import { useRouter } from 'next/router'


// ** Components
import Autocomplete from 'src/layouts/components/Autocomplete'

// ** Hook Import
import { useAuth } from 'src/hooks/useAuth'
// ** Hooks

import navigation from 'src/navigation/vertical'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

const AppBarContent = props => {

  const router = useRouter()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }
  const [pageName, setPageName] = useState('')


  useEffect(() => {
    let route = router.pathname;
    console.log(route, 'route')
    navigation().map(element => {
      if (route == element.path) setPageName(element.title)
      if (element.children && element.children.length != 0) {
        element.children.map(child => {
          if (route == child.path) {
            setPageName(child.title)
          }
        })

      }
    });

  }, [router.pathname])

  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const auth = useAuth()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 500, fontSize: '2rem', lineHeight: 1.385, color: '#4D4D4D' }}>
          {pageName}
        </Typography>
        {hidden && !settings.navHidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon fontSize='1.5rem' icon='tabler:menu-2' />
          </IconButton>
        ) : null}
        {auth.user && <Autocomplete hidden={hidden} settings={settings} />}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <LanguageDropdown settings={settings} saveSettings={saveSettings} /> */}
        {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
        {auth.user && (
          <>
            {/* <ShortcutsDropdown settings={settings} shortcuts={shortcuts} /> */}
            {/* <NotificationDropdown settings={settings} notifications={notifications} /> */}
            <Box onClick={handleLogout} sx={{ cursor: 'pointer' }}>
              <Icon style={{ backgroundColor: '#E1F1FF', color: '#4C4C4C', padding: "5px", fontSize: '2rem', borderRadius: '5px' }} icon='tabler:logout' />
            </Box>
            {/* <UserDropdown settings={settings} /> */}
          </>
        )}
      </Box>
    </Box>
  )
}

export default AppBarContent
