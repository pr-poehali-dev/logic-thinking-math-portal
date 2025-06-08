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
import ClassAnalysis from "@/components/ClassAnalysis";

const TestSection = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const tests = [
    {
      id: "logic",
      title: "Тест на логику мышления",
      description:
        "Найдите закономерности в числовых и символьных последовательностях",
      questions: 10,
      time: "15 минут",
      icon: "Brain",
      color: "blue",
    },
    {
      id: "attention",
      title: "Тест на внимание",
      description: "Сравните понятия и найдите сходства и различия",
      questions: 5,
      time: "10 минут",
      icon: "Eye",
      color: "green",
    },
    {
      id: "memory",
      title: "Тест на память",
      description: "Запомните и воспроизведите последовательности",
      questions: 8,
      time: "12 минут",
      icon: "Lightbulb",
      color: "purple",
    },
  ];

  const logicQuestions = [
    {
      question: "Установи закономерность и продолжи ряд: 2, 5, 8, 11, ___, ___",
      type: "input",
      answer: ["14", "17"],
    },
    {
      question: "Продолжи последовательность: 10, 8, 6, 4, ___, ___",
      type: "input",
      answer: ["2", "0"],
    },
    {
      question: "Найди закономерность: ○, △, □, ○, △, ___, ___",
      type: "input",
      answer: ["□", "○"],
    },
    {
      question: "Продолжи ряд: 1, 4, 9, 16, ___, ___",
      type: "input",
      answer: ["25", "36"],
    },
    {
      question: "Последовательность букв: А, В, С, Д, ___, ___",
      type: "input",
      answer: ["Е", "Ж"],
    },
  ];

  const attentionQuestions = [
    {
      question:
        "Сравните понятия «Квадрат» и «Ромб». Опишите сходства и различия:",
      type: "textarea",
      placeholder:
        "Сходства: четырехугольники, равные стороны...\nРазличия: углы, положение...",
    },
    {
      question: "Найдите общее и различия между «Кругом» и «Овалом»:",
      type: "textarea",
      placeholder: "Сходства: замкнутые фигуры...\nРазличия: форма, размеры...",
    },
    {
      question: "Сравните «Треугольник» и «Пирамиду»:",
      type: "textarea",
      placeholder:
        "Сходства: треугольная основа...\nРазличия: измерения, объем...",
    },
  ];

  const memoryQuestions = [
    {
      question: "Запомните последовательность: 3, 6, 12, 24, ___, ___",
      type: "input",
      answer: ["48", "96"],
    },
    {
      question: "Продолжите ряд: 1/2, 1/4, 1/8, 1/16, ___, ___",
      type: "input",
      answer: ["1/32", "1/64"],
    },
    {
      question: "Числовая последовательность: 1, 1, 2, 3, 5, ___, ___",
      type: "input",
      answer: ["8", "13"],
    },
  ];

  const getQuestions = (testId: string) => {
    switch (testId) {
      case "logic":
        return logicQuestions;
      case "attention":
        return attentionQuestions;
      case "memory":
        return memoryQuestions;
      default:
        return [];
    }
  };

  const startTest = (testId: string) => {
    setSelectedTest(testId);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    const questions = getQuestions(selectedTest!);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Тест завершен! Ответы сохранены.`);
      setSelectedTest(null);
    }
  };

  const renderTest = () => {
    const questions = getQuestions(selectedTest!);
    const question = questions[currentQuestion];
    const test = tests.find((t) => t.id === selectedTest)!;

    return (
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">{test.title}</CardTitle>
                <CardDescription>
                  Вопрос {currentQuestion + 1} из {questions.length}
                </CardDescription>
              </div>
              <Button variant="outline" onClick={() => setSelectedTest(null)}>
                <Icon name="X" size={16} />
                Завершить
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                {question.question}
              </h3>

              {question.type === "input" && (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Введите ответ"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAnswer((e.target as HTMLInputElement).value);
                      }
                    }}
                  />
                  <Button
                    onClick={() => {
                      const input = document.querySelector(
                        "input",
                      ) as HTMLInputElement;
                      handleAnswer(input.value);
                    }}
                    className={`bg-${test.color}-600 hover:bg-${test.color}-700`}
                  >
                    Далее
                  </Button>
                </div>
              )}

              {question.type === "textarea" && (
                <div className="space-y-3">
                  <textarea
                    placeholder={question.placeholder}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <Button
                    onClick={() => {
                      const textarea = document.querySelector(
                        "textarea",
                      ) as HTMLTextAreaElement;
                      handleAnswer(textarea.value);
                    }}
                    className={`bg-${test.color}-600 hover:bg-${test.color}-700`}
                  >
                    Далее
                  </Button>
                </div>
              )}
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`bg-${test.color}-600 h-2 rounded-full transition-all`}
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🧠 Тесты на развитие логического мышления
        </h2>
        <p className="text-gray-600">
          Выберите тест для проверки различных аспектов мышления
        </p>
      </div>

      <Tabs defaultValue="tests" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tests" className="flex items-center gap-2">
            <Icon name="Brain" size={18} />
            Тесты для учеников
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Icon name="BarChart3" size={18} />
            Анализ результатов класса
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tests" className="space-y-6">
          {!selectedTest ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tests.map((test) => (
                <Card
                  key={test.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:scale-105"
                  onClick={() => setSelectedTest(test.id)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto w-16 h-16 rounded-full bg-${test.color}-100 flex items-center justify-center mb-4`}
                    >
                      <Icon
                        name={test.icon as any}
                        size={32}
                        className={`text-${test.color}-600`}
                      />
                    </div>
                    <CardTitle className="text-xl">{test.title}</CardTitle>
                    <CardDescription>{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>📝 {test.questions} вопросов</span>
                      <span>⏱️ {test.time}</span>
                    </div>
                    <Button className="w-full mt-4">Начать тест</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            renderTest()
          )}
        </TabsContent>

        <TabsContent value="analysis">
          <ClassAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestSection;
