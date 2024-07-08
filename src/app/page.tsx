'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '@/component/Navbar';

import {
  Homepage,
  About,
  Experience,
  Work,
  AdditionalProject,
  Contact,
} from '@/views/index';

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
      <Navbar />
      <Homepage />
      <About />
      <Experience />
      <Work />
      <AdditionalProject />
      <Contact />
    </div>
  );
}
