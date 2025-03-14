
import React, { useEffect, useRef, ReactNode } from 'react';

interface HeroSectionProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description: string;
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  highlightedText,
  description,
  children,
  variant = 'primary'
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  let gradientClass = 'bg-hero-gradient';
  switch (variant) {
    case 'secondary':
      gradientClass = 'bg-blue-teal-gradient';
      break;
    case 'tertiary':
      gradientClass = 'bg-purple-pink-gradient';
      break;
    case 'quaternary':
      gradientClass = 'from-sns-blue via-sns-indigo to-sns-purple bg-gradient-to-br';
      break;
    default:
      gradientClass = 'bg-hero-gradient';
  }

  useEffect(() => {
    // Simple animation on mount
    const heroElement = heroRef.current;
    if (heroElement) {
      const children = Array.from(heroElement.children) as HTMLElement[];
      children.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
      });
    }
  }, []);

  // Create animated background elements
  const createBackgroundElements = () => {
    return Array.from({ length: 20 }).map((_, index) => {
      const size = Math.floor(Math.random() * 100) + 50;
      const positionX = Math.floor(Math.random() * 100);
      const positionY = Math.floor(Math.random() * 100);
      const opacity = Math.random() * 0.1;
      const duration = Math.floor(Math.random() * 30) + 10;
      
      return (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${positionX}%`,
            top: `${positionY}%`,
            opacity: opacity,
            filter: 'blur(40px)',
            animation: `float ${duration}s ease-in-out infinite alternate`,
            animationDelay: `${index * 0.5}s`
          }}
        />
      );
    });
  };

  return (
    <div className={`relative overflow-hidden ${gradientClass} py-20 md:py-32`}>
      {createBackgroundElements()}
      
      <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-30" />
      
      <div ref={heroRef} className="container relative mx-auto px-4 md:px-6 text-center">
        {badge && (
          <div className="mb-6 inline-block animate-fade-in">
            <span className="hero-badge">
              {badge}
            </span>
          </div>
        )}
        
        <h1 className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}{' '}
          {highlightedText && (
            <span className="relative inline-block">
              {highlightedText}
              <span className="absolute bottom-2 left-0 h-3 w-full bg-white/20 -z-10" />
            </span>
          )}
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
          {description}
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {children}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
