"use client"

import Counting from '@/components/Counting';
import Hero from '@/components/Hero'
import ImageGallary from '@/components/ImageGallary';
import Intro from '@/components/Intro';
import Outtro from '@/components/Outtro';
import Yay from '@/components/yay';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Hero />
      <Intro />
      <ImageGallary />
      <Counting />
      <Yay />
      <Outtro />
    </>
  )
}
