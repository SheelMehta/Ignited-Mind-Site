import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/generate-bg.png';  // ← make sure this matches your filename
import * as XLSX from 'xlsx';
import { useEffect } from 'react';



const sampleIdeas = [
  "Eco-friendly water filter made from recycled materials",
  "Solar-powered phone charger for rural students",
  "Smart backpack that organizes books automatically",
  "Wearable device that translates sign language to text",
  "App that connects volunteers with local clean-up events",
  "Modular robot kits for STEM learning at home",
  "Low-cost solar water pump for small-scale irrigation",
  "Portable soil nutrient analyzer with smartphone interface",
  "Rainwater harvesting system with bio-sand filtration",
  "SMS-based market price notification service for crops",
  "Community-operated biogas digester using agricultural waste",
  "Offline educational app for basic farming best practices",
  "GPS-enabled livestock tracking and health monitoring collar",
  "Mobile health screening clinic with telemedicine support",
  "Solar-powered cold storage unit for perishable farm produce",
  "Automated drip irrigation controller with soil moisture sensors",
  "Hand-cranked grain mill with adjustable fineness settings",
  "Seed exchange platform with crop rotation recommendation",
  "Mobile grain moisture meter with SMS alerts",
  "Solar LED street lighting with motion sensors",
  "Open-source drone delivery for urgent medical supplies",
  "Voice-controlled local-language learning assistant",
  "Mesh-network Wi-Fi hotspots for farm communities",
  "Offline e-library kiosk with educational video content",
  "SMS-based veterinary advice and animal symptom tracker",
  "Community seed-bank management platform with QR codes",
  "Fuel-efficient rocket stove using biomass briquettes",
  "Portable micro-weather station for crop forecasting",
  "Micro-grid energy management system with prepaid tokens",
  "Digital literacy bus equipped with computers and tutors",
  "Solar-powered mobile phone charging kiosk",
  "Bluetooth-based pesticide application tracker",
  "Micro hydroelectric generator for streams",
  "Beekeeping starter kit with training app",
  "Community composting unit with odor control",
  "Low-cost drip irrigation using recycled plastic bottles",
  "Solar drier for fruits and vegetables",
  "Tele-agriculture platform with video tutorials",
  "Peer-to-peer livestock-farming mentorship app",
  "Solar-powered vaccine carrier for rural clinics",
  "Mobile eye screening unit with portable fundus camera",
  "SMS-based microfinance loan application system",
  "Mobile water quality testing lab on wheels",
  "Geo-fenced cattle grazing management app",
  "Handheld thermosonic grain sterilizer",
  "Solar cooker with heat storage bricks",
  "Rural e-commerce platform for local artisans",
  "AI-powered pest detection camera trap",
  "Floating garden beds for flood-prone areas",
  "Upcycled plastic road construction blocks",
  "Solar lantern with integrated phone charger",
  "Rainwater collection gutter system for schools",
  "Mobile legal aid chatbot for farmers’ rights",
  "Offline speech recognition for local dialects",
  "SMS-based weather forecast localization service",
  "Community-managed village bank software",
  "Solar-powered electric fencing for livestock",
  "Quick-deploy inflatable greenhouse",
  "Low-cost soil compost accelerator kit",
  "Portable ultrasound device for livestock",
  "Mobile app for crop pest identification",
  "Solar-powered battery swapping station for e-rickshaws",
  "Bamboo-based biochar production stove",
  "Remote monitoring sensors for water pumps",
  "Hands-free milking machine for small farms",
  "3D-printed replacement parts for farm equipment",
  "Local-language interactive radio learning program",
  "Community solar microgrid management dashboard",
  "Solar-powered Wi-Fi mesh drone relay",
  "Offline GPS navigation for farm machinery",
  "Electric bicycle conversion kit for farm transport",
  "AI-driven crop yield prediction SMS service",
  "Solar-powered grain dryer with temperature control",
  "Community tool-sharing mobile app",
  "Women’s self-help group accounting software",
  "Portable pH and EC meter for hydroponic setups",
  "Small-scale waterless sanitation toilet",
  "DIY vermicompost bin with automated feeding",
  "Solar DC microgrid for night-time lights",
  "Remote veterinary emergency dispatch system",
  "SMS-based job matching platform for rural youth",
  "Portable classroom inflatable tent",
  "Solar attic fans for improving crop storage",
  "Community-based clean cooking fuel distribution app",
  "Low-cost water purification sachets production unit",
  "Wearable health monitor for pregnant women",
  "Mobile phone-based sign language teaching app",
  "Autonomous weeding robot prototype",
  "Portable rainwater pot system for households",
  "Community horticulture polyhouse design",
  "Open-source affordable greenhouse controller",
  "Solar still for producing drinking water",
  "Low-tech seed germinator using recycled jars",
  "Local village mapping with offline maps",
  "Solar-powered insect trap with AI count",
  "Hydroponic vertical farm kit for schools",
  "Irrigation scheduling assistant via voice calls",
  "Low-cost livestock vaccination cold box",
  "Solar-powered pond aerator for fish farming",
  "Digital marketplace for surplus produce exchange",
  "Mobile phone microscope for plant disease detection",
  "Community-based forest fire early warning system",
  "Automated solar tracker for photovoltaic panels",
  "Portable action camera for farm monitoring",
  "Offline coding game for rural schools",
  "DIY solar panel drying rack for grains",
  "Geo-tagged community asset mapping tool",
  "Solar-powered fence energizer for crop protection",
  "Hand-powered water-lifting device with lever",
  "Tele-education interactive classroom via TV",
  "Solar hill-top weather station with SMS alerts",
  "Community-based solar lantern sharing service",
  "Mulching plastic sheet alternative from jute",
  "Portable checkweigher for grain traders",
  "Solar-thermal peanut roasting machine",
  "Digital literacy curriculum on USB drives",
  "Community cinema projector powered by solar",
  "Water-lubricated low-friction grain conveyor",
  "Mobile solar-powered cold press oil extractor",
  "SMS-based crop disease advisory service",
  "Local-language audiobook player for kids",
  "Affordable banana fiber handicraft workshop",
  "Low-cost radio remote for farm gate control",
  "Mobile solar easel for outdoor classes",
  "AI chatbot for farm policy queries",
  "Community-based shared seed cleaning machine",
  "Electric solar water-pumping tube well",
  "Solar PV-powered LED billboard for announcements",
  "Low-cost aquaponics starter kit",
  "Augmented reality historic site tour app"
];

