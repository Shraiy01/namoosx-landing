import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bgImage from "../assets/images/bgImage.jpg";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
    margin: "-100px 0px",
  });

  const stats = [
    { number: "50+", label: "Projects Delivered Globally" },
    { number: "10+", label: "Enterprise Deployments" },
    { number: "50+", label: "Developers, Partners & Innovators" },
    { number: "98%", label: "Client Retention Rate" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center mt-[200px] sm:mt-[250px] lg:mt-[350px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[90px] items-center">
              {/* Left Content - Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[60%] xl:w-[700px] flex-shrink-0"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-white font-lexend font-light text-[32px] sm:text-[48px] lg:text-[64px] leading-[38px] sm:leading-[56px] lg:leading-[74px] tracking-[-4%]"
                >
                  Beyond Consulting.
                  <br />
                  Engineering the Future.
                </motion.h1>
              </motion.div>

              {/* Right Content - Description and Button */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8 w-full lg:w-[30%] xl:w-[486px] flex-shrink-0"
              >
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-white font-lexend font-light text-[13px] sm:text-[14px] lg:text-[15px] leading-[160%] tracking-[0%]"
                >
                  At Namoosx, innovation is not a promise it's a system. We
                  deliver AI-driven, blockchain-native, cyber-resilient
                  architectures that empower organisations to explore new
                  frontiers, adapt to market shifts, and create measurable
                  outcomes. While others speculate, we engineer. See tomorrow,
                  today.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 200, damping: 24 } }}
                  whileTap={{ scale: 0.95 }}
                  className="relative h-[40px] sm:h-[45px] lg:h-[50px] px-[2px] py-[2px] rounded-[100px] font-semibold text-[12px] sm:text-[13px] lg:text-[14px] text-white overflow-hidden transform-gpu will-change-transform"
                  style={{
                    background:
                      "linear-gradient(92.96deg, rgba(255, 255, 255, 0.2) 0.1%, #FFFFFF 50%, rgba(255, 255, 255, 0.2) 99.9%)",
                  }}
                >
                  <div className="w-full h-full rounded-[100px] flex items-center justify-center gap-2.5 px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-3 bg-button-bg min-h-[36px] sm:min-h-[41px] lg:min-h-[46px]">
                    <span>Explore our Use Cases</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.button>
              </motion.div>
            </div>

            {/* Stats Cards - Horizontal Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-start px-4 sm:px-6 lg:px-[20px] bg-transparent"
                  style={{
                    borderLeft: "1px solid #FFFFFF",
                  }}
                >
                  <div className="text-white mb-2 font-lexend font-normal text-[24px] sm:text-[28px] lg:text-[32px] leading-[30px] sm:leading-[35px] lg:leading-[42px] tracking-[-4%]">
                    {stat.number}
                  </div>
                  <div className="text-white font-lexend font-normal text-[11px] sm:text-[12px] lg:text-[13px] leading-[18px] sm:leading-[22px] lg:leading-[26px] tracking-[-4%]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
