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
import PuzzleGrid from "./puzzle/PuzzleGrid";
import PuzzleDetail from "./puzzle/PuzzleDetail";
import { usePuzzleState } from "@/hooks/usePuzzleState";
import { puzzleCategories } from "@/data/puzzleData";
import { useState } from "react";

const EntertainingProblemsSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [showSolutions, setShowSolutions] = useState<{
    [key: string]: boolean;
  }>({});
  const [activeTab, setActiveTab] = useState("logic");

  // Puzzle state for puzzles tab
  const {
    selectedPuzzle,
    setSelectedPuzzle,
    showSolutions: puzzleShowSolutions,
    toggleSolution: puzzleToggleSolution,
    resetPuzzle,
  } = usePuzzleState();

  // Новые категории задач в правильном порядке
  const topics = [
    {
      id: "truth-tasks",
      title: "Истинностные задачи",
      icon: "CheckCircle",
      color: "green",
    },
    {
      id: "backwards-tasks",
      title: "Задачи, решаемые с конца",
      icon: "RotateCcw",
      color: "purple",
    },
    {
      id: "pouring",
      title: "Задачи на переливание",
      icon: "Droplets",
      color: "blue",
    },
    {
      id: "weighing",
      title: "Задачи на взвешивание",
      icon: "Scale",
      color: "orange",
    },
    {
      id: "who-is-who",
      title: "Задачи типа «Кто есть кто?»",
      icon: "Users",
      color: "pink",
    },
    {
      id: "sets-tasks",
      title: "Задачи на пересечение или объединение множеств",
      icon: "Venn",
      color: "cyan",
    },
    {
      id: "knights-liars",
      title: "Задачи о рыцарях и лжецах",
      icon: "Shield",
      color: "red",
    },
    {
      id: "strategy-tasks",
      title: "Задачи на выработку стратегии",
      icon: "Target",
      color: "indigo",
    },
  ];

  const getTasksByTopic = (topicId: string) => {
    // Получаем задачи из puzzleData для соответствующих категорий
    if (topicId === "pouring") {
      const pouringCategory = puzzleCategories.find(
        (cat) => cat.id === "pouring",
      );
      if (pouringCategory) {
        return {
          description:
            "Задачи на переливание жидкостей с минимальным количеством действий. Цель - отмерить нужное количество жидкости, используя сосуды разного объёма.",
          easy: pouringCategory.puzzles
            .filter((p) => p.difficulty === "Легкая")
            .map((puzzle) => ({
              text: puzzle.description,
              solution: puzzle.solution,
            })),
          medium: pouringCategory.puzzles
            .filter((p) => p.difficulty === "Средняя")
            .map((puzzle) => ({
              text: puzzle.description,
              solution: puzzle.solution,
            })),
          hard: pouringCategory.puzzles
            .filter((p) => p.difficulty === "Высокая")
            .map((puzzle) => ({
              text: puzzle.description,
              solution: puzzle.solution,
            })),
        };
      }
    }

    // Поскольку категория 'logic' была удалена, используем fallback данные
    // для всех остальных категорий кроме 'pouring'
    const getFallbackTasks = (count: number, level: string) => {
      return Array(count)
        .fill(null)
        .map((_, i) => ({
          text: `Задача ${i + 1} (${level} уровень) - будет добавлена в следующих обновлениях`,
          solution: `Решение задачи ${i + 1} будет добавлено в следующих обновлениях`,
        }));
    };

    // Определяем задачи для каждой категории с использованием fallback данных
    switch (topicId) {
      case "truth-tasks":
        return {
          description:
            "Задачи на определение истинности утверждений и работу с логическими операциями.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      case "backwards-tasks":
        return {
          description:
            "Задачи, которые эффективно решаются методом 'от конца к началу'.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      case "weighing":
        return {
          description:
            "Задачи на поиск фальшивой монеты с помощью весов за минимальное количество взвешиваний.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      case "who-is-who":
        return {
          description:
            "Задачи на определение соответствий между людьми и их характеристиками.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      case "sets-tasks":
        return {
          description:
            "Задачи на работу с множествами, их пересечениями и объединениями.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      case "knights-liars":
        return {
          description:
            "Классические задачи об острове рыцарей и лжецов, где рыцари всегда говорят правду, а лжецы всегда лгут.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      case "strategy-tasks":
        return {
          description:
            "Задачи на разработку оптимальных стратегий в играх и жизненных ситуациях.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
      default:
        return {
          description:
            "Описание данного типа задач будет добавлено в следующих обновлениях.",
          easy: getFallbackTasks(5, "легкий"),
          medium: getFallbackTasks(5, "средний"),
          hard: getFallbackTasks(5, "сложный"),
        };
    }

    // Fallback для случаев, когда данные не найдены
    return {
      description:
        "Описание данного типа задач будет добавлено в следующих обновлениях.",
      easy: getFallbackTasks(5, "легкий"),
      medium: getFallbackTasks(5, "средний"),
      hard: getFallbackTasks(5, "сложный"),
    };
  };

  const toggleSolution = (taskId: string) => {
    setShowSolutions((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const renderTaskLevel = (
    tasks: any[],
    level: string,
    levelTitle: string,
    description: string,
  ) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              level === "easy"
                ? "bg-green-100 text-green-800"
                : level === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {levelTitle}
          </span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => {
          const taskId = `${level}-${index}`;
          return (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <p className="text-gray-700 leading-relaxed">{task.text}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSolution(taskId)}
                className="text-blue-600 hover:text-blue-700"
              >
                {showSolutions[taskId] ? "Скрыть решение" : "Решение"}
              </Button>
              {showSolutions[taskId] && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-blue-800 text-sm font-medium mb-2">
                    Решение:
                  </p>
                  <p className="text-blue-700">{task.solution}</p>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );

  // Если выбрана подтема
  if (selectedTopic && selectedSubtopic) {
    const topic = topics.find((t) => t.id === selectedTopic)!;
    const subtopic = topic.subtopics.find((s) => s.id === selectedSubtopic)!;
    const tasks = getTasksBySubtopic(selectedTopic, selectedSubtopic);

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            {topic.title}: {subtopic.title}
          </h1>
          <Button variant="outline" onClick={() => setSelectedSubtopic(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />К видам задач
          </Button>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <p className="text-blue-800">{tasks.description}</p>
          </CardContent>
        </Card>

        {renderTaskLevel(
          tasks.easy,
          "easy",
          "Легкий",
          "Задачи, решаемые в 1-2 шага",
        )}
        {renderTaskLevel(
          tasks.medium,
          "medium",
          "Средний",
          "Задачи, требующие логической последовательности в рассуждениях",
        )}
        {renderTaskLevel(
          tasks.hard,
          "hard",
          "Сложный",
          "Задачи, требующие нестандартного решения и применения логики",
        )}
      </div>
    );
  }

  // Если выбрана тема
  if (selectedTopic) {
    const topic = topics.find((t) => t.id === selectedTopic)!;
    const tasks = getTasksByTopic(selectedTopic);

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{topic.title}</h1>
          <Button variant="outline" onClick={() => setSelectedTopic(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />К темам
          </Button>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <p className="text-blue-800">{tasks.description}</p>
          </CardContent>
        </Card>

        {renderTaskLevel(
          tasks.easy,
          "easy",
          "Легкий",
          "Задачи, решаемые в 1-2 шага",
        )}
        {renderTaskLevel(
          tasks.medium,
          "medium",
          "Средний",
          "Задачи, требующие логической последовательности в рассуждениях",
        )}
        {renderTaskLevel(
          tasks.hard,
          "hard",
          "Сложный",
          "Задачи, требующие нестандартного решения и применения логики",
        )}
      </div>
    );
  }

  // Главная страница с темами
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Занимательные задачи
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Выберите раздел для изучения увлекательных логических задач и
          головоломок
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="logic" className="flex items-center gap-2">
            <Icon name="Brain" size={16} />
            Логические задачи
          </TabsTrigger>
          <TabsTrigger value="puzzles" className="flex items-center gap-2">
            <Icon name="Puzzle" size={16} />
            Головоломки
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logic" className="mt-8">
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
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="puzzles" className="mt-8">
          {selectedPuzzle ? (
            (() => {
              const puzzle = puzzleCategories
                .flatMap((cat) => cat.puzzles)
                .find((p) => p.id === selectedPuzzle);

              if (!puzzle) return null;

              return (
                <PuzzleDetail
                  puzzle={puzzle}
                  showSolution={puzzleShowSolutions[puzzle.id]}
                  onToggleSolution={puzzleToggleSolution}
                  onBack={resetPuzzle}
                />
              );
            })()
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Головоломки и задачи
                </h2>
                <p className="text-gray-600">
                  Развивайте логическое мышление через интересные головоломки
                </p>
              </div>

              <Tabs defaultValue={puzzleCategories[0].id} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  {puzzleCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2"
                    >
                      <Icon name={category.icon} size={16} />
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {puzzleCategories.map((category) => (
                  <TabsContent
                    key={category.id}
                    value={category.id}
                    className="mt-6"
                  >
                    <PuzzleGrid
                      puzzles={category.puzzles}
                      onSelectPuzzle={setSelectedPuzzle}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center">
            <Icon name="Star" className="text-yellow-500" size={24} />
            Особенности занимательных задач
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>• Развитие аналитического мышления</p>
            <p>• Тренировка логических рассуждений</p>
            <p>• Пошаговые решения для понимания</p>
          </div>
          <div className="space-y-2">
            <p>• Задачи разного уровня сложности</p>
            <p>• Классические головоломки и задачи</p>
            <p>• Подготовка к олимпиадам</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EntertainingProblemsSection;
