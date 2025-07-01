import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ResourcesSection = () => {
  const resources = [
    {
      id: "minecraft",
      title: "Minecraft: Education Edition",
      description:
        "Версия популярной игры Minecraft, разработанная специально для образовательных целей. Её можно использовать для изучения различных математических концепций, таких как геометрия, алгебра и пространственное мышление.",
      url: "https://education.minecraft.net/en-us/resources/math",
      icon: "Gamepad2",
      color: "green",
      category: "Игровые платформы",
    },
    {
      id: "mathplayground",
      title: "Математическая площадка",
      description:
        "Сайт с большим количеством математических игр для разных классов.",
      url: "https://www.mathplayground.com/",
      icon: "Trophy",
      color: "blue",
      category: "Игровые платформы",
    },
    {
      id: "scratch",
      title: "Создание собственных игр",
      description:
        "Можно использовать простые платформы для создания игр, такие как Scratch, чтобы вместе с учениками создавать собственные математические игры.",
      url: "https://scratch.mit.edu",
      icon: "Code2",
      color: "orange",
      category: "Игровые платформы",
    },
    {
      id: "photomath",
      title: "Photomath",
      description:
        "Приложение, которое сканирует математические задачи и показывает пошаговое решение. Полезно для проверки домашних заданий и работы над ошибками. Важно использовать его с умом, чтобы ученики не просто списывали решения, а понимали, как они были получены.",
      url: "https://photomath.com/",
      icon: "Camera",
      color: "purple",
      category: "Мобильные приложения",
    },
    {
      id: "mathway",
      title: "Mathway",
      description:
        "Аналогичное приложение, охватывающее более широкий спектр математических дисциплин.",
      url: "https://www.mathway.com/",
      icon: "Calculator",
      color: "red",
      category: "Мобильные приложения",
    },
    {
      id: "kingofmath",
      title: "King of Math 2",
      description:
        "Игра, которая в увлекательной форме помогает изучать математику.",
      url: "https://www.oddrobo.com/press/king-of-math-2/",
      icon: "Crown",
      color: "yellow",
      category: "Мобильные приложения",
    },
    {
      id: "todomath",
      title: "Todo Math",
      description: "Приложение для развития математических навыков у детей.",
      url: "https://todomath.com/",
      icon: "CheckSquare",
      color: "teal",
      category: "Мобильные приложения",
    },
  ];

  const categories = [
    {
      name: "Игровые платформы",
      description: "Интерактивные платформы для изучения математики через игру",
      icon: "Gamepad2",
    },
    {
      name: "Мобильные приложения",
      description:
        "Приложения для решения задач и развития математических навыков",
      icon: "Smartphone",
    },
  ];

  const handleResourceClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🔗 Полезные ресурсы для изучения математики
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Коллекция лучших цифровых инструментов, приложений и платформ для
          развития математических навыков и логического мышления
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icon
                name={category.icon as any}
                size={24}
                className="text-purple-600"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((resource) => resource.category === category.name)
              .map((resource) => (
                <Card
                  key={resource.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 group"
                  onClick={() => handleResourceClick(resource.url)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${resource.color}-100 flex items-center justify-center mb-3 group-hover:bg-${resource.color}-200 transition-colors`}
                      >
                        <Icon
                          name={resource.icon as any}
                          size={24}
                          className={`text-${resource.color}-600`}
                        />
                      </div>
                      <Icon
                        name="ExternalLink"
                        size={16}
                        className="text-gray-400 group-hover:text-gray-600 transition-colors"
                      />
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {resource.description}
                    </CardDescription>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResourceClick(resource.url);
                      }}
                    >
                      <Icon name="ExternalLink" size={14} className="mr-2" />
                      Перейти на сайт
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
        <div className="text-center">
          <Icon
            name="Lightbulb"
            size={32}
            className="text-purple-600 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            💡 Советы по использованию ресурсов
          </h3>
          <div className="text-sm text-gray-600 max-w-4xl mx-auto space-y-2">
            <p>
              • <strong>Игровые платформы:</strong> Используйте для мотивации и
              вовлечения учеников в изучение математики
            </p>
            <p>
              • <strong>Мобильные приложения:</strong> Подходят для
              самостоятельной работы и проверки решений
            </p>
            <p>
              • <strong>Важно:</strong> Приложения типа Photomath следует
              использовать для понимания алгоритмов решения, а не для списывания
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
