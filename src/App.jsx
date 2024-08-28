import { About } from "./pages/about/about";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/navbar";
import { Footer } from "./layout/footer";
import { Home } from "./pages/home/home";
import { Error } from "./pages/error/error";
import { DiscrPage } from "../src/pages/discrPage/discrPage";




function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/*" element={<Error />} />
        <Route path="/:id" element={<DiscrPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
