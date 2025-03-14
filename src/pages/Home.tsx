import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, BarChart, Zap, PenTool, Target } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const Home: React.FC = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection badge="Corporate Learning Platform" title="Elevate Your Workforce with" highlightedText="Comprehensive Learning" description="SNS Course offers a comprehensive online platform that empowers organizations with corporate training and professional development resources to enhance employee skills and drive performance.">
        <Link to="/ai-features" className="btn-primary">
          Explore AI Features <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <a href="#features" className="btn-secondary">
          Learn More
        </a>
      </HeroSection>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-gradient">5000+</p>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-gradient">1M+</p>
              <p className="text-gray-600">Active Learners</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-gradient">95%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-gradient">500+</p>
              <p className="text-gray-600">Corporate Partners</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Overview */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Learning Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our platform combines cutting-edge technology with expert content to deliver exceptional learning experiences tailored to your organization's needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Extensive Course Library" description="Access thousands of courses across various domains including leadership, technical skills, and soft skills." icon={BookOpen} />
            <FeatureCard title="Team Collaboration" description="Enable teams to learn together through collaborative features, discussion boards, and group projects." icon={Users} />
            <FeatureCard title="Certification Programs" description="Offer industry-recognized certifications to help employees showcase their expertise and advance in their careers." icon={Award} />
            <FeatureCard title="Analytics Dashboard" description="Track learning progress, completion rates, and performance metrics to measure the impact of training programs." icon={BarChart} />
            <FeatureCard title="Personalized Learning Paths" description="Create customized learning journeys tailored to individual employee roles, skills gaps, and career aspirations." icon={Target} />
            <FeatureCard title="Rapid Course Creation" description="Quickly develop custom courses with our intuitive authoring tools to address your organization's specific needs." icon={PenTool} />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Organizations Choose SNS Course
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sns-blue">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accelerated Skill Development</h3>
                    <p className="text-gray-600">Our platform reduces learning time by 40% compared to traditional methods through adaptive learning algorithms.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sns-blue">
                      <Target className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Targeted Skill Gaps Analysis</h3>
                    <p className="text-gray-600">Our assessment tools identify specific skill gaps in your workforce to focus training where it matters most.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sns-blue">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven ROI on Learning</h3>
                    <p className="text-gray-600">Organizations using our platform report 32% higher employee retention and 28% increase in productivity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-feature-gradient rounded-2xl overflow-hidden h-[500px] flex items-center justify-center p-8 bg-indigo-400">
              <div className="glass-card w-full max-w-md p-8 flex flex-col items-center text-center relative bg-indigo-500">
                <div className="absolute -top-4 -right-4 bg-blue-purple-gradient rounded-full h-24 w-24 blur-2xl opacity-50"></div>
                <div className="mb-6 rounded-full bg-white/10 p-4">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Learning Hub</h3>
                <p className="text-white/80 mb-6">Centralize all your organization's learning resources and track progress across departments in one intuitive dashboard.</p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-white">87%</p>
                    <p className="text-white/80 text-sm">Completion Rate</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-white">3.5x</p>
                    <p className="text-white/80 text-sm">ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Preview */}
      <section className="py-16 md:py-24 bg-blue-purple-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-white/80">
              See what our clients have to say about their experience with SNS Course.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Rajiv Patel" role="HR Director" company="TechCorp India" quote="SNS Course transformed our training programs. The platform is intuitive, the content is relevant, and the analytics help us track ROI effectively." rating={5} avatar="/placeholder.svg" variant="dark" />
            <TestimonialCard name="Priya Sharma" role="L&D Manager" company="Global Services Ltd" quote="The personalized learning paths and skill gap analysis have been game-changers for our talent development strategy. Highly recommended!" rating={5} avatar="/placeholder.svg" variant="dark" />
            <TestimonialCard name="Vikram Singh" role="CEO" company="InnovaTech Solutions" quote="We've seen a 40% increase in employee skill proficiency since implementing SNS Course. The platform's flexibility and comprehensive content are unmatched." rating={5} avatar="/placeholder.svg" variant="dark" />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/testimonials" className="btn-secondary">
              View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <CallToAction title="Ready to Transform Your Corporate Learning?" description="Join thousands of organizations that are revolutionizing their training programs with SNS Course." primaryButtonText="Get Started" primaryButtonLink="/pricing" secondaryButtonText="Book a Demo" secondaryButtonLink="#" variant="gradient" />
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Home;