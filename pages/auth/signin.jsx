import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { providers, useSession, signIn } from "next-auth/client";
import App from "@/components/layouts/index";
import Container from "@/components/Container";

export default function SignIn({ providers }) {
  // const router = useRouter();
  // const [ session ] = useSession();
  // const onBack = () => {
  //   router.push("/");
  // };

  // useEffect(() => {
  //   if (!session) return;


  //   router.push("/")
  // }, [session]);

  // if(session) {
  //   <App>
  //     <Container>
  //       Redirect...
  //     </Container>
  //   </App>
  // }

  return (
    <App>
      <Container>
        {/* <div className='flex flex-col justify-center items-center py-20'>
          <form className='flex w-full justify-center'>
            {Object.values(providers).map((provider) => (
              <div key={provider?.id} className='m-auto'>
                <button
                  type='button'
                  className='flex py-4 px-10 text-center border-2 border-yellow-300 border-solid'
                  onClick={() => signIn(provider?.id)}>
                  {provider?.name == "GitHub" ? <GitHubIcon /> : ""}
                  <div>Sign in with {provider?.name}</div>
                </button>
              </div>
            ))}
          </form>
          <div className='mt-20 cursor-pointer' onClick={onBack}>
            Back To Home
          </div>
        </div> */}
      </Container>
    </App>
  );
}

export async function getStaticProps(context) {
  // return {
  //   props: { providers: await providers(context) }, // will be passed to the page component as props
  // };
  return {
    props: {
      providers: ""
    }
  }
}

const GitHubIcon = () => (
  <div className='flex-shrink-0 w-max-content pr-2'>
    <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
      <g
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
      </g>
    </svg>
  </div>
);

const GoogleIcon = () => (
  <div className='flex-shrink-0 w-max-content pr-2'>
    <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
      <g fill='#000' fillRule='evenodd'>
        <path
          d='M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z'
          fill='#EA4335'></path>
        <path
          d='M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z'
          fill='#4285F4'></path>
        <path
          d='M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z'
          fill='#FBBC05'></path>
        <path
          d='M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z'
          fill='#34A853'></path>
        <path fill='none' d='M0 0h18v18H0z'></path>
      </g>
    </svg>
  </div>
);

const FBIcon = () => (
  <div className='flex-shrink-0 w-max-content pr-2'>
    <svg
      className='-ml-1'
      width='30'
      height='30'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='250 50 50 300'>
      {" "}
      <g fill='#000' fillRule='evenodd'>
        <path
          d='m410.096 200.048c0-71.818-58.23-130.048-130.048-130.048s-130.048 58.23-130.048 130.048c0 64.905 47.55 118.709 109.73 128.476v-90.875h-33.029v-37.601h33.029v-28.658c0-32.59 19.422-50.604 49.122-50.604 14.228 0 29.115 2.542 29.115 2.542v32.005h-16.405c-16.148 0-21.196 10.022-21.196 20.318v24.396h36.064l-5.761 37.601h-30.304v90.875c62.18-9.749 109.73-63.553 109.73-128.476z'
          fill='#1977f3'></path>
        <path
          d='m330.67 237.648 5.761-37.601h-36.064v-24.396c0-10.278 5.029-20.318 21.196-20.318h16.405v-32.005s-14.886-2.542-29.115-2.542c-29.7 0-49.122 17.996-49.122 50.604v28.658h-33.029v37.601h33.029v90.875c6.62 1.041 13.405 1.572 20.318 1.572s13.698-.549 20.318-1.572v-90.875h30.304z'
          fill='#fefefe'></path>
      </g>
    </svg>
  </div>
);
