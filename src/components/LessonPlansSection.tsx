import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LessonPlansSection = () => {
  const lessonPlans = [
    {
      id: 1,
      title: "Натуральные числа и действия с ними",
      description:
        "Формирование УУД: познавательные, регулятивные, коммуникативные",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Арифметика",
    },
    {
      id: 2,
      title: "Обыкновенные дроби",
      description:
        "Практико-ориентированные задачи, развитие логического мышления",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Дроби",
    },
    {
      id: 3,
      title: "Десятичные дроби и проценты",
      description: "Решение практических задач с применением десятичных дробей",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Дроби и проценты",
    },
    {
      id: 4,
      title: "Пропорции и отношения",
      description: "Развитие навыков пропорционального мышления",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Пропорции",
    },
    {
      id: 5,
      title: "Положительные и отрицательные числа",
      description: "Введение в работу с целыми числами",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Целые числа",
    },
    {
      id: 6,
      title: "Арифметические действия с обыкновенными и десятичными дробями",
      description: "Отработка навыков вычислений с различными видами дробей",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Дроби",
    },
    {
      id: 7,
      title:
        "Арифметические действия с положительными и отрицательными числами",
      description: "Формирование навыков работы с отрицательными числами",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Целые числа",
    },
    {
      id: 8,
      title: "Вычисление процента от величины и величины по её проценту",
      description: "Решение практических задач на проценты",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Проценты",
    },
    {
      id: 9,
      title: "Координаты точки на плоскости, абсцисса и ордината",
      description: "Введение в координатную плоскость и работа с координатами",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Геометрия",
    },
    {
      id: 10,
      title: "Масштаб, пропорция",
      description: "Практическое применение пропорций и масштаба",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Пропорции",
    },
    {
      id: 11,
      title: "Модуль числа",
      description: "Понятие модуля числа и его свойства",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Целые числа",
    },
    {
      id: 12,
      title: "Объём прямоугольного параллелепипеда, куба, формулы объёма",
      description: "Изучение формул объёма основных геометрических фигур",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Геометрия",
    },
    {
      id: 13,
      title: "Осевая и центральная симметрия",
      description: "Понятие симметрии и её виды в геометрии",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Геометрия",
    },
    {
      id: 14,
      title: "Основное свойство дробей",
      description: "Изучение основного свойства дробей и его применение",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Дроби",
    },
    {
      id: 15,
      title:
        "Прямоугольный параллелепипед, куб, призма, пирамида, конус, цилиндр, шар и сфера",
      description: "Изучение основных геометрических тел и их свойств",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Геометрия",
    },
    {
      id: 16,
      title: "Сравнение и упорядочивание дробей",
      description: "Методы сравнения дробей различных видов",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Дроби",
    },
    {
      id: 17,
      title: "Сравнение положительных и отрицательных чисел",
      description: "Правила сравнения чисел на координатной прямой",
      duration: "45 минут",
      grade: "6 класс",
      topic: "Целые числа",
    },
  ];

  console.log(
    "LessonPlansSection rendering, lessons count:",
    lessonPlans.length,
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Планы-конспекты уроков по ФГОС
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Готовые планы-конспекты уроков математики для 6 класса с учетом
          требований ФГОС
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {lessonPlans.map((lesson) => (
          <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" className="text-blue-600" size={20} />
                    Урок {lesson.id}: {lesson.title}
                  </CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {lesson.topic}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  {lesson.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="GraduationCap" size={16} />
                  {lesson.grade}
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать конспект
                </Button>
                <Button variant="outline">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Просмотр
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="BookOpen" className="text-blue-600" size={24} />
            Дополнительные материалы
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>• Технологические карты уроков</p>
            <p>• Дидактические материалы</p>
            <p>• Контрольные и самостоятельные работы</p>
          </div>
          <div className="space-y-2">
            <p>• Презентации к урокам</p>
            <p>• Рабочие тетради</p>
            <p>• Методические рекомендации</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlansSection;
