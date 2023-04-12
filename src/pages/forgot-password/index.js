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
// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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

const ForgotPassword = () => {
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
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  })

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  return (
    <Box className='content-right' sx={{ backgroundColor: '#082846', justifyContent: 'center' }}>
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
          <ForgotPasswordIllustration
            alt='forgot-password-illustration'
            src={`/images/pages/auth-v2-forgot-password-illustration-${theme.palette.mode}.png`}
          />
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
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400, border: '1px solid #A8EFFF', padding: '40px', borderRadius: '20px ', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>

            <Box sx={{ my: 6 }}>
              <Box sx={{ mt: 1, mb: 6, display: 'flex', justifyContent: 'center' }}> <Img alt='logo' src='/images/logo.svg' /></Box>
              <Box sx={{ my: 4 }}>
                <Typography sx={{ mb: 1.5, fontWeight: 800, fontSize: '1.60rem', lineHeight: 1.385, color: '#fff' }}>
                  {/* {`Welcome to ${themeConfig.templateName}! 👋🏻`} */}Forgot Password?
                </Typography>
              </Box>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    autoFocus
                    // label='Email'
                    fullWidth
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
              {errors.email && <FormHelperText sx={{ color: 'error.main', textTransform: 'capitalize' }}>{errors.email.message}</FormHelperText>}
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4, mt: 4, backgroundColor: '#fff', color: '#082846', borderRadius: '10px', '&:hover': { backgroundColor: '#2978C2', color: '#fff' } }}>
                Send reset link
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
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
