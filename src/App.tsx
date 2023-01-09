import * as React from 'react';
import './App.css';
import Singin from './pages/Singin';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/singin"
          element={<Singin />}
        />
      </Routes>
    </div>
  );
};

export default App;
