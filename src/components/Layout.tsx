import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="custom-container relative">
      <Header />
      <main className="grid gap-[140px] mb-[140px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
