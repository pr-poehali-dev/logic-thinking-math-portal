import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const PuzzleSection = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState("");

  const puzzleCategories = [
    {
      id: "numbers",
      title: "Числовые головоломки",
      icon: "Hash",
      puzzles: [
        {
          id: "magic-square",
          title: "Магический квадрат",
          description:
            "Заполните квадрат так, чтобы суммы во всех направлениях были равны",
          difficulty: "Средняя",
          hint: "Попробуйте начать с центра",
        },
        {
          id: "number-pattern",
          title: "Числовая закономерность",
          description: "Найдите правило и продолжите последовательность",
          difficulty: "Легкая",
          hint: "Обратите внимание на разности между числами",
        },
      ],
    },
    {
      id: "logic",
      title: "Логические задачи",
      icon: "Brain",
      puzzles: [
        {
          id: "river-crossing",
          title: "Переправа через реку",
          description:
            "Помогите всем персонажам безопасно перебраться на другой берег",
          difficulty: "Сложная",
          hint: "Подумайте о том, кто может остаться вместе",
        },
        {
          id: "truth-lies",
          title: "Правда и ложь",
          description: "Определите, кто говорит правду, а кто лжет",
          difficulty: "Средняя",
          hint: "Проанализируйте противоречия в утверждениях",
        },
      ],
    },
    {
      id: "geometry",
      title: "Геометрические задачи",
      icon: "Shapes",
      puzzles: [
        {
          id: "tangram",
          title: "Танграм",
          description: "Составьте фигуру из семи частей",
          difficulty: "Средняя",
          hint: "Попробуйте разные комбинации треугольников",
        },
        {
          id: "area-puzzle",
          title: "Площадь фигуры",
          description: "Найдите площадь сложной фигуры",
          difficulty: "Сложная",
          hint: "Разделите фигуру на простые части",
        },
      ],
    },
  ];

  const samplePuzzle = {
    title: "Найдите следующее число",
    problem:
      "В последовательности 1, 4, 9, 16, 25, ... какое число идет следующим?",
    solution: "36",
    explanation:
      "Это последовательность квадратов натуральных чисел: 1², 2², 3², 4², 5², 6² = 36",
  };

  const checkAnswer = () => {
    if (
      userAnswer.toLowerCase().trim() === samplePuzzle.solution.toLowerCase()
    ) {
      alert("Правильно! " + samplePuzzle.explanation);
    } else {
      alert("Попробуйте еще раз. Подсказка: подумайте о квадратах чисел.");
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкая":
        return "bg-green-100 text-green-800";
      case "Средняя":
        return "bg-yellow-100 text-yellow-800";
      case "Сложная":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (selectedPuzzle) {
    return (
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{samplePuzzle.title}</CardTitle>
              <Button variant="outline" onClick={() => setSelectedPuzzle(null)}>
                <Icon name="ArrowLeft" size={16} />К списку
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Задача:</h3>
              <p className="text-base">{samplePuzzle.problem}</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">Ваш ответ:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Введите ответ..."
                />
                <Button
                  onClick={checkAnswer}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Проверить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">
          Занимательные задачи
        </h1>
        <p className="text-gray-600">
          Развивайте логическое мышление через интересные головоломки
        </p>
      </div>

      <Tabs defaultValue="numbers" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          {puzzleCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              <Icon name={category.icon as any} size={16} className="mr-2" />
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {puzzleCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {category.puzzles.map((puzzle) => (
                <Card
                  key={puzzle.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">
                          {puzzle.title}
                        </CardTitle>
                        <CardDescription>{puzzle.description}</CardDescription>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(puzzle.difficulty)}`}
                      >
                        {puzzle.difficulty}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Lightbulb" size={16} className="mr-2" />
                      <span>Подсказка: {puzzle.hint}</span>
                    </div>
                    <Button
                      onClick={() => setSelectedPuzzle(puzzle.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Решить задачу
                      <Icon name="Play" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PuzzleSection;
