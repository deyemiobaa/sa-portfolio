import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useTitle from "./components/useTitle";
import PageNav from "./components/page-nav";
import SocialNav from "./components/social-nav";
import MobileNav from "./components/mobile-nav/nav";
import Welcome from "./pages/welcome";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import About from "./pages/about";

export default function App() {
  const location = useLocation()
  const state = useTitle(location.pathname)
  document.title = state
  
  useEffect(() => {
  }, [state])

  return (
    <div className="w-full min-h-screen bg-[#08070b]/[0.97] relative grid font-lato text-[#e4f0fa8c] text-base md:text-lg">
      <PageNav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SocialNav />
    </div>
  );
}
