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

const MethodicalGuideSection = () => {
  const [activeTab, setActiveTab] = useState("methodology");

  const methodologyContent = [
    {
      title: "Глава 1. Теоретические основы формирования логического мышления",
      subtitle: "1.1. Что такое логическое мышление?",
      content: [
        "Логическое мышление — это **фундамент рационального познания мира**, основа принятия взвешенных решений и эффективного решения проблем. Это не просто заучивание правил, а умение думать последовательно, обоснованно и критически.",
        "",
        "## 🧠 Определение логического мышления и его компоненты",
        "",
        "**Логическое мышление в психологии:** это сложный мыслительный процесс, при котором человек активно использует логические понятия и конструкции для обработки информации. Ему свойственны *доказательность и рассудительность*, то есть каждый шаг мыслительного процесса опирается на обоснованные аргументы.",
        "",
        "🔍 **Главная цель логического мышления** — получение обоснованного вывода из имеющихся фактов, предпосылок и данных. Представьте себе детектива, расследующего преступление: он собирает улики, анализирует показания свидетелей и, используя логику, выстраивает цепочку событий, чтобы прийти к верному заключению.",
        "",
        "📱 **Пример из жизни:** Рассматривая вопрос о покупке нового телефона, человек с развитым логическим мышлением не просто поддается эмоциям или рекламе, а анализирует:",
        "• Нужен ли ему действительно новый телефон?",
        "• Какие функции ему необходимы?",
        "• Какие модели соответствуют его требованиям и бюджету?",
        "• Читает отзывы и сравнивает характеристики разных моделей",
        "",
        "**Логическое мышление в педагогике:** это целенаправленный мыслительный процесс, который с помощью логических операций позволяет установить *причинно-следственные связи между явлениями*, раскрыть объективные закономерности мира и понять их сущность.",
        "",
        "🎯 **Задача педагога** — не просто передать знания, а научить ученика самостоятельно добывать знания, анализировать информацию и делать обоснованные выводы.",
        "",
        "📐 **Пример с математикой:** На уроке математики учитель не просто рассказывает, как решать уравнения, а объясняет *логику решения*: почему мы переносим слагаемые из одной части уравнения в другую, почему меняется знак, почему мы выполняем определённые действия с обеими частями уравнения.",
        "",
        "## 🔧 Основные компоненты логического мышления",
        "",
        "### 1️⃣ **Анализ** — разделение сложной информации на простые составные части",
        "Это как разобрать сложный механизм на детали, чтобы понять, как он работает.",
        "",
        "📝 *Пример:* При решении сложной математической задачи ученик анализирует условия, выделяет известные данные и то, что нужно найти. Он может разбить задачу на несколько подзадач, чтобы решить их по отдельности.",
        "",
        "### 2️⃣ **Синтез** — объединение отдельных элементов в единое целое",
        "Это процесс, обратный анализу, когда мы собираем разрозненные детали воедино, чтобы получить общую картину.",
        "",
        "🔺 *Пример:* После изучения различных видов геометрических фигур (квадрат, прямоугольник, треугольник) ученик может использовать синтез, чтобы понять, что все эти фигуры являются частными случаями более общего понятия — **многоугольник**.",
        "",
        "### 3️⃣ **Сравнение** — оценка сходств и различий между объектами",
        "Этот процесс позволяет увидеть уникальные особенности каждого объекта и установить связи между ними.",
        "",
        "🔢 *Пример:* Сравнивая дроби 1/2 и 1/3, ученик определяет, какая из них больше, анализируя их числители и знаменатели.",
        "",
        "### 4️⃣ **Обобщение** — формирование общих выводов на основе частных случаев",
        "Это умение видеть общие черты в разных ситуациях и формулировать общие правила.",
        "",
        "📏 *Пример:* Решив несколько задач на нахождение площади прямоугольника, ученик может обобщить и сформулировать общее правило: **«Площадь прямоугольника равна произведению его длины на ширину»**.",
        "",
        "### 5️⃣ **Классификация** — группировка объектов по определенным признакам",
        "Это процесс упорядочивания информации, который помогает систематизировать знания и лучше понимать структуру мира.",
        "",
        "📐 *Пример:* Классификация треугольников:",
        "• **По углам:** остроугольный, прямоугольный, тупоугольный",
        "• **По сторонам:** равносторонний, равнобедренный, разносторонний",
        "",
        "### 6️⃣ **Абстрагирование** — выделение существенных признаков",
        "Это умение отделить главное от второстепенного, чтобы сосредоточиться на самом важном.",
        "",
        "💯 *Пример:* При изучении понятия «процент» ученик абстрагируется от конкретных товаров или услуг и понимает, что процент — это просто **доля от целого**.",
        "",
        "### 7️⃣ **Установление причинно-следственных связей** — определение взаимосвязей между событиями",
        "Это понимание того, что одно событие может быть причиной другого, и умение выстраивать логическую цепочку между ними.",
        "",
        "🚗 *Пример:* Ученик понимает, что если увеличить скорость автомобиля, то время, затраченное на преодоление определенного расстояния, сократится.",
        "",
        "## 🎓 Значение логического мышления для успешного обучения",
        "",
        "Развитое логическое мышление помогает учащимся:",
        "",
        "🔸 **Понимать и применять математические правила:** не просто заучивать формулы, а понимать логику их вывода и применения в различных ситуациях",
        "",
        "🔸 **Решать сложные задачи:** анализировать сложные условия задачи, выделять ключевые данные и синтезировать их для построения правильного решения",
        "",
        "🔸 **Развивать критическое мышление:** оценивать достоверность информации, выявлять ошибки в рассуждениях и формулировать обоснованные выводы",
        "",
        "## 🌍 Роль логического мышления в повседневной жизни",
        "",
        "Логическое мышление — это не просто навык для учёбы, это **важнейший инструмент для успешной адаптации в современном мире**. Оно помогает:",
        "",
        "✅ **Принимать обоснованные решения:** анализировать различные варианты, оценивать их последствия и выбирать наиболее оптимальное решение",
        "",
        "✅ **Решать проблемы:** выявлять причины проблемы, анализировать возможные решения, оценивать их эффективность",
        "",
        "✅ **Оценивать информацию:** отличать достоверную информацию от фейков, анализировать аргументы, выявлять манипуляции и делать обоснованные выводы",
        "",
        "💡 *Это особенно важно в эпоху информационного перенасыщения, когда каждый день мы сталкиваемся с огромным количеством разнообразной информации.*",
      ],
    },
    {
      title:
        "1.2. Возрастные особенности развития логического мышления у шестиклассников",
      content: [
        "В возрасте 11–12 лет происходит переход от конкретно-образного мышления к абстрактно-логическому. Это важный этап развития формального мышления.",
        "",
        "Характерные черты мышления детей 11-12 лет:",
        "• Учащиеся начинают лучше понимать абстрактные понятия и идеи",
        "• Способность рассуждать о гипотетических ситуациях",
        "• Развивается способность к самоанализу и рефлексии",
        "",
        "Возможности:",
        "• Развитие критического мышления",
        "• Способность к абстрагированию",
        "• Улучшение навыков анализа и синтеза",
        "• Возрастает интерес к нестандартным задачам",
        "",
        "Ограничения:",
        "• Эмоциональная нестабильность подросткового периода",
        "• Сильное влияние мнения сверстников",
        "• Недостаток опыта в решении сложных задач",
      ],
    },
    {
      title: "1.3. Методические принципы формирования логического мышления",
      content: [
        "Принцип систематичности и последовательности:",
        "Обучение должно быть организовано в логической последовательности, где каждый новый материал основывается на ранее усвоенном.",
        "",
        "Принцип наглядности и доступности:",
        "Использование наглядных материалов делает обучение более доступным, особенно для шестиклассников с не полностью сформированным абстрактным мышлением.",
        "",
        "Принцип проблемности и активности:",
        "Создание проблемных ситуаций, требующих активного участия учащихся, способствует развитию логического мышления.",
        "",
        "Принцип дифференцированного подхода:",
        "Учет индивидуальных особенностей и потребностей учащихся позволяет адаптировать методы обучения к уровню подготовки каждого ученика.",
        "",
        "Принцип связи теории с практикой:",
        "Связь теоретических знаний с практическими задачами помогает учащимся увидеть реальное применение логического мышления в жизни.",
      ],
    },
    {
      title:
        "Глава 2. Практические методы и приёмы развития логического мышления",
      subtitle: "2.1. Использование проблемных ситуаций",
      content: [
        "Проблемные ситуации — это специально сконструированные задачи, которые требуют от учащихся логического анализа и самостоятельного поиска решений.",
        "",
        "Создание проблемных ситуаций:",
        "• На основе реальных жизненных ситуаций",
        "• На основе абстрактных математических концепций",
        "• На основе исторических фактов и занимательных историй",
        "",
        "Методика организации работы:",
        "1. Формулировка проблемы",
        "2. Актуализация знаний",
        "3. Генерация идей (мозговой штурм)",
        "4. Групповая работа",
        "5. Презентация решений",
        "6. Рефлексия",
      ],
    },
    {
      title: "2.2. Решение логических задач различных типов",
      content: [
        "Классификация логических задач:",
        "• Задачи на установление соответствия",
        "• Задачи на определение правды и лжи",
        "• Задачи на взвешивание",
        "• Задачи на переливание",
        "• Комбинаторные задачи",
        "• Старинные задачи",
        "",
        "Каждый тип задач развивает определенные аспекты логического мышления: от анализа и синтеза до пространственного мышления и планирования действий.",
        "",
        "Важно не только предлагать ученикам решать задачи разных типов, но и объяснять логику решения, подчёркивать используемые приёмы и стимулировать самостоятельный поиск решений.",
      ],
    },
  ];

  const lessonPlans = [
    {
      title: "Урок 1: Введение в логическое мышление",
      duration: "45 минут",
      objectives: [
        "Познакомить с понятием логики",
        "Развить интерес к логическим задачам",
        "Провести входную диагностику",
      ],
      activities: [
        "Разминка: простые логические вопросы (10 мин)",
        "Основная часть: решение базовых задач (25 мин)",
        "Рефлексия и домашнее задание (10 мин)",
      ],
    },
    {
      title: "Урок 2: Анализ и синтез",
      duration: "45 минут",
      objectives: [
        "Развить навыки анализа информации",
        "Научить синтезировать выводы",
        "Применить знания на практике",
      ],
      activities: [
        "Анализ текстовых задач (15 мин)",
        "Групповое решение комплексных задач (20 мин)",
        "Презентация результатов (10 мин)",
      ],
    },
  ];

  const resources = [
    {
      category: "Диагностические материалы",
      items: [
        "Тест на определение уровня логического мышления",
        "Карточки для индивидуальной работы",
        "Критерии оценки логических навыков",
      ],
    },
    {
      category: "Дидактические игры",
      items: [
        "Логические цепочки",
        "Математические головоломки",
        "Задачи на классификацию",
      ],
    },
    {
      category: "Домашние задания",
      items: [
        "Задания для самостоятельной работы",
        "Проекты по развитию логики",
        "Задачи повышенной сложности",
      ],
    },
  ];

  const tabs = [
    { id: "methodology", label: "Методология", icon: "BookOpen" },
    {
      id: "lesson-plans",
      label: "Планы-конспекты уроков по ФГОС",
      icon: "GraduationCap",
    },
    { id: "lessons", label: "Курс", icon: "Calendar" },
    { id: "resources", label: "Ресурсы", icon: "FolderOpen" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Методическое пособие для учителей
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Комплексное руководство по развитию логического мышления у учащихся 6
          класса
        </p>
      </div>

      <div className="flex justify-center space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            onClick={() => setActiveTab(tab.id)}
            className="flex items-center gap-2 pb-2"
          >
            <Icon name={tab.icon as any} size={18} />
            {tab.label}
          </Button>
        ))}
      </div>

      {activeTab === "methodology" && (
        <div className="space-y-8">
          {/* Глава 1 */}
          <div className="bg-gradient-to-r from-indigo-50 to-white border-l-4 border-indigo-500 rounded-r-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-indigo-900">
                  Глава 1. Теоретические основы формирования логического
                  мышления
                </h2>
              </div>
              <div className="space-y-3 pl-13">
                <a
                  href="/methodology/chapter1/logical-thinking"
                  className="block group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-100 transition-colors">
                    <span className="text-indigo-600 font-medium">1.1.</span>
                    <span className="text-gray-800 group-hover:text-indigo-700 transition-colors">
                      Что такое логическое мышление?
                    </span>
                    <Icon
                      name="ChevronRight"
                      className="text-indigo-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      size={16}
                    />
                  </div>
                </a>
                <a
                  href="/methodology/chapter1/age-features"
                  className="block group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-100 transition-colors">
                    <span className="text-indigo-600 font-medium">1.2.</span>
                    <span className="text-gray-800 group-hover:text-indigo-700 transition-colors">
                      Возрастные особенности развития логического мышления у
                      шестиклассников
                    </span>
                    <Icon
                      name="ChevronRight"
                      className="text-indigo-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      size={16}
                    />
                  </div>
                </a>
                <a
                  href="/methodology/chapter1/principles"
                  className="block group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-100 transition-colors">
                    <span className="text-indigo-600 font-medium">1.3.</span>
                    <span className="text-gray-800 group-hover:text-indigo-700 transition-colors">
                      Методические принципы формирования логического мышления
                    </span>
                    <Icon
                      name="ChevronRight"
                      className="text-indigo-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      size={16}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Разделитель */}
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="px-4">
              <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Глава 2 */}
          <div className="bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-500 rounded-r-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="Lightbulb" className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-emerald-900">
                  Глава 2. Практические методы и приёмы развития логического
                  мышления на уроках математики
                </h2>
              </div>
              <div className="space-y-3 pl-13">
                <a
                  href="/methodology/chapter2/problem-situations"
                  className="block group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-100 transition-colors">
                    <span className="text-emerald-600 font-medium">2.1.</span>
                    <span className="text-gray-800 group-hover:text-emerald-700 transition-colors">
                      Использование проблемных ситуаций
                    </span>
                    <Icon
                      name="ChevronRight"
                      className="text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      size={16}
                    />
                  </div>
                </a>
                <a
                  href="/methodology/chapter2/logical-tasks"
                  className="block group"
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-100 transition-colors">
                    <span className="text-emerald-600 font-medium">2.2.</span>
                    <span className="text-gray-800 group-hover:text-emerald-700 transition-colors">
                      Решение логических задач различных типов
                    </span>
                    <Icon
                      name="ChevronRight"
                      className="text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      size={16}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "lessons" && (
        <div className="space-y-6">
          {lessonPlans.map((lesson, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-blue-600" size={20} />
                  {lesson.title}
                </CardTitle>
                <CardDescription>
                  Продолжительность: {lesson.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Цели урока:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {lesson.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="text-gray-700">
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Структура урока:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {lesson.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-gray-700">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "resources" && (
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon name="FileText" className="text-green-600" size={20} />
                  {resource.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Icon
                        name="CheckCircle"
                        className="text-green-500 mt-0.5"
                        size={16}
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "lesson-plans" && (
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-green-600" size={24} />
              Планы-конспекты уроков по ФГОС
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">
                  Урок 1: Натуральные числа и действия с ними
                </h4>
                <p className="text-sm text-gray-600">
                  Формирование УУД: познавательные, регулятивные,
                  коммуникативные
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать конспект
                </Button>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">
                  Урок 2: Обыкновенные дроби
                </h4>
                <p className="text-sm text-gray-600">
                  Практико-ориентированные задачи, развитие логического мышления
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать конспект
                </Button>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Icon name="FolderOpen" size={16} className="mr-2" />
                Все планы-конспекты (15 уроков)
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MethodicalGuideSection;
