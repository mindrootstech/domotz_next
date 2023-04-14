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

//google map
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

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

  // Google Map Location Manager

  const libraries = ["places"];
  const mapContainerStyle = {
    width: '100%',
    height: '550px',
    borderRadius: '10px',
  };
  const center = {
    lat: 30.7333,
    lng: 76.7794,
  };

  const markers = [
    {
      position: { lat: 30.7333, lng: 76.7794 },
      title: "Marker 1"
    },
    {
      position: { lat: 30.6425, lng: 76.8173 },
      title: "Marker 2"
    },
    {
      position: { lat: 30.6953, lng: 76.8436 },
      title: "Marker 3"
    },
    {
      position: { lat: 30.3453, lng: 76.3234 },
      title: "Marker 4"
    },
  ];

  //Map 
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'dfgfdgfgfdg',
    libraries,
  });

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
          {loadError && "Error loading maps"}
          {!isLoaded ? "Loading maps..." :
            < GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              {markers.map(marker => (
                <Marker
                  key={marker.title}
                  position={marker.position}
                  title={marker.title}
                />
              ))}
            </GoogleMap>
          }
        </Box>
      </Grid>

    </Grid >
  )
}


export default SiteExplore
