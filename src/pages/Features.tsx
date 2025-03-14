
import React from 'react';
import { BookOpen, Users, Award, BarChart, Zap, PenTool, Target, Clock, Globe, Shield, Database, Code, Upload, MonitorSmartphone, FileText, Heart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        badge="Features & Capabilities"
        title="Powerful Tools for"
        highlightedText="Corporate Learning"
        description="Discover the comprehensive suite of features that make SNS Course the leading platform for organizational learning and development."
        variant="secondary"
      >
        <a href="#core-features" className="btn-primary">
          Explore Features
        </a>
        <a href="#pricing" className="btn-secondary">
          View Pricing
        </a>
      </HeroSection>
      
      {/* Core Features */}
      <section id="core-features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Platform Features
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive learning platform includes everything you need to create, deliver, and track effective corporate training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Extensive Course Library"
              description="Access over 5,000 professionally developed courses covering business, technical, and soft skills training."
              icon={BookOpen}
            />
            <FeatureCard
              title="Team Collaboration"
              description="Foster teamwork with collaborative learning spaces, discussion forums, and group projects."
              icon={Users}
            />
            <FeatureCard
              title="Certification Programs"
              description="Offer industry-recognized certifications to validate employee skills and knowledge."
              icon={Award}
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="Track learning progress, completion rates, and performance metrics with comprehensive reporting tools."
              icon={BarChart}
            />
            <FeatureCard
              title="Personalized Learning Paths"
              description="Create customized learning journeys tailored to individual employee roles and career goals."
              icon={Target}
            />
            <FeatureCard
              title="Course Authoring Tools"
              description="Develop custom courses with intuitive authoring tools to address specific organizational needs."
              icon={PenTool}
            />
            <FeatureCard
              title="Microlearning Modules"
              description="Deliver bite-sized learning content optimized for retention and quick consumption."
              icon={Clock}
            />
            <FeatureCard
              title="Multilingual Support"
              description="Deliver content in multiple languages to support global workforces and diverse teams."
              icon={Globe}
            />
            <FeatureCard
              title="Enterprise-Grade Security"
              description="Ensure data protection with advanced security features and compliance with global standards."
              icon={Shield}
            />
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sns-blue/5 via-sns-indigo/5 to-sns-purple/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Platform Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Take your learning programs to the next level with our advanced features designed for enterprise needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Experience Platform (LXP)</h3>
              <p className="text-gray-600">Curate and recommend content based on employee roles, skills gaps, and career goals.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">API Integration</h3>
              <p className="text-gray-600">Seamlessly connect with HRIS, CRM, and other enterprise systems for unified workflows.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <Upload className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bulk Content Import</h3>
              <p className="text-gray-600">Easily migrate existing learning content from other platforms or legacy systems.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <MonitorSmartphone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Device Support</h3>
              <p className="text-gray-600">Access learning content on any device with responsive design and offline capabilities.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance Training</h3>
              <p className="text-gray-600">Ensure regulatory compliance with specialized training modules and automated tracking.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automated Assignments</h3>
              <p className="text-gray-600">Schedule and assign training automatically based on roles, departments, or milestones.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gamification</h3>
              <p className="text-gray-600">Increase engagement with points, badges, leaderboards, and other motivational elements.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="mb-4 inline-flex items-center justify-center rounded-full p-2 bg-blue-50 text-sns-blue">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Learning</h3>
              <p className="text-gray-600">Foster knowledge sharing with social features, peer reviews, and collaborative spaces.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Comparison
            </h2>
            <p className="text-lg text-gray-600">
              See how SNS Course compares to traditional learning management systems.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Traditional LMS
                  </th>
                  <th className="px-6 py-4 bg-gradient-to-r from-sns-blue to-sns-purple text-center text-sm font-medium text-white uppercase tracking-wider rounded-t-lg">
                    SNS Course Platform
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Personalized Learning Paths
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Basic
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    Advanced AI-Driven
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Content Creation Tools
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Limited
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    Full Suite
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Mobile Learning
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Partial
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    Fully Responsive + Offline
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Analytics & Reporting
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Basic
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    Comprehensive
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Integration Capabilities
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Limited
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    Extensive API Ecosystem
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Learner Engagement
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Low-Medium
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    High (Gamification + Social)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Content Library
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    Limited
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    5,000+ Courses
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Implementation Time
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    3-6 Months
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-sns-blue font-medium">
                    2-4 Weeks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <CallToAction
            title="Ready to Explore These Features?"
            description="Schedule a demo to see how SNS Course can transform learning and development at your organization."
            primaryButtonText="Get Started"
            primaryButtonLink="/pricing"
            secondaryButtonText="Book a Demo"
            secondaryButtonLink="#"
            variant="gradient"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
