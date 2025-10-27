import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import stakeImage from '../assets/images/stake.jpg';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-lg space-y-12" style={{ backgroundColor: '#FFFFFF0F' }}>
          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6"
          >
                <h2 className="text-white font-lexend font-normal text-[52px] leading-[64px] tracking-[-4%] text-center">
              Get Started - AI Efficiency with Proven Performance
            </h2>
                <p className="text-gray-300 max-w-4xl mx-auto font-lexend font-normal text-2xl leading-[100%] tracking-[0%]">
              Connect AI logic with blockchain trust to automate and secure digital ecosystems.
            </p>
          </motion.div>

          {/* Image and Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative flex"
            >
              <div className="relative w-full rounded-2xl overflow-hidden">
                <img 
                  src={stakeImage} 
                  alt="Get Started - AI Efficiency with Proven Performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-full flex"
            >
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                    style={{ height: '281px' }}
                  />
                </div>
              </form>
            </motion.div>
          </div>

          {/* Blue Consultation Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-12"
          >
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:bg-primary/90"
            >
              <p className="text-lg text-white font-lexend font-light">
                Contact us for a consultation on enterprise AI, cloud AI & edge AI development
              </p>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
