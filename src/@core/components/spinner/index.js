// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()
  const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      marginBottom: '20px',
      marginTop: '20px',
      padding: '10px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      marginTop: '20px',
      padding: '10px'
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '20px',
      marginTop: '20px',
      padding: '10px'
    }
  }))
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <Img alt='logo' src='/images/favicon.png' />

      <CircularProgress disableShrink sx={{ mt: 6, color: '#082846' }} />
    </Box>
  )
}

export default FallbackSpinner
