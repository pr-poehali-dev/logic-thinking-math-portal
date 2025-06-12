import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LessonPlansSection = () => {
  const lessonPlans = [
    {
      title: "Урок 1: Делители и кратные",
      duration: "45 минут",
      topic: "Натуральные числа",
      objectives: [
        "Познакомить с понятиями делитель и кратное",
        "Научить находить делители и кратные числа",
        "Развить логическое мышление",
      ],
      materials: "Учебник, рабочие тетради, карточки с заданиями",
      downloadUrl: "#",
    },
    {
      title: "Урок 2: Признаки делимости на 10, на 5 и на 2",
      duration: "45 минут",
      topic: "Делимость чисел",
      objectives: [
        "Изучить признаки делимости на 2, 5, 10",
        "Научить применять признаки при решении задач",
        "Формировать навыки самоконтроля",
      ],
      materials: "Интерактивная доска, карточки, тесты",
      downloadUrl: "#",
    },
    {
      title: "Урок 3: Признаки делимости на 9 и на 3",
      duration: "45 минут",
      topic: "Делимость чисел",
      objectives: [
        "Изучить признаки делимости на 3 и 9",
        "Научить различать числа, делящиеся на 3 и 9",
        "Развить внимательность и точность",
      ],
      materials: "Учебник, презентация, раздаточный материал",
      downloadUrl: "#",
    },
    {
      title: "Урок 4: Простые и составные числа",
      duration: "45 минут",
      topic: "Натуральные числа",
      objectives: [
        "Познакомить с понятиями простое и составное число",
        "Научить различать простые и составные числа",
        "Развить аналитическое мышление",
      ],
      materials: "Таблица простых чисел, карточки",
      downloadUrl: "#",
    },
    {
      title: "Урок 5: Разложение на простые множители",
      duration: "45 минут",
      topic: "Натуральные числа",
      objectives: [
        "Научить раскладывать числа на простые множители",
        "Формировать навык работы с алгоритмом",
        "Развить логическое мышление",
      ],
      materials: "Схемы разложения, карточки с числами",
      downloadUrl: "#",
    },
    {
      title: "Урок 6: Наибольший общий делитель. Взаимно простые числа",
      duration: "45 минут",
      topic: "Делимость чисел",
      objectives: [
        "Познакомить с понятием НОД",
        "Научить находить НОД разными способами",
        "Изучить понятие взаимно простых чисел",
      ],
      materials: "Алгоритм Евклида, примеры вычислений",
      downloadUrl: "#",
    },
    {
      title: "Урок 7: Наименьшее общее кратное",
      duration: "45 минут",
      topic: "Делимость чисел",
      objectives: [
        "Познакомить с понятием НОК",
        "Научить находить НОК чисел",
        "Показать связь между НОД и НОК",
      ],
      materials: "Таблицы кратных, схемы вычислений",
      downloadUrl: "#",
    },
    {
      title: "Урок 8: Основное свойство дроби",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Изучить основное свойство дроби",
        "Научить применять свойство для преобразований",
        "Развить понимание равенства дробей",
      ],
      materials: "Модели дробей, наглядные пособия",
      downloadUrl: "#",
    },
    {
      title: "Урок 9: Сокращение дробей",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Научить сокращать дроби",
        "Формировать навык нахождения НОД",
        "Развить вычислительные навыки",
      ],
      materials: "Карточки с дробями, алгоритм сокращения",
      downloadUrl: "#",
    },
    {
      title: "Урок 10: Приведение дробей к общему знаменателю",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Научить приводить дроби к общему знаменателю",
        "Формировать навык нахождения НОК",
        "Подготовить к сложению и вычитанию дробей",
      ],
      materials: "Схемы приведения, практические задания",
      downloadUrl: "#",
    },
    {
      title:
        "Урок 11: Сравнение, сложение и вычитание дробей с разными знаменателями",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Научить сравнивать дроби с разными знаменателями",
        "Освоить сложение и вычитание таких дробей",
        "Развить навыки работы с алгоритмами",
      ],
      materials: "Числовая прямая, карточки с примерами",
      downloadUrl: "#",
    },
    {
      title: "Урок 12: Сложение и вычитание смешанных чисел",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Научить выполнять действия со смешанными числами",
        "Формировать навык перехода от неправильной дроби к смешанному числу",
        "Развить вычислительную культуру",
      ],
      materials: "Модели смешанных чисел, задачи",
      downloadUrl: "#",
    },
    {
      title: "Урок 13: Умножение и деление обыкновенных дробей",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Изучить правила умножения и деления дробей",
        "Научить применять правила на практике",
        "Развить логическое обоснование действий",
      ],
      materials: "Геометрические модели, алгоритмы действий",
      downloadUrl: "#",
    },
    {
      title:
        "Урок 14: Арифметические действия с обыкновенными и десятичными дробями",
      duration: "45 минут",
      topic: "Дроби",
      objectives: [
        "Научить выполнять все арифметические действия с дробями",
        "Развить навыки работы с десятичными и обыкновенными дробями",
        "Формировать вычислительную культуру",
      ],
      materials: "Калькулятор, таблицы дробей, карточки с примерами",
      downloadUrl: "#",
    },
    {
      title: "Урок 15: Положительные и отрицательные числа",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Познакомить с понятием отрицательных чисел",
        "Научить различать положительные и отрицательные числа",
        "Развить понимание числовой прямой",
      ],
      materials: "Числовая прямая, термометр, карточки с числами",
      downloadUrl: "#",
    },
    {
      title: "Урок 16: Модуль числа",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Изучить понятие модуля числа",
        "Научить находить модуль положительных и отрицательных чисел",
        "Развить понимание геометрического смысла модуля",
      ],
      materials: "Числовая прямая, карточки с числами, схемы",
      downloadUrl: "#",
    },
    {
      title: "Урок 17: Координаты точки на плоскости, абсцисса и ордината",
      duration: "45 минут",
      topic: "Координатная плоскость",
      objectives: [
        "Познакомить с понятием координатной плоскости",
        "Научить находить координаты точки",
        "Изучить понятия абсциссы и ординаты",
      ],
      materials: "Координатная сетка, линейка, цветные карандаши",
      downloadUrl: "#",
    },
    {
      title: "Урок 18: Масштаб, пропорция",
      duration: "45 минут",
      topic: "Отношения и пропорции",
      objectives: [
        "Изучить понятие масштаба",
        "Научить составлять и решать пропорции",
        "Формировать навык работы с картами и планами",
      ],
      materials: "Карты, планы, линейка, задачи на масштаб",
      downloadUrl: "#",
    },
    {
      title: "Урок 19: Модуль числа",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Познакомить с понятием модуля числа",
        "Научить находить модуль положительных и отрицательных чисел",
        "Развить понимание геометрического смысла модуля",
      ],
      materials: "Числовая прямая, карточки с числами, схемы",
      downloadUrl: "#",
    },
    {
      title:
        "Урок 20: Объём прямоугольного параллелепипеда, куба, формулы объёма",
      duration: "45 минут",
      topic: "Геометрия",
      objectives: [
        "Изучить формулы объёма параллелепипеда и куба",
        "Научить применять формулы для решения задач",
        "Развить пространственное мышление",
      ],
      materials: "Модели фигур, линейка, формулы объёма",
      downloadUrl: "#",
    },
    {
      title: "Урок 21: Осевая и центральная симметрия",
      duration: "45 минут",
      topic: "Геометрия",
      objectives: [
        "Познакомить с видами симметрии",
        "Научить строить симметричные фигуры",
        "Развить понимание симметрии в природе и искусстве",
      ],
      materials: "Зеркало, циркуль, линейка, симметричные фигуры",
      downloadUrl: "#",
    },
    {
      title: "Урок 22: Основное свойство дробей",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Углубить понимание основного свойства дроби",
        "Научить применять свойство для упрощения дробей",
        "Формировать навыки работы с эквивалентными дробями",
      ],
      materials: "Круги для дробей, схемы преобразований",
      downloadUrl: "#",
    },
    {
      title: "Урок 23: Положительные и отрицательные числа",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Познакомить с множеством рациональных чисел",
        "Научить различать положительные и отрицательные числа",
        "Развить понимание практического применения отрицательных чисел",
      ],
      materials: "Термометр, числовая прямая, примеры из жизни",
      downloadUrl: "#",
    },
    {
      title:
        "Урок 24: Прямоугольный параллелепипед, куб, призма, пирамида, конус, цилиндр, шар и сфера",
      duration: "45 минут",
      topic: "Геометрия",
      objectives: [
        "Изучить основные геометрические тела",
        "Научить различать плоские и объёмные фигуры",
        "Развить пространственное воображение",
      ],
      materials: "Модели геометрических тел, развёртки, схемы",
      downloadUrl: "#",
    },
    {
      title: "Урок 25: Сравнение и упорядочивание дробей",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Научить сравнивать дроби с разными знаменателями",
        "Формировать навык упорядочивания дробей по возрастанию и убыванию",
        "Развить логическое мышление",
      ],
      materials: "Числовая прямая, карточки с дробями, алгоритмы сравнения",
      downloadUrl: "#",
    },
    {
      title: "Урок 26: Сравнение положительных и отрицательных чисел",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Изучить правила сравнения рациональных чисел",
        "Научить упорядочивать положительные и отрицательные числа",
        "Формировать навык работы с числовой прямой",
      ],
      materials: "Числовая прямая, карточки с числами, термометр",
      downloadUrl: "#",
    },
  ];

  const handleDownload = (title: string) => {
    // В будущем здесь будет реальная загрузка файлов
    alert(`Скачивание конспекта: ${title}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-indigo-800 flex items-center justify-center gap-3">
          <Icon name="GraduationCap" size={32} className="text-indigo-600" />
          Планы-конспекты уроков по математике 6 класс
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Готовые планы-конспекты уроков математики для 6 класса, составленные в
          соответствии с ФГОС. Каждый урок содержит подробное описание целей,
          задач, хода урока и необходимых материалов.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <Icon name="Info" className="text-blue-600" size={24} />
          <h3 className="text-xl font-bold text-blue-800">
            Особенности конспектов
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle" className="text-green-600" size={16} />
            <span className="text-gray-700">Соответствие ФГОС</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" className="text-blue-600" size={16} />
            <span className="text-gray-700">45 минут каждый урок</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Target" className="text-purple-600" size={16} />
            <span className="text-gray-700">Четкие цели и задачи</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" className="text-orange-600" size={16} />
            <span className="text-gray-700">Готовые материалы</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" className="text-red-600" size={16} />
            <span className="text-gray-700">Интерактивные методы</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Award" className="text-yellow-600" size={16} />
            <span className="text-gray-700">Развитие УУД</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {lessonPlans.map((lesson, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-xl text-indigo-800">{lesson.title}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Тема: {lesson.topic} • {lesson.duration}
                  </div>
                </div>
                <Button
                  onClick={() => handleDownload(lesson.title)}
                  className="bg-green-600 hover:bg-green-700"
                  size="sm"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Icon name="Target" size={16} className="text-blue-600" />
                  Цели урока:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  {lesson.objectives.map((objective, objIndex) => (
                    <li key={objIndex} className="text-gray-700">
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Icon name="Package" size={16} className="text-purple-600" />
                  Необходимые материалы:
                </h4>
                <p className="text-gray-700 ml-4">{lesson.materials}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <div className="text-center space-y-4">
          <Icon name="Heart" className="text-green-600 mx-auto" size={32} />
          <h3 className="text-xl font-bold text-green-800">
            Поддержка и обратная связь
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Если у вас есть вопросы по использованию конспектов или предложения
            по их улучшению, мы всегда готовы помочь. Ваш опыт важен для нас!
          </p>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonPlansSection;
