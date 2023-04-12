// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Box from '@mui/material/Box'
const CardCustomBox = props => {
  // ** Props
  const {
    sx,
    stats,
    title,
    avatarIcon,
    avatarSize = 42,
    avatarIconSize = 26,
    avatarColor = 'primary'
  } = props

  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ ...sx, backgroundColor: '#EFF7FF', padding: '0px!important' }}>
      <CardContent sx={{ display: 'flex', p: '1 !important', alignItems: 'flex-start' }}>
        <CustomAvatar skin='light' color={avatarColor} sx={{ mb: 2.5, width: avatarSize, height: avatarSize }}>
          <Icon icon={avatarIcon} fontSize={avatarIconSize} />
        </CustomAvatar>
        <Box sx={{ ml: 2 }}>
          <Typography sx={{ color: '#4D4D4D' }}>{title}</Typography>
          <Typography sx={{ color: '#4D4D4D', fontWeight: '700' }}>{stats}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardCustomBox
