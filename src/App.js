import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.scss";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
