import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import our2Image from '../assets/images/our2.jpg';

const Thesis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-section-bg rounded-[100px] pt-2 px-4 pb-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span>Our Thesis</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Built for Growth. Designed for Trust.
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Businesses don't need experiments, they need reliable systems that turn 
                technology into measurable growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                At Namoosx, we build intelligent, secure, and scalable frameworks that 
                connect AI, data, blockchain, and cybersecurity to everyday operations. 
                Our approach transforms ambition into action through strategic roadmaps, 
                modular architectures, and practical adoption models built to deliver 
                results, not complexity.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <img 
                src={our2Image} 
                alt="Our Thesis" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
