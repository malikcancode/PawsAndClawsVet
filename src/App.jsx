import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";
import CallADoctor from "./pages/CallADoctor";
import ServiceDetail from "./components/ServiceDetail";
import PawLoader from "./components/PawLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <PawLoader />;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact-doctor" element={<CallADoctor />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
