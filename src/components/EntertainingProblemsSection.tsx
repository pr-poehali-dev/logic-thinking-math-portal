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
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [showSolutions, setShowSolutions] = useState<{
    [key: string]: boolean;
  }>({});

  const topics = [
    {
      id: "pouring",
      title: "Задачи на переливание",
      icon: "Droplets",
      color: "blue",
      subtopics: [
        {
          id: "minimal",
          title: "Переливания с минимальным количеством действий",
        },
        { id: "target", title: "Переливания с заданной целью" },
        {
          id: "divisibility",
          title: "Переливания с использованием свойств делимости",
        },
      ],
    },
    {
      id: "knights-liars",
      title: "Задачи про рыцарей и лжецов",
      icon: "Shield",
      color: "red",
      subtopics: [
        { id: "identify", title: "Определение лжеца и рыцаря" },
        {
          id: "combined",
          title: "Комбинированные задачи (рыцари, лжецы и нормальные люди)",
        },
        { id: "identity", title: "Задачи на определение личности" },
      ],
    },
    {
      id: "wise-men",
      title: "Задачи о мудрецах",
      icon: "Brain",
      color: "purple",
      subtopics: [
        { id: "reasoning", title: "Задачи на рассуждения мудрецов" },
        { id: "alternatives", title: "Задачи с альтернативными вариантами" },
        { id: "eyes", title: "Задачи о глазах мудрецов" },
      ],
    },
    {
      id: "weighing",
      title: "Задачи про взвешивание",
      icon: "Scale",
      color: "green",
      subtopics: [
        { id: "fake-coin", title: "Поиск фальшивой монеты" },
        { id: "weight", title: "Определение веса" },
        { id: "complex", title: "Комбинированные задачи" },
      ],
    },
    {
      id: "non-standard",
      title: "Нестандартная логика",
      icon: "Lightbulb",
      color: "yellow",
      subtopics: [
        { id: "cutting", title: "Задачи на разрезание и складывание" },
        { id: "matches", title: "Задачи со спичками" },
        { id: "crosswords", title: "Решение кроссвордов" },
      ],
    },
    {
      id: "paradoxes",
      title: "Логические парадоксы",
      icon: "Infinity",
      color: "indigo",
      subtopics: [
        { id: "liar", title: "Парадокс лжеца" },
        { id: "heap", title: "Парадокс кучи" },
        { id: "barber", title: "Парадокс парикмахера" },
      ],
    },
    {
      id: "crossings",
      title: "Переправы и путешествия",
      icon: "MapPin",
      color: "teal",
      subtopics: [
        { id: "wolf-goat", title: "Задача о волке, козе и капусте" },
        { id: "missionaries", title: "Задача о миссионерах и каннибалах" },
        { id: "harbor", title: "Задача о гавани" },
      ],
    },
    {
      id: "who-is-who",
      title: "Кто есть кто",
      icon: "Users",
      color: "pink",
      subtopics: [
        { id: "description", title: "Установление личности по описанию" },
        { id: "conditions", title: "Задачи с дополнительными условиями" },
        { id: "age", title: "Задачи на вычисление возраста" },
      ],
    },
    {
      id: "number-systems",
      title: "Системы счисления",
      icon: "Binary",
      color: "orange",
      subtopics: [
        {
          id: "conversion",
          title: "Задачи на перевод из одной системы в другую",
        },
        {
          id: "arithmetic",
          title: "Задачи на сложение и вычитание в разных системах счисления",
        },
        { id: "hidden", title: "Задачи со скрытой системой" },
      ],
    },
    {
      id: "sequences",
      title: "Последовательности",
      icon: "TrendingUp",
      color: "cyan",
      subtopics: [
        { id: "next", title: "Нахождение следующего члена последовательности" },
        {
          id: "pattern",
          title: "Определение закономерности последовательности",
        },
        { id: "missing", title: "Задачи на восстановление пропущенных членов" },
      ],
    },
  ];

  const getTasksBySubtopic = (topicId: string, subtopicId: string) => {
    // Здесь пример для "Поиск фальшивой монеты"
    if (topicId === "weighing" && subtopicId === "fake-coin") {
      return {
        description:
          "Задачи на поиск фальшивой монеты с помощью весов. Цель - найти отличающуюся по весу монету за минимальное количество взвешиваний.",
        easy: [
          {
            text: "Среди 3 монет одна фальшивая (легче настоящих). За одно взвешивание найдите фальшивую монету.",
            solution:
              "Положите по одной монете на каждую чашу весов. Если весы в равновесии - фальшивая та, что осталась. Если одна чаша легче - на ней фальшивая монета.",
          },
          {
            text: "Есть 9 монет, одна из них фальшивая (тяжелее). Найдите её за 2 взвешивания.",
            solution:
              "Разделите монеты на 3 группы по 3. Взвесьте любые две группы. Если равны - фальшивая в третьей группе. Если не равны - в более тяжелой. Затем из найденной группы взвесьте любые 2 монеты.",
          },
          {
            text: "Среди 4 монет одна фальшивая (неизвестно легче или тяжелее). Найдите её за 2 взвешивания.",
            solution:
              "Первое взвешивание: 2 монеты против 2. Если равны - все настоящие (противоречие). Если не равны, возьмите одну монету с тяжелой стороны и одну с легкой, взвесьте против двух оставшихся.",
          },
          {
            text: "Есть 6 монет, одна фальшивая (легче). За сколько взвешиваний гарантированно найдете её?",
            solution:
              "За 2 взвешивания. Разделите на 3 группы по 2 монеты. Взвесьте две группы - найдете группу с фальшивой (более легкую). Затем взвесьте монеты из этой группы.",
          },
          {
            text: "Среди 5 монет одна фальшивая (тяжелее). Как найти её за 2 взвешивания?",
            solution:
              "Взвесьте 2 монеты против 2 других. Если равны - фальшивая пятая. Если не равны - фальшивая на тяжелой стороне, взвесьте эти две монеты между собой.",
          },
        ],
        medium: [
          {
            text: "Среди 12 монет одна фальшивая (неизвестно легче или тяжелее). Найдите её за 3 взвешивания и определите, легче она или тяжелее.",
            solution:
              "Разделите на группы по 4. Взвесьте первые две группы. По результату определите группу с фальшивой монетой и её тип (легче/тяжелее), затем найдите конкретную монету за 2 оставшихся взвешивания.",
          },
          {
            text: "Есть 8 монет, 2 из них фальшивые (обе легче). Найдите обе за 3 взвешивания.",
            solution:
              "Сложная задача требует системного подхода: разделить монеты, найти группу с фальшивыми монетами, затем выделить каждую из них по отдельности.",
          },
          {
            text: "Среди 15 монет одна фальшивая (тяжелее). За какое минимальное количество взвешиваний можно её найти?",
            solution:
              "За 3 взвешивания. Разделите на группы по 5, найдите группу с фальшивой, затем в этой группе найдите конкретную монету за 2 взвешивания.",
          },
          {
            text: "Есть 10 монет, одна фальшивая. Известно, что она либо значительно легче (в 2 раза), либо значительно тяжелее. Найдите её за 2 взвешивания.",
            solution:
              "Взвесьте 4 монеты против 4. По результату определите, в какой группе фальшивая и какого она типа. Затем найдите конкретную монету.",
          },
          {
            text: "Среди 7 монет одна фальшивая (легче). Весы показывают только 'больше', 'меньше' или 'равно'. Найдите фальшивую за 2 взвешивания.",
            solution:
              "Взвесьте 3 против 3. Если равны - фальшивая седьмая. Если не равны - фальшивая на легкой стороне, разделите эти 3 монеты.",
          },
        ],
        hard: [
          {
            text: "Среди 13 монет одна фальшивая (неизвестно легче или тяжелее). У вас есть одна заведомо настоящая монета. Найдите фальшивую за 3 взвешивания.",
            solution:
              "Используйте настоящую монету как эталон. Разделите 13 монет на группы, сравнивайте с эталоном для определения типа фальшивой монеты.",
          },
          {
            text: "Есть 9 монет, среди них 3 фальшивые (все легче настоящих). Найдите все 3 фальшивые монеты за минимальное количество взвешиваний.",
            solution:
              "Сложная комбинаторная задача. Необходимо не менее 4 взвешиваний. Систематически разделяйте монеты и анализируйте результаты.",
          },
          {
            text: "У вас 14 монет, одна фальшивая (неизвестно легче или тяжелее). Весы могут сломаться после 3 взвешиваний. Гарантированно найдите фальшивую монету.",
            solution:
              "Оптимальная стратегия: разделите на группы 5-5-4, анализируйте результаты первого взвешивания и планируйте следующие ходы с учетом всех возможных исходов.",
          },
          {
            text: "Среди 16 монет 2 фальшивые (одна легче, другая тяжелее настоящей). Найдите обе за 4 взвешивания.",
            solution:
              "Очень сложная задача. Требует анализа всех возможных комбинаций и построения дерева решений для каждого результата взвешивания.",
          },
          {
            text: "Есть 11 монет, одна фальшивая. Весы показывают вес в граммах. Все настоящие монеты весят одинаково, но вес фальшивой неизвестен. За сколько взвешиваний найдете её?",
            solution:
              "При точных весах достаточно 1 взвешивания: взвесьте все монеты, разделите на количество монет - получите средний вес. Затем взвешивайте по одной.",
          },
        ],
      };
    }

    // Для других комбинаций возвращаем базовый шаблон
    return {
      description:
        "Описание данного типа задач будет добавлено в следующих обновлениях.",
      easy: [
        { text: "Задача 1 (легкий уровень)", solution: "Решение задачи 1" },
        { text: "Задача 2 (легкий уровень)", solution: "Решение задачи 2" },
        { text: "Задача 3 (легкий уровень)", solution: "Решение задачи 3" },
        { text: "Задача 4 (легкий уровень)", solution: "Решение задачи 4" },
        { text: "Задача 5 (легкий уровень)", solution: "Решение задачи 5" },
      ],
      medium: [
        { text: "Задача 1 (средний уровень)", solution: "Решение задачи 1" },
        { text: "Задача 2 (средний уровень)", solution: "Решение задачи 2" },
        { text: "Задача 3 (средний уровень)", solution: "Решение задачи 3" },
        { text: "Задача 4 (средний уровень)", solution: "Решение задачи 4" },
        { text: "Задача 5 (средний уровень)", solution: "Решение задачи 5" },
      ],
      hard: [
        { text: "Задача 1 (сложный уровень)", solution: "Решение задачи 1" },
        { text: "Задача 2 (сложный уровень)", solution: "Решение задачи 2" },
        { text: "Задача 3 (сложный уровень)", solution: "Решение задачи 3" },
        { text: "Задача 4 (сложный уровень)", solution: "Решение задачи 4" },
        { text: "Задача 5 (сложный уровень)", solution: "Решение задачи 5" },
      ],
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

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{topic.title}</h1>
          <Button variant="outline" onClick={() => setSelectedTopic(null)}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />К темам
          </Button>
        </div>

        <div className="grid gap-4">
          {topic.subtopics.map((subtopic) => (
            <Card
              key={subtopic.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedSubtopic(subtopic.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{subtopic.title}</span>
                  <Icon
                    name="ChevronRight"
                    size={20}
                    className="text-gray-400"
                  />
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Главная страница с темами
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Занимательные задачи{" "}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Выберите тему для изучения увлекательных логических задач с пошаговыми
          решениями
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
                {topic.subtopics.length} видов задач
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Убираем кнопку "Изучить тему" и список подтем */}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center">
            <Icon name="Star" className="text-yellow-500" size={24} />
            Особенности логических задач
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
            <p>• Классические логические головоломки</p>
            <p>• Подготовка к олимпиадам</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EntertainingProblemsSection;
