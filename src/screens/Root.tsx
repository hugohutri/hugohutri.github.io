import { HashRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./PageContainer";

// TODO: Routes?

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageContainer />} />
      </Routes>
    </HashRouter>
  );
};

export default Root;
