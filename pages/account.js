import React from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import LoginScreen from '@/components/Form';

export default function account() {
  return (
    <div>
        <Hero heading='Your Account' message=''/>
        <LoginScreen />

        <Footer />
    </div>
  )
}