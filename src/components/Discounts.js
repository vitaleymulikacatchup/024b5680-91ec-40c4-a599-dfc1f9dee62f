import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Discounts = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);
  
  const discounts = [
    {
      id: 1,
      title: 'Прокат велосипеда на вихідних (ПТ/СБ)',
      discount: '-40%',
      description: 'Спеціальна ціна на прокат велосипедів у вихідні дні'
    },
    {
      id: 2,
      title: 'Абонемент на студентського посвідчення',
      discount: '-40%',
      description: 'Знижка для студентів при пред\'явленні студентського квитка'
    },
    {
      id: 3,
      title: 'Абонемент для багатодітних сімей',
      discount: '-15%',
      description: 'Спеціальні умови для сімей з трьома та більше дітьми'
    },
    {
      id: 4,
      title: 'Відвідини на УБД',
      discount: '-10%',
      description: 'Знижка при відвідуванні нашого центру на УБД'
    },
    {
      id: 5,
      title: 'Пенсіонери за віком',
      discount: '-5%',
      description: 'Спеціальна ціна для пенсіонерів при пред\'явленні документів'
    }
  ];

  return (
    <MotionSection className="section-padding bg-white" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Пільги є!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discounts.map((discount, index) => {
            const cardProps = shouldReduceMotion ? {} : fadeUpPreset(index * 0.1, 0.6);
            const MotionCard = shouldReduceMotion ? 'div' : motion.div;
            
            return (
              <MotionCard key={discount.id} className="card hover:shadow-lg transition-shadow" {...cardProps}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-3">
                    {discount.discount}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {discount.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {discount.description}
                  </p>
                </div>
              </MotionCard>
            );
          })}
        </div>
        
        <MotionDiv 
          className="text-center mt-12"
          {...(shouldReduceMotion ? {} : fadeUpPreset(0.5, 0.6))}
        >
          <div className="bg-brand-green text-white p-6 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-2">Знижка -10% всім...</h3>
            <p className="text-lg">при бронюванні через наш сайт!</p>
          </div>
          <div className="mt-6">
            <button className="btn-primary">
              Забронювати
            </button>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Discounts;