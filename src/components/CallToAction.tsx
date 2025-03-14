
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'light' | 'gradient';
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'light'
}) => {
  const isGradient = variant === 'gradient';
  
  return (
    <div className={`relative overflow-hidden ${
      isGradient 
        ? 'bg-hero-gradient rounded-3xl' 
        : 'bg-gray-50'
    } py-16 px-4 sm:px-6 md:px-8 lg:px-12`}>
      {isGradient && (
        <>
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />
        </>
      )}
      
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
          isGradient ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h2>
        
        <p className={`mb-8 text-lg ${
          isGradient ? 'text-white/80' : 'text-gray-600'
        }`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to={primaryButtonLink}
            className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all hover:shadow-lg ${
              isGradient 
                ? 'bg-white text-sns-blue hover:bg-gray-100'
                : 'bg-blue-purple-gradient text-white hover:opacity-90'
            }`}
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              to={secondaryButtonLink}
              className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all ${
                isGradient
                  ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
