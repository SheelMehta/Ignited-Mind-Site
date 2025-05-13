import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { IdeasContext } from '../context/IdeasContext';

const SubmitIdea = () => {
  const { addIdea } = useContext(IdeasContext);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    school: '',
    ideaTitle: '',
  });
  const [mediaPreviews, setMediaPreviews] = useState({
    images: [],
    videos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaPreviews({
      images: files.filter(f => f.type.startsWith('image/')),
      videos: files.filter(f => f.type.startsWith('video/'))
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add to shared context
    addIdea({
      title: formData.ideaTitle,
      description: `By ${formData.name}, age ${formData.age}, ${formData.school}`
    });
    // reset
    setFormData({ name: '', age: '', school: '', ideaTitle: '' });
    setMediaPreviews({ images: [], videos: [] });
    alert('Idea submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-100 flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="
          max-w-3xl
          mx-auto
          p-8
          rounded-2xl
          shadow-2xl
          space-y-6
          transform transition
          hover:-translate-y-2 hover:shadow-2xl
          flex flex-col
        "
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)', // Safari
        }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Submit Your Innovation
        </motion.h1>

        {['name', 'age', 'school', 'ideaTitle'].map((field, idx) => (
          <motion.div
            key={field}
            custom={idx}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: i => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } })
            }}
          >
            <label className="block text-gray-800 font-medium mb-2 capitalize">
              {field === 'ideaTitle' ? 'Idea Title' : field}
            </label>
            <input
              type={field === 'age' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>
        ))}

        <motion.div
          custom={4}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.4 } }
          }}
        >
          <label className="block text-gray-800 font-medium mb-2">
            Upload Images & Videos
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileChange}
            className="block w-full text-gray-700"
          />
        </motion.div>

        {(mediaPreviews.images.length > 0 || mediaPreviews.videos.length > 0) && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {mediaPreviews.images.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                alt="preview"
                className="w-full h-48 object-cover rounded-md"
              />
            ))}
            {mediaPreviews.videos.map((vid, i) => (
              <video
                key={i}
                src={URL.createObjectURL(vid)}
                controls
                className="w-full h-48 object-cover rounded-md"
              />
            ))}
          </motion.div>
        )}

        <motion.button
          type="submit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default SubmitIdea;
