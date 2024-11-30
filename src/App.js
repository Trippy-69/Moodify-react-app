import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Login from "./components/Login"; // Import the Login component
import Signup from "./components/Signup"; // Import the Signup component

// Define functional components for Home, About, and Contact pages
const Home = () => (
  <section id="home" className="h-screen bg-gray-100">
    <h1 className="text-4xl text-center p-12">Welcome to Sparkit</h1>
  </section>
);

const About = () => (
  <section id="about" className="h-screen bg-white">
    <h2 className="text-3xl text-center p-12">About Sparkit</h2>
    <p className="text-center px-8">
      Sparkit is a platform to explore your musical creativity and connect with
      other enthusiasts.
    </p>
  </section>
);

const Contact = () => (
  <section id="contact" className="h-screen bg-gray-200">
    <h2 className="text-3xl text-center p-12">Contact Us</h2>
    <p className="text-center px-8">
      Reach us at <a href="mailto:contact@sparkit.com">contact@sparkit.com</a>.
    </p>
  </section>
);

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
