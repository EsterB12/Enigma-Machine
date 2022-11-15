import TypeWriter from './typewriter-svg.svg';
import React from 'react';
import Image from 'next/image';
import { ENIGMA_LINKS } from './navbarlinks';
import Link from 'next/link';


export default function Navbar() {
    return (
        <div className="w-screen h-20 bg-custom-burnt flex flex-row justify-between px-4 items-center"> 
            <div>
            <Image src={TypeWriter} alt='myimage' className='h-14 w-14 ml-6'>
            </Image>
            </div>
            <nav className='m-36 flex gap-6'>
            {ENIGMA_LINKS.map((navLink) => (
              <div
                key={navLink.title}
                className='group relative items-center py-6 text-white'
              >
                <Link href={navLink.href} passHref legacyBehavior={true}>
                  <a className='hover:opacity-70'>{navLink.title}</a>
                </Link>
              </div>
            ))}
          </nav>
          <div>
            <button id='home-btn' className='h-auto w-auto px-3 py-3 rounded-xl bg-custom-light hover:opacity-70' onClick={
                event => window.location.href='/'
            }>Back to Home</button>
            </div>      
        </div>
    )
}

