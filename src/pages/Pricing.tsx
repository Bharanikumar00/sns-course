
import React from 'react';
import { Check } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "₹29,999",
      description: "Perfect for small teams just getting started with corporate training.",
      features: [
        { text: "Access to 500+ courses", included: true },
        { text: "Up to 25 users", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      buttonText: "Get Started",
      buttonLink: "#"
    },
    {
      name: "Professional",
      price: "₹79,999",
      description: "Ideal for growing organizations with advanced learning needs.",
      features: [
        { text: "Access to 2,000+ courses", included: true },
        { text: "Up to 100 users", included: true },
        { text: "Advanced analytics & reporting", included: true },
        { text: "Priority support", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
        { text: "Dedicated account manager", included: false },
      ],
      buttonText: "Get Started",
      buttonLink: "#",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with specific requirements.",
      features: [
        { text: "Access to all 5,000+ courses", included: true },
        { text: "Unlimited users", included: true },
        { text: "Comprehensive analytics suite", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom branding & white labeling", included: true },
        { text: "Full API access & integrations", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      buttonText: "Contact Sales",
      buttonLink: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection
        badge="Simple, Transparent Pricing"
        title="Find the Perfect Plan for"
        highlightedText="Your Organization"
        description="Choose from our flexible pricing options designed to fit the needs of organizations of all sizes. All plans include regular updates and new content."
        variant="tertiary"
      >
        <a href="#pricing-plans" className="btn-primary">
          View Plans
        </a>
        <a href="#faq" className="btn-secondary">
          Read FAQ
        </a>
      </HeroSection>
      
      <section id="pricing-plans" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl border ${
                  plan.highlighted 
                    ? 'border-sns-blue shadow-lg shadow-sns-blue/10' 
                    : 'border-gray-200'
                } overflow-hidden transition-all duration-300 hover:shadow-xl`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-purple-gradient text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 ${plan.highlighted ? 'pt-10' : 'pt-6'}`}>
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                    {plan.name !== "Enterprise" && <span className="ml-1 text-sm font-semibold text-gray-500">/year</span>}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`flex-shrink-0 w-5 h-5 ${
                          feature.included 
                            ? 'text-sns-blue' 
                            : 'text-gray-300'
                        }`}>
                          <Check size={20} />
                        </div>
                        <span className={`ml-3 text-sm ${
                          feature.included 
                            ? 'text-gray-700' 
                            : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a
                      href={plan.buttonLink}
                      className={`block w-full py-3 px-4 rounded-md shadow text-center text-sm font-medium ${
                        plan.highlighted 
                          ? 'bg-blue-purple-gradient text-white hover:opacity-90' 
                          : 'bg-white text-sns-blue border border-sns-blue hover:bg-sns-blue/5'
                      } transition-all duration-200`}
                    >
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our pricing and features.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a free trial available?",
                answer: "We offer a 14-day free trial for the Professional plan, with no credit card required. You can explore all features and decide if it's the right fit for your organization."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, as well as wire transfers for Enterprise plan customers. For Indian organizations, we also support payment via UPI, Net Banking, and other local payment methods."
              },
              {
                question: "Do you offer discounts for educational institutions?",
                answer: "Yes, we offer special pricing for educational institutions. Please contact our sales team for more information on educational discounts."
              },
              {
                question: "What kind of support is included?",
                answer: "All plans include email support. The Professional plan includes priority email and chat support during business hours. The Enterprise plan includes 24/7 support via email, chat, and phone."
              }
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <div className="mt-2">
                  <p className="text-base text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <CallToAction
            title="Still have questions?"
            description="Our team is here to help you find the perfect plan for your organization's needs."
            primaryButtonText="Contact Sales"
            primaryButtonLink="#"
            secondaryButtonText="Book a Demo"
            secondaryButtonLink="#"
            variant="light"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
