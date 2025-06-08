import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "tests", label: "Тесты", icon: "Brain" },
    { id: "puzzles", label: "Задачи", icon: "Puzzle" },
    { id: "entertaining", label: "Занимательные", icon: "Sparkles" },
    { id: "guide", label: "Методичка", icon: "BookOpen" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" className="text-purple-600" size={32} />
            <h1 className="text-xl font-bold text-gray-800">МатЛогика 6</h1>
          </div>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => onNavigate(item.id)}
                className="flex items-center gap-2"
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
