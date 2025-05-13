import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialIdeas = [
  {
    id: 1,
    title: 'Eco-friendly water filter made from recycled materials',
    description: 'A filtration system using recycled plastic and charcoal to purify water.',
    votes: 23,
    comments: ['Great idea!', 'Can you share more on materials?']
  },
  {
    id: 2,
    title: 'Wearable device that translates sign language to text',
    description: 'Gloves equipped with sensors that convert hand movements into readable text.',
    votes: 17,
    comments: ['Innovative!', 'What sensors are used?']
  }
];

const VoteReview = () => {
  const [ideas, setIdeas] = useState(initialIdeas);
  const [commentInputs, setCommentInputs] = useState({});

  const handleVote = (id) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleCommentSubmit = (id) => {
    const text = commentInputs[id]?.trim();
    if (!text) return;
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id
          ? { ...idea, comments: [...idea.comments, text] }
          : idea
      )
    );
    setCommentInputs((prev) => ({ ...prev, [id]: '' }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Vote & Review Ideas
      </motion.h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {ideas.map((idea) => (
          <motion.div
            key={idea.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{idea.title}</h2>
            <p className="text-gray-700 mb-4">{idea.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => handleVote(idea.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Vote
              </button>
              <span className="font-medium text-gray-800">{idea.votes} votes</span>
            </div>
            <div className="space-y-2 mb-4">
              {idea.comments.map((cmt, idx) => (
                <p key={idx} className="text-gray-600">- {cmt}</p>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Add a comment"
                value={commentInputs[idea.id] || ''}
                onChange={(e) => handleCommentChange(idea.id, e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded"
              />
              <button
                onClick={() => handleCommentSubmit(idea.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Comment
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VoteReview;
