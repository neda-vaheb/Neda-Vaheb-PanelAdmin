import Head from 'next/head'
import { useRouter } from 'next/router'

import { parse } from 'cookie';
import { useEffect } from 'react';

export default function Home({token}) {
  const router =useRouter();
  useEffect(() => {
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/products');
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>Panel Admin Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/amazon.svg" />
      </Head>
    
     
    </>
  )
}
export async function getServerSideProps({ req }) {
  const cookies = parse(req.headers.cookie || '');
  const token = cookies.token || null; 

  return {
    props: {
      token,
    },
  };
}

