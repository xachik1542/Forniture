import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./header/Header";
import Home from "./page/home/Home";
import Portfolio from "./page/portfolio/Portfolio";
import Project from "./page/project/Project";
import Service from "./page/service/Service";
import Service_Page from "./page/service_page/Service_Page";
import Calculate_Page from "./page/calculate/Calculate_Page";
import Work from "./page/work_page/Work";
import About from "./page/about/About";
import Blog from "./page/blog/Blog";
import Blog_Page from "./page/blog_page/Blog_Page";
import Favs from "./page/favs/Favs";
import Contact from "./page/contact/Contact";
import Policy from "./page//policy/Policy";
import Footer from "./footer/Footer";
import Logo from "./Footer_Logo/Logo";
import { useEffect } from "react";
import Error_Url from "./error_url/Error_Url";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.app_block}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/page/:id" element={<Service_Page />} />
        <Route path="/calculate" element={<Calculate_Page />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog_Page />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Error_Url />} />
      </Routes>
      <Footer />
      <Logo />
    </div>
  );
}

export default App;
