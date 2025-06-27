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

interface StrategyTask {
  level: "easy" | "medium" | "hard";
  condition: string;
  hints: string[];
  solution?: string;
}

const StrategySection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

  // 15 задач на выработку стратегии (5 легких, 5 средних, 5 сложных)
  const strategyTasks: StrategyTask[] = [
    // Легкий уровень (5 задач)
    {
      level: "easy",
      condition:
        "У вас 12 монет, одна фальшивая (легче остальных). Есть весы без гирь. За сколько взвешиваний гарантированно найдете фальшивую?",
      hints: [
        "Разделите монеты на три равные группы",
        "Используйте результат первого взвешивания для сужения поиска",
      ],
      solution:
        "За 2 взвешивания. 1) Разделите на группы по 4 монеты, взвесьте две группы. Если равны - фальшивая в третьей группе. Если не равны - в более легкой. 2) Из группы с фальшивой взвесьте 1 монету против 1. Если равны - фальшивая третья. Если не равны - более легкая.",
    },
    {
      level: "easy",
      condition:
        "В комнате 3 лампочки, в коридоре 3 выключателя. Можно зайти в комнату только один раз. Как определить, какой выключатель какую лампочку включает?",
      hints: [
        "Используйте не только свет, но и тепло",
        "Включите один выключатель надолго, затем выключите",
      ],
      solution:
        "Включите первый выключатель на 10 минут, затем выключите. Включите второй выключатель. Зайдите в комнату: горящая лампа - второй выключатель, теплая негорящая - первый, холодная негорящая - третий.",
    },
    {
      level: "easy",
      condition:
        "Двое играют в игру: по очереди берут от 1 до 3 спичек из кучки в 20 спичек. Кто берет последнюю, проигрывает. Есть ли выигрышная стратегия?",
      hints: [
        "Подумайте о позициях, из которых любой ход ведет к проигрышу",
        "Рассмотрите остатки при делении на 4",
      ],
      solution:
        "Да, у второго игрока есть выигрышная стратегия. Нужно всегда оставлять количество спичек, кратное 4. Поскольку 20 кратно 4, второй игрок всегда может поддерживать это условие и заставить первого взять последнюю спичку.",
    },
    {
      level: "easy",
      condition:
        "У вас есть 5-литровая и 3-литровая банки и неограниченный запас воды. Как отмерить ровно 4 литра?",
      hints: [
        "Заполните большую банку полностью",
        "Используйте меньшую банку для 'вычитания' объема",
      ],
      solution:
        "1) Наполните 5л банку. 2) Перелейте в 3л банку (остается 2л в большой). 3) Вылейте 3л банку. 4) Перелейте 2л в 3л банку. 5) Наполните 5л банку. 6) Долейте в 3л банку (поместится 1л, останется 4л в большой банке).",
    },
    {
      level: "easy",
      condition:
        "В лифте 10 этажей, на каждом может выйти любое количество людей. 9 человек зашли на 1 этаже. Какая стратегия минимизирует общее время поездки всех пассажиров?",
      hints: [
        "Рассмотрите среднее время ожидания для каждого пассажира",
        "Подумайте о медиане распределения этажей",
      ],
      solution:
        "Останавливаться на каждом этаже по порядку (2, 3, 4... 10). Это минимизирует общее время ожидания, так как каждый пассажир ждет минимально возможное время до своего этажа.",
    },

    // Средний уровень (5 задач)
    {
      level: "medium",
      condition:
        "100 заключенных, каждый может открыть 50 коробок из 100. В коробках их номера в случайном порядке. Все должны найти свой номер, иначе все погибают. Какая стратегия дает максимальный шанс?",
      hints: [
        "Случайный поиск дает шанс (1/2)^100",
        "Попробуйте стратегию 'следования по циклам'",
      ],
      solution:
        "Стратегия циклов: каждый заключенный начинает с коробки со своим номером, затем открывает коробку с номером, найденным в предыдущей. Вероятность успеха ~31% (намного лучше случайной стратегии с вероятностью ~0%).",
    },
    {
      level: "medium",
      condition:
        "На шахматной доске стоят 8 ферзей так, что не бьют друг друга. Нужно переставить их так, чтобы каждый ферзь сменил позицию, но расстановка осталась корректной. Возможно ли?",
      hints: [
        "Рассмотрите симметрии шахматной доски",
        "Подумайте о поворотах и отражениях",
      ],
      solution:
        "Да, возможно. Можно использовать поворот доски на 180 градусов или отражение относительно центральных линий. Например, если ферзи стоят на позициях стандартного решения, их можно повернуть на 180° - каждый ферзь сменит позицию.",
    },
    {
      level: "medium",
      condition:
        "Игра на графе: два игрока по очереди окрашивают вершины. Выигрывает тот, кто первым создаст монохромный треугольник. Есть ли выигрышная стратегия для полного графа K6?",
      hints: [
        "Рассмотрите теорему Рамсея для R(3,3)",
        "Подумайте о стратегии 'копирования' ходов",
      ],
      solution:
        "Второй игрок имеет выигрышную стратегию симметрии. По теореме Рамсея, в K6 любая двухцветная раскраска содержит монохромный треугольник. Второй игрок копирует ходы первого с точностью до симметрии, заставляя первого создать монохромный треугольник.",
    },
    {
      level: "medium",
      condition:
        "В турнире на выбывание 64 участника. Каждый матч определяет победителя случайно. Как поставить на фаворита, чтобы максимизировать ожидаемый выигрыш?",
      hints: [
        "Рассмотрите разные стратегии ставок по турам",
        "Подумайте о стратегии Kelly",
      ],
      solution:
        "Используйте стратегию фиксированной пропорции банка на каждый тур. Ставьте один и тот же процент от текущего банка на победу фаворита в каждом туре. Это максимизирует логарифм ожидаемого выигрыша по критерию Келли.",
    },
    {
      level: "medium",
      condition:
        "На столе лежат 2n монет орлом вверх. Двое по очереди переворачивают любое количество соседних монет. Проигрывает тот, кто не может сделать ход. Кто выиграет при оптимальной игре?",
      hints: [
        "Рассмотрите инварианты игровых позиций",
        "Подумайте о четности количества 'орлов'",
      ],
      solution:
        "Выиграет первый игрок. Стратегия: поддерживать симметричную позицию. Первый игрок может всегда 'копировать' ходы второго игрока симметрично относительно центра, обеспечивая себе последний ход.",
    },

    // Сложный уровень (5 задач)
    {
      level: "hard",
      condition:
        "Вам нужно узнать этаж, с которого яйцо разбивается при падении, имея 2 яйца и 100-этажное здание. Какая стратегия минимизирует число бросков в худшем случае?",
      hints: [
        "Баланс между размером первых 'прыжков' и оставшимися попытками",
        "Рассмотрите убывающую последовательность интервалов",
      ],
      solution:
        "Начните с 14 этажа, затем 27, 39, 50, 60, 69, 77, 84, 90, 95, 99. Если яйцо разобьется на n-м этаже, проверяйте линейно от предыдущего интервала. Максимум 14 бросков в худшем случае.",
    },
    {
      level: "hard",
      condition:
        "Игра 'Ним': есть кучки с 3, 5, 7 камнями. Два игрока по очереди берут любое количество камней из одной кучки. Кто берет последний камень, выигрывает. Найдите выигрышную стратегию.",
      hints: [
        "Вычислите XOR всех размеров кучек",
        "Стремитесь сделать XOR равным нулю",
      ],
      solution:
        "Выигрывает первый игрок. XOR(3,5,7) = 1 ≠ 0. Стратегия: делайте ходы так, чтобы XOR всех кучек становился равным 0. Например, возьмите 1 камень из кучки 3, получится XOR(2,5,7) = 0.",
    },
    {
      level: "hard",
      condition:
        "На бесконечной шахматной доске король и ферзь играют против короля-одиночки. Как гарантированно поставить мат за минимальное число ходов?",
      hints: [
        "Используйте ферзя для ограничения движения вражеского короля",
        "Подводите своего короля для поддержки",
      ],
      solution:
        "Стратегия: 1) Ферзем ограничьте короля в квадрате 2) Подводите своего короля для поддержки 3) Постепенно сужайте квадрат ферзем 4) Когда короли на расстоянии хода короля, поставьте мат ферзем. Максимум 10 ходов при оптимальной игре.",
    },
    {
      level: "hard",
      condition:
        "В сети из 1000 компьютеров каждый может быть заражен вирусом. За один тест можно проверить любое подмножество компьютеров (результат: есть ли хотя бы один зараженный). Минимизируйте число тестов для точного определения всех зараженных.",
      hints: [
        "Используйте двоичное кодирование для идентификации",
        "Каждый компьютер участвует в определенном наборе тестов",
      ],
      solution:
        "Нужно 10 тестов (⌈log₂(1000)⌉). Присвойте каждому компьютеру 10-битный номер. В i-м тесте проверяйте все компьютеры, у которых i-й бит равен 1. По результатам 10 тестов получите двоичные номера всех зараженных компьютеров.",
    },
    {
      level: "hard",
      condition:
        "Двое игроков играют на графе: первый строит путь, второй пытается его заблокировать, удаляя ребра. Первый выигрывает, если построит путь длины n. Какие графы гарантируют победу первого игрока?",
      hints: [
        "Рассмотрите связность графа и число ребер",
        "Подумайте о теории Рамсея и раскрасках графов",
      ],
      solution:
        "Первый игрок выигрывает на графах с достаточно высокой реберной связностью. Точнее, если граф имеет более чем (n-1) реберно-непересекающихся путей между некоторыми вершинами, первый может гарантированно построить путь длины n, так как второй не сможет заблокировать все пути.",
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
    if (!selectedDifficulty) return strategyTasks;
    return strategyTasks.filter((task) => task.level === selectedDifficulty);
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
          🎯 Задачи на выработку стратегии
        </h2>
        <p className="text-gray-600">
          Логические задачи на поиск оптимальных стратегий и решений
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
                  name="Target"
                  size={24}
                  className="text-emerald-600 flex-shrink-0 ml-4"
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

export default StrategySection;
