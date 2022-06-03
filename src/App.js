import { Routes, Route } from "react-router-dom";
import PageNav from "./components/page-nav";
import SocialNav from "./components/social-nav";
import MobileNav from "./components/mobile-nav/nav";
import Welcome from "./pages/welcome";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 relative grid lg:grid-cols-[auto_1fr_auto] items-center font-lato text-slate-50">
      <PageNav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <SocialNav />
    </div>
  );
}
