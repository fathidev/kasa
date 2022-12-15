// /pages
import HomePage from "./views/HomePage/HomePage";
import AboutPage from "./views/AboutPage/AboutPage";
import ProductPage from "./views/ProductPage/ProductPage";
import Error404Page from "./views/Error404Page/Error404Page";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// data for about page
import aboutData from "./data/about.json";
function router() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="products/:id" element={<ProductPage />}></Route>
        <Route path="/about" element={<AboutPage data={aboutData} />}></Route>
        <Route path="*" element={<Error404Page />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default router;
