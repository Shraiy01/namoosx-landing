import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Purpose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-section-bg rounded-[100px] pt-2 px-4 pb-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>Our Purpose</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            We exist to engineer intelligence
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Namoosx believes technology matters only when it drives measurable impact, 
            builds digital trust, and empowers intelligent decisions. We collaborate with 
            visionary teams to turn ambition into secure, adaptive, and enduring digital ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Purpose;
