import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import HomePage from './Pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
