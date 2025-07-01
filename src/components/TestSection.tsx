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
import GradeSixTasks from "@/components/GradeSixTasks";

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

  // Математические занимательные задачи
  const mathTasks = [
    {
      id: "knights-liars-math",
      title: "Задачи о рыцарях и лжецах (математические)",
      description:
        "Логические головоломки с математическими утверждениями от рыцарей и лжецов",
      icon: "Shield",
      color: "indigo",
      tasks: [
        // Лёгкий уровень
        {
          level: "easy",
          condition:
            "Два человека А и Б. Один рыцарь, другой лжец. А говорит: '2 + 3 = 5'. Кто такой А?",
          hints: [
            "Проверьте, правильно ли утверждение А",
            "Рыцари всегда говорят правду, лжецы всегда лгут",
          ],
          solution: "А - рыцарь, так как 2 + 3 действительно равно 5",
        },
        {
          level: "easy",
          condition:
            "А и Б. Один рыцарь, другой лжец. Б говорит: 'А утверждает, что 4 × 3 = 12'. А молчит. Кто такой Б?",
          hints: [
            "Сначала проверьте, правда ли что 4 × 3 = 12",
            "Если А рыцарь, мог бы он сказать правду? Если А лжец, мог бы он сказать ложь?",
          ],
          solution:
            "Б - рыцарь, так как утверждение 4 × 3 = 12 истинно, и рыцарь А мог бы его произнести",
        },
        {
          level: "easy",
          condition:
            "Два жителя А и Б. А говорит: '10 ÷ 2 = 6'. Б говорит: 'А - лжец'. Кто есть кто?",
          hints: [
            "Сначала определите, правильно ли утверждение А",
            "Если А неправ, что это говорит о Б?",
          ],
          solution:
            "А - лжец (10 ÷ 2 = 5, а не 6), Б - рыцарь (правильно называет А лжецом)",
        },
        {
          level: "easy",
          condition: "А говорит: 'Если 6 + 4 = 10, то я рыцарь'. Кто такой А?",
          hints: [
            "Проверьте условие: 6 + 4 = 10?",
            "Если условие верно, то что должно быть верно в заключении?",
          ],
          solution:
            "А - рыцарь. Поскольку 6 + 4 = 10 истинно, и А утверждает истину о себе",
        },
        {
          level: "easy",
          condition:
            "Б говорит А: 'Мы оба согласимся, что 7 - 3 = 4'. А кивает. Кто такой Б?",
          hints: [
            "Правильно ли математическое утверждение?",
            "Могут ли рыцарь и лжец оба согласиться с истинным утверждением?",
          ],
          solution:
            "Б - лжец. Рыцарь и лжец не могут оба согласиться с одним утверждением",
        },

        // Средний уровень
        {
          level: "medium",
          condition:
            "Три человека А, Б и В. Один рыцарь, один лжец, один обычный человек. А говорит: 'Б утверждает, что 15 ÷ 3 = 5, и он рыцарь'. Кто такие А, Б и В?",
          hints: [
            "Сначала проверьте математику: 15 ÷ 3 = 5?",
            "Рассмотрите случаи: если Б рыцарь, лжец или обычный человек",
          ],
          solution:
            "А - обычный человек, Б - рыцарь (15 ÷ 3 = 5 верно), В - лжец",
        },
        {
          level: "medium",
          condition:
            "А и Б. А говорит: 'Если 8 × 7 = 56, то Б - лжец'. Б говорит: 'А говорит правду'. Кто есть кто?",
          hints: [
            "Проверьте: 8 × 7 = 56?",
            "Если А говорит правду о Б, как Б может говорить правду об А?",
          ],
          solution:
            "Противоречие! Такая ситуация невозможна при данных условиях",
        },
        {
          level: "medium",
          condition:
            "А говорит: '20% от 50 равно 10, и Б скажет, что я лжец'. Б говорит: 'А - рыцарь'. Определите типы.",
          hints: [
            "Вычислите: 20% от 50 = ?",
            "Проверьте совместимость утверждений А и Б",
          ],
          solution:
            "А - лжец (20% от 50 = 10 верно, но предсказание о Б неверно), Б - лжец",
        },
        {
          level: "medium",
          condition:
            "Трое: А, Б, В. А: '√25 = 5'. Б: 'А прав, и В скажет, что я лжец'. В: 'Б - рыцарь'. Кто есть кто?",
          hints: ["√25 = 5 - верно ли это?", "Проследите цепочку утверждений"],
          solution:
            "А - рыцарь (√25 = 5), Б - лжец (неверно предсказал В), В - лжец",
        },
        {
          level: "medium",
          condition:
            "А: 'Произведение 6 и 9 равно 54, или Б - лжец'. Б: 'А и я одного типа'. Определите типы.",
          hints: ["6 × 9 = 54?", "Разберите логическое 'или' в утверждении А"],
          solution:
            "А - рыцарь (6 × 9 = 54 верно), Б - лжец (они разного типа)",
        },

        // Сложный уровень
        {
          level: "hard",
          condition:
            "А, Б, В - один рыцарь, один лжец, один обычный. А: 'Б говорит, что В скажет: НОД(12,8) = 4, и В - рыцарь'. Кто есть кто?",
          hints: [
            "НОД(12,8) = наибольший общий делитель 12 и 8",
            "Проследите сложную цепочку ссылок",
          ],
          solution: "НОД(12,8) = 4 верно. А - обычный, Б - рыцарь, В - лжец",
        },
        {
          level: "hard",
          condition:
            "На острове А и Б. А: 'Один из нас рыцарь, и число 17 простое'. Б молчит. Кто есть кто?",
          hints: [
            "17 - простое число?",
            "Может ли утверждение А быть ложным, если он лжец?",
          ],
          solution:
            "А - рыцарь (17 простое, и утверждение логически корректно), Б - лжец",
        },
        {
          level: "hard",
          condition:
            "Четверо: А, Б, В, Г. А: '2³ = 8'. Б: 'Если А прав, то В скажет неправду'. В: 'Г - лжец'. Г: 'Ровно двое из нас рыцари'. Кто есть кто?",
          hints: ["2³ = 8?", "Последовательно анализируйте утверждения"],
          solution:
            "А - рыцарь, Б - рыцарь, В - лжец, Г - лжец (ровно 2 рыцаря)",
        },
        {
          level: "hard",
          condition:
            "А: 'Сумма углов треугольника 180°, и если Б лжец, то В - рыцарь'. Б: 'А лжет о сумме углов'. В: 'А и Б разного типа'. Кто есть кто?",
          hints: [
            "Сумма углов треугольника действительно 180°?",
            "Разберите сложное условное утверждение А",
          ],
          solution: "А - рыцарь, Б - лжец, В - рыцарь",
        },
        {
          level: "hard",
          condition:
            "А: 'НОК(6,8) = 24, и ровно один из Б и В скажет правду о том, что я рыцарь'. Б: 'А - лжец'. В: 'А - рыцарь'. Кто есть кто?",
          hints: [
            "НОК(6,8) = наименьшее общее кратное 6 и 8",
            "Проверьте условие 'ровно один скажет правду'",
          ],
          solution: "НОК(6,8) = 24 верно. А - рыцарь, Б - лжец, В - рыцарь",
        },
      ],
    },
    {
      id: "strategy-math",
      title: "Задачи на выработку стратегии (математические)",
      description: "Математические игры и стратегии для 6 класса",
      icon: "Target",
      color: "emerald",
      tasks: [
        // Лёгкий уровень
        {
          level: "easy",
          condition:
            "Два игрока по очереди прибавляют к числу 0 любое число от 1 до 3. Выигрывает тот, кто первым получит 15. Какая стратегия гарантирует победу?",
          hints: [
            "Подумайте о числах, из которых нельзя выиграть за один ход",
            "Рассмотрите остатки при делении на 4",
          ],
          solution:
            "Первый игрок всегда выигрывает. Стратегия: делать ходы так, чтобы сумма всегда была кратна 4 плюс 3 (3, 7, 11, 15)",
        },
        {
          level: "easy",
          condition:
            "Игра: назвать число от 1 до 20. Второй называет число больше предыдущего, но не более чем на 3. Кто назовет 20 - выигрывает. Кто выиграет?",
          hints: [
            "Работайте от конца: кто может назвать 20?",
            "Найдите 'плохие' позиции для текущего игрока",
          ],
          solution:
            "Второй игрок выигрывает, если первый не знает стратегии. Выигрышные позиции: 1, 5, 9, 13, 17",
        },
        {
          level: "easy",
          condition:
            "На столе 12 конфет. Два игрока по очереди берут 1, 2 или 3 конфеты. Кто возьмет последнюю - проигрывает. Кто выиграет?",
          hints: [
            "Подумайте о позициях, из которых любой ход ведет к проигрышу",
            "Рассмотрите остатки при делении на 4",
          ],
          solution:
            "Первый игрок выигрывает. Стратегия: оставлять количество кратное 4 (8, 4 конфеты)",
        },
        {
          level: "easy",
          condition:
            "Игра с числами: начинаем с 1. Каждый ход можно умножить число на 2 или прибавить 1. Кто первый получит 10 - выигрывает. Кто выиграет?",
          hints: [
            "Постройте дерево возможных ходов от 1 до 10",
            "Найдите все пути к победе",
          ],
          solution:
            "Первый игрок выигрывает. Путь: 1→2→4→8→9→10 или 1→2→4→5→10",
        },
        {
          level: "easy",
          condition:
            "На доске написано число 30. Игроки по очереди вычитают любое число от 1 до 5. Кто получит 0 - выигрывает. Кто выиграет?",
          hints: [
            "Подумайте о числах, с которых можно гарантированно выиграть",
            "Рассмотрите остатки при делении на 6",
          ],
          solution:
            "Первый игрок выигрывает. Стратегия: всегда оставлять число кратное 6",
        },

        // Средний уровень
        {
          level: "medium",
          condition:
            "20 спичек в ряд. Игроки по очереди берут 1, 2 или 3 соседние спички. Кто возьмет последние - выигрывает. Какая стратегия?",
          hints: [
            "Рассмотрите симметричную стратегию",
            "Подумайте о парных ходах",
          ],
          solution:
            "Второй игрок выигрывает, копируя ходы первого относительно центра ряда",
        },
        {
          level: "medium",
          condition:
            "На доске числа от 1 до 12. Игроки по очереди вычеркивают по одному числу. Выигрывает тот, после чьего хода сумма оставшихся чисел будет четной. Кто выиграет?",
          hints: [
            "Сумма чисел от 1 до 12 равна 78 (четная)",
            "Проследите как меняется четность при вычеркивании",
          ],
          solution: "Первый игрок выигрывает, вычеркивая нечетные числа",
        },
        {
          level: "medium",
          condition:
            "Игра с дробями: на доске 1/2. Каждый ход можно заменить дробь a/b на a/(b+1) или (a+1)/b. Кто первый получит дробь больше 1 - выигрывает. Стратегия?",
          hints: [
            "Проследите, как изменяется дробь при каждом ходе",
            "Подумайте о том, когда дробь станет больше 1",
          ],
          solution: "Первый игрок выигрывает: 1/2 → 2/2 = 1, затем → 3/2 > 1",
        },
        {
          level: "medium",
          condition:
            "На столе лежат карточки с числами 2, 4, 6, 8, 10, 12. Игроки по очереди берут по одной карточке. Выигрывает тот, у кого в итоге больше очков. Какая стратегия?",
          hints: ["Сумма всех чисел = 42", "Сколько нужно набрать для победы?"],
          solution:
            "Первый игрок выигрывает, беря карточки в порядке: 12, 10, 8 (сумма 30 > 21)",
        },
        {
          level: "medium",
          condition:
            "Круговая игра: 16 точек по кругу. Игроки по очереди соединяют любые две точки отрезком. Нельзя пересекать уже нарисованные отрезки. Кто не может ходить - проигрывает. Кто выиграет?",
          hints: [
            "Максимальное число непересекающихся отрезков в кольце",
            "Подумайте о четности количества ходов",
          ],
          solution:
            "Первый игрок выигрывает при правильной стратегии (максимум 8 отрезков - четное число)",
        },

        // Сложный уровень
        {
          level: "hard",
          condition:
            "Игра Ним: три кучки камней (3, 5, 7). Игроки по очереди берут любое количество камней из одной кучки. Кто берет последний камень - выигрывает. Стратегия?",
          hints: [
            "Вычислите XOR (исключающее ИЛИ) размеров кучек",
            "3 ⊕ 5 ⊕ 7 = ?",
          ],
          solution:
            "Второй игрок выигрывает, так как 3⊕5⊕7 = 1 ≠ 0. Стратегия: делать XOR равным 0",
        },
        {
          level: "hard",
          condition:
            "На доске 4×4 можно ставить фишки. Нельзя ставить фишку так, чтобы она была на одной линии (по горизонтали, вертикали или диагонали) с уже поставленной. Кто поставит последнюю фишку - выигрывает. Максимум фишек?",
          hints: [
            "Это вариация задачи о ферзях",
            "Сколько ферзей можно поставить на доску 4×4?",
          ],
          solution:
            "Максимум 2 фишки. Первый игрок может форсировать ничью, ставя фишку в центр",
        },
        {
          level: "hard",
          condition:
            "100 карточек пронумерованы от 1 до 100. Игроки по очереди берут карточки. Первый может взять любую, следующий - только соседнюю по номеру с уже взятыми. Выигрывает набравший больше очков. Стратегия?",
          hints: [
            "Подумайте о длинных последовательностях",
            "Какие числа самые ценные?",
          ],
          solution:
            "Первый игрок берет 50 или 51, затем стремится захватить одну из половин 1-50 или 51-100",
        },
        {
          level: "hard",
          condition:
            "Треугольная доска: 10 рядов точек (1, 2, 3, ..., 10 точек). Игроки по очереди соединяют две точки. Нельзя создавать треугольники. Кто не может ходить - проигрывает. Анализ?",
          hints: [
            "Всего точек: 1+2+...+10 = 55",
            "Максимум ребер без треугольников в графе",
          ],
          solution:
            "Сложная задача теории графов. Первый игрок имеет преимущество при оптимальной игре",
        },
        {
          level: "hard",
          condition:
            "Игра с простыми числами: на доске числа от 2 до 30. Игроки по очереди вычеркивают простое число и все его кратные. Кто не может ходить - проигрывает. Стратегия?",
          hints: [
            "Простые числа от 2 до 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
            "Некоторые простые могут вычеркнуть больше чисел",
          ],
          solution:
            "Первый игрок выигрывает, начиная с 2 (вычеркивает все четные). Стратегия: брать простые с максимальным количеством кратных",
        },
      ],
    },
  ];

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
    const [currentHint, setCurrentHint] = useState(0);

    const difficultyColor = getDifficultyColor(task.level);
    const difficultyLabel = getDifficultyLabel(task.level);

    return (
      <Card
        className="border-l-4"
        style={{ borderLeftColor: `var(--color-${difficultyColor}-500)` }}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2 py-1 bg-${difficultyColor}-100 text-${difficultyColor}-800 text-xs rounded font-medium`}
                >
                  {difficultyColor === "green"
                    ? "🟢"
                    : difficultyColor === "yellow"
                      ? "🟡"
                      : "🔴"}{" "}
                  {difficultyLabel}
                </span>
                <span className="text-sm text-gray-500">
                  Задача #{index + 1}
                </span>
              </div>
              <CardTitle className="text-base">{task.condition}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Кнопки управления */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setShowHints(!showHints);
                if (!showHints) setCurrentHint(0);
              }}
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              <Icon name="Lightbulb" size={16} className="mr-1" />
              {showHints ? "Скрыть подсказки" : "Показать подсказки"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSolution(!showSolution)}
              className="text-green-600 border-green-200 hover:bg-green-50"
            >
              <Icon name="CheckCircle" size={16} className="mr-1" />
              {showSolution ? "Скрыть решение" : "Показать решение"}
            </Button>
          </div>

          {/* Подсказки */}
          {showHints && task.hints && task.hints.length > 0 && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-blue-800">💡 Подсказки:</h4>
                {task.hints.length > 1 && (
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setCurrentHint(Math.max(0, currentHint - 1))
                      }
                      disabled={currentHint === 0}
                    >
                      <Icon name="ChevronLeft" size={16} />
                    </Button>
                    <span className="text-sm text-blue-600 px-2 py-1">
                      {currentHint + 1} из {task.hints.length}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setCurrentHint(
                          Math.min(task.hints.length - 1, currentHint + 1),
                        )
                      }
                      disabled={currentHint === task.hints.length - 1}
                    >
                      <Icon name="ChevronRight" size={16} />
                    </Button>
                  </div>
                )}
              </div>
              <p className="text-blue-700">{task.hints[currentHint]}</p>
            </div>
          )}

          {/* Решение */}
          {showSolution && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-2">✅ Решение:</h4>
              <p className="text-green-700">{task.solution}</p>
            </div>
          )}
        </CardContent>
      </Card>
    );
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

      <Tabs defaultValue="logic-tasks" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="logic-tasks" className="flex items-center gap-2">
            <Icon name="Brain" size={18} />
            Логические задачи
          </TabsTrigger>
          <TabsTrigger value="grade-six" className="flex items-center gap-2">
            <Icon name="BookOpen" size={18} />
            Задачи для 6-го класса
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Icon name="BarChart3" size={18} />
            Анализ результатов класса
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logic-tasks" className="space-y-6">
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

        <TabsContent value="grade-six" className="space-y-6">
          <GradeSixTasks />
        </TabsContent>

        <TabsContent value="old-math-tasks" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mathTasks.map((task) => (
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
                    📝 15 задач (5 по каждому уровню)
                  </div>
                  <div className="flex gap-1 justify-center mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      🟢 Лёгкий
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      🟡 Средний
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                      🔴 Сложный
                    </span>
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
                    {mathTasks.find((t) => t.id === activeCategory)?.title}
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
                {/* Фильтр по уровню сложности */}
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
                        selectedDifficulty === "medium" ? "default" : "outline"
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

                <div className="space-y-4">
                  {(() => {
                    const currentTask = mathTasks.find(
                      (t) => t.id === activeCategory,
                    );
                    if (!currentTask) return null;

                    const filteredTasks = currentTask.tasks.filter(
                      (task: any) => {
                        return (
                          selectedDifficulty === null ||
                          task.level === selectedDifficulty
                        );
                      },
                    );

                    return filteredTasks.map((task: any, index: number) => (
                      <TaskCard
                        key={index}
                        task={task}
                        index={index}
                        selectedDifficulty={selectedDifficulty}
                      />
                    ));
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
