import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

function About() {
  return (
    <div className='container mx-auto px-4 py-8 md:py-16 lg:py-24' id='aboutUs'>
      <Card className='flex flex-col md:grid md:grid-cols-2 overflow-hidden'>
        <CardHeader
          shadow={false}
          floated={false}
          className='relative w-full md:w-full h-64 md:h-full rounded-b-none md:rounded-r-none'
        >
          <img
            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            alt='card-image'
            className='h-full w-full object-cover'
          />
        </CardHeader>
        <CardBody className='p-6 md:p-8 lg:p-10'>
          <Typography variant='h6' color='gray' className='mb-4 uppercase'>
            Buksu Budgeting Office
          </Typography>
          <Typography variant='h4' color='blue-gray' className='mb-2'>
            Lyft launching cross-platform service this week
          </Typography>
          <Typography color='gray' className='mb-8 font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            deleniti nostrum incidunt velit eum eius assumenda et quibusdam
            dicta expedita maiores natus possimus laborum explicabo, aliquam
            debitis! Commodi, corrupti earum.
          </Typography>
          <a href='#' className='inline-block'>
            <Button variant='text' className='flex items-center gap-2'>
              Learn More
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
export default About;
