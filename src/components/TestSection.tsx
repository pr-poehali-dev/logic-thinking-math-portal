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

// Компонент для отображения отдельной задачи
const TaskCard = ({
  task,
  index,
  selectedDifficulty,
}: {
  task: any;
  index: number;
  selectedDifficulty: string | null;
}) => {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

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

  const getDifficultyIcon = (level: string) => {
    switch (level) {
      case "easy":
        return "🟢";
      case "medium":
        return "🟡";
      case "hard":
        return "🔴";
      default:
        return "⚪";
    }
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
            {index + 1}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg">{getDifficultyIcon(task.level)}</span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full bg-${getDifficultyColor(task.level)}-100 text-${getDifficultyColor(task.level)}-800`}
            >
              {getDifficultyLabel(task.level)}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed">{task.condition}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowHints(!showHints)}
          className="text-blue-600 hover:text-blue-700"
        >
          <Icon name="Lightbulb" size={14} className="mr-1" />
          {showHints ? "Скрыть подсказки" : "Показать подсказки"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSolution(!showSolution)}
          className="text-green-600 hover:text-green-700"
        >
          <Icon name="CheckCircle" size={14} className="mr-1" />
          {showSolution ? "Скрыть решение" : "Показать решение"}
        </Button>
      </div>

      {showHints && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Icon name="Lightbulb" size={16} />
            Подсказки:
          </h4>
          <ul className="space-y-2">
            {task.hints.map((hint: string, hintIndex: number) => (
              <li key={hintIndex} className="text-blue-700 text-sm">
                • {hint}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showSolution && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
            <Icon name="CheckCircle" size={16} />
            Решение:
          </h4>
          <p className="text-green-700 text-sm">
            {task.solution ||
              "Решение будет добавлено позже. Попробуйте решить самостоятельно, используя подсказки!"}
          </p>
        </div>
      )}
    </div>
  );
};

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
      tasks: [
        // Лёгкий уровень
        {
          level: "easy",
          condition:
            "На острове живут только рыцари (всегда говорят правду) и лжецы (всегда лгут). Встретили жителя, который сказал: 'Я лжец'. Кто он?",
          hints: [
            "Может ли лжец сказать правду о том, что он лжец?",
            "Может ли рыцарь солгать о том, что он лжец?",
          ],
        },
        {
          level: "easy",
          condition:
            "Житель А говорит: 'Мы оба лжецы', обращаясь к жителю Б. Определите, кто из них рыцарь, а кто лжец.",
          hints: [
            "Может ли лжец правдиво сказать, что он лжец?",
            "Что получится, если А говорит правду?",
          ],
        },
        {
          level: "easy",
          condition:
            "Житель говорит: 'Если я рыцарь, то сегодня понедельник'. Сегодня вторник. Кто этот житель?",
          hints: [
            "Проверьте утверждение для случая, когда говорящий - рыцарь",
            "Что происходит с импликацией при ложной посылке?",
          ],
        },
        {
          level: "easy",
          condition:
            "Два жителя. А говорит: 'Б - лжец'. Б говорит: 'А и я - разного типа'. Кто есть кто?",
          hints: [
            "Рассмотрите случай, когда А - рыцарь",
            "Что означает 'разного типа'?",
          ],
        },
        {
          level: "easy",
          condition:
            "Житель говорит о себе: 'Я скажу ложь в следующем предложении. Два плюс два равно четыре.' Кто он?",
          hints: [
            "Второе утверждение истинно",
            "Может ли первое утверждение быть правдой?",
          ],
        },

        // Средний уровень
        {
          level: "medium",
          condition:
            "Три жителя А, Б, В. А говорит: 'Мы все лжецы'. Б говорит: 'Ровно один из нас рыцарь'. Определите тип каждого.",
          hints: [
            "Если А - рыцарь, то его утверждение должно быть правдой",
            "Сколько рыцарей может быть согласно утверждению Б?",
          ],
        },
        {
          level: "medium",
          condition:
            "А говорит: 'Б скажет, что В - лжец'. Б говорит: 'В - рыцарь'. В говорит: 'А и Б - разного типа'. Кто есть кто?",
          hints: [
            "Сравните что сказал Б с предсказанием А",
            "Используйте утверждение В для проверки",
          ],
        },
        {
          level: "medium",
          condition:
            "Четыре жителя стоят в ряд. Каждый говорит: 'Справа от меня лжецов больше, чем рыцарей'. Сколько рыцарей среди них?",
          hints: [
            "Рассмотрите крайнего правого жителя",
            "Проверьте утверждения справа налево",
          ],
        },
        {
          level: "medium",
          condition:
            "А говорит: 'Если я лжец, то Б - рыцарь'. Б говорит: 'А и я одного типа'. Определите их типы.",
          hints: [
            "Рассмотрите импликацию в утверждении А",
            "Может ли лжец сделать истинное утверждение вида 'если я лжец, то...'?",
          ],
        },
        {
          level: "medium",
          condition:
            "На развилке два жителя. Один охраняет путь к сокровищу. Вы можете задать только один вопрос одному из них. Какой вопрос позволит найти правильный путь?",
          hints: [
            "Нужен вопрос, дающий одинаковый ответ независимо от типа опрашиваемого",
            "Попробуйте вопрос о том, что сказал бы другой житель",
          ],
        },

        // Сложный уровень
        {
          level: "hard",
          condition:
            "Пять жителей А, Б, В, Г, Д сидят по кругу. Каждый говорит: 'Мои соседи - оба лжецы' или 'Мои соседи - оба рыцари' или 'Один сосед рыцарь, другой лжец'. Возможно ли такое расположение?",
          hints: [
            "Рассмотрите чередование типов по кругу",
            "Подсчитайте четность количества 'переходов' между типами",
          ],
        },
        {
          level: "hard",
          condition:
            "А говорит: 'Ровно один из Б и В скажет правду в следующем утверждении'. Б говорит: 'В - лжец'. В говорит: 'А - рыцарь'. Определите всех.",
          hints: [
            "Проанализируйте условие 'ровно один скажет правду'",
            "Рассмотрите случаи истинности утверждения А",
          ],
        },
        {
          level: "hard",
          condition:
            "Рыцарь всегда отвечает правдиво, лжец всегда лжет. Мудрец может и солгать, и сказать правду. Три жителя: А говорит 'Б - мудрец', Б говорит 'В - не рыцарь', В говорит 'А - лжец'. Кто есть кто?",
          hints: [
            "Мудрец - новый тип, может говорить и правду, и ложь",
            "Проверьте совместимость утверждений для разных комбинаций типов",
          ],
        },
        {
          level: "hard",
          condition:
            "На острове 100 жителей встали в круг. Каждый сказал: 'Справа от меня стоит лжец'. Сколько лжецов среди них?",
          hints: [
            "Рыцари и лжецы должны чередоваться",
            "100 - четное число, возможно ли такое чередование?",
          ],
        },
        {
          level: "hard",
          condition:
            "Судья должен определить типы трех жителей за минимальное число вопросов. Может задать вопросы типа 'да/нет' любому. Какая стратегия гарантирует определение всех типов за 2 вопроса?",
          hints: [
            "Используйте непрямые вопросы через третьих лиц",
            "Один вопрос может дать информацию о двух жителях одновременно",
          ],
        },
      ],
    },
    {
      id: "strategy",
      title: "Задачи на выработку стратегии",
      description: "Логические задачи на поиск оптимальных стратегий",
      icon: "Target",
      color: "emerald",
      tasks: [
        // Лёгкий уровень
        {
          level: "easy",
          condition:
            "У вас 12 монет, одна фальшивая (легче остальных). Есть весы без гирь. За сколько взвешиваний гарантированно найдете фальшивую?",
          hints: [
            "Разделите монеты на три равные группы",
            "Используйте результат первого взвешивания для сужения поиска",
          ],
        },
        {
          level: "easy",
          condition:
            "В комнате 3 лампочки, в коридоре 3 выключателя. Можно зайти в комнату только один раз. Как определить, какой выключатель какую лампочку включает?",
          hints: [
            "Используйте не только свет, но и тепло",
            "Включите один выключатель надолго, затем выключите",
          ],
        },
        {
          level: "easy",
          condition:
            "Двое играют в игру: по очереди берут от 1 до 3 спичек из кучки в 20 спичек. Кто берет последнюю, проигрывает. Есть ли выигрышная стратегия?",
          hints: [
            "Подумайте о позициях, из которых любой ход ведет к проигрышу",
            "Рассмотрите остатки при делении на 4",
          ],
        },
        {
          level: "easy",
          condition:
            "У вас есть 5-литровая и 3-литровая банки и неограниченный запас воды. Как отмерить ровно 4 литра?",
          hints: [
            "Заполните большую банку полностью",
            "Используйте меньшую банку для 'вычитания' объема",
          ],
        },
        {
          level: "easy",
          condition:
            "В лифте 10 этажей, на каждом может выйти любое количество людей. 9 человек зашли на 1 этаже. Какая стратегия минимизирует общее время поездки всех пассажиров?",
          hints: [
            "Рассмотрите среднее время ожидания для каждого пассажира",
            "Подумайте о медиане распределения этажей",
          ],
        },

        // Средний уровень
        {
          level: "medium",
          condition:
            "100 заключенных, каждый может открыть 50 коробок из 100. В коробках их номера в случайном порядке. Все должны найти свой номер, иначе все погибают. Какая стратегия дает максимальный шанс?",
          hints: [
            "Случайный поиск дает шанс (1/2)^100",
            "Попробуйте стратегию 'следования по циклам'",
          ],
        },
        {
          level: "medium",
          condition:
            "На шахматной доске стоят 8 ферзей так, что не бьют друг друга. Нужно переставить их так, чтобы каждый ферзь сменил позицию, но расстановка осталась корректной. Возможно ли?",
          hints: [
            "Рассмотрите симметрии шахматной доски",
            "Подумайте о поворотах и отражениях",
          ],
        },
        {
          level: "medium",
          condition:
            "Игра на графе: два игрока по очереди окрашивают вершины. Выигрывает тот, кто первым создаст монохромный треугольник. Есть ли выигрышная стратегия для полного графа K6?",
          hints: [
            "Рассмотрите теорему Рамсея для R(3,3)",
            "Подумайте о стратегии 'копирования' ходов",
          ],
        },
        {
          level: "medium",
          condition:
            "В турнире на выбывание 64 участника. Каждый матч определяет победителя случайно. Как поставить на фаворита, чтобы максимизировать ожидаемый выигрыш?",
          hints: [
            "Рассмотрите разные стратегии ставок по турам",
            "Подумайте о стратегии Келли",
          ],
        },
        {
          level: "medium",
          condition:
            "На столе лежат 2n монет орлом вверх. Двое по очереди переворачивают любое количество соседних монет. Проигрывает тот, кто не может сделать ход. Кто выиграет при оптимальной игре?",
          hints: [
            "Рассмотрите инварианты игровых позиций",
            "Подумайте о четности количества 'орлов'",
          ],
        },

        // Сложный уровень
        {
          level: "hard",
          condition:
            "Вам нужно узнать этаж, с которого яйцо разбивается при падении, имея 2 яйца и 100-этажное здание. Какая стратегия минимизирует число бросков в худшем случае?",
          hints: [
            "Баланс между размером первых 'прыжков' и оставшимися попытками",
            "Рассмотрите убывающую последовательность интервалов",
          ],
        },
        {
          level: "hard",
          condition:
            "Игра 'Ним': есть кучки с 3, 5, 7 камнями. Два игрока по очереди берут любое количество камней из одной кучки. Кто берет последний камень, выигрывает. Найдите выигрышную стратегию.",
          hints: [
            "Вычислите XOR всех размеров кучек",
            "Стремитесь сделать XOR равным нулю",
          ],
        },
        {
          level: "hard",
          condition:
            "На бесконечной шахматной доске король и ферзь играют против короля-одиночки. Как гарантированно поставить мат за минимальное число ходов?",
          hints: [
            "Используйте ферзя для ограничения движения вражеского короля",
            "Подводите своего короля для поддержки",
          ],
        },
        {
          level: "hard",
          condition:
            "В сети из 1000 компьютеров каждый может быть заражен вирусом. За один тест можно проверить любое подмножество компьютеров (результат: есть ли хотя бы один зараженный). Минимизируйте число тестов для точного определения всех зараженных.",
          hints: [
            "Используйте двоичное кодирование для идентификации",
            "Каждый компьютер участвует в определенном наборе тестов",
          ],
        },
        {
          level: "hard",
          condition:
            "Двое игроков играют на графе: первый строит путь, второй пытается его заблокировать, удаляя ребра. Первый выигрывает, если построит путь длины n. Какие графы гарантируют победу первого игрока?",
          hints: [
            "Рассмотрите связность графа и число ребер",
            "Подумайте о теории Рамсея и раскрасках графов",
          ],
        },
      ],
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
                {/* Фильтр по уровню сложности для задач с уровнями */}
                {(activeCategory === "knights-liars" ||
                  activeCategory === "strategy") && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Button
                        variant={
                          selectedDifficulty === null ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedDifficulty(null)}
                      >
                        Все уровни
                      </Button>
                      <Button
                        variant={
                          selectedDifficulty === "easy" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedDifficulty("easy")}
                        className="text-green-600"
                      >
                        🟢 Лёгкий
                      </Button>
                      <Button
                        variant={
                          selectedDifficulty === "medium"
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedDifficulty("medium")}
                        className="text-yellow-600"
                      >
                        🟡 Средний
                      </Button>
                      <Button
                        variant={
                          selectedDifficulty === "hard" ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedDifficulty("hard")}
                        className="text-red-600"
                      >
                        🔴 Сложный
                      </Button>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {(() => {
                    const currentTask = funTasks.find(
                      (t) => t.id === activeCategory,
                    );
                    if (!currentTask) return null;

                    const filteredTasks = currentTask.tasks.filter(
                      (task: any) => {
                        if (
                          activeCategory === "knights-liars" ||
                          activeCategory === "strategy"
                        ) {
                          return (
                            selectedDifficulty === null ||
                            task.level === selectedDifficulty
                          );
                        }
                        return true;
                      },
                    );

                    return filteredTasks.map((task: any, index: number) => {
                      if (typeof task === "string") {
                        return (
                          <div
                            key={index}
                            className="p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                                {index + 1}
                              </span>
                              <p className="text-gray-800">{task}</p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <TaskCard
                          key={index}
                          task={task}
                          index={index}
                          selectedDifficulty={selectedDifficulty}
                        />
                      );
                    });
                  })()}
                </div>
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
