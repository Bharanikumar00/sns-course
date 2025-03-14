
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import ChatMessage from '@/components/ChatMessage';
import { useToast } from '@/hooks/use-toast';

const AIFeatures: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([
    { 
      content: "How to become a Data Analyst?", 
      isUser: true 
    },
    { 
      content: "1.Learn the Basics of Data Analytics – Understand what data analysis is, its importance, and key concepts like data types, statistics, and business intelligence.\n\n2.Master Excel & SQL – Learn Excel for data manipulation and SQL for querying databases, as these are essential for handling structured data.\n\n3.Learn a Programming Language (Python or R) – Gain proficiency in Python (Pandas, NumPy, Matplotlib, Seaborn) or R for data cleaning, analysis, and visualization.\n\n4.Understand Data Visualization Tools – Learn Tableau, Power BI, or Google Data Studio to create interactive dashboards and reports.\n\n5.Develop Statistical & Analytical Skills – Learn probability, hypothesis testing, regression analysis, and A/B testing to make data-driven decisions.\n\n6.Gain Knowledge of Business & Domain Expertise – Understand industry-specific KPIs, business operations, and how data impacts decision-making.\n\n7.Work on Real-world Projects & Case Studies – Apply your knowledge by working on datasets, building dashboards, and solving business problems.\n\n8.Learn Data Cleaning & Preprocessing – Master techniques to handle missing data, outliers, and data inconsistencies.\n\n9.Build a Portfolio & Resume – Showcase projects, dashboards, and analytical reports in a GitHub repository or personal website.\n\n10.Apply for Jobs & Keep Learning – Start applying for internships or entry-level Data Analyst roles while continuously improving your skills in advanced analytics and big data tools.", 
      isUser: false 
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) {
      toast({
        title: "Empty message",
        description: "Please enter a message to send",
        variant: "destructive",
      });
      return;
    }
    
    // Add user message
    setMessages(prev => [...prev, { content: inputValue, isUser: true }]);
    setInputValue('');
    setIsProcessing(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        content: generateEducationalResponse(),
        isUser: false
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1500);
  };

  // Function to generate educational content responses
  const generateEducationalResponse = () => {
    return "Here are some key learning resources and paths to explore:\n\n1. **Online Learning Platforms** - Coursera, edX, and Khan Academy offer comprehensive courses across various subjects with certificates upon completion.\n\n2. **Programming and Tech Skills** - For coding, try freeCodeCamp, Codecademy, or CS50 from Harvard. These platforms provide interactive lessons and projects.\n\n3. **Language Learning** - Duolingo and Babbel offer structured approaches to learning new languages through daily practice and immersion.\n\n4. **Critical Thinking & Logic** - Resources like Brilliant.org help develop problem-solving skills through interactive challenges in math and science.\n\n5. **Creative Skills** - Platforms like Skillshare specialize in creative fields including design, writing, and photography with project-based learning.\n\n6. **Self-Directed Study Techniques** - The Pomodoro Technique (25-minute focused sessions with short breaks) and spaced repetition can dramatically improve retention and productivity.\n\n7. **Academic Research** - Google Scholar and JSTOR provide access to academic papers and research for deeper understanding of specialized topics.\n\nWould you like more specific recommendations for any particular subject area or learning goal?";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        badge="AI-Powered Learning"
        title="Revolutionizing Education with"
        highlightedText="Artificial Intelligence"
        description="Discover how our AI-powered learning platform personalizes education, automates administrative tasks, and provides deep insights into learning patterns."
        variant="quaternary"
      >
        <a href="#chat-section" className="btn-primary">
          Try AI Chat
        </a>
        <a href="#" className="btn-secondary">
          Book a Demo
        </a>
      </HeroSection>
      
      {/* Chat Interface */}
      <section id="chat-section" className="py-16 w-full bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl font-bold mb-3">AI Education Assistant</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get personalized learning resources and educational guidance. Just ask our AI assistant!
            </p>
          </div>
          
          <Card className="w-[90%] mx-auto shadow-lg border border-primary/10 bg-card/95 backdrop-blur-sm rounded-xl overflow-hidden">
            <CardContent className="p-0">
              {/* Messages Area */}
              <ScrollArea className="h-[400px] md:h-[500px] p-4">
                <div className="flex flex-col space-y-4">
                  {messages.map((message, index) => (
                    <ChatMessage 
                      key={index} 
                      message={message.content} 
                      isUser={message.isUser} 
                      animate={index > messages.length - 3}
                    />
                  ))}
                  {isProcessing && (
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-lg w-fit bg-primary/10 self-start">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              {/* Input Area */}
              <form 
                onSubmit={handleSubmit}
                className="p-4 border-t border-border bg-card/80 backdrop-blur-sm"
              >
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask about learning resources or educational paths..."
                    className="flex-1 bg-background/50 border-primary/20 focus-visible:ring-primary"
                    disabled={isProcessing}
                  />
                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                    className="bg-blue-purple-gradient hover:opacity-90 transition-all"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>This AI assistant is for demonstration purposes. Responses are pre-programmed.</p>
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default AIFeatures;
