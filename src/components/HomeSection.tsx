import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  const features = [
    {
      title: "Тесты на логику",
      description: "Оцените уровень логического мышления ваших учеников",
      icon: "Brain",
      color: "bg-purple-100 text-purple-600",
      action: () => onNavigate("tests"),
    },
    {
      title: "Занимательные задачи",
      description:
        "Развивайте логику через интересные математические головоломки",
      icon: "Puzzle",
      color: "bg-blue-100 text-blue-600",
      action: () => onNavigate("puzzles"),
    },
    {
      title: "Методическое пособие",
      description:
        "Полное руководство для учителей по развитию логического мышления",
      icon: "BookOpen",
      color: "bg-green-100 text-green-600",
      action: () => onNavigate("guide"),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Формирование логического мышления
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Образовательный портал для учителей математики{" "}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className="text-center">
              <div
                className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}
              >
                <Icon name={feature.icon as any} size={32} />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={feature.action}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Перейти к разделу
                <Icon name="ArrowRight" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">О платформе</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <Icon name="Target" className="mx-auto text-purple-600" size={24} />
            <h3 className="font-semibold">Диагностика</h3>
            <p className="text-sm text-gray-600">
              Определите текущий уровень логического мышления
            </p>
          </div>
          <div className="space-y-2">
            <Icon
              name="TrendingUp"
              className="mx-auto text-blue-600"
              size={24}
            />
            <h3 className="font-semibold">Развитие</h3>
            <p className="text-sm text-gray-600">
              Систематическое улучшение навыков логики
            </p>
          </div>
          <div className="space-y-2">
            <Icon name="Award" className="mx-auto text-green-600" size={24} />
            <h3 className="font-semibold">Результат</h3>
            <p className="text-sm text-gray-600">
              Повышение успеваемости по математике
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
