// import logo from './logo.svg';
// import './App.css';

import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <nav>
        {/* a 태그의 href="/" 와 같음 */}
        <Link to = "/">Home</Link> | <Link to = "/about">About</Link>
      </nav>
      {/* Routes는 Route의 묶음 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Home />
    </div>
  );
}


export default App;

// ** 항상 무언가 실행할 때 경로 확인 필수!! **
// npm install react-router-dom@6 <- 리액트 라우터 버전6