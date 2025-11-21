import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Reviews = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const MotionSection = shouldReduceMotion ? 'section' : motion.section;
  const MotionDiv = shouldReduceMotion ? 'div' : motion.div;
  
  const sectionProps = shouldReduceMotion ? {} : fadeUpPreset(0.1, 0.6);
  
  const reviews = [
    {
      id: 1,
      image: '/images/review1.jpg',
      text: 'Чудовий сервіс! Велосипеди в відмінному стані, персонал дуже привітний та професійний. Обов\'язково повернемося ще!',
      author: 'Олександр К.',
      rating: 5
    },
    {
      id: 2,
      image: '/images/review2.jpg',
      text: 'Прекрасно провели час! Велосипеди якісні, ціни адекватні. Дуже задоволені обслуговуванням та якістю послуг.',
      author: 'Марія П.',
      rating: 5
    },
    {
      id: 3,
      image: '/images/review3.jpg',
      text: 'Відмінне місце для активного відпочинку! Великий вибір велосипедів, все в ідеальному стані. Рекомендую всім!',
      author: 'Дмитро С.',
      rating: 5
    }
  ];

  return (
    <MotionSection className="section-padding bg-gray-50" {...sectionProps}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Відгуки
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const cardProps = shouldReduceMotion ? {} : fadeUpPreset(index * 0.1, 0.6);
            const MotionCard = shouldReduceMotion ? 'div' : motion.div;
            
            return (
              <MotionCard key={review.id} className="card text-center" {...cardProps}>
                <div className="mb-4">
                  <img 
                    src={review.image} 
                    alt={`Відгук ${review.author}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">
                  "{review.text}"
                </p>
                
                <p className="font-semibold text-gray-900">
                  {review.author}
                </p>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};

export default Reviews;