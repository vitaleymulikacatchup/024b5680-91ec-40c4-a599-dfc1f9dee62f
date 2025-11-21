import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Pricing = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);
  
  const pricingPlans = [
    {
      id: 1,
      name: 'Schwinn Tandem',
      price: '2 год/хвилин',
      duration: '2 год/хвилин',
      features: [
        'Двомісний велосипед',
        'Ідеально для пар',
        'Комфортна поїздка',
        'Безкоштовний інструктаж'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Schwinn S1',
      price: '1 год/хвилин',
      duration: '1 год/хвилин',
      features: [
        'Класичний міський велосипед',
        'Легке керування',
        'Зручне сидіння',
        'Кошик для речей'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Norco SL1',
      price: '1 год 30 хвилин',
      duration: '1 год 30 хвилин',
      features: [
        'Спортивний велосипед',
        'Швидкісна передача',
        'Професійне обладнання',
        'Для досвідчених райдерів'
      ],
      popular: false
    }
  ];

  return (
    <MotionSection id="pricing" className="section-padding bg-gray-50" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Прокат велосипедів
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const cardProps = shouldReduceMotion ? {} : fadeUpPreset(index * 0.1, 0.6);
            const MotionCard = shouldReduceMotion ? 'div' : motion.div;
            
            return (
              <MotionCard 
                key={plan.id} 
                className={`card relative ${plan.popular ? 'ring-2 ring-brand-green' : ''}`}
                {...cardProps}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярний
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-brand-green text-white hover:bg-brand-green-dark' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Забронювати
                </button>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};

export default Pricing;