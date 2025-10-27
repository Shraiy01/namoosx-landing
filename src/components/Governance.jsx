import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import businessImage from '../assets/images/buisness.png';

const Governance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h2 className="text-white mb-4 sm:mb-6 font-lexend font-normal text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] leading-[34px] sm:leading-[44px] lg:leading-[52px] xl:leading-[52px] tracking-[-4%] text-center">
              Governance & Responsibility
            </h2>
            
            <p className="text-gray-300 max-w-xs sm:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto font-lexend font-normal text-sm sm:text-base lg:text-lg xl:text-2xl leading-[120%] sm:leading-[110%] lg:leading-[100%] tracking-[0%] text-center px-4">
              At Namoosx, we embed governance, transparency, and security into every solution. 
              We align with global standards in AI ethics, blockchain compliance, and data privacy, 
              ensuring fairness, accountability, and trust by design.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="relative overflow-hidden w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[800px] xl:max-w-[1200px] h-[200px] sm:h-[300px] lg:h-[450px] xl:h-[580px] mx-auto rounded-[8px] sm:rounded-[10px] lg:rounded-[12px]">
              <img 
                src={businessImage} 
                alt="Governance & Responsibility"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
