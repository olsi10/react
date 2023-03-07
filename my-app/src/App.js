// import logo from './logo.svg';
// import './App.css';

import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";


function App() {
  return (
    <div className="App">
      <h1>안녕하세요 리액트를 한 시간 배워서 이정도 했습니다.</h1>
      <nav>
        {/* a 태그의 href="/" 와 같음 */}
        <Link to = "/">Home</Link> | <Link to = "/about">About</Link> | <Link to = "/counter">Counter</Link> | <Link to = "/input">Input</Link> | <Link to = "/input2">Input2</Link> | <Link to = "/input">Input</Link> | <Link to = "/list">List</Link> 
      </nav>
      {/* Routes는 Route의 묶음 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input/>} />
        <Route path="/input2" element={<Input2/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </div>
  );
}


export default App;

// ** 항상 무언가 실행할 때 경로 확인 필수!! **
// npm install react-router-dom@6 <- 리액트 라우터 버전6