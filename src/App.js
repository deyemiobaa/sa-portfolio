import { Routes, Route } from "react-router-dom";
import PageNav from "./components/page-nav";
import SocialNav from "./components/social-nav";
import MobileNav from "./components/mobile-nav";
import Welcome from "./pages/welcome";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-900 relative lg:grid lg:grid-cols-[auto_1fr_auto] items-center">
      <PageNav />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <SocialNav />
    </div>
  );
}
