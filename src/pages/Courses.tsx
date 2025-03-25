
import React, { useState } from 'react';
import { Book, BookOpen, BookText, GraduationCap } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Define course categories
const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'programming', name: 'Programming' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'design', name: 'Design' },
  { id: 'business', name: 'Business' },
];

// Define course data
const coursesData = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer',
    image: '/programming.jpg',
    category: 'programming',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    price: '$79.99',
    rating: 4.8,
    students: 15420,
    instructor: 'Sarah Johnson',
    featured: true,
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master data analysis, visualization, and machine learning with Python and popular libraries',
    image: '/data-science.jpg',
    category: 'data-science',
    duration: '10 weeks',
    level: 'Intermediate',
    price: '$89.99',
    rating: 4.7,
    students: 12350,
    instructor: 'Michael Chen',
    featured: true,
  },
  {
    id: 3,
    title: 'UX/UI Design Masterclass',
    description: 'Create stunning user interfaces and seamless user experiences with industry-standard tools',
    image: '/design.jpg',
    category: 'design',
    duration: '8 weeks',
    level: 'All Levels',
    price: '$69.99',
    rating: 4.9,
    students: 8920,
    instructor: 'Emma Rodriguez',
    featured: false,
  },
  {
    id: 4,
    title: 'Business Management & Leadership',
    description: 'Develop essential management skills to lead teams and drive business growth',
    image: '/business.jpg',
    category: 'business',
    duration: '6 weeks',
    level: 'Intermediate to Advanced',
    price: '$59.99',
    rating: 4.6,
    students: 7340,
    instructor: 'David Thompson',
    featured: false,
  },
  {
    id: 5,
    title: 'Advanced JavaScript Patterns',
    description: 'Take your JavaScript skills to the next level with advanced patterns and techniques',
    image: '/advanced-js.jpg',
    category: 'programming',
    duration: '8 weeks',
    level: 'Advanced',
    price: '$99.99',
    rating: 4.9,
    students: 6280,
    instructor: 'Alex Wilson',
    featured: false,
  },
  {
    id: 6,
    title: 'Machine Learning Engineering',
    description: 'Build and deploy machine learning models with Python, TensorFlow, and PyTorch',
    image: '/data-science.jpg',
    category: 'data-science',
    duration: '14 weeks',
    level: 'Advanced',
    price: '$129.99',
    rating: 4.8,
    students: 5430,
    instructor: 'Dr. Sophia Lee',
    featured: true,
  },
];

// Course Card Component
const CourseCard = ({ course }: { course: typeof coursesData[0] }) => {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col">
      <div className="relative">
        {course.featured && (
          <div className="absolute top-2 right-2 z-10 bg-sns-purple text-white px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
        <AspectRatio ratio={16 / 9}>
          <img 
            src={course.image} 
            alt={course.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
            {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
          </span>
          <span className="flex items-center text-xs text-yellow-600">
            ★★★★★ <span className="ml-1">{course.rating}</span>
          </span>
        </div>
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-1 col-span-2">
            <BookText className="h-3.5 w-3.5" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0 pb-4">
        <div className="font-bold text-lg text-sns-blue">{course.price}</div>
        <Button className="rounded-full px-4 py-1 h-auto text-sm" size="sm">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

// Featured Course Section
const FeaturedCourses = ({ courses }: { courses: typeof coursesData }) => {
  const featuredCourses = courses.filter(course => course.featured);
  
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses designed to provide you with the skills
            and knowledge to succeed in today's digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map(course => (
            <div key={course.id} className="animate-fade-in">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Courses Page Component
const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter courses based on selected category and search query
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient animate-fade-in">
              Expand Your Knowledge
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Discover a wide range of courses designed to help you learn new skills,
              advance your career, and achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="btn-primary">Browse All Courses</Button>
              <Button variant="outline">How It Works</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <FeaturedCourses courses={coursesData} />
      
      {/* All Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of courses and find the perfect one for you.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-sns-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <Book className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700">No courses found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of students already learning on our platform.
            Get started today and take the first step towards your goals.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
            Get Started
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
