import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ marginTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<div>메인</div>} />
          <Route path="/about" element={<div>나</div>} />
          <Route path="/projects" element={<div>일</div>} />
          <Route path="/contact" element={<div>ㄱㄱ</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
