import React from 'react';

import { Container, Card } from '@/component/index';
import { MENU } from '@/constants';

const AdditionalProject: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.ADDITIONAL_PROJECT}>
      <div className='col-span-12 flex font-sans font-bold text-xl mb-4 md:mb-10 text-gray-200 items-center justify-center'>
        <h3>My Personal Projects</h3>
      </div>
      <div className='col-span-12 grid grid-cols-12 gap-4'>
        <div
          data-aos='fade-up'
          data-aos-offset='100'
          className='col-span-12 md:col-span-4'>
          <Card
            title='Youtube Clone'
            description='Youtube clone created with react and tailwindcss'
            tags={['React.js', 'css']}
            link='https://yotubeclone.netlify.app/'
          />
        </div>
        <div
          data-aos='fade-up'
          data-aos-offset='200'
          className='col-span-12 md:col-span-4'>
          <Card
            title='Ikea Clone'
            description='Ikea clone created with react and tailwindcss'
            tags={['React.js', 'Tailwindcss']}
            link='https://ikeashopclone.netlify.app/'
            github='https://github.com/Danu710/Ikea-clone'
          />
        </div>
        <div
          data-aos='fade-up'
          data-aos-offset='200'
          className='col-span-12 md:col-span-4'>
          <Card
            title='Travel Property'
            description='Travel property created with Next.js and tailwindcss'
            tags={['Next.js', 'Tailwindcss']}
            link='https://travel-property-liard.vercel.app/'
            github='https://github.com/Danu710/travel-property'
          />
        </div>
      </div>
    </Container>
  );
};

export default AdditionalProject;
