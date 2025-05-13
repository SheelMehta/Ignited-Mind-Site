import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SubmitIdea from './pages/SubmitIdea';
import GenerateIdeas from './pages/GenerateIdeas';
import VoteReview from './pages/VoteReview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/submit" element={<SubmitIdea />} />
        <Route path="/generate" element={<GenerateIdeas />} />
        <Route path="/vote" element={<VoteReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
