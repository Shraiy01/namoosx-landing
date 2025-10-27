import { motion } from 'framer-motion';
import Logo from '../assets/images/1.svg';

const Footer = () => {
  const locations = [
    {
      country: "UAE",
      address: "Namoosx AI Services LLC\nPO Box 1234, Abu Dhabi, United Arab Emirates"
    },

    {
      country: "United Kingdom", 
      address: "Namoosx AI Services LLC\n22 Brook St, Mayfair, London W1K 5DF, United Kingdom"
    },

    {
      country: "India",
      address: "Namoosx AI Services LLC\nOffice T05, Plot no B10, Sector 2\nNoida, Uttarpradesh India"
    },
    {
      country: "United States",
      address: "Namoosx AI Services LLC\nBuilding No. 44, 20 Cooper Square,\nNew York, NY 10003, USA"
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[152px] items-center">
            {/* Left: Logo + Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <img 
                  src={Logo} 
                  alt="Namoosx Logo" 
                  className="h-auto w-[215px]"
                />
              </div>
              <p className="text-gray-300 max-w-2xl md:max-w-none mx-auto md:mx-0">
                Pioneering the Future with AI, Web3, Blockchain, and Cybersecurity. 
                Innovating at the Edge of Possibility.
              </p>
            </motion.div>

            {/* Right: Links (menu) */}
            <div className="flex justify-center md:justify-end items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl md:max-w-none"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Namoosx</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Vision & Leadership</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Careers</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">R & D partnership</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact Us</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">AI & Automation</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Blockchain & Web3</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Data & Intelligence</a></li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Global Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="border border-white/20 rounded-lg p-4 hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#000ED0' }}
            >
              <h4 className="font-semibold text-white mb-2">{location.country}</h4>
              <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">{location.address}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Namoosx AI Services LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
