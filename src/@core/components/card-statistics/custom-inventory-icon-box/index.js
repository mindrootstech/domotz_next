// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Box from '@mui/material/Box'
const InventoryCardCustomBox = props => {
  // ** Props
  const {
    sx,
    stats,
    title,
  } = props

  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ ...sx, backgroundColor: '#EFF7FF', padding: '0px!important' }}>
      <CardContent sx={{ display: 'flex', p: '1 !important', alignItems: 'center' }}>
        <CustomAvatar skin='light' sx={{ p: 0, width: 42, height: 42, color: '#E3F6FF' }}>
          <Typography sx={{ color: '#4D4D4D', fontWeight: 700 }}>{stats}</Typography>
        </CustomAvatar>
        <Box sx={{ ml: 2 }}>
          <Typography sx={{ color: '#4D4D4D' }}>{title}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default InventoryCardCustomBox
