import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const AdditionalServices = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);
  
  const services = [
    {
      id: 1,
      title: 'Велосипедні аксесуари',
      items: ['Шоломи', 'Рукавички', 'Велосумки', 'Фляги для води']
    },
    {
      id: 2,
      title: 'Велосипедні запчастини',
      items: ['Камери', 'Покришки', 'Ланцюги', 'Гальмівні колодки']
    },
    {
      id: 3,
      title: 'Інші товари для велосипедистів',
      items: ['Велокомп\'ютери', 'Ліхтарі', 'Дзвінки', 'Замки']
    },
    {
      id: 4,
      title: 'Велосипедне обладнання для дітей',
      items: ['Дитячі шоломи', 'Захисні накладки', 'Дитячі сидіння', 'Велосипедні колеса']
    }
  ];

  return (
    <MotionSection className="section-padding bg-gray-50" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Додаткові послуги
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const cardProps = shouldReduceMotion ? {} : fadeUpPreset(index * 0.1, 0.6);
            const MotionCard = shouldReduceMotion ? 'div' : motion.div;
            
            return (
              <MotionCard key={service.id} className="card" {...cardProps}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionCard>
            );
          })}
        </div>
        
        <MotionDiv 
          className="text-center mt-12"
          {...(shouldReduceMotion ? {} : fadeUpPreset(0.4, 0.6))}
        >
          <button className="btn-primary">
            Дізнатися більше
          </button>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default AdditionalServices;