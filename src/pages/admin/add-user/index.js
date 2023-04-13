// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormHelperText from '@mui/material/FormHelperText'
// ** Demo Components Imports


//api call
import { http } from 'src/hooks/httpRequset'
import authConfig from 'src/configs/auth'

//toster

import toast, { Toaster } from 'react-hot-toast';

const AddUser = () => {

  //schema
  const schema = yup.object().shape({
    email: yup.string().email('Enter the accurate email').required('Required'),
    firstname: yup.string().required('Required'),
    lastname: yup.string(),
    number: yup.number(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
  })

  //form
  const {
    control,
    setError,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  //Submit the form
  const onSubmit = async data => {
    const endPoint = authConfig.userCreateEndpoint
    const apiType = 'POST'
    const res = await http(data, endPoint, apiType)
    toast(res?.data?.message)
  }


  return (
    <DatePickerWrapper>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title='User Register' sx={{ color: '#000' }} />
            <CardContent>
              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='firstname'
                      label='First Name'
                      placeholder='Enter your first name'
                      {...register("firstname")}
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Icon icon='tabler:user' />
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.firstname && <FormHelperText sx={{ color: 'error.main' }}>{errors.firstname.message}</FormHelperText>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='lastname'
                      label='Lsst Name'
                      placeholder='Enter your last name'
                      {...register("lastname")}
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Icon icon='tabler:user' />
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.lastname && <FormHelperText sx={{ color: 'error.main' }}>{errors.lastname.message}</FormHelperText>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='email'
                      type='email'
                      label='Email'
                      placeholder='Enter your email address'
                      {...register("email")}
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Icon icon='tabler:mail' />
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='password'
                      type='password'
                      label='Password'
                      placeholder='Enter your password'
                      {...register("password")}
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Icon icon='tabler:mail' />
                          </InputAdornment>
                        )
                      }}
                    />
                    {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type='number'
                      name='phone_number'
                      label='Phone No.'
                      {...register("phone_number")}
                      placeholder='Enter phone number'
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Icon icon='tabler:phone' />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button size='large' type='submit' variant='contained' sx={{ mb: 4, backgroundColor: '#082846', color: '#fff', borderRadius: '10px', '&:hover': { backgroundColor: '#2978C2', color: '#fff' } }}>
                      Add User
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper >
  )
}

export default AddUser
