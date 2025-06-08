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

const TestSection = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const tests = [
    {
      id: "logic-basic",
      title: "Базовая логика",
      description: "Проверка основных логических операций",
      questions: 8,
      time: "15 минут",
      icon: "Lightbulb",
    },
    {
      id: "sequences",
      title: "Числовые последовательности",
      description: "Умение находить закономерности в числах",
      questions: 10,
      time: "20 минут",
      icon: "TrendingUp",
    },
    {
      id: "patterns",
      title: "Логические задачи",
      description: "Решение задач на логическое мышление",
      questions: 6,
      time: "25 минут",
      icon: "Puzzle",
    },
  ];

  const sampleQuestions = [
    {
      question: "Продолжите последовательность: 2, 4, 8, 16, ?",
      options: ["20", "24", "32", "30"],
      correct: 2,
    },
    {
      question: "Если все коты серые, а Мурка - кот, то Мурка:",
      options: ["Черная", "Серая", "Белая", "Рыжая"],
      correct: 1,
    },
    {
      question: "Найдите лишнее число: 3, 6, 9, 11, 12",
      options: ["3", "6", "11", "12"],
      correct: 2,
    },
  ];

  const startTest = (testId: string) => {
    setSelectedTest(testId);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Завершение теста
      const correct = newAnswers.reduce((sum, answer, index) => {
        return sum + (answer === sampleQuestions[index].correct ? 1 : 0);
      }, 0);
      alert(
        `Тест завершен! Правильных ответов: ${correct} из ${sampleQuestions.length}`,
      );
      setSelectedTest(null);
    }
  };

  if (selectedTest) {
    const question = sampleQuestions[currentQuestion];
    return (
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                Вопрос {currentQuestion + 1} из {sampleQuestions.length}
              </CardTitle>
              <Button variant="outline" onClick={() => setSelectedTest(null)}>
                <Icon name="X" size={16} />
                Завершить
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                {question.question}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleAnswer(index)}
                    className="h-auto p-4 text-left justify-start"
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{
                  width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%`,
                }}
              />
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
          Тесты на логическое мышление
        </h1>
        <p className="text-gray-600">
          Выберите тест для проверки уровня логических способностей учеников
        </p>
      </div>

      <Tabs defaultValue="available" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Доступные тесты</TabsTrigger>
          <TabsTrigger value="results">Результаты</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={test.icon as any} size={24} />
                  </div>
                  <CardTitle className="text-lg">{test.title}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>📝 {test.questions} вопросов</span>
                    <span>⏱️ {test.time}</span>
                  </div>
                  <Button
                    onClick={() => startTest(test.id)}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Начать тест
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Результаты тестирования</CardTitle>
              <CardDescription>История прохождения тестов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Icon
                  name="BarChart3"
                  size={48}
                  className="mx-auto mb-4 opacity-50"
                />
                <p>Пройдите тесты, чтобы увидеть результаты</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestSection;
