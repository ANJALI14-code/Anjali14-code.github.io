import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, AlertCircle, Smartphone } from "lucide-react";

const PhoneAddictionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "How often do you check your phone per day?",
      options: [
        { text: "Less than 10 times", score: 0 },
        { text: "10-30 times", score: 1 },
        { text: "30-50 times", score: 2 },
        { text: "50-100 times", score: 3 },
        { text: "More than 100 times", score: 4 }
      ]
    },
    {
      question: "How do you feel when you can't access your phone?",
      options: [
        { text: "Completely fine, no worries", score: 0 },
        { text: "Slightly uncomfortable", score: 1 },
        { text: "Anxious or worried", score: 2 },
        { text: "Very anxious and restless", score: 3 },
        { text: "Panicked or extremely distressed", score: 4 }
      ]
    },
    {
      question: "Do you use your phone while eating meals?",
      options: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
        { text: "Always", score: 4 }
      ]
    },
    {
      question: "How often do you check your phone before sleeping or right after waking up?",
      options: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Most nights/mornings", score: 3 },
        { text: "Every night and morning", score: 4 }
      ]
    },
    {
      question: "Has your phone usage affected your work, studies, or relationships?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Very minimally", score: 1 },
        { text: "Somewhat", score: 2 },
        { text: "Significantly", score: 3 },
        { text: "Severely impacted", score: 4 }
      ]
    },
    {
      question: "How often do you feel the urge to check your phone even when you know there are no new notifications?",
      options: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 },
        { text: "Constantly", score: 4 }
      ]
    },
    {
      question: "Have you tried to reduce your phone usage but failed?",
      options: [
        { text: "Never tried to reduce", score: 0 },
        { text: "Successfully reduced when tried", score: 1 },
        { text: "Sometimes successful", score: 2 },
        { text: "Usually fail to reduce", score: 3 },
        { text: "Always fail despite trying", score: 4 }
      ]
    },
    {
      question: "How much time do you estimate you spend on your phone daily?",
      options: [
        { text: "Less than 2 hours", score: 0 },
        { text: "2-4 hours", score: 1 },
        { text: "4-6 hours", score: 2 },
        { text: "6-8 hours", score: 3 },
        { text: "More than 8 hours", score: 4 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTotalScore = () => {
    return answers.reduce((sum, score) => sum + score, 0);
  };

  const getResult = () => {
    const score = getTotalScore();
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) {
      return {
        level: "Low Risk",
        color: "success",
        icon: <CheckCircle className="w-6 h-6" />,
        description: "You have a healthy relationship with your phone. Keep up the good digital habits!",
        advice: [
          "Continue your mindful usage patterns",
          "Set a good example for others",
          "Stay aware of any changes in usage patterns"
        ]
      };
    } else if (percentage <= 50) {
      return {
        level: "Moderate Risk",
        color: "warning",
        icon: <AlertTriangle className="w-6 h-6" />,
        description: "You show some signs of phone dependency. Consider implementing healthier usage habits.",
        advice: [
          "Set specific phone-free times during the day",
          "Use app timers to monitor usage",
          "Practice mindful phone usage",
          "Create phone-free zones in your home"
        ]
      };
    } else {
      return {
        level: "High Risk",
        color: "destructive",
        icon: <AlertCircle className="w-6 h-6" />,
        description: "Your phone usage patterns suggest possible addiction. Consider seeking support and implementing significant changes.",
        advice: [
          "Consider professional guidance or counseling",
          "Implement strict usage limits and boundaries",
          "Use digital wellbeing tools and apps",
          "Engage in more offline activities",
          "Consider a digital detox period"
        ]
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const result = getResult();
    const score = getTotalScore();
    const maxScore = questions.length * 4;

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${
              result.color === 'success' ? 'bg-success/10 text-success' :
              result.color === 'warning' ? 'bg-warning/10 text-warning' :
              'bg-destructive/10 text-destructive'
            }`}>
              {result.icon}
            </div>
          </div>
          <CardTitle className="text-2xl">Quiz Results</CardTitle>
          <CardDescription>
            Your score: {score} out of {maxScore}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Badge className={`text-base px-4 py-2 ${
              result.color === 'success' ? 'bg-success text-success-foreground' :
              result.color === 'warning' ? 'bg-warning text-warning-foreground' :
              'bg-destructive text-destructive-foreground'
            }`}>
              {result.level}
            </Badge>
          </div>
          
          <p className="text-center text-muted-foreground">
            {result.description}
          </p>

          <div className="space-y-3">
            <h4 className="font-semibold">Recommended Actions:</h4>
            <ul className="space-y-2">
              {result.advice.map((advice, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>{advice}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button onClick={resetQuiz} className="w-full">
            Take Quiz Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-4">
          <Smartphone className="w-6 h-6 text-primary" />
          <CardTitle className="text-xl">Phone Addiction Assessment</CardTitle>
        </div>
        <Progress value={progressPercentage} className="mb-2" />
        <CardDescription>
          Question {currentQuestion + 1} of {questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left justify-start h-auto p-4 hover:bg-accent"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhoneAddictionQuiz;