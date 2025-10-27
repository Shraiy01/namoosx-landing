import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import whatMakesImage from '../assets/images/whatMakes.png';

const Differentiators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  const features = [
    {
      title: "AI & Intelligent Systems",
      description: "Transform data into intelligent, real-time business decisions.",
      icon: "🧠"
    },
    {
      title: "Blockchain & Web3 Architecture",
      description: "Build transparent, decentralized, and scalable digital ecosystems.",
      icon: "⛓️"
    },
    {
      title: "Cybersecurity & Digital Trust",
      description: "Protect businesses with zero-trust and blockchain-secure defense.",
      icon: "🛡️"
    },
    {
      title: "Automation & Scalable Growth",
      description: "Simplify operations through smart, adaptive automation.",
      icon: "⚙️"
    },
    {
      title: "Strategic Innovation & Advisory",
      description: "Bridge deep tech with long-term business impact.",
      icon: "💡"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[504px] h-[250px] sm:h-[350px] lg:h-[500px] xl:h-[608px] mx-auto lg:mx-0">
              <img 
                src={whatMakesImage} 
                alt="What Makes Us Different"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="font-lexend text-white mb-4 sm:mb-6 font-normal text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] leading-[34px] sm:leading-[44px] lg:leading-[52px] xl:leading-[52px] tracking-[-4%]">
                What Makes Us Different
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 lg:mt-[44px]">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.15, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ x: 10 }}
                  className="flex items-start transition-colors cursor-pointer bg-card-bg rounded-[12px] pt-3 sm:pt-4 lg:pt-[18px] px-3 sm:px-4 pb-3 sm:pb-4 lg:pb-[18px] gap-2 sm:gap-3 lg:gap-[10px]"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center text-lg sm:text-xl lg:text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed font-lexend font-light text-xs sm:text-sm leading-[100%] tracking-[0%] text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
