import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Quality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  const qualityItems = [
    {
      title: "Strategy-Aligned Execution",
      description: "Each roadmap is tied to goals that matter - measurable, time-bound, and achievable."
    },
    {
      title: "Performance & ROI Tracking",
      description: "Every solution tied to growth and impact."
    },
    {
      title: "Continuous Improvement",
      description: "Monitored, optimized, and secured for consistency."
    },
    {
      title: "Trust & Transparency by Design",
      description: "Clarity and accountability at every stage."
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
            Quality & Value Assurance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ y: -5 }}
              className="p-6 transition-all duration-300 bg-quality-bg rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 font-lexend font-light text-base leading-[26px] tracking-[-4%]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
