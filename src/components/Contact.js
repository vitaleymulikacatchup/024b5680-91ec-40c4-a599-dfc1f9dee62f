import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);

  return (
    <MotionSection id="contact" className="section-padding bg-white" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Контакти
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionDiv 
              className="space-y-6"
              {...(shouldReduceMotion ? {} : fadeUpPreset(0.2, 0.6))}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green bg-opacity-10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адреса</h3>
                  <p className="text-gray-600">
                    м. Запоріжжя, вул. Центральна, 123<br />
                    (біля парку Шевченка)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green bg-opacity-10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-600">
                    +38 (061) 123-45-67<br />
                    +38 (050) 123-45-67
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green bg-opacity-10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    info@velocentr.zp.ua
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green bg-opacity-10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Режим роботи</h3>
                  <p className="text-gray-600">
                    Пн-Пт: 9:00 - 19:00<br />
                    Сб-Нд: 10:00 - 18:00
                  </p>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv 
              className="bg-gray-50 p-6 rounded-lg"
              {...(shouldReduceMotion ? {} : fadeUpPreset(0.3, 0.6))}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Забронювати велосипед
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ім'я
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    placeholder="Ваше ім'я"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    placeholder="+38 (0__) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Дата та час
                  </label>
                  <input 
                    type="datetime-local" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Коментар
                  </label>
                  <textarea 
                    rows="3" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    placeholder="Додаткові побажання..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Забронювати
                </button>
              </form>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Contact;