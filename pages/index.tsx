import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/home-page/Layout';

export default function Home() {
  return (
    <div id='home-page'>
    <Head>
      <title>My Enigma App</title>
      <link rel='icon' href='favicon.ico' />
    </Head> 
    <Navbar />
    <Layout />
    <Footer/>
    </div>
    
  )
}
