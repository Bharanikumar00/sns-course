
import React from 'react';
import { Quote } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Testimonials: React.FC = () => {
  const featuredTestimonials = [
    {
      name: "Rajiv Patel",
      role: "HR Director",
      company: "TechCorp India",
      quote: "SNS Course transformed our training programs. The platform is intuitive, the content is relevant, and the analytics help us track ROI effectively. We've seen a 30% increase in course completion rates since switching to SNS Course.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Priya Sharma",
      role: "L&D Manager",
      company: "Global Services Ltd",
      quote: "The personalized learning paths and skill gap analysis have been game-changers for our talent development strategy. Our employees are more engaged, and we can clearly see the impact on performance metrics. Highly recommended!",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Vikram Singh",
      role: "CEO",
      company: "InnovaTech Solutions",
      quote: "We've seen a 40% increase in employee skill proficiency since implementing SNS Course. The platform's flexibility and comprehensive content library have allowed us to rapidly upskill our workforce. The ROI has been exceptional.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];
  
  const regularTestimonials = [
    {
      name: "Ananya Desai",
      role: "Training Coordinator",
      company: "Healthcare Solutions",
      quote: "SNS Course's customer support is exceptional. They helped us customize our learning paths and were always available when we needed assistance with implementation.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Rahul Khanna",
      role: "IT Director",
      company: "Finance Plus",
      quote: "The technical training courses on SNS Course are top-notch. Our development team has gained valuable skills that have directly contributed to improved product delivery.",
      rating: 4,
      avatar: "/placeholder.svg"
    },
    {
      name: "Neha Gupta",
      role: "Chief People Officer",
      company: "Retail Innovations",
      quote: "We love the analytics capabilities. Being able to track learning progress across departments has given us valuable insights for our talent development strategy.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Arjun Mehta",
      role: "Operations Manager",
      company: "Manufacturing Excellence",
      quote: "The mobile learning capabilities have been perfect for our field teams. They can access training materials anywhere, anytime, which has significantly improved knowledge retention.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Sanjay Kumar",
      role: "Sales Director",
      company: "Distribution Networks",
      quote: "Our sales team's performance improved dramatically after completing SNS Course's sales training modules. The interactive elements and role-play scenarios were particularly effective.",
      rating: 4,
      avatar: "/placeholder.svg"
    },
    {
      name: "Divya Agarwal",
      role: "Talent Development Lead",
      company: "Consulting Partners",
      quote: "The certification programs have added tremendous value to our employee development initiatives. Our team members appreciate the opportunity to earn recognized credentials.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        badge="Success Stories"
        title="What Our Clients"
        highlightedText="Say About Us"
        description="Discover how organizations across India are transforming their corporate learning and development with SNS Course."
        variant="tertiary"
      >
        <a href="#testimonials" className="btn-primary">
          Read Testimonials
        </a>
        <a href="#contact" className="btn-secondary">
          Become a Success Story
        </a>
      </HeroSection>
      
      {/* Featured Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from organizations that have transformed their learning and development with SNS Course.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Metrics */}
      <section className="py-16 md:py-24 bg-blue-purple-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The SNS Course Impact
            </h2>
            <p className="text-lg text-white/80">
              Organizations using our platform report significant improvements in key learning metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-card p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">94%</p>
              <p className="text-white/80">User Satisfaction</p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">32%</p>
              <p className="text-white/80">Increased Retention</p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">45%</p>
              <p className="text-white/80">Higher Engagement</p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">3.5x</p>
              <p className="text-white/80">ROI on Training</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="btn-secondary">
              Download Success Metrics
            </a>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              From startups to enterprises, organizations across industries are achieving their learning goals with SNS Course.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Quote */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sns-blue/5 via-sns-indigo/5 to-sns-purple/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto relative">
            <Quote className="absolute -top-10 -left-10 h-24 w-24 text-sns-blue/10" />
            
            <blockquote className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 italic mb-8">
                "Implementing SNS Course was one of the best decisions we made for our employee development program. The platform's comprehensive features, intuitive interface, and exceptional support have made it an invaluable asset in our learning ecosystem."
              </p>
              
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Anil Sharma"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-900">Anil Sharma</p>
                <p className="text-gray-600">Chief Learning Officer, Enterprise Solutions Ltd</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <CallToAction
            title="Ready to Become Our Next Success Story?"
            description="Join the growing community of organizations transforming their learning and development with SNS Course."
            primaryButtonText="Get Started"
            primaryButtonLink="/pricing"
            secondaryButtonText="Contact Sales"
            secondaryButtonLink="#"
            variant="gradient"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
