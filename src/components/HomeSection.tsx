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

      {/* Раздел о курсе */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8 shadow-sm border border-purple-200 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-purple-800 flex items-center justify-center gap-3">
            🎓 Курс "Логика в математике"
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Курс предназначен для учителей математики, которые хотят эффективно
            развивать логическое мышление у своих учеников. Программа включает
            современные методики, практические инструменты и готовые материалы
            для работы.
          </p>
          <Button
            onClick={() => onNavigate("course")}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold"
          >
            Перейти к курсу
            <Icon name="Play" size={20} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg border border-purple-100 space-y-4">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Target" className="text-purple-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-center text-gray-800">
              Цели курса
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Освоение методик развития логического мышления</li>
              <li>• Практическое применение инструментов диагностики</li>
              <li>• Создание эффективных учебных материалов</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-purple-100 space-y-4">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <Icon name="BookOpen" className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-center text-gray-800">
              Структура
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Теоретические основы</li>
              <li>• Практические методики</li>
              <li>• Готовые материалы и задания</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-purple-100 space-y-4">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Award" className="text-green-600" size={24} />
            </div>
            <h3 className="font-bold text-lg text-center text-gray-800">
              Особенности
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Основан на научных исследованиях</li>
              <li>• Проверен на практике</li>
              <li>• Адаптирован под российскую школу</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
