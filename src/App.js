import React from "react";
import Header from "./components/header/Header";
import TopSection from "./components/top section/TopSection";
import Nav from "./components/nav/Nav";
import SectionSection from "./components/second section/SectionSection";
import Account from "./components/top section/account";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TopSection />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/projects" element={<SectionSection />} />
      </Routes>

    </Router>
  );
}

export default App;
