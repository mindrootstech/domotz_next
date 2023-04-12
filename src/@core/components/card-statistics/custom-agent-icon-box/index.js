// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { textTransform } from '@mui/system'
const AgentCardCustomBox = props => {
  // ** Props
  const {
    sx,
    bgcolor,
    title,
    count,
    avatarSize = 42,
    avatarColor = 'secondary'
  } = props

  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ ...sx, backgroundColor: bgcolor, padding: '0px!important' }}>
      <CardContent>
        <Box sx={{ display: 'flex', p: '0 !important', alignItems: 'center' }}>
          <CustomAvatar skin='light' color={avatarColor} sx={{ p: 0, width: avatarSize, height: avatarSize }}>
            <Typography sx={{ color: '#4D4D4D', fontWeight: 700 }}>{count}</Typography>
          </CustomAvatar>
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ color: '#4D4D4D' }}>{title}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button sx={{ backgroundColor: '#fff', color: '#000000', borderRadius: '50px', fontSize: '12px', textTransform: 'capitalize', padding: '5px 10px', '&:hover': { backgroundColor: '#E3F6FF' } }}>Review</Button>
        </Box>
      </CardContent>

    </Card>
  )
}

export default AgentCardCustomBox
