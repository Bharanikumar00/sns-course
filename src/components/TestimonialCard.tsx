
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  variant?: 'light' | 'dark';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  quote,
  rating,
  avatar,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
      isDark 
        ? 'glass-card bg-gradient-to-br from-sns-purple/20 to-sns-blue/20 hover:-translate-y-1'
        : 'bg-white border border-gray-100 shadow-sm hover:bg-gray-50'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
            <img 
              src={avatar || 'https://randomuser.me/api/portraits/men/1.jpg'} 
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</h4>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              {role}, {company}
            </p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star 
              key={index}
              className={`h-4 w-4 ${
                index < rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : isDark ? 'text-white/30' : 'text-gray-300'
              }`} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className={`relative mb-2 ${isDark ? 'text-white/90' : 'text-gray-700'}`}>
        <span className="absolute -top-2 -left-1 text-4xl opacity-20">"</span>
        <p className="relative z-10">{quote}</p>
        <span className="absolute -bottom-6 -right-1 text-4xl opacity-20">"</span>
      </blockquote>
      
      {isDark && (
        <div className="absolute bottom-0 right-0 -z-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
      )}
    </div>
  );
};

export default TestimonialCard;
