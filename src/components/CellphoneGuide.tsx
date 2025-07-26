import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhoneAddictionQuiz from "./PhoneAddictionQuiz";
import RealWorldCaseStudies from "./RealWorldCaseStudies";
import { 
  Smartphone, 
  Heart, 
  Brain, 
  Users, 
  BookOpen, 
  Camera, 
  AlertTriangle, 
  Eye, 
  Bed, 
  UserX,
  Clock,
  Shield,
  ClipboardList
} from "lucide-react";
import heroImage from "@/assets/cellphone-hero.jpg";

const CellphoneGuide = () => {
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);
  const [expandedMisuse, setExpandedMisuse] = useState<number | null>(null);
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communication & Connection",
      description: "Stay connected with family and friends anywhere, anytime through calls, texts, and video chats.",
      examples: ["Video calls with distant relatives", "Emergency contact capability", "Group messaging for coordination"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education & Learning",
      description: "Access vast educational resources, online courses, and learning apps on the go.",
      examples: ["Language learning apps", "Educational videos and tutorials", "Digital libraries and research"]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Creativity & Expression",
      description: "Capture memories, create content, and express yourself through various media platforms.",
      examples: ["Photography and videography", "Digital art and music creation", "Sharing experiences and stories"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Monitor health metrics, access medical information, and maintain wellness routines.",
      examples: ["Fitness tracking", "Meditation and mindfulness apps", "Health reminders and monitoring"]
    }
  ];

  const misuses = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Excessive Screen Time",
      description: "Spending too much time on devices can lead to eye strain, headaches, and reduced physical activity.",
      impacts: ["Digital eye strain", "Reduced outdoor activities", "Sedentary lifestyle"]
    },
    {
      icon: <Bed className="w-6 h-6" />,
      title: "Sleep Disruption",
      description: "Using phones before bedtime or keeping them nearby can significantly impact sleep quality.",
      impacts: ["Delayed sleep onset", "Poor sleep quality", "Daytime fatigue"]
    },
    {
      icon: <UserX className="w-6 h-6" />,
      title: "Social Isolation",
      description: "Over-reliance on digital communication can reduce face-to-face interactions and social skills.",
      impacts: ["Reduced empathy", "Weakened real-world relationships", "Social anxiety"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Attention & Focus Issues",
      description: "Constant notifications and multitasking can fragment attention and reduce concentration.",
      impacts: ["Shortened attention span", "Reduced productivity", "Difficulty with deep thinking"]
    }
  ];

  const healthyTips = [
    {
      icon: <Clock className="w-5 h-5" />,
      tip: "Set specific times for phone-free activities like meals and family time"
    },
    {
      icon: <Bed className="w-5 h-5" />,
      tip: "Keep phones out of the bedroom or use night mode 1 hour before sleep"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      tip: "Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds"
    },
    {
      icon: <Users className="w-5 h-5" />,
      tip: "Schedule regular face-to-face social activities without devices"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      tip: "Use parental controls and content filters for younger users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground">Digital Wellness Guide</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Cellphones – A Powerful Tool or a Silent Trap?
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Learn how to harness the power of your cellphone while maintaining healthy digital habits and avoiding common pitfalls.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Cellphone surrounded by digital icons representing various uses"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beneficial Uses of Cellphones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When used mindfully, cellphones can enhance our lives in numerous ways
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-500 border-0 bg-gradient-to-br from-card to-muted/30 hover:shadow-xl ${
                  expandedBenefit === index 
                    ? 'scale-105 shadow-2xl ring-2 ring-primary/50 animate-scale-in' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-success/10 text-success transition-all duration-300 ${
                      expandedBenefit === index ? 'scale-125' : 'group-hover:scale-110'
                    }`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className={`transition-all duration-300 ${
                      expandedBenefit === index ? 'text-2xl font-extrabold text-primary' : 'text-xl'
                    }`}>
                      {benefit.title}
                    </CardTitle>
                  </div>
                  <CardDescription className={`transition-all duration-300 ${
                    expandedBenefit === index ? 'text-lg font-semibold text-foreground' : 'text-base'
                  }`}>
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`transition-all duration-300 ${
                  expandedBenefit === index ? 'animate-fade-in' : ''
                }`}>
                  <ul className="space-y-2">
                    {benefit.examples.map((example, idx) => (
                      <li key={idx} className={`flex items-center space-x-2 transition-all duration-300 ${
                        expandedBenefit === index 
                          ? 'text-base font-medium text-foreground' 
                          : 'text-sm text-muted-foreground'
                      }`}>
                        <div className={`rounded-full bg-success transition-all duration-300 ${
                          expandedBenefit === index ? 'w-2 h-2' : 'w-1.5 h-1.5'
                        }`}></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Misuses Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Misuses & Their Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding potential negative impacts helps us make better choices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {misuses.map((misuse, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-500 border-0 bg-gradient-to-br from-card to-warning/5 hover:shadow-xl ${
                  expandedMisuse === index 
                    ? 'scale-105 shadow-2xl ring-2 ring-warning/50 animate-scale-in' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setExpandedMisuse(expandedMisuse === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-warning/10 text-warning transition-all duration-300 ${
                      expandedMisuse === index ? 'scale-125' : 'group-hover:scale-110'
                    }`}>
                      {misuse.icon}
                    </div>
                    <CardTitle className={`transition-all duration-300 ${
                      expandedMisuse === index ? 'text-2xl font-extrabold text-warning' : 'text-xl'
                    }`}>
                      {misuse.title}
                    </CardTitle>
                  </div>
                  <CardDescription className={`transition-all duration-300 ${
                    expandedMisuse === index ? 'text-lg font-semibold text-foreground' : 'text-base'
                  }`}>
                    {misuse.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`transition-all duration-300 ${
                  expandedMisuse === index ? 'animate-fade-in' : ''
                }`}>
                  <ul className="space-y-2">
                    {misuse.impacts.map((impact, idx) => (
                      <li key={idx} className={`flex items-center space-x-2 transition-all duration-300 ${
                        expandedMisuse === index 
                          ? 'text-base font-medium text-foreground' 
                          : 'text-sm text-muted-foreground'
                      }`}>
                        <AlertTriangle className={`text-warning transition-all duration-300 ${
                          expandedMisuse === index ? 'w-4 h-4' : 'w-3 h-3'
                        }`} />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthy Usage Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tips for Healthy Phone Usage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple strategies to maintain a balanced relationship with technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthyTips.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">
                      {item.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      {/* Phone Addiction Quiz Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Phone Addiction Assessment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Take this quick quiz to assess your relationship with your phone
            </p>
            <Badge className="bg-primary/10 text-primary px-3 py-1">
              <ClipboardList className="w-4 h-4 mr-2" />
              8 Questions
            </Badge>
          </div>
          
          <PhoneAddictionQuiz />
        </div>
      </section>

      
      {/* Real World Case Studies */}
      <RealWorldCaseStudies />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Mindful Device Journey Today
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Remember, the goal isn't to eliminate technology, but to use it intentionally and mindfully to enhance your life and well-being.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-base">
              <Smartphone className="w-4 h-4 mr-2" />
              Digital Wellness
            </Badge>
            <Badge className="bg-success text-success-foreground px-4 py-2 text-base">
              <Heart className="w-4 h-4 mr-2" />
              Mindful Usage
            </Badge>
            <Badge className="bg-warning text-warning-foreground px-4 py-2 text-base">
              <Shield className="w-4 h-4 mr-2" />
              Healthy Habits
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CellphoneGuide;