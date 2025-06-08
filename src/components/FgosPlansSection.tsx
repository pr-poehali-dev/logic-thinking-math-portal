import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const lessons = [
  {
    id: 1,
    title: "Арифметические действия с многозначными натуральными числами",
    section: "Натуральные числа",
    class: "5 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
  },
  {
    id: 2,
    title: "Числовые выражения, порядок действий, использование скобок",
    section: "Натуральные числа",
    class: "5 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
  },
  {
    id: 3,
    title:
      "Использование переместительного и сочетательного свойств сложения и умножения",
    section: "Натуральные числа",
    class: "5 класс",
    duration: "45 мин",
    type: "Урок-практикум",
  },
  {
    id: 4,
    title: "Округление натуральных чисел",
    section: "Натуральные числа",
    class: "5 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
  },
  {
    id: 5,
    title: "Делители и кратные числа",
    section: "Натуральные числа",
    class: "5 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
  },
  {
    id: 6,
    title: "Обыкновенная дробь, основное свойство дроби, сокращение дробей",
    section: "Дроби",
    class: "5 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
  },
  {
    id: 7,
    title: "Сравнение и упорядочивание дробей",
    section: "Дроби",
    class: "5 класс",
    duration: "45 мин",
    type: "Урок-практикум",
  },
  {
    id: 8,
    title: "Решение задач на нахождение части от целого и целого по его части",
    section: "Дроби",
    class: "5 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
  },
  {
    id: 9,
    title: "Положительные и отрицательные числа. Целые числа",
    section: "Положительные и отрицательные числа",
    class: "6 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
  },
  {
    id: 10,
    title: "Модуль числа, геометрическая интерпретация модуля числа",
    section: "Положительные и отрицательные числа",
    class: "6 класс",
    duration: "45 мин",
    type: "Урок-исследование",
  },
  {
    id: 11,
    title: "Изображение чисел на координатной прямой",
    section: "Положительные и отрицательные числа",
    class: "6 класс",
    duration: "45 мин",
    type: "Урок-практикум",
  },
  {
    id: 12,
    title: "Применение букв для записи математических выражений и предложений",
    section: "Буквенные выражения",
    class: "6 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
  },
  {
    id: 13,
    title: "Буквенные выражения и числовые подстановки",
    section: "Буквенные выражения",
    class: "6 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
  },
  {
    id: 14,
    title: "Решение текстовых задач арифметическим способом",
    section: "Решение текстовых задач",
    class: "5-6 класс",
    duration: "45 мин",
    type: "Урок развития умений",
  },
  {
    id: 15,
    title: "Наглядные представления о фигурах на плоскости",
    section: "Наглядная геометрия",
    class: "5-6 класс",
    duration: "45 мин",
    type: "Урок-путешествие",
  },
];

const FgosPlansSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Планы-конспекты уроков по ФГОС
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Готовые планы-конспекты уроков с учетом требований ФГОС для развития
          логического мышления (15 уроков математики для 5-7 классов)
        </p>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon
                    name="BookOpen"
                    className="text-blue-600 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <div className="font-bold text-blue-700">
                      Тема {lesson.id}
                    </div>
                    <div className="text-gray-800 font-medium">
                      {lesson.title}
                    </div>
                  </div>
                </CardTitle>
                <div className="flex gap-2 flex-shrink-0">
                  <Badge variant="secondary">{lesson.class}</Badge>
                  <Badge variant="outline">{lesson.duration}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-xs bg-gray-50">
                  <Icon name="FolderOpen" size={12} className="mr-1" />
                  {lesson.section}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {lesson.type}
                </Badge>
              </div>

              <div className="flex gap-2 pt-3 border-t border-gray-100">
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать конспект
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Предварительный просмотр
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Методические материалы
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FgosPlansSection;
