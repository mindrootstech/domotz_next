// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

import InventoryCardCustomBox from 'src/@core/components/card-statistics/custom-inventory-icon-box'
const Inventory = () => {
  // ** Hook
  const data = [
    {
      'stats': '23',
      'title': 'Healthy'
    },
    {
      'stats': '20',
      'title': 'Offline'
    },
    {
      'stats': '12',
      'title': 'with important offline devices'
    },
    {
      'stats': '25',
      'title': 'with security issues'
    },
    {
      'stats': '24',
      'title': 'Inactive'
    },

  ]
  return (
    <Grid container spacing={6}>
      {/* first */}
      <Box sx={{ m: 4 }}>
        <Grid container md={12} xs={12} spacing={3}>
          {data.map((item) => {
            return (
              <Grid item md={3} xs={4}>
                <InventoryCardCustomBox
                  stats={item.stats}
                  title={item.title}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      {/* first */}
      <Grid item md={7} xs={12}>
        <Card>
          <CardHeader title='Common' />
          <CardContent>
            <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
            <Typography sx={{ color: 'primary.main' }}>This card is visible to 'user' and 'admin' both</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={5} xs={12}>
        <Box sx={{ backgroundColor: '#EFF7FF', padding: '10px', borderRadius: '10px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ borderRadius: '10px' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Box>
      </Grid>
    </Grid>
  )
}


export default Inventory
