
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'default' | 'gradient';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  variant = 'default'
}) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
        variant === 'gradient' 
          ? 'glass-card hover:-translate-y-1' 
          : 'bg-white hover:bg-gray-50 border border-gray-100 shadow-sm'
      }`}
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-blue-purple-gradient transition-all duration-300 group-hover:w-full" />
      
      <div className={`mb-6 inline-flex items-center justify-center rounded-full p-2 ${
        variant === 'gradient' 
          ? 'bg-white/10 backdrop-blur-sm text-white' 
          : 'bg-blue-50 text-sns-blue'
      }`}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className={`text-xl font-semibold mb-3 ${
        variant === 'gradient' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      
      <p className={variant === 'gradient' ? 'text-white/80' : 'text-gray-600'}>
        {description}
      </p>
      
      {variant === 'gradient' && (
        <div className="absolute bottom-0 right-0 -z-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
      )}
    </div>
  );
};

export default FeatureCard;
