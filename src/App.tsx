import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    const root = document.documentElement;
    const scrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = scrollBehavior;
  }, [pathname, hash]);

  return null;
};

const App = () => <><ScrollToTop /><Routes><Route path="/" element={<Index />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="*" element={<NotFound />} /></Routes></>;

export default App;
