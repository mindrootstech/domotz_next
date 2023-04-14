// ** React Imports
import { useContext, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InventoryCardCustomBox from 'src/@core/components/card-statistics/custom-inventory-icon-box'
import InventoryTable from 'src/@core/components/admin-table'

//google map
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';


const Inventory = () => {
  // ** Hook

  const [tabindex, setTabindex] = useState(1);
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
      'title': 'With important offline devices'
    },
    {
      'stats': '25',
      'title': 'With security issues'
    },
    {
      'stats': '24',
      'title': 'Inactive'
    },
  ]

  const data1 = [
    {
      'stats': '132',
      'title': 'With important offline devices'
    },
    {
      'stats': '0',
      'title': 'With security issues'
    },
    {
      'stats': '233',
      'title': 'Healthy'
    },
    {
      'stats': '230',
      'title': 'Offline'
    },
    {
      'stats': '4',
      'title': 'Inactive'
    },
  ]


  // Google Map Location Manager

  const libraries = ["places"];
  const mapContainerStyle = {
    width: '100%',
    height: '450px',
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
    googleMapsApiKey: process.env.googleMapKey,
    libraries,
  });


  return (
    <Grid container spacing={6}>
      {/* first */}
      <Box sx={{ m: 4, display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <Box sx={{}}>
          {tabindex == 1 &&
            <>
              <Button onClick={() => setTabindex(1)} sx={{ backgroundColor: '#003465', color: '#fff', padding: '8px 35px', marginRight: '10px', '&:hover': { backgroundColor: '#003465' } }}>Sites</Button>
              <Button onClick={() => setTabindex(2)} sx={{ backgroundColor: '#EFF7FF', color: '#4D4D4D', padding: '8px 35px' }}>Devices</Button>
            </>
          }
          {tabindex == 2 &&
            <>
              <Button onClick={() => setTabindex(1)} sx={{ backgroundColor: '#EFF7FF', color: '#4D4D4D', padding: '8px 35px', marginRight: '10px', }}>Sites</Button>
              <Button onClick={() => setTabindex(2)} sx={{ backgroundColor: '#003465', padding: '8px 35px', color: '#fff', '&:hover': { backgroundColor: '#003465' } }}>Devices</Button>
            </>
          }
        </Box>
        <Box>
          <Typography sx={{ color: '#4D4D4D', cursor: 'pointer' }}>Refresh Data</Typography>
        </Box>
      </Box>
      {tabindex == 1 &&
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
      }
      {tabindex == 2 &&
        <Box sx={{ m: 4 }}>
          <Grid container md={12} xs={12} spacing={3}>
            {data1.map((item) => {
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
      }
      {/* first */}
      <Grid item md={7} xs={12}>
        <InventoryTable />
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
    </Grid>
  )
}


export default Inventory
