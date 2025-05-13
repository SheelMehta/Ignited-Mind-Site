import React, { createContext, useState } from 'react';

export const IdeasContext = createContext();

export const IdeasProvider = ({ children }) => {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (newIdea) => {
    setIdeas(prev => [
      ...prev,
      { ...newIdea, id: Date.now(), votes: 0, comments: [] }
    ]);
  };

  const upvote = (id) => {
    setIdeas(prev =>
      prev.map(i => (i.id === id ? { ...i, votes: i.votes + 1 } : i))
    );
  };

  const addComment = (id, text) => {
    setIdeas(prev =>
      prev.map(i =>
        i.id === id ? { ...i, comments: [...i.comments, text] } : i
      )
    );
  };

  return (
    <IdeasContext.Provider value={{ ideas, addIdea, upvote, addComment }}>
      {children}
    </IdeasContext.Provider>
  );
};
