import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.2, 
    margin: "-50px 0px" 
  });

  const services = [
    {
      title: "AI Consulting & Model Development",
      description: "Strategic AI implementation and custom model development",
      image: image1
    },
    {
      title: "AI Agents & Automation",
      description: "Intelligent automation solutions for business processes",
      image: image2
    },
    {
      title: "Blockchain & Smart Contracts",
      description: "Decentralized applications and smart contract development",
      image: image3
    },
    {
      title: "Tokenization & Web3 Strategy",
      description: "Digital asset tokenization and Web3 ecosystem design",
      image: image4
    },
    {
      title: "Blockchain Security & Compliance Audits",
      description: "Security assessments and compliance for blockchain systems",
      image: image5
    },
    {
      title: "Generative AI & LLM Development",
      description: "Custom large language models and generative AI solutions",
      image: image6
    },
    {
      title: "Cybersecurity & Zero-Trust Systems",
      description: "Advanced security frameworks and zero-trust architectures",
      image: image7
    },
    {
      title: "View All",
      description: "Explore our complete range of services",
      image: image8
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Engineered for Visionary Innovators
          </h2>
          <p className="text-gray-300 max-w-3xl font-lexend font-light text-base leading-none tracking-normal">
            We drive strategy, innovation, and transformation through cutting-edge technology, 
            delivering proven excellence in execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
              className={`relative p-6 rounded-xl border transition-all duration-300 ${
                service.title === "View All" 
                  ? "bg-primary/10 border-primary/30 hover:border-primary/50" 
                  : "bg-white/5 border-white/10 hover:border-primary/30 hover:bg-white/10"
              }`}
            >
              {/* Background Image - Only for service cards, not "View All" */}
              {service.title !== "View All" && (
                <>
                  <div 
                    className="absolute inset-0 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                  {/* <div className="absolute inset-0 bg-black/60 rounded-xl" /> */}
                </>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-white mb-3 font-lexend font-normal text-2xl leading-none tracking-normal">
                  {service.title}
                </h3>
                {/* <p className="text-sm text-gray-300 mb-4">
                  {service.description}
                </p> */}
                <div className="flex-1" style={{ marginBottom: '154px' }}></div>
                <div className="flex justify-end">
                  <button 
                    className={`text-sm font-medium transition-colors ${
                      service.title === "View All" 
                        ? "text-primary hover:text-primary/80" 
                        : "text-white hover:text-primary"
                    }`}
                    style={{
                      borderRadius: '100px',
                      border: '1px solid #FFFFFF',
                      paddingTop: '8px',
                      paddingRight: '16px',
                      paddingBottom: '8px',
                      paddingLeft: '16px',
                      gap: '4px',
                      backgroundColor: '#12121233',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {service.title === "View All" ? "View All →" : "Learn More →"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
