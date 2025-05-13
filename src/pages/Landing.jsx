import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';

import abdulKalam from '../assets/abdul-kalam.jpg';
import gianLogo from '../assets/gian-logo.png';



const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Landing = () => {
  return (
    <div>
      {/* Top Nav */}
<header className="fixed top-0 w-full bg-white bg-opacity-80 backdrop-blur z-50">
  <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
    <a href="/" className="text-xl font-bold text-gray-800">Ignited Minds</a>
    <div className="space-x-6">
      <a href="/submit" className="text-gray-700 hover:text-gray-900">Submit Idea</a>
      <a href="/generate" className="text-gray-700 hover:text-gray-900">Generate Ideas</a>
      <a href="/vote" className="text-gray-700 hover:text-gray-900">Vote & Review</a>
    </div>
  </nav>
</header>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Ignited Minds Award
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Celebrating young innovators transforming ideas into reality under the legacy of Dr. APJ Abdul Kalam and GIAN.
          </motion.p>
          <motion.a
            href="/submit"
            className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Submit Your Idea
          </motion.a>
        </div>
      </div>

      {/* What We Do Sections */}
      <div className="bg-white py-20 space-y-20">
        <motion.section
          className="max-w-4xl mx-auto px-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Ignited Minds</h2>
          <p className="text-gray-600 leading-relaxed">
            Since 2008, the Ignited Minds Award has empowered students across India to showcase their
            ingenuity. Each year, hundreds of young innovators present interdisciplinary projects—from
            robotics and sustainable solutions to artistic installations—demonstrating creativity,
            critical thinking, and social impact.
          </p>
        </motion.section>

       <motion.section
  className="max-w-4xl mx-auto px-4"
  variants={textVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  <div className="flex flex-col md:flex-row items-center gap-8">
    <img
      src={abdulKalam}
      alt="Dr. APJ Abdul Kalam"
      className="w-40 h-40 rounded-full shadow-lg object-cover"
    />
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Legacy of Dr. APJ Abdul Kalam
      </h2>
      <p className="text-gray-600 leading-relaxed">
      Dr. A.P.J. Abdul Kalam—India’s “Missile Man”—led the SLV-III satellite launch vehicle
      and the Integrated Guided Missile Development Program, forging India’s self-reliance in space and defense.
      As President (2002–2007), he devoted himself to inspiring youth to harness science for social good and to trust in
      grassroots ingenuity. In works like Ignited Minds, he encouraged young innovators to dream boldly and view failure 
      as part of growth. Today, his legacy thrives in student projects, startup incubators, and educational programs that
      echo his belief: with curiosity and commitment, any idea can change the nation.
      </p>
    </div>
  </div>
</motion.section>


<motion.section
  className="max-w-4xl mx-auto px-4"
  variants={textVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Text on the left */}
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Supported by GIAN
      </h2>
      <p className="text-gray-600 leading-relaxed">
    Gujarat Grassroots Innovation Augmentation Network (GIAN) is a state-led initiative dedicated to discovering, 
    nurturing, and scaling homegrown solutions that address local challenges. 
    Through community outreach, hands-on workshops, and collaboration with academic institutions and industry partners, GIAN empowers innovators—from rural artisans to tech-savvy students—to
    transform their ideas into viable prototypes. By providing seed funding, expert mentorship, and access to shared maker-spaces, GIAN accelerates the journey from concept to impact, ensuring that Gujarat’s 
    grassroots ingenuity can flourish and contribute to sustainable development across the region.
      </p>
    </div>

    {/* Perfect circle wrapper */}
    <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center flex-shrink-0">
      <img
        src={gianLogo}
        alt="GIAN Logo"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</motion.section>




      </div>

      {/* CTA Banner */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Spark Your Creativity?</h3>
        <a
          href="/submit"
          className="inline-block bg-white text-indigo-600 py-3 px-8 rounded-full font-medium hover:bg-gray-100"
        >
          Start Your Submission
        </a>
      </motion.div>
    </div>
  );
};

export default Landing;
