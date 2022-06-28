import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useTitle from "./components/useTitle";
import PageNav from "./components/page-nav";
import SocialNav from "./components/social-nav";
import MobileNav from "./components/mobile-nav/nav";
import Welcome from "./pages/welcome";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import MobileSocialNav from "./components/mobile-social-nav";
import About from "./pages/about";
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
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
      mirror: true,
      anchorPlacement: 'top-bottom',
      once: false
    });
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#08070b] relative grid font-lato text-[#d4d4d4] text-base md:text-lg">
      <PageNav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SocialNav />
      <MobileSocialNav />
    </div>
  );
}
