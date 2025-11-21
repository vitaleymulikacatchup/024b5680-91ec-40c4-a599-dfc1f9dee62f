import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  const MotionButton = shouldReduceMotion ? 'button' : motion.button;
  
  const motionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.8);
  const titleProps = shouldReduceMotion ? {} : fadeUpPreset(0.2, 0.8);
  const subtitleProps = shouldReduceMotion ? {} : fadeUpPreset(0.3, 0.8);
  const buttonProps = shouldReduceMotion ? {} : fadeUpPreset(0.4, 0.8);

  return (
    <MotionSection 
      id="home" 
      className="bg-hero min-h-screen flex items-center justify-center text-white relative"
      {...motionProps}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container-custom relative z-10 text-center">
        <MotionDiv className="mb-8" {...titleProps}>
          <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ВЕЛО ЦЕНТР
          </h1>
        </MotionDiv>
        
        <MotionDiv {...subtitleProps}>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            ЗАПОРІЖЖЯ
          </p>
        </MotionDiv>
        
        <MotionButton 
          className="btn-primary text-lg px-8 py-4"
          {...buttonProps}
        >
          ЗАБРОНЮВАТИ
        </MotionButton>
      </div>
    </MotionSection>
  );
};

export default Hero;