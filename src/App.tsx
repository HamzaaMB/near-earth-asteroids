import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ListDisplay, DetailsPage, Navigation } from "./components";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<ListDisplay />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App