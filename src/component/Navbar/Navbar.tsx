import React, { useState } from 'react';
import Image from 'next/image';
import { AlignRight, X } from 'react-feather';

import Drawer from '@/component/Drawer';
import { LIST_MENU, MENU } from '@/constants';

interface MenuProps {
  onClose: () => void;
}

const Menus: React.FC<MenuProps> = ({ onClose }) => {
  console.log('list menu', LIST_MENU);
  return (
    <div className='flex flex-col sm:flex-row font-mono text-xs items-center justify-center h-full'>
      {LIST_MENU.map((menu, index) => {
        return (
          <a
            key={menu}
            href={`#${menu}`}
            className='capitalize ml-0 sm:ml-10 mb-10 sm:mb-0'
            onClick={() => onClose()}>
            <span className='text-lightGreen pr-2'>{index + 1}.</span>
            {menu}
          </a>
        );
      })}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer isVisible={isOpenDrawer} onClose={() => setOpenDrawer(false)}>
        <React.Fragment>
          <div className='p-5 absolute right-0'>
            <X
              className='cursor-pointer text-gray-50 hover:text-gray-200'
              onClick={() => setOpenDrawer(false)}
            />
          </div>
          <Menus onClose={() => setOpenDrawer(false)} />
        </React.Fragment>
      </Drawer>
      <div className='z-20 px-5 md:px-12 fixed flex justify-between items-center w-full  bg-darkBlue'>
        <div>
          <a href={`#${MENU.HOMEPAGE}`}>
            <Image
              src='/danu.png'
              alt='hellotoms-logo'
              width={85}
              height={55}
              quality={100}
            />
          </a>
        </div>
        <div className='block sm:hidden'>
          <AlignRight
            className='text-gray-200 cursor-pointer'
            onClick={() => setOpenDrawer(true)}
          />
        </div>
        <div className='hidden sm:block'>
          <Menus onClose={() => setOpenDrawer(false)} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
