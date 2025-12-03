import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HeaderBar from "./pages/home/HeaderBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./pages/home/HeroSection";
import ServiceSection from "./pages/home/ServiceSection";
import FeaturedCategories from "./pages/home/FeaturedCategories";
import PopularProducts from "./pages/home/FeaturedProducts";
import NewsletterSection from "./pages/home/NewsletterSection";
import WhyChooseUs from "./pages/Home/WhyChooseUs";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import HealthServices from "./pages/healthServices/HealthServices";
import ProductDetails from "./pages/product/ProductDetails.";
import ShippingInformation from "./pages/cart/ShippingInformation";
import { CartProvider } from "./context/CartContext";

function App() {
  const location = useLocation();

  // ✅ Hide layout for these routes
  const hideLayoutRoutes = ["/login", "/register"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <CartProvider> 
    <div>
      {/* ✅ Show Header & Navbar only if not on login/register page */}
      {!shouldHideLayout && <HeaderBar />}
      {!shouldHideLayout && <Navbar />}

      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto py-8">
                <HeroSection />
                <ServiceSection />
                <FeaturedCategories />
                <PopularProducts columns="lg:grid-cols-6" />
                <NewsletterSection />
                <WhyChooseUs />
              </div>
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/HealthServices" element={<HealthServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-form" element={<ShippingInformation />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* ✅ Hide Footer on login/register too */}
      {!shouldHideLayout && <Footer />}
    </div>
    </CartProvider>
  );
}

export default App;
