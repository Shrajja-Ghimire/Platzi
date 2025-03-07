import "./App.css";
import Category from "./components/Category";
import Contact from "./components/Contact";
import HeroSection from "./components/Hero";
import ShowProduct from "./components/ShowProducts";

function App() {
  return (
    <>
      <HeroSection />
      <ShowProduct />
      <Category />
      <Contact />
    </>
  );
}

export default App;
