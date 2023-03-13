import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { product } from "./services/product.service";
import { ROUTES } from "./utils/routes";

import Home from "./components/page/Home.page";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ProductDetail from "./components/page/ProductDetail.page";
import ProductsPage from "./components/page/Products.page";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const handleFetchProductList = async () => {
      const products = await product.getProducts({ limit: 10, orderBy: "id" });
      products.map((item) => <div></div>);
    };

    handleFetchProductList();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<ProductsPage />} />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
