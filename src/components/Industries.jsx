import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import industryImage from '../assets/images/industry.jpg';
import healthcareImage from '../assets/images/healthcare.png';
import aeroplaneImage from '../assets/images/aeroplane.jpg';
import realestateImage from '../assets/images/realestate.jpg';
import businessImage from '../assets/images/buisness.png';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  const industries = [
    {
      title: "Finance",
      subtitle: "Intelligent Finance. Building Digital Trust.",
      description: "AI and Blockchain converge to enable secure transactions, real-time analytics, and fraud-resistant ecosystems.",
      image: industryImage
    },
    {
      title: "Healthcare",
      subtitle: "Intelligence Heals. Security Protects.",
      description: "We integrate AI diagnostics, blockchain-backed health records, and cybersecurity to make healthcare data safer, and interoperable.",
      image: healthcareImage
    },
    {
      title: "Logistics",
      subtitle: "Transparent. Predictive. Autonomous.",
      description: "From real-time visibility to AI forecasting, we optimize supply networks through blockchain transparency and data intelligence.",
      image: aeroplaneImage
    },
    {
      title: "Real Estate",
      subtitle: "Smart Assets. Ownership. Global Access.",
      description: "We digitize property ecosystems through tokenization and AI-driven valuation, enabling borderless and transparent real estate markets.",
      image: realestateImage
    },
    {
      title: "Gaming",
      subtitle: "Where Intelligence Meets Immersion.",
      description: "We power next-gen gaming ecosystems through AI-driven personalization, Web3 asset ownership, and secure digital economies.",
      image: businessImage
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Industries we serve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Background particles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-2 right-2 w-1 h-1 bg-primary/30 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse delay-500" />
              </div>

              <div className="relative z-10">
                {/* Industry Image */}
                <div className="overflow-hidden mb-4 w-[200px] h-[200px] rounded-[16px]">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {industry.title}
                </h3>
                
                <p className="text-primary font-medium text-sm mb-3">
                  {industry.subtitle}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                
                <button className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-primary/10 border border-primary/30 rounded-xl p-6 hover:bg-primary/20 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:bg-primary/40 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                View All
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                Explore our complete range of industry solutions
              </p>
              
              <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center">
                View All
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
