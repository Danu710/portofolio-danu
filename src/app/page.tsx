'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head>
        <title>danu</title>
        <meta
          name='description'
          content='personal website created by nextjs typescript'
        />
      </Head>
      {/* <Navbar />
      <Homepage />
      <About />
      <Experience />
      <Work />
      <AdditionalProject />
      <Contact /> */}
    </div>
  );
}
