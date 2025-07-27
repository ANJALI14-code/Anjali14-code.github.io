import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Newspaper, ClipboardList } from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-4 h-4" />,
      description: "Back to top"
    },
    {
      id: "case-studies", 
      label: "News",
      icon: <Newspaper className="w-4 h-4" />,
      description: "Real world impact"
    },
    {
      id: "quiz",
      label: "Quiz", 
      icon: <ClipboardList className="w-4 h-4" />,
      description: "Phone addiction assessment"
    }
  ];

  const handleItemClick = (sectionId: string) => {
    onNavigate(sectionId);
    setOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-md border-border/50 hover:bg-accent"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start h-auto p-4 flex-col items-start"
                  onClick={() => handleItemClick(item.id)}
                >
                  <div className="flex items-center space-x-3 mb-1">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground ml-7">
                    {item.description}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navigation;