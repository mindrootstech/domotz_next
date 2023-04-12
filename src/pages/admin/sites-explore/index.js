import React, { useState } from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CardCustomBox from 'src/@core/components/card-statistics/custom-icon-box'
import AgentCardCustomBox from 'src/@core/components/card-statistics/custom-agent-icon-box'
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl'
import { useForm } from 'react-hook-form'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Icon from 'src/@core/components/icon'
const SiteExplore = () => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
  })

  return (
    < Grid container spacing={6} >
      <Grid item md={7} xs={12}>
        {/* search */}
        <Box container fullWidth spacing={3}>
          <form onSubmit={handleSubmit} fullWidth>
            <FormControl sx={{ width: '100%', pb: '20px' }}>
              <Typography sx={{ color: '#fff', fontSize: '14px', mb: '5px' }}>Email </Typography>
              <TextField
                fullWidth
                name='lastname'
                {...register("lastname")}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='tabler:search' />
                    </InputAdornment>
                  ),
                  placeholder: 'insert a text to filter Sites',
                  style: {
                    color: '#4D4D4D',
                    backgroundColor: '#EFF7FF',
                    height: '50px',
                    borderRadius: '10px',
                    border: '0px'
                  }
                }}
              />

            </FormControl>
          </form>
        </Box>
        {/* search */}
        <Grid container spacing={3}>
          <Typography sx={{ color: '#222222', fontWeight: 400, m: 4, fontSize: '14px' }}>Show</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <CardCustomBox
              stats='2'
              avatarColor='success'
              title='Healthy'
              avatarIcon='tabler:activity'
            />
          </Grid>
          <Grid item md={4}>
            <CardCustomBox
              stats='11'
              avatarColor='error'
              title='Issues'
              avatarIcon='tabler:exclamation-circle'
            />
          </Grid>
          <Grid item md={4}>
            <CardCustomBox
              stats='12'
              avatarColor='warning'
              title='Down'
              avatarIcon='tabler:arrow-bar-to-down'
            />
          </Grid>
        </Grid>
        {/* Next */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item md={6}>
            <AgentCardCustomBox
              bgcolor='#FFE8D2'
              title='Inactive agents'
              count='10'
            />
          </Grid>
          <Grid item md={6}>
            <AgentCardCustomBox
              bgcolor='#ECFDE4'
              title='Active agents'
              count='15'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5} xs={12}>
        <Box sx={{ backgroundColor: '#EFF7FF', padding: '10px', borderRadius: '10px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ borderRadius: '10px' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Box>
      </Grid>

    </Grid >
  )
}


export default SiteExplore
