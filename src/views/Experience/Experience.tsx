'use client';
import React, { useCallback, useState } from 'react';

import { Container, Tabs, OccupationTitle, List } from '@/component/index';
import { MENU, EXPERIENCE, COMPANY } from '@/constants';

const Experience: React.FC = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>(
    COMPANY.PT_PILIHANMU_INDONESIA_JAYA
  );

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <Container id={MENU.EXPERIENCE} className='pt-24 md:mb-24'>
      <div
        data-aos='fade-up'
        className='col-span-12 flex font-sans font-semibold text-2xl mb-4 text-gray-200 items-center justify-center'>
        <span className='text-lightGreen pr-2 font-mono text-lg'>#2.</span>
        <h3>{`Where I've worked ⚡`}</h3>
      </div>
      <div data-aos='fade-up' className='col-span-12 mt-4'>
        <div className='mx-auto'>
          <div className='w-12/12 grid grid-cols-12 font-mono'>
            <Tabs
              menu={EXPERIENCE}
              onChange={handleTab}
              currentActive={currentTab}
            />
            <div className='col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-9 mt-5 sm:mt-0 font-sans text-gray-300'>
              {currentTab === COMPANY.PT_PILIHANMU_INDONESIA_JAYA && (
                <div>
                  <OccupationTitle
                    title='Front End Developer Internship'
                    company='PT Pilihanmu Indonesia Jaya'
                    start='February 2024'
                    end='June 2024'
                  />
                  <div className='mt-4'>
                    <List>
                      Created an Admin Dashboard that handles student purchases
                      and others.
                    </List>
                    <List>
                      Making the figma table component design into code.
                    </List>
                    <List>
                      Carry out unit testing using cypress in each section of
                      the admin table
                    </List>
                    <List>Created a CRUD validation form for each table.</List>
                    <List>
                      Created SSR with next.js handling api handler from backend
                      team
                    </List>
                    <List>Created Component reusable & Custom Hooks</List>
                  </div>
                </div>
              )}

              {currentTab === COMPANY.PT_OMNIFIT_SOLUSI_NUSANTARA && (
                <div>
                  <OccupationTitle
                    title='Front End Developer Internship'
                    company='PT Omnifit Solusi Nusantara'
                    start='December 2023'
                    end='February 2024'
                  />
                  <div className='mt-4'>
                    <List>
                      Develop user and admin features for paramedic doctors and
                      pharmacies.
                    </List>
                    <List>
                      Develop a function FitDoc - Anamnesis + Questionnaire.
                    </List>
                    <List>Develop Draft Diagnosis for patient.</List>
                    <List>Developed a self-diagnostic fitdoc feature..</List>
                  </div>
                </div>
              )}
              {currentTab === COMPANY.SERNADE_STORY && (
                <div>
                  <OccupationTitle
                    title='Front End Developer Internship'
                    company='Sernade Story'
                    start='September 2023'
                    end='November 2023'
                  />
                  <div className='mt-4'>
                    <List>
                      Write code to implement visual elements into web
                      applications.
                    </List>
                    <List>Building reusable code for future use.</List>
                    <List>
                      Developing features to enhance the user experience
                    </List>
                    <List>Collaborate with backend and ui/ux team.</List>
                    <List>Create Chat App with vendor and user.</List>
                  </div>
                </div>
              )}
              {currentTab === COMPANY.BTPN_SYARIAH && (
                <div>
                  <OccupationTitle
                    title='Fullstack Web Developer Internship'
                    company='BTPN Syariah'
                    start='May 2023'
                    end='June 2023'
                  />
                  <div className='mt-4'>
                    <List>
                      Finishing various task related with the activity of
                      Fullstack Developer from BTPN Syariah.
                    </List>
                    <List>
                      Creating Rest Full api with Golang Authentication
                      Authorization user &CRUD user.
                    </List>
                    <List>Learned Basic Vue.js</List>
                  </div>
                </div>
              )}
              {currentTab === COMPANY.SMK_GANESA_SATRIA && (
                <div>
                  <OccupationTitle
                    title='IT Operation'
                    company='BTPN Syariah'
                    start='June 2022'
                    end='Aug 2022'
                  />
                  <div className='mt-4'>
                    <List>
                      Create logo design for social media content and other
                      design.
                    </List>
                    <List>
                      Perform troubleshooting, resolve network and system
                      hardware problems.
                    </List>
                    <List>Create a school blog.</List>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
