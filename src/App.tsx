import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Moments from './pages/Moments';
import Messages from './pages/Messages';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;