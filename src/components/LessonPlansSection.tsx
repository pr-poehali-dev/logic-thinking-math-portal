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
      title: "Урок 1: Основное свойство дроби",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Изучить основное свойство дроби",
        "Научить применять свойство для преобразований",
        "Развить понимание равенства дробей",
      ],
      materials: "Модели дробей, наглядные пособия",
      downloadUrl: "https://disk.yandex.ru/i/BcXY0xsuHIdV5A",
    },

    {
      title: "Урок 8: Положительные и отрицательные числа",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Познакомить с понятием отрицательных чисел",
        "Научить различать положительные и отрицательные числа",
        "Развить понимание числовой прямой",
      ],
      materials: "Числовая прямая, термометр, карточки с числами",
      downloadUrl: "https://disk.yandex.ru/i/5GpQQC60wtUDXw",
    },
    {
      title: "Урок 9: Модуль числа",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Изучить понятие модуля числа",
        "Научить находить модуль положительных и отрицательных чисел",
        "Развить понимание геометрического смысла модуля",
      ],
      materials: "Числовая прямая, карточки с числами, схемы",
      downloadUrl: "https://disk.yandex.ru/i/4Az80wd7lq5IKQ",
    },
    {
      title: "Урок 10: Координаты точки на плоскости, абсцисса и ордината",
      duration: "45 минут",
      topic: "Координатная плоскость",
      objectives: [
        "Познакомить с понятием координатной плоскости",
        "Научить находить координаты точки",
        "Изучить понятия абсциссы и ординаты",
      ],
      materials: "Координатная сетка, линейка, цветные карандаши",
      downloadUrl: "https://disk.yandex.ru/i/JTKU83-_0EWv2Q",
    },
    {
      title: "Урок 11: Масштаб, пропорция",
      duration: "45 минут",
      topic: "Отношения и пропорции",
      objectives: [
        "Изучить понятие масштаба",
        "Научить составлять и решать пропорции",
        "Формировать навык работы с картами и планами",
      ],
      materials: "Карты, планы, линейка, задачи на масштаб",
      downloadUrl: "https://disk.yandex.ru/i/EYVBf3KhWCoekg",
    },

    {
      title:
        "Урок 15: Прямоугольный параллелепипед, куб, призма, пирамида, конус, цилиндр, шар и сфера",
      duration: "45 минут",
      topic: "Геометрия",
      objectives: [
        "Изучить основные геометрические тела",
        "Научить различать плоские и объёмные фигуры",
        "Развить пространственное воображение",
      ],
      materials: "Модели геометрических тел, развёртки, схемы",
      downloadUrl: "https://disk.yandex.ru/i/3w5TAydDWt3yBw",
    },
    {
      title: "Урок 16: Сравнение и упорядочивание дробей",
      duration: "45 минут",
      topic: "Обыкновенные дроби",
      objectives: [
        "Научить сравнивать дроби с разными знаменателями",
        "Формировать навык упорядочивания дробей по возрастанию и убыванию",
        "Развить логическое мышление",
      ],
      materials: "Числовая прямая, карточки с дробями, алгоритмы сравнения",
      downloadUrl: "https://disk.yandex.ru/i/bFzQi8itTt9nGg",
    },
    {
      title: "Урок 17: Сравнение положительных и отрицательных чисел",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Изучить правила сравнения рациональных чисел",
        "Научить упорядочивать положительные и отрицательные числа",
        "Формировать навык работы с числовой прямой",
      ],
      materials: "Числовая прямая, карточки с числами, термометр",
      downloadUrl: "https://disk.yandex.ru/i/43NLZDrJSzzAJw",
    },
    {
      title:
        "Урок 18: Арифметические действия с положительными и отрицательными числами",
      duration: "45 минут",
      topic: "Рациональные числа",
      objectives: [
        "Изучить правила сложения и вычитания положительных и отрицательных чисел",
        "Научить выполнять умножение и деление рациональных чисел",
        "Формировать навыки вычислений с числами разных знаков",
      ],
      materials: "Числовая прямая, карточки с примерами, алгоритмы действий",
      downloadUrl: "https://disk.yandex.ru/i/c_XRcigKxzpxhA",
    },
    {
      title:
        "Урок 19: Вычисление процента от величины и величины по её проценту",
      duration: "45 минут",
      topic: "Проценты",
      objectives: [
        "Изучить способы вычисления процента от числа",
        "Научить находить число по его проценту",
        "Формировать навыки решения практических задач с процентами",
      ],
      materials: "Калькулятор, задачи из повседневной жизни, схемы вычислений",
      downloadUrl: "https://disk.yandex.ru/i/_nEMvqShgJyhgQ",
    },
  ];

  const handleDownload = (downloadUrl: string, title: string) => {
    if (downloadUrl === "#") {
      // Временная заглушка для демонстрации
      alert(`Скачивание конспекта: ${title}`);
      return;
    }

    // Создаем временную ссылку для скачивания
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${title}.pdf`; // Задаем имя файла
    link.target = "_blank";

    // Добавляем в DOM, кликаем и удаляем
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  onClick={() =>
                    handleDownload(lesson.downloadUrl, lesson.title)
                  }
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
