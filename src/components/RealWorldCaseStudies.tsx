import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Trophy, AlertTriangle, ExternalLink } from "lucide-react";
import successImage from "@/assets/success-story.jpg";
import addictionImage from "@/assets/addiction-story.jpg";

const RealWorldCaseStudies = () => {
  const successStory = {
    title: "The Teen Who Built a Million-Dollar App",
    person: "Zach Yadegari",
    age: "18 years old",
    achievement: "$30 Million Revenue Projected",
    story: "While his peers were scrolling endlessly on social media, Long Island teenager Zach Yadegari used his smartphone as a tool for success. He taught himself coding and built Cal AI, an AI-powered calorie tracking app that has been downloaded over 1 million times.",
    details: [
      "Maintained a 4.0 GPA while building his app",
      "App generates over $1 million monthly revenue", 
      "Used phone for learning coding through online tutorials",
      "Leveraged social media for marketing and user feedback",
      "Turned down multiple acquisition offers to focus on growth"
    ],
    lesson: "Strategic use of technology for learning and creation can lead to extraordinary success.",
    source: "CBS News, TechCrunch, Fox 5 NY (2024)"
  };

  const cautionaryStory = {
    title: "The $25,000 TikTok Inheritance Loss",
    person: "Cindi White",
    age: "65 years old", 
    loss: "$25,000+ Lost",
    story: "After retiring, Cindi White discovered TikTok and became addicted to sending virtual gifts to livestreamers. What started as innocent entertainment escalated into compulsive spending that consumed most of her inheritance.",
    details: [
      "Spent over $25,000 on TikTok virtual gifts in one year",
      "Lost most of her retirement inheritance", 
      "Developed parasocial relationships with streamers",
      "Spent up to 8 hours daily on the platform",
      "Sought companionship through digital interactions"
    ],
    lesson: "Uncontrolled social media use can lead to severe financial and emotional consequences.",
    source: "Business Insider Investigation (2023)"
  };

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-World Impact Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actual news stories showing how phone usage can dramatically change lives - for better or worse
          </p>
          <Badge className="mt-4 bg-primary/10 text-primary px-4 py-2">
            Verified News Sources
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Success Story */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-success/5 to-card overflow-hidden">
            <div className="relative">
              <img 
                src={successImage}
                alt="Young entrepreneur with smartphone showing success"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-success text-success-foreground">
                  <Trophy className="w-4 h-4 mr-1" />
                  Success Story
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl text-success">{successStory.title}</CardTitle>
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  {successStory.person} • {successStory.age}
                </Badge>
                <Badge className="bg-success/10 text-success text-xs">
                  <DollarSign className="w-3 h-3 mr-1" />
                  {successStory.achievement}
                </Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {successStory.story}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Key Success Factors:</h4>
                <ul className="space-y-1">
                  {successStory.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-success mt-2"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-success/10 p-3 rounded-lg">
                <p className="text-sm font-medium text-success mb-1">Key Lesson:</p>
                <p className="text-sm text-foreground">{successStory.lesson}</p>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Source: {successStory.source}</span>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Verify
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cautionary Story */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-warning/5 to-card overflow-hidden">
            <div className="relative">
              <img 
                src={addictionImage}
                alt="Person struggling with phone addiction and financial loss"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-warning text-warning-foreground">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Cautionary Tale
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl text-warning">{cautionaryStory.title}</CardTitle>
                <TrendingDown className="w-6 h-6 text-warning" />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  {cautionaryStory.person} • {cautionaryStory.age}
                </Badge>
                <Badge className="bg-warning/10 text-warning text-xs">
                  <DollarSign className="w-3 h-3 mr-1" />
                  {cautionaryStory.loss}
                </Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {cautionaryStory.story}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Warning Signs Observed:</h4>
                <ul className="space-y-1">
                  {cautionaryStory.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <AlertTriangle className="w-3 h-3 text-warning mt-1" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-warning/10 p-3 rounded-lg">
                <p className="text-sm font-medium text-warning mb-1">Key Lesson:</p>
                <p className="text-sm text-foreground">{cautionaryStory.lesson}</p>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Source: {cautionaryStory.source}</span>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Verify
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Your Phone: Tool or Trap?</h3>
            <p className="text-muted-foreground mb-4">
              These real stories show that the same device can create millionaires or destroy finances. 
              The difference lies in how mindfully you use it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-success/10 text-success">Strategic Usage = Success</Badge>
              <Badge className="bg-warning/10 text-warning">Mindless Usage = Problems</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldCaseStudies;