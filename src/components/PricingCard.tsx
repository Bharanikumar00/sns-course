
import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  isPopular = false
}) => {
  return (
    <div className={`relative h-full overflow-hidden rounded-2xl transition-all duration-300 ${
      isPopular 
        ? 'shadow-xl scale-105 z-10 gradient-border bg-white'
        : 'border border-gray-200 bg-white hover:shadow-md'
    }`}>
      {isPopular && (
        <div className="absolute top-5 right-5">
          <span className="inline-flex items-center rounded-full bg-blue-purple-gradient px-3 py-1 text-xs font-medium text-white shadow-sm">
            Popular
          </span>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
        
        <button 
          className={`w-full mb-8 rounded-lg py-3 font-medium shadow-sm transition-all hover:shadow-md ${
            isPopular
              ? 'bg-blue-purple-gradient text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {buttonText}
        </button>
        
        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-700">Features included:</p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`mr-3 mt-1 rounded-full p-1 ${
                feature.included 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                <Check className="h-3 w-3" />
              </div>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
