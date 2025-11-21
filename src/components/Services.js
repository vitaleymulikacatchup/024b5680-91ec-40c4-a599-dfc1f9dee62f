import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Settings, Award, TrendingUp, Target } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);
  
  const services = [
    {
      id: 1,
      icon: Settings,
      title: 'Обслуговування ровера',
      description: 'Повне технічне обслуговування велосипедів. Діагностика, налаштування, заміна деталей. Гарантія якості на всі види робіт.',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      icon: Award,
      title: 'Оформлення подарунків',
      description: 'Створюємо незабутні подарунки для ваших близьких. Подарункові сертифікати, оформлення, доставка. Зробіть приємність рідним.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Вивчення маршруту',
      description: 'Допомагаємо спланувати найкращі велосипедні маршрути. Консультації по безпеці, цікавим місцям та оптимальним шляхам.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 4,
      icon: Target,
      title: 'Інструктаж та старт',
      description: 'Професійний інструктаж перед поїздкою. Навчаємо правилам безпеки, особливостям керування, надаємо всі необхідні поради.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <MotionSection id="services" className="section-padding bg-white" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Послуги
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const cardProps = shouldReduceMotion ? {} : fadeUpPreset(index * 0.1, 0.6);
            const MotionCard = shouldReduceMotion ? 'div' : motion.div;
            const IconComponent = service.icon;
            
            return (
              <MotionCard key={service.id} className="card hover:shadow-lg transition-shadow" {...cardProps}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${service.color} flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};

export default Services;