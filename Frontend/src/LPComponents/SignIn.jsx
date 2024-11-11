import React from 'react';
import Logo from '../assets/BuksuLogo.png';
import { useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import theme from '@material-tailwind/react/theme';

function SignIn() {
  const google = window.google;

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token: ', response.credential);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '863437018339-ervi46asct1gs4d1t2tjuuf6fms4vo8q.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signin-in-div'), {
      theme: 'outlined',
      size: 'large',
    });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to admin page
      navigate('/admin');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <section
      className='grid max-w-screen-xl gap-8 md:grid-cols-2  md:items-center md:text-left  px-10 py-5 mx-auto'
      id='signIn'
    >
      <div className='  border-blue-400 flex justify-center '>
        <div>
          <img className='w-full h-full   rounded-lg ' src={Logo} alt='' />
        </div>
      </div>
      <div className='md: pt-28 md: flex justify-center'>
        <Card className='w-96 '>
          <CardHeader
            variant='gradient'
            color='blue'
            className='mb-4 grid h-16 place-items-center'
          >
            <Typography variant='h3' color='white'>
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className='flex flex-col gap-4'>
            <Input
              label='Email'
              size='lg'
              color='blue'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label='Password'
              size='lg'
              color='blue'
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className='-ml-2.5' color='blue'>
              <Checkbox label='Remember Me' color='blue' />
            </div> */}
          </CardBody>
          <CardFooter className='pt-1 '>
            <div className='flex flex-col items-center gap-4'>
              <Button
                variant='gradient'
                color='blue'
                fullWidth
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <div id='signin-in-div'></div>

              {/* <Button
                size='sm'
                variant='outlined'
                color='blue'
                className='flex justify-center items-center gap-3 '
                fullWidth
              >
                <img
                  src='https://docs.material-tailwind.com/icons/google.svg'
                  alt='metamask'
                  className='h-6 w-6'
                />
                Continue with Google
              </Button> */}
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default SignIn;
