import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import TopSection from "./components/top section/TopSection";
import Nav from "./components/nav/Nav";
import SecondSection from "./components/second section/SectionSection";
import Account from "./components/top section/account";
import ImageSection from "./components/image section/ImageSection";
import Visual from "./components/visual_images/Visual";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<TopSection />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/projects" component={<SecondSection />} />
      </Routes>
      <SecondSection />
      <ImageSection />
      <Visual />
    </Router>
  );
}

export default App;
