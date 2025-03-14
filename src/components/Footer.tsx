
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/home" className="text-2xl font-bold text-gradient">
              SNS Course
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Streamlining corporate learning and development with an extensive online training platform.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-sns-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-sns-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-sns-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-sns-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-sns-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/ai-features" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  AI Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  <Mail size={16} className="mr-2" />
                  <span>info@snscourse.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-sns-blue transition-colors text-sm">
                  <Phone size={16} className="mr-2" />
                  <span>+91 987 654 3210</span>
                </a>
              </li>
              <li className="text-gray-600 text-sm pt-2">
                <p>SNS Course Headquarters</p>
                <p>123 Education Lane, Tech Park</p>
                <p>Bangalore, Karnataka 560001</p>
                <p>India</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SNS Course. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-sns-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sns-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sns-blue transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
