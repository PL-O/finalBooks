import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Book from "./pages/Book.js"
import ErrorPage from "./pages/ErrorPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
