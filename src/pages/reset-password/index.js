import { useEffect, useState } from 'react'
// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'

// ** Next Import
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FallbackSpinner from 'src/@core/components/spinner'
import ExpireLink from 'src/@core/components/expire-link'
// ** Third Party Imports
import * as Yup from "yup";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Router } from 'next/router'

//api call
import { http } from 'src/hooks/httpRequset'
import authConfig from 'src/configs/auth'

//toster

import toast, { Toaster } from 'react-hot-toast';

// Styled Components
const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 650,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  fontSize: '1rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ResetPassword = () => {
  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      marginBottom: '5px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '5px'
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '5px'
    }
  }))

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirm_password: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const {
    control,
    setError,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  })
  const [userData, setUserData] = useState({})
  const router = useRouter()
  const params = router.query

  useEffect(() => {
    const decodedToken = jwt.decode(params.token)
    setUserData(decodedToken)
  }, [params.token]);


  const onSubmit = async data => {
    data.id = userData._id
    console.log(data, 'daya')
    const endPoint = authConfig.userresetPasswordEndpoint
    const apiType = 'POST'
    const res = await http(data, endPoint, apiType)
    toast(res?.data?.message, {
      duration: 4000,
    })
  }


  if (!params.token) {
    // The token has expired
    return <FallbackSpinner />
  }
  if (userData?.exp < Date.now() / 1000) {
    return <ExpireLink />
  }
  return (
    <Box className='content-right' sx={{ backgroundColor: '#082846', justifyContent: 'center' }}>
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400, border: '1px solid #A8EFFF', padding: '40px', borderRadius: '20px ', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>

            <Box sx={{ my: 6 }}>
              <Box sx={{ mt: 1, mb: 6, display: 'flex', justifyContent: 'center' }}> <Img alt='logo' src='/images/logo.svg' /></Box>
              <Box sx={{ my: 4 }}>
                <Typography sx={{ mb: 1.5, fontWeight: 800, fontSize: '1.60rem', lineHeight: 1.385, color: '#fff' }}>
                  {/* {`Welcome to ${themeConfig.templateName}! 👋🏻`} */}Reset Password?
                </Typography>
              </Box>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Typography sx={{ color: '#fff', fontSize: '14px', mb: '5px' }}>New Password </Typography>
              <Controller
                name='password'

                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    // label='Password'
                    fullwidth
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    type='password'
                    {...register("password")}
                    error={Boolean(errors.password)}
                    InputProps={{
                      style: {
                        color: '#fff',
                        backgroundColor: '#082846',
                        height: '50px',
                        borderRadius: '10px',
                      }
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: 'error.main' }} id=''>
                  {errors.password.message}
                </FormHelperText>
              )}
              <Typography sx={{ color: '#fff', fontSize: '14px', mb: '5px' }}>Confirm Password </Typography>
              <Controller
                name='confirm_password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    // label='Password'
                    fullwidth
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    type='password'
                    {...register("confirm_password")}
                    error={Boolean(errors.password)}
                    InputProps={{
                      style: {
                        color: '#fff',
                        backgroundColor: '#082846',
                        height: '50px',
                        borderRadius: '10px',
                      }
                    }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                  />
                )}
              />
              {errors.confirm_password && (
                <FormHelperText sx={{ color: 'error.main' }} id=''>
                  {errors.confirm_password.message}
                </FormHelperText>
              )}
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4, mt: 4, backgroundColor: '#fff', color: '#082846', borderRadius: '10px', '&:hover': { backgroundColor: '#2978C2', color: '#fff' } }}>
                Update
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='/login' sx={{ color: '#fff' }}>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Back to login</span>
                </LinkStyled>
              </Typography>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

ResetPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ResetPassword.guestGuard = true

export default ResetPassword
