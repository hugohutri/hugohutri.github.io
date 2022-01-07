import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./PageContainer";

// TODO: Routes
/* 
<HashRouter>
    <Routes>
        <Route path="/" element={<PageContainer />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
</HashRouter> 
*/

const Root = () => {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
