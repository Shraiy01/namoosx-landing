import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import strategy1 from '../assets/images/strategy1.jpg';
import strategy2 from '../assets/images/strategy2.jpg';
import strategy3 from '../assets/images/strategy3.jpg';
import strategy4 from '../assets/images/strategy4.jpg';

const Strategy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  const steps = [
    {
      title: "Set the Vision",
      description: "Value mapping, risk appetite, and guardrails anchored to your strategy and budget.",
      image: strategy1
    },
    {
      title: "Design the System",
      description: "Value mapping, risk appetite, and guardrails anchored to your strategy and budget.",
      image: strategy2
    },
    {
      title: "Intelligently Automate",
      description: "Value mapping, risk appetite, and guardrails anchored to your strategy and budget.",
      image: strategy3
    },
    {
      title: "Secure the Ecosystem",
      description: "Value mapping, risk appetite, and guardrails anchored to your strategy and budget.",
      image: strategy4
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
            Strategy-to-Execution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 24 } }}
              className="group relative transform-gpu will-change-transform"
            >
              <div className="h-full">
                {/* Strategy Image */}
                <div className="overflow-hidden mb-4 rounded-xl h-[360px] w-[288px]">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                  <p className="font-lexend font-light text-base leading-[100%] tracking-[0%] text-text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
