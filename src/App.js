import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useTitle from "./components/useTitle";
import SocialNav from "./components/social-nav";
import MobileNav from "./components/mobile-nav/nav";
import Welcome from "./pages/welcome";
import Contact from "./pages/contact";
import MobileSocialNav from "./components/mobile-social-nav";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const location = useLocation()
  const state = useTitle(location.pathname)
  document.title = state
  
  useEffect(() => {
  }, [state])

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
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SocialNav />
      <MobileSocialNav />
    </div>
  );
}
