import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

import EnigmaImage from '../components/about/enigma-image'
import AboutEnigma from '../components/about/about-enigma'

export default function About() {
  return (
    <div>
    <Head>
      <title>About</title>
      <link rel='icon' href='favicon.ico' />
    </Head> 
    <Navbar/>
    <div className='grid h-screen w-screen bg-custom-light grid-cols-2'>
    <EnigmaImage />
    <AboutEnigma />
    <Footer/>
    </div>
    </div>
  )
}