import { Routes, Route } from "react-router-dom";
import PageNav from "./components/page-nav";
import SocialNav from "./components/social-nav";

export default function App() {
  return (
    <div className="w-full h-screen bg-neutral-900 flex justify-between">
      <PageNav />
      <SocialNav />
    </div>
  );
}
