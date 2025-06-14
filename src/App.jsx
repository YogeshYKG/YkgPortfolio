import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavProvider } from "./components/Header/NavContext";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Referals from "./components/Referals/Referals";
import Contact from "./components/ContactMe/Contact";
import Footer from "./components/Footer/Footer";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowCase";
import SkillSet from "./components/SkillSet/SkillSet";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout><About /><Hero /></Layout>} />
      <Route path="/home" element={<Layout><About /><Hero /></Layout>} />
      <Route path="/Skills" element={<Layout><SkillSet /></Layout>} />
      <Route path="/Projects" element={<Layout><ProjectShowcase /></Layout>} />
      <Route path="/Portfolio" element={<Layout><About /><ProjectShowcase /><Referals /><SkillSet /></Layout>} />
      <Route path="/Referals" element={<Layout><Referals /></Layout>} />
      <Route path="/Contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  </>
);

const App = () => {
  return (
    <NavProvider>
      <Router>
        <AppRoutes />
      </Router>
    </NavProvider>
  );
};

export default App;
