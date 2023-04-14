// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
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
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: '#fff'
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: '#fff'
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  rememberMe: yup.boolean()
})

const defaultValues = {
  password: 'Admin@123',
  email: 'admin@admin.com'
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'
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
  return (
    <Box className='content-right' sx={{ backgroundColor: '#082846', justifyContent: 'center' }} >
      {/* {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <LoginIllustration alt='login-illustration' src={`/images/pages/${imageSource}-${theme.palette.mode}.png`} />
          <FooterIllustrationsV2 />
        </Box>
      ) : null} */}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400, border: '1px solid #A8EFFF', padding: '40px', borderRadius: '20px ', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>

            <Box sx={{ my: 6 }}>
              <Box sx={{ mt: 1, mb: 6, display: 'flex', justifyContent: 'center' }}> <Img alt='logo' src='/images/logo.svg' /></Box>
              <Box sx={{ my: 4 }}>
                <Typography sx={{ mb: 1.5, fontWeight: 800, fontSize: '1.60rem', lineHeight: 1.385, color: '#fff' }}>
                  {/* {`Welcome to ${themeConfig.templateName}! 👋🏻`} */}Login
                </Typography>
              </Box>
              {/* <Typography sx={{ color: 'text.secondary' }}>
                Please sign-in to your account and start the adventure
              </Typography> */}
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Typography sx={{ color: '#fff', fontSize: '14px', mb: '5px' }}>Email </Typography>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      // label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      InputProps={{
                        placeholder: 'admin@vuexy.com',
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
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 1.5 }}>
                <Typography sx={{ color: '#fff', fontSize: '14px', mb: '5px' }}>Password </Typography>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      // label='Password'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      type='password'
                      error={Boolean(errors.password)}
                      InputProps={{
                        placeholder: 'Password',
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
              </FormControl>

              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox checked={rememberMe} color="success" onChange={e => setRememberMe(e.target.checked)}
                    sx={{
                      color: '#000',
                      '&:checked': {
                        color: '#000',
                        backgroundColor: '#000'
                      },
                      '&:unchecked': {
                        color: '#000',
                        backgroundColor: '#000'
                      }
                    }}
                  />}
                />

              </Box>
              <Box sx={{
                mb: 1.75,
              }}>
                {/* <LinkStyled href='/forgot-password' sx={{ fontSize: '14px' }}>Forgot Password?</LinkStyled> */}
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4, backgroundColor: '#fff', color: '#082846', borderRadius: '10px', '&:hover': { backgroundColor: '#2978C2', color: '#fff' } }}>
                Login
              </Button>

            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