const GenerateIdeas = () => {
 const [ideasList, setIdeasList] = useState([]);  // will hold all ideas from Excel
 useEffect(() => {
  fetch('/children_ideas.xlsx')
    .then(res => res.arrayBuffer())
    .then(buffer => {
      const workbook = XLSX.read(buffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      // Parse into array of arrays; assume first row is header
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      // Grab the first column of each subsequent row, filter out empties
      const loadedIdeas = rows
        .slice(1)
        .map(row => row[0])
        .filter(Boolean);
      setIdeasList(loadedIdeas);
    })
    .catch(err => console.error('Error loading Excel:', err));
}, []);

  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState([]);

const handleGenerate = () => {
  setLoading(true);
  setIdeas([]);

  setTimeout(() => {
    // Shuffle copy of sampleIdeas
    const shuffled = [...sampleIdeas].sort(() => 0.5 - Math.random());
    // Take first 3 unique ideas
    const unique = shuffled.slice(0, 3);
    setIdeas(unique);
    setLoading(false);
  }, 1500);
};

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-80" />

      {/* content wrapper */}
      <div className="relative z-10 flex flex-col items-center py-20 px-4">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Spark New Innovations
        </motion.h1>
        <motion.p
          className="text-lg text-green-100 mb-12 max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Feeling stuck? Click below to generate fresh, kid-friendly project ideas you can build and submit!
        </motion.p>

        <motion.button
          onClick={handleGenerate}
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full font-semibold mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? 'Generating...' : 'Generate Ideas'}
        </motion.button>

        <div className="w-full max-w-2xl space-y-6">
          {ideas.map((idea, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white border-2 border-indigo-600 text-indigo-900 rounded-xl shadow-lg flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="text-center">{idea}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateIdeas;

