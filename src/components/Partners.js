import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Partners = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);
  
  const partners = [
    { id: 1, name: 'Trek', logo: '/images/trek-logo.png' },
    { id: 2, name: 'Schwinn', logo: '/images/schwinn-logo.png' },
    { id: 3, name: 'Specialized', logo: '/images/specialized-logo.png' },
    { id: 4, name: 'Giant', logo: '/images/giant-logo.png' }
  ];

  return (
    <MotionSection className="section-padding bg-purple-50" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-8">
            Наші партнери та постачальники велосипедів. Працюємо тільки з якісним обладнанням.
          </p>
        </div>
        
        <MotionDiv 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          {...(shouldReduceMotion ? {} : fadeUpPreset(0.2, 0.6))}
        >
          {partners.map((partner, index) => {
            const logoProps = shouldReduceMotion ? {} : fadeUpPreset(index * 0.1, 0.5);
            const MotionLogo = shouldReduceMotion ? 'div' : motion.div;
            
            return (
              <MotionLogo 
                key={partner.id}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                {...logoProps}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 md:h-16 object-contain"
                />
              </MotionLogo>
            );
          })}
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Partners;