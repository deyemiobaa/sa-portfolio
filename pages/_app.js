import '../styles/globals.css'
import 'aos/dist/aos.css';

import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router'
import SocialNav from '../components/SocialNav'
import MobileSocialNav from '../components/MobileSocialNav'
import MobileNav from '../components/MobileNav';
import { useEffect } from 'react'
import AOS from 'aos';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    const title = useTitle(router.pathname)
    document.title = title
  }, [router.pathname])

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-in-out',
      offset: 100,
      anchorPlacement: 'top-bottom',
      once: false
    });
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#08070b] relative grid font-league text-[#d4d4d4] text-xl font-light">
      <MobileNav />
      <main className="px-6 leading-7 tracking-wider md:px-24 lg:leading-10">
        <Component {...pageProps} />
      </main>
      <SocialNav />
      <MobileSocialNav />
      <Analytics />
    </div>

  )
}

export default MyApp

function useTitle(location) {
  if (location === '/') {
    return 'Sodiq | Software Developer'
  } else {
    return `Sodiq | ${location[1].toUpperCase()}${location.slice(2)}`
  }
}