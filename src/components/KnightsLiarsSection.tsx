import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface KnightsTask {
  level: "easy" | "medium" | "hard";
  condition: string;
  hints: string[];
  solution?: string;
}

const KnightsLiarsSection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

  // 15 задач о рыцарях и лжецах (5 легких, 5 средних, 5 сложных)
  const knightsTasks: KnightsTask[] = [
    // Легкий уровень (5 задач)
    {
      level: "easy",
      condition:
        "На острове живут только рыцари (всегда говорят правду) и лжецы (всегда лгут). Встретили жителя, который сказал: 'Я лжец'. Кто он?",
      hints: [
        "Может ли лжец сказать правду о том, что он лжец?",
        "Может ли рыцарь солгать о том, что он лжец?",
      ],
      solution:
        "Такое утверждение невозможно. Если он лжец, то говорит неправду, но утверждение 'Я лжец' было бы правдой. Если он рыцарь, то говорит правду, но тогда он не лжец. Противоречие в любом случае.",
    },
    {
      level: "easy",
      condition:
        "Житель А говорит: 'Мы оба лжецы', обращаясь к жителю Б. Определите, кто из них рыцарь, а кто лжец.",
      hints: [
        "Может ли лжец правдиво сказать, что он лжец?",
        "Что получится, если А говорит правду?",
      ],
      solution:
        "А - лжец, Б - рыцарь. Если А рыцарь, то его утверждение истинно, но тогда он сам лжец - противоречие. Значит, А лжец, и его утверждение ложно, поэтому они не оба лжецы, следовательно Б - рыцарь.",
    },
    {
      level: "easy",
      condition:
        "Житель говорит: 'Если я рыцарь, то сегодня понедельник'. Сегодня вторник. Кто этот житель?",
      hints: [
        "Проверьте утверждение для случая, когда говорящий - рыцарь",
        "Что происходит с импликацией при ложной посылке?",
      ],
      solution:
        "Житель - лжец. Если он рыцарь, то утверждение должно быть истинным, но сегодня вторник, не понедельник, поэтому импликация ложна. Значит, он не может быть рыцарем, следовательно он лжец.",
    },
    {
      level: "easy",
      condition:
        "Два жителя. А говорит: 'Б - лжец'. Б говорит: 'А и я - разного типа'. Кто есть кто?",
      hints: [
        "Рассмотрите случай, когда А - рыцарь",
        "Что означает 'разного типа'?",
      ],
      solution:
        "А - рыцарь, Б - лжец. Если А рыцарь, то Б действительно лжец. Если Б лжец, то его утверждение 'мы разного типа' ложно, но на самом деле они разного типа, что создает противоречие. Проверим: А рыцарь говорит правду о том, что Б лжец.",
    },
    {
      level: "easy",
      condition:
        "Житель говорит о себе: 'Я скажу ложь в следующем предложении. Два плюс два равно четыре.' Кто он?",
      hints: [
        "Второе утверждение истинно",
        "Может ли первое утверждение быть правдой?",
      ],
      solution:
        "Житель - лжец. Второе утверждение '2+2=4' истинно. Если он рыцарь, то первое утверждение истинно, но тогда второе должно быть ложным - противоречие. Значит, он лжец, первое утверждение ложно, и он не сказал ложь во втором предложении.",
    },

    // Средний уровень (5 задач)
    {
      level: "medium",
      condition:
        "Три жителя А, Б, В. А говорит: 'Мы все лжецы'. Б говорит: 'Ровно один из нас рыцарь'. Определите тип каждого.",
      hints: [
        "Если А - рыцарь, то его утверждение должно быть правдой",
        "Сколько рыцарей может быть согласно утверждению Б?",
      ],
      solution:
        "А - лжец, Б - рыцарь, В - лжец. А не может быть рыцарем (иначе правдиво сказал бы, что все лжецы, включая себя). Значит А лжец. Если Б рыцарь, то действительно ровно один рыцарь (Б), значит В - лжец.",
    },
    {
      level: "medium",
      condition:
        "А говорит: 'Б скажет, что В - лжец'. Б говорит: 'В - рыцарь'. В говорит: 'А и Б - разного типа'. Кто есть кто?",
      hints: [
        "Сравните что сказал Б с предсказанием А",
        "Используйте утверждение В для проверки",
      ],
      solution:
        "А - лжец, Б - рыцарь, В - рыцарь. А предсказал, что Б скажет 'В - лжец', но Б сказал 'В - рыцарь'. Значит А солгал, он лжец. Б сказал правду, он рыцарь. В сказал, что А и Б разного типа - это правда, значит В тоже рыцарь.",
    },
    {
      level: "medium",
      condition:
        "Четыре жителя стоят в ряд. Каждый говорит: 'Справа от меня лжецов больше, чем рыцарей'. Сколько рыцарей среди них?",
      hints: [
        "Рассмотрите крайнего правого жителя",
        "Проверьте утверждения справа налево",
      ],
      solution:
        "0 рыцарей (все лжецы). Крайний правый: справа никого нет, значит 0 лжецов и 0 рыцарей. Его утверждение 'лжецов больше рыцарей' ложно, значит он лжец. Для каждого следующего справа будет один лжец, что не больше 0 рыцарей, значит все лгут.",
    },
    {
      level: "medium",
      condition:
        "А говорит: 'Если я лжец, то Б - рыцарь'. Б говорит: 'А и я одного типа'. Определите их типы.",
      hints: [
        "Рассмотрите импликацию в утверждении А",
        "Может ли лжец сделать истинное утверждение вида 'если я лжец, то...'?",
      ],
      solution:
        "А - рыцарь, Б - рыцарь. Если А лжец, то утверждение 'если я лжец, то Б рыцарь' должно быть ложным, но при истинной посылке и любом следствии импликация может быть истинной - противоречие. Значит А рыцарь, тогда посылка ложна, импликация истинна. Б говорит, что они одного типа - если это правда, то Б тоже рыцарь.",
    },
    {
      level: "medium",
      condition:
        "На развилке два жителя. Один охраняет путь к сокровищу. Вы можете задать только один вопрос одному из них. Какой вопрос позволит найти правильный путь?",
      hints: [
        "Нужен вопрос, дающий одинаковый ответ независимо от типа опрашиваемого",
        "Попробуйте вопрос о том, что сказал бы другой житель",
      ],
      solution:
        "Спросите любого: 'Какую дорогу другой житель назвал бы правильной?' Затем идите по противоположной. Если спрашиваете рыцаря, он правдиво скажет ложь лжеца. Если спрашиваете лжеца, он солжет о правде рыцаря. В любом случае получите неправильный ответ.",
    },

    // Сложный уровень (5 задач)
    {
      level: "hard",
      condition:
        "Пять жителей А, Б, В, Г, Д сидят по кругу. Каждый говорит: 'Мои соседи - оба лжецы' или 'Мои соседи - оба рыцари' или 'Один сосед рыцарь, другой лжец'. Возможно ли такое расположение?",
      hints: [
        "Рассмотрите чередование типов по кругу",
        "Подсчитайте четность количества 'переходов' между типами",
      ],
      solution:
        "Невозможно. В кольце из 5 человек должно быть четное число переходов рыцарь-лжец, но 5 - нечетное число. При любом расположении будет нечетное число переходов, что противоречит топологическим свойствам кольца.",
    },
    {
      level: "hard",
      condition:
        "А говорит: 'Ровно один из Б и В скажет правду в следующем утверждении'. Б говорит: 'В - лжец'. В говорит: 'А - рыцарь'. Определите всех.",
      hints: [
        "Проанализируйте условие 'ровно один скажет правду'",
        "Рассмотрите случаи истинности утверждения А",
      ],
      solution:
        "А - рыцарь, Б - рыцарь, В - лжец. Если А рыцарь, то ровно один из Б,В говорит правду. Б говорит 'В лжец', В говорит 'А рыцарь'. Если В лжец, то Б говорит правду, а В лжет - ровно один говорит правду. Условие А выполнено.",
    },
    {
      level: "hard",
      condition:
        "Рыцарь всегда отвечает правдиво, лжец всегда лжет. Мудрец может говорить и правду, и ложь. Три жителя: А говорит 'Б - мудрец', Б говорит 'В - не рыцарь', В говорит 'А - лжец'. Кто есть кто?",
      hints: [
        "Мудрец - новый тип, может говорить и правду, и ложь",
        "Проверьте совместимость утверждений для разных комбинаций типов",
      ],
      solution:
        "А - лжец, Б - мудрец, В - рыцарь. А лжет о том, что Б мудрец, но Б действительно может быть мудрецом. Б (мудрец) может сказать правду 'В не рыцарь' или солгать. В (рыцарь) говорит правду 'А лжец'. Эта комбинация согласована.",
    },
    {
      level: "hard",
      condition:
        "На острове 100 жителей встали в круг. Каждый сказал: 'Справа от меня стоит лжец'. Сколько лжецов среди них?",
      hints: [
        "Рыцари и лжецы должны чередоваться",
        "100 - четное число, возможно ли такое чередование?",
      ],
      solution:
        "50 лжецов. Если рыцарь говорит 'справа лжец', то справа действительно лжец. Если лжец говорит 'справа лжец', то справа рыцарь. Получается строгое чередование: Р-Л-Р-Л... Для 100 человек это возможно, получается 50 рыцарей и 50 лжецов.",
    },
    {
      level: "hard",
      condition:
        "Судья должен определить типы трех жителей за минимальное число вопросов. Может задать вопросы типа 'да/нет' любому. Какая стратегия гарантирует определение всех типов за 2 вопроса?",
      hints: [
        "Используйте непрямые вопросы через третьих лиц",
        "Один вопрос может дать информацию о двух жителях одновременно",
      ],
      solution:
        "Спросите А: 'Б и В одного типа?' Спросите Б: 'А рыцарь?' По ответам можно определить все типы. Первый вопрос показывает отношение Б и В через А, второй - тип А через Б. Комбинация ответов однозначно определяет конфигурацию всех трех.",
    },
  ];

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

  const getFilteredTasks = () => {
    if (!selectedDifficulty) return knightsTasks;
    return knightsTasks.filter((task) => task.level === selectedDifficulty);
  };

  const toggleSolution = (index: number) => {
    setShowSolution((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleHints = (index: number) => {
    setShowHints((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          ⚔️ Задачи о рыцарях и лжецах
        </h2>
        <p className="text-gray-600">
          Логические головоломки с правдивыми рыцарями и лживыми лжецами
        </p>
      </div>

      {/* Фильтры по сложности */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant={selectedDifficulty === null ? "default" : "outline"}
          onClick={() => setSelectedDifficulty(null)}
          className="flex items-center gap-2"
        >
          <Icon name="Grid3x3" size={16} />
          Все уровни
        </Button>
        <Button
          variant={selectedDifficulty === "easy" ? "default" : "outline"}
          onClick={() => setSelectedDifficulty("easy")}
          className="flex items-center gap-2"
        >
          <Icon name="Circle" size={16} className="text-green-600" />
          Лёгкий (5)
        </Button>
        <Button
          variant={selectedDifficulty === "medium" ? "default" : "outline"}
          onClick={() => setSelectedDifficulty("medium")}
          className="flex items-center gap-2"
        >
          <Icon name="Circle" size={16} className="text-yellow-600" />
          Средний (5)
        </Button>
        <Button
          variant={selectedDifficulty === "hard" ? "default" : "outline"}
          onClick={() => setSelectedDifficulty("hard")}
          className="flex items-center gap-2"
        >
          <Icon name="Circle" size={16} className="text-red-600" />
          Сложный (5)
        </Button>
      </div>

      {/* Список задач */}
      <div className="grid grid-cols-1 gap-6">
        {getFilteredTasks().map((task, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge
                      variant="secondary"
                      className={`bg-${getDifficultyColor(task.level)}-100 text-${getDifficultyColor(task.level)}-800`}
                    >
                      {getDifficultyLabel(task.level)}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      Задача #{index + 1}
                    </span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {task.condition}
                  </CardDescription>
                </div>
                <Icon
                  name="Shield"
                  size={24}
                  className="text-indigo-600 flex-shrink-0 ml-4"
                />
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Кнопки действий */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => toggleHints(index)}
                  className="flex items-center gap-2"
                >
                  <Icon name="Lightbulb" size={16} />
                  {showHints[index] ? "Скрыть подсказки" : "Показать подсказки"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toggleSolution(index)}
                  className="flex items-center gap-2"
                >
                  <Icon name="Key" size={16} />
                  {showSolution[index] ? "Скрыть решение" : "Показать решение"}
                </Button>
              </div>

              {/* Подсказки */}
              {showHints[index] && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={16} />
                    Подсказки:
                  </h4>
                  <ul className="space-y-1">
                    {task.hints.map((hint, hintIndex) => (
                      <li key={hintIndex} className="text-amber-700 text-sm">
                        • {hint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Решение */}
              {showSolution[index] && task.solution && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} />
                    Решение:
                  </h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    {task.solution}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {getFilteredTasks().length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="Search"
            size={48}
            className="text-gray-400 mx-auto mb-4"
          />
          <p className="text-gray-600">Задачи не найдены</p>
        </div>
      )}
    </div>
  );
};

export default KnightsLiarsSection;
