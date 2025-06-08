import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const lessons = [
  {
    id: 1,
    title: "Натуральные числа и действия с ними",
    class: "5 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
    goals:
      "Систематизировать знания о натуральных числах, развить навыки выполнения арифметических действий",
    tasks: [
      "Повторить понятие натурального числа",
      "Отработать алгоритмы сложения и вычитания",
      "Развить логическое мышление",
    ],
    uud: ["Познавательные", "Регулятивные", "Коммуникативные"],
    equipment:
      "Интерактивная доска, раздаточный материал, карточки с заданиями",
  },
  {
    id: 2,
    title: "Обыкновенные дроби",
    class: "5 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
    goals:
      "Формировать понятие обыкновенной дроби, научить сравнивать дроби с одинаковыми знаменателями",
    tasks: [
      "Ввести понятие дроби",
      "Научить записывать и читать дроби",
      "Сформировать умение сравнивать дроби",
    ],
    uud: ["Познавательные", "Регулятивные"],
    equipment: "Модели долей, интерактивная презентация, рабочие листы",
  },
  {
    id: 3,
    title: "Десятичные дроби и действия с ними",
    class: "5 класс",
    duration: "45 мин",
    type: "Урок-практикум",
    goals:
      "Закрепить навыки выполнения действий с десятичными дробями, применить знания в практических задачах",
    tasks: [
      "Отработать алгоритмы действий с десятичными дробями",
      "Решить практико-ориентированные задачи",
      "Развить вычислительные навыки",
    ],
    uud: ["Познавательные", "Коммуникативные"],
    equipment: "Калькуляторы, задачи из реальной жизни, групповые карточки",
  },
  {
    id: 4,
    title: "Проценты и их применение",
    class: "5 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
    goals:
      "Сформировать понятие процента, научить решать основные задачи на проценты",
    tasks: [
      "Ввести понятие процента",
      "Изучить три типа задач на проценты",
      "Применить знания в жизненных ситуациях",
    ],
    uud: ["Познавательные", "Регулятивные", "Личностные"],
    equipment: "Диаграммы, таблицы, примеры из экономики",
  },
  {
    id: 5,
    title: "Площади и объемы",
    class: "5 класс",
    duration: "45 мин",
    type: "Урок-исследование",
    goals:
      "Систематизировать знания о площадях фигур, познакомить с понятием объема",
    tasks: [
      "Повторить формулы площадей",
      "Ввести понятие объема",
      "Решить практические задачи на вычисление площадей и объемов",
    ],
    uud: ["Познавательные", "Регулятивные"],
    equipment: "Геометрические фигуры, измерительные инструменты, модели тел",
  },
  {
    id: 6,
    title: "Положительные и отрицательные числа",
    class: "6 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
    goals:
      "Расширить представление о числах, ввести понятие отрицательных чисел",
    tasks: [
      "Познакомить с историей возникновения отрицательных чисел",
      "Научить изображать числа на координатной прямой",
      "Сравнивать положительные и отрицательные числа",
    ],
    uud: ["Познавательные", "Коммуникативные"],
    equipment: "Координатная прямая, термометр, исторические факты",
  },
  {
    id: 7,
    title: "Модуль числа",
    class: "6 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
    goals:
      "Сформировать понятие модуля числа, научить находить модуль различных чисел",
    tasks: [
      "Ввести определение модуля",
      "Изучить свойства модуля",
      "Решить уравнения с модулем",
    ],
    uud: ["Познавательные", "Регулятивные"],
    equipment: "Координатная прямая, карточки с заданиями",
  },
  {
    id: 8,
    title: "Сложение и вычитание рациональных чисел",
    class: "6 класс",
    duration: "45 мин",
    type: "Урок-практикум",
    goals:
      "Отработать навыки сложения и вычитания положительных и отрицательных чисел",
    tasks: [
      "Повторить правила сложения и вычитания",
      "Решить примеры различной сложности",
      "Применить знания в текстовых задачах",
    ],
    uud: ["Познавательные", "Регулятивные", "Коммуникативные"],
    equipment: "Карточки с примерами, координатная прямая",
  },
  {
    id: 9,
    title: "Умножение и деление рациональных чисел",
    class: "6 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
    goals:
      "Изучить правила умножения и деления рациональных чисел, сформировать вычислительные навыки",
    tasks: [
      "Вывести правила знаков при умножении и делении",
      "Отработать алгоритмы вычислений",
      "Решить практические задачи",
    ],
    uud: ["Познавательные", "Регулятивные"],
    equipment: "Таблица правил знаков, карточки с заданиями",
  },
  {
    id: 10,
    title: "Решение уравнений",
    class: "6 класс",
    duration: "45 мин",
    type: "Урок развития умений",
    goals:
      "Систематизировать способы решения линейных уравнений, развить алгебраическое мышление",
    tasks: [
      "Повторить основные приемы решения уравнений",
      "Решить уравнения различных типов",
      "Составить уравнения по условию задач",
    ],
    uud: ["Познавательные", "Регулятивные", "Коммуникативные"],
    equipment: "Алгоритм решения уравнений, текстовые задачи",
  },
  {
    id: 11,
    title: "Координаты на плоскости",
    class: "6 класс",
    duration: "45 мин",
    type: "Урок-путешествие",
    goals:
      "Познакомить с прямоугольной системой координат, научить строить точки по координатам",
    tasks: [
      "Ввести понятие координатной плоскости",
      "Научить находить координаты точек",
      "Строить фигуры по координатам",
    ],
    uud: ["Познавательные", "Коммуникативные", "Личностные"],
    equipment: "Координатная плоскость, цветные карандаши, творческие задания",
  },
  {
    id: 12,
    title: "Функции и их графики",
    class: "7 класс",
    duration: "45 мин",
    type: "Изучение нового материала",
    goals:
      "Сформировать понятие функции, научить строить простейшие графики функций",
    tasks: [
      "Ввести определение функции",
      "Изучить способы задания функций",
      "Построить графики линейных функций",
    ],
    uud: ["Познавательные", "Регулятивные"],
    equipment: "Координатная плоскость, линейка, примеры функций из жизни",
  },
  {
    id: 13,
    title: "Системы линейных уравнений",
    class: "7 класс",
    duration: "45 мин",
    type: "Комбинированный урок",
    goals:
      "Познакомить со способами решения систем линейных уравнений, развить алгебраические навыки",
    tasks: [
      "Изучить графический способ решения систем",
      "Освоить метод подстановки",
      "Применить метод сложения",
    ],
    uud: ["Познавательные", "Регулятивные", "Коммуникативные"],
    equipment: "Алгоритмы решения систем, координатная плоскость",
  },
  {
    id: 14,
    title: "Степень с натуральным показателем",
    class: "7 класс",
    duration: "45 мин",
    type: "Урок-исследование",
    goals:
      "Ввести понятие степени, изучить свойства степеней с натуральными показателями",
    tasks: [
      "Определить понятие степени",
      "Вывести основные свойства степеней",
      "Применить свойства для упрощения выражений",
    ],
    uud: ["Познавательные", "Регулятивные"],
    equipment: "Таблица степеней, карточки с заданиями на исследование",
  },
  {
    id: 15,
    title: "Формулы сокращенного умножения",
    class: "7 класс",
    duration: "45 мин",
    type: "Урок-практикум",
    goals:
      "Изучить основные формулы сокращенного умножения, научить применять их для преобразования выражений",
    tasks: [
      "Вывести формулы квадрата суммы и разности",
      "Изучить формулу разности квадратов",
      "Применить формулы для решения задач",
    ],
    uud: ["Познавательные", "Регулятивные", "Коммуникативные"],
    equipment:
      "Таблица формул, геометрические модели, алгебраические выражения",
  },
];

const FgosPlansSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Планы-конспекты уроков по ФГОС
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Готовые планы-конспекты уроков с учетом требований ФГОС для развития
          логического мышления (15 уроков математики для 5-7 классов)
        </p>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon
                    name="BookOpen"
                    className="text-blue-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="line-clamp-2">
                    Урок {lesson.id}: {lesson.title}
                  </span>
                </CardTitle>
                <div className="flex gap-2 flex-shrink-0">
                  <Badge variant="secondary">{lesson.class}</Badge>
                  <Badge variant="outline">{lesson.duration}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">
                      <Icon name="Target" size={14} className="inline mr-1" />
                      Цель урока:
                    </h4>
                    <p className="text-sm text-gray-600">{lesson.goals}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">
                      <Icon
                        name="CheckCircle"
                        size={14}
                        className="inline mr-1"
                      />
                      Задачи:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold text-xs mt-1">
                            •
                          </span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      <Icon name="Brain" size={14} className="inline mr-1" />
                      Формируемые УУД:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {lesson.uud.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">
                      <Icon name="Settings" size={14} className="inline mr-1" />
                      Оборудование:
                    </h4>
                    <p className="text-sm text-gray-600">{lesson.equipment}</p>
                  </div>

                  <div>
                    <Badge variant="secondary" className="text-xs">
                      {lesson.type}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-3 border-t border-gray-100">
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать конспект
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Предварительный просмотр
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Методические материалы
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <Icon
              name="FolderOpen"
              className="mx-auto text-green-600"
              size={32}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Получить все материалы одним архивом
            </h3>
            <p className="text-gray-600">
              Скачайте полный комплект из 15 планов-конспектов уроков математики
              по ФГОС с методическими рекомендациями и дидактическими
              материалами
            </p>
            <Button className="bg-green-600 hover:bg-green-700" size="lg">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать весь комплект (15 уроков)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FgosPlansSection;
