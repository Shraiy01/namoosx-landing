import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import group21 from '../assets/images/Group 21.svg';
import group22 from '../assets/images/Group 22.svg';
import group211 from '../assets/images/Group 21 (1).svg';
import group221 from '../assets/images/Group 22 (1).svg';

const IndustryChallenges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.1, 
    margin: "-100px 0px" 
  });

  const industries = [
    {
      title: "Finance Industry Optimization & Trust Reinforcement",
      image: group21,
      challenges: [
        "Fragmented financial data limits insight; Namoosx delivers unified, AI-driven analytics for real-time intelligence.",
        "Fraud and risk exposure undermine trust; blockchain integration ensures transparency and transaction integrity.",
        "Manual verification processes delay compliance; smart contracts enable automated, audit-ready workflows.",
        "Outdated legacy systems restrict scalability; modular digital architectures enhance flexibility and performance.",
        "Cross-border transactions face reliability challenges; decentralized identity systems strengthen trust and security."
      ]
    },
    {
      title: "Healthcare Intelligence & Data Security Transformation",
      image: group22,
      challenges: [
        "Disconnected patient data hinders coordination; blockchain-based health records enable secure interoperability.",
        "Privacy concerns limit AI adoption; federated learning ensures protected, ethical data training.",
        "Inefficient diagnostic processes slow outcomes; predictive AI delivers faster and more accurate clinical insights.",
        "Rising cyber threats endanger medical systems; zero-trust security frameworks protect critical infrastructure.",
        "Administrative inefficiencies inflate costs; AI automation streamlines claims, billing, and record management."
      ]
    },
    {
      title: "Supply Chain & Logistics Optimization",
      image: group211,
      challenges: [
        "Limited end-to-end visibility creates inefficiencies; blockchain enhances traceability and operational transparency.",
        "Counterfeit goods disrupt trust; immutable blockchain verification ensures product authenticity.",
        "Manual logistics increase delays; AI automation optimizes routing and resource allocation.",
        "Inaccurate forecasting causes waste; predictive analytics improve demand and inventory planning.",
        "Disconnected systems restrict collaboration; integrated IoT and blockchain networks unify supply data."
      ]
    },
    {
      title: "Real Estate Digitalization & Asset Tokenization",
      image: group221,
      challenges: [
        "Complex property verification instant title validation.",
        "Limited liquidity restricts investors; asset tokenization enables fractional and borderless ownership.",
        "Smart contracts automate agreements and settlements.",
        "On-chain audit trails ensure full transactional transparency.",
        "AI-driven valuation models deliver dynamic property insights."
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-lexend font-light text-center mb-6 text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[52px] leading-[34px] sm:leading-[44px] lg:leading-[58px] xl:leading-[64px] tracking-[-4%] text-white">
            From Industry Challenges<br />to Intelligent Outcomes
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[682px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[657px] mx-auto lg:mx-0 lg:-ml-4 xl:-ml-8">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                  {industry.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {industry.challenges.map((challenge, challengeIndex) => (
                    <motion.div
                      key={challengeIndex}
                      initial={{ opacity: 0, x: 20, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.15 + 0.6 + challengeIndex * 0.15, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-accent-orange" />
                      <p className="leading-relaxed font-lexend font-light text-sm sm:text-base leading-[100%] tracking-[0%] text-text-muted">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryChallenges;
