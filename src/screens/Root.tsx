import { HashRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./PageContainer";

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageContainer />} />
        <Route path="test" element={<p>Test</p>} />
        <Route path="/test" element={<p>/Test</p>} />
      </Routes>
    </HashRouter>
  );
};

export default Root;
