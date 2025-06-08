import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const EntertainingProblemsSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: "natural-numbers",
      title: "Натуральные числа",
      icon: "Hash",
      color: "blue",
      subtopics: [
        "Арифметические действия с многозначными натуральными числами",
        "Числовые выражения, порядок действий, использование скобок",
        "Использование переместительного и сочетательного свойств сложения и умножения",
        "Округление натуральных чисел",
        "Делители и кратные числа",
      ],
    },
    {
      id: "fractions",
      title: "Дроби",
      icon: "Divide",
      color: "green",
      subtopics: [
        "Обыкновенная дробь, основное свойство дроби, сокращение дробей",
        "Сравнение и упорядочивание дробей",
        "Решение задач на нахождение части от целого и целого по его части",
        "Дробное число как результат деления",
        "Десятичные дроби и метрическая система мер",
      ],
    },
    {
      id: "positive-negative",
      title: "Положительные и отрицательные числа",
      icon: "PlusCircle",
      color: "purple",
      subtopics: [
        "Положительные и отрицательные числа. Целые числа",
        "Модуль числа, геометрическая интерпретация модуля числа",
        "Изображение чисел на координатной прямой",
        "Сравнение чисел",
        "Арифметические действия с положительными и отрицательными числами",
      ],
    },
    {
      id: "letter-expressions",
      title: "Буквенные выражения",
      icon: "Type",
      color: "orange",
      subtopics: [
        "Применение букв для записи математических выражений и предложений",
        "Буквенные выражения и числовые подстановки",
        "Буквенные равенства, нахождение неизвестного компонента",
        "Формулы периметра и площади прямоугольника, квадрата",
      ],
    },
    {
      id: "text-problems",
      title: "Решение текстовых задач",
      icon: "FileText",
      color: "red",
      subtopics: [
        "Решение текстовых задач арифметическим способом",
        "Решение логических задач",
        "Решение задач перебором всех возможных вариантов",
        "Решение задач, содержащих зависимости",
        "Решение задач, связанных с отношением, пропорциональностью величин",
      ],
    },
    {
      id: "geometry",
      title: "Наглядная геометрия",
      icon: "Shapes",
      color: "teal",
      subtopics: [
        "Наглядные представления о фигурах на плоскости",
        "Взаимное расположение двух прямых на плоскости",
        "Измерение и построение углов с помощью транспортира",
        "Периметр и площадь. Приближенное измерение",
        "Симметрия",
      ],
    },
  ];

  const sampleProblems = [
    {
      topic: "natural-numbers",
      title: "Загадка пиратского сундука",
      problem:
        "Пират Джек нашел сундук с золотыми монетами. Когда он разложил их по 7 монет в кучку, осталось 3 монеты. Когда по 9 монет - осталось 5 монет. Когда по 11 монет - осталось 7 монет. Найдите наименьшее количество монет в сундуке, если их больше 100.",
      difficulty: "Сложная",
      hint: "Ищите число, которое при делении дает определенные остатки",
    },
    {
      topic: "fractions",
      title: "Волшебный котел алхимика",
      problem:
        "Алхимик варит зелье. Сначала он наливает 2/5 котла воды, затем добавляет 1/4 от оставшегося места травяной настойки, а остальное место заполняет магическим порошком. Какую часть котла занимает порошок?",
      difficulty: "Средняя",
      hint: "Последовательно вычисляйте, сколько места остается после каждого действия",
    },
  ];

  if (selectedTopic) {
    const topic = topics.find((t) => t.id === selectedTopic)!;
    const problems = sampleProblems.filter((p) => p.topic === selectedTopic);

    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{topic.title}</h1>
          <Button variant="outline" onClick={() => setSelectedTopic(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />К темам
          </Button>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  name={topic.icon as any}
                  className={`text-${topic.color}-600`}
                  size={24}
                />
                Подтемы раздела
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {topic.subtopics.map((subtopic, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon
                      name="CheckCircle"
                      className="text-green-500 mt-1"
                      size={16}
                    />
                    <span className="text-gray-700">{subtopic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {problems.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Занимательные задачи</h2>
              {problems.map((problem, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{problem.title}</CardTitle>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          problem.difficulty === "Легкая"
                            ? "bg-green-100 text-green-800"
                            : problem.difficulty === "Средняя"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {problem.problem}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                      <Icon name="Lightbulb" size={16} className="mr-2" />
                      <span>Подсказка: {problem.hint}</span>
                    </div>
                    <Button
                      className={`bg-${topic.color}-600 hover:bg-${topic.color}-700`}
                    >
                      Решить задачу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Занимательные задачи по темам
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Выберите тему для изучения увлекательных математических задач с
          нестандартными формулировками
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedTopic(topic.id)}
          >
            <CardHeader className="text-center">
              <div
                className={`w-16 h-16 bg-${topic.color}-100 text-${topic.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon name={topic.icon as any} size={32} />
              </div>
              <CardTitle className="text-xl">{topic.title}</CardTitle>
              <CardDescription className="text-sm">
                {topic.subtopics.length} подтем для изучения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className={`w-full bg-${topic.color}-600 hover:bg-${topic.color}-700`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTopic(topic.id);
                }}
              >
                Изучить тему
                <Icon name="ArrowRight" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center">
            <Icon name="Star" className="text-yellow-500" size={24} />
            Особенности занимательных задач
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>• Необычность формулировки и сюжета</p>
            <p>• Использование ярких персонажей</p>
            <p>• Нестандартные формы подачи данных</p>
          </div>
          <div className="space-y-2">
            <p>• Решение через логические рассуждения</p>
            <p>• Неизвестный изначально путь решения</p>
            <p>• Развитие творческого мышления</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EntertainingProblemsSection;
