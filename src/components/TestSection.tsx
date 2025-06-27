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
import KnightsLiarsSection from "@/components/KnightsLiarsSection";
import StrategySection from "@/components/StrategySection";

const TestSection = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );

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

  // Занимательные задачи
  const funTasks = [
    {
      id: "riddles",
      title: "Загадки и головоломки",
      description: "Интересные логические загадки для развития мышления",
      icon: "Puzzle",
      color: "orange",
      tasks: [
        "У меня есть города, но нет домов. Есть леса, но нет деревьев. Есть реки, но нет воды. Что я?",
        "Что может путешествовать по всему миру, оставаясь в углу?",
        "Чем больше из меня берешь, тем больше я становлюсь. Что я?",
      ],
    },
    {
      id: "math-fun",
      title: "Математические игры",
      description: "Увлекательные математические задачки",
      icon: "Calculator",
      color: "pink",
      tasks: [
        "Найди следующее число: 1, 1, 2, 3, 5, 8, ?",
        "Сколько треугольников в звезде?",
        "Как разделить торт на 8 равных частей тремя разрезами?",
      ],
    },
    {
      id: "creative",
      title: "Творческие задания",
      description: "Задачи на креативность и нестандартное мышление",
      icon: "Palette",
      color: "teal",
      tasks: [
        "Придумай 10 способов использования скрепки",
        "Нарисуй дом, не отрывая руки от бумаги",
        "Создай историю из трех случайных слов",
      ],
    },
    {
      id: "knights-liars",
      title: "Задачи о рыцарях и лжецах",
      description:
        "Логические головоломки с правдивыми рыцарями и лживыми лжецами",
      icon: "Shield",
      color: "indigo",
      component: "KnightsLiarsSection",
    },
    {
      id: "strategy",
      title: "Задачи на выработку стратегии",
      description: "Логические задачи на поиск оптимальных стратегий",
      icon: "Target",
      color: "emerald",
      component: "StrategySection",
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

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "easy":
        return "green";
      case "medium":
        return "yellow";
      case "hard":
        return "red";
      default:
        return "gray";
    }
  };

  const getDifficultyLabel = (level: string) => {
    switch (level) {
      case "easy":
        return "Лёгкий";
      case "medium":
        return "Средний";
      case "hard":
        return "Сложный";
      default:
        return "";
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
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tests" className="flex items-center gap-2">
            <Icon name="Brain" size={18} />
            Тесты для учеников
          </TabsTrigger>
          <TabsTrigger value="fun-tasks" className="flex items-center gap-2">
            <Icon name="Gamepad2" size={18} />
            Занимательные задачи
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

        <TabsContent value="fun-tasks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {funTasks.map((task) => (
              <Card
                key={task.id}
                className="cursor-pointer transition-all hover:shadow-lg hover:scale-105"
                onClick={() => {
                  setActiveCategory(task.id);
                  setSelectedDifficulty(null);
                }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full bg-${task.color}-100 flex items-center justify-center mb-4`}
                  >
                    <Icon
                      name={task.icon as any}
                      size={32}
                      className={`text-${task.color}-600`}
                    />
                  </div>
                  <CardTitle className="text-lg">{task.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {task.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm text-gray-600 mb-4">
                    📝{" "}
                    {Array.isArray(task.tasks)
                      ? task.tasks.length
                      : typeof task.tasks[0] === "object"
                        ? task.tasks.length
                        : task.tasks.length}{" "}
                    заданий
                  </div>
                  <Button className="w-full">Открыть задачи</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {activeCategory && (
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {funTasks.find((t) => t.id === activeCategory)?.title}
                  </CardTitle>
                  <Button
                    variant="outline"
                    onClick={() => setActiveCategory(null)}
                  >
                    <Icon name="X" size={16} />
                    Закрыть
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Специальные компоненты для новых типов задач */}
                {activeCategory === "knights-liars" && <KnightsLiarsSection />}
                {activeCategory === "strategy" && <StrategySection />}

                {/* Обычные задачи */}
                {!["knights-liars", "strategy"].includes(activeCategory) && (
                  <div className="space-y-4">
                    {funTasks
                      .find((t) => t.id === activeCategory)
                      ?.tasks.map((task, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </span>
                            <p className="text-gray-800">{task}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
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
