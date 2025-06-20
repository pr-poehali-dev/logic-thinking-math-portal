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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const renderLogicalThinkingContent = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
      {/* Заголовок */}
      <div className="text-center space-y-4 border-b pb-6">
        <h3 className="text-3xl font-bold text-indigo-800 flex items-center justify-center gap-3">
          🧠 Что такое логическое мышление?
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          <strong className="text-indigo-700">Логическое мышление</strong> — это
          фундамент рационального познания мира, основа принятия взвешенных
          решений и эффективного решения проблем. Это не просто заучивание
          правил, а умение думать последовательно, обоснованно и критически.
        </p>
      </div>

      {/* Определения */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
            🔬 В психологии
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Это сложный мыслительный процесс, при котором человек активно
            использует логические понятия и конструкции для обработки
            информации. Ему свойственны{" "}
            <strong className="text-purple-700">
              доказательность и рассудительность
            </strong>
            , то есть каждый шаг мыслительного процесса опирается на
            обоснованные аргументы.
          </p>
          <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200">
            <p className="text-sm text-purple-800 font-medium">
              💡 Представьте детектива, расследующего преступление:
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Он собирает улики, анализирует показания свидетелей и, используя
              логику, выстраивает цепочку событий для верного заключения.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
          <h4 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
            📚 В педагогике
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Это целенаправленный мыслительный процесс, который с помощью
            логических операций позволяет установить причинно-следственные связи
            между явлениями, раскрыть объективные закономерности мира и понять
            их сущность.
          </p>
          <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
            <p className="text-sm text-green-800 font-medium">
              🎯 Задача педагога:
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Научить ученика самостоятельно добывать знания, анализировать
              информацию и делать обоснованные выводы.
            </p>
          </div>
        </div>
      </div>

      {/* Примеры */}
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-gray-800 text-center">
          📋 Практические примеры
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              📱 Покупка телефона
            </h5>
            <p className="text-gray-700 mb-3">
              Человек с развитым логическим мышлением не поддается эмоциям или
              рекламе, а анализирует:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Технические характеристики</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Цену и соотношение цена/качество</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Отзывы пользователей</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Долгосрочную перспективу использования</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
              🎯 Выбор профессии
            </h5>
            <p className="text-gray-700 mb-3">
              Выпускник анализирует свои интересы, способности и возможности:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Личные склонности и таланты</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Востребованность профессии на рынке</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Возможности для карьерного роста</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Требования к образованию и подготовке</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Компоненты логического мышления */}
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-gray-800 text-center flex items-center justify-center gap-3">
          🔧 Основные компоненты логического мышления
        </h4>

        <div className="grid gap-4">
          {[
            {
              title: "Анализ",
              icon: "🔍",
              color: "red",
              description:
                "Разделение сложной информации на более простые, понятные и управляемые составные части для более глубокого понимания.",
              example:
                "При решении сложной математической задачи ученик анализирует условия, выделяет известные данные и то, что нужно найти. Он может разбить задачу на несколько подзадач.",
            },
            {
              title: "Синтез",
              icon: "🔗",
              color: "blue",
              description:
                "Объединение отдельных элементов (фактов, идей, понятий) в единое целостное представление.",
              example:
                "После изучения различных видов геометрических фигур ученик понимает, что все они являются частными случаями более общего понятия — многоугольник.",
            },
            {
              title: "Сравнение",
              icon: "⚖️",
              color: "green",
              description:
                "Оценка сходств и различий между объектами, явлениями, идеями или концепциями.",
              example:
                "Сравнивая дроби 1/2 и 1/3, ученик определяет, какая из них больше, анализируя их числители и знаменатели.",
            },
            {
              title: "Обобщение",
              icon: "📊",
              color: "purple",
              description:
                "Формирование общих выводов и закономерностей на основе конкретных примеров и частных случаев.",
              example:
                "Решив несколько задач на нахождение площади прямоугольника, ученик формулирует правило: 'Площадь = длина × ширина'.",
            },
            {
              title: "Классификация",
              icon: "📂",
              color: "yellow",
              description:
                "Группировка объектов или явлений по определенным признакам или критериям.",
              example:
                "Классификация треугольников по углам (остроугольный, прямоугольный, тупоугольный) или по сторонам (равносторонний, равнобедренный, разносторонний).",
            },
            {
              title: "Абстрагирование",
              icon: "💭",
              color: "indigo",
              description:
                "Выделение существенных признаков объекта, игнорируя несущественные детали.",
              example:
                "При изучении понятия 'процент' ученик понимает, что процент — это просто доля от целого, независимо от конкретных товаров или услуг.",
            },
            {
              title: "Причинно-следственные связи",
              icon: "🔄",
              color: "pink",
              description:
                "Определение взаимосвязей между событиями, явлениями и действиями.",
              example:
                "Ученик понимает, что если увеличить скорость автомобиля, то время, затраченное на преодоление определенного расстояния, сократится.",
            },
          ].map((component, index) => (
            <div
              key={index}
              className={`bg-${component.color}-50 border-l-4 border-${component.color}-500 p-6 rounded-r-lg`}
            >
              <h5
                className={`text-xl font-bold text-${component.color}-800 mb-3 flex items-center gap-3`}
              >
                <span className="text-2xl">{component.icon}</span>
                {component.title}
              </h5>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {component.description}
              </p>
              <div
                className={`bg-white p-4 rounded-lg border border-${component.color}-200`}
              >
                <p
                  className={`text-sm font-medium text-${component.color}-800 mb-2`}
                >
                  💡 Пример:
                </p>
                <p className="text-sm text-gray-600">{component.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Значение для обучения */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200">
        <h4 className="text-2xl font-bold text-emerald-800 mb-6 text-center flex items-center justify-center gap-3">
          🎓 Значение для успешного обучения
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl text-white">📐</span>
            </div>
            <h5 className="font-bold text-emerald-800">Понимание формул</h5>
            <p className="text-sm text-gray-600">
              Не просто заучивание, а понимание логики вывода и применения в
              различных ситуациях
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl text-white">🧩</span>
            </div>
            <h5 className="font-bold text-emerald-800">Решение задач</h5>
            <p className="text-sm text-gray-600">
              Анализ сложных условий, выделение ключевых данных и синтез для
              правильного решения
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl text-white">🤔</span>
            </div>
            <h5 className="font-bold text-emerald-800">Критическое мышление</h5>
            <p className="text-sm text-gray-600">
              Оценка достоверности информации, выявление ошибок и формирование
              обоснованных выводов
            </p>
          </div>
        </div>
      </div>

      {/* Роль в повседневной жизни */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
        <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-3">
          🌟 Роль в повседневной жизни
        </h4>
        <p className="text-center text-gray-700 mb-6 text-lg">
          Логическое мышление — важнейший инструмент для успешной адаптации в
          современном мире
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h5 className="font-bold text-blue-800 mb-3">Принятие решений</h5>
            <p className="text-sm text-gray-600">
              Анализ вариантов, оценка последствий, выбор оптимального решения —
              от покупок до планирования бюджета
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h5 className="font-bold text-blue-800 mb-3">Решение проблем</h5>
            <p className="text-sm text-gray-600">
              Выявление причин проблемы, анализ возможных решений, оценка
              эффективности
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h5 className="font-bold text-blue-800 mb-3">Оценка информации</h5>
            <p className="text-sm text-gray-600">
              Отличение фактов от фейков, анализ аргументов, выявление
              манипуляций в эпоху информационного перенасыщения
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMethodicalPrinciplesContent = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
      {/* Заголовок */}
      <div className="text-center space-y-4 border-b pb-6">
        <h3 className="text-3xl font-bold text-indigo-800 flex items-center justify-center gap-3">
          🎯 Методические принципы формирования логического мышления
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Чтобы эффективно развивать логическое мышление у шестиклассников,
          необходимо придерживаться определенных{" "}
          <strong className="text-indigo-700">методических принципов</strong>,
          которые будут направлять вашу педагогическую деятельность. Эти
          принципы не являются чем-то новым и революционным, но их{" "}
          <em>осознанное применение</em> значительно повышает эффективность
          обучения.
        </p>
      </div>

      {/* Принципы */}
      <div className="space-y-8">
        {[
          {
            title: "Принцип систематичности и последовательности",
            icon: "🔄",
            color: "blue",
            description:
              "Обучение должно быть организовано в логической последовательности, где каждый новый материал основывается на ранее усвоенном.",
            details:
              "Это означает, что необходимо начинать с простых понятий и постепенно переходить к более сложным, убедившись, что ученики прочно усвоили предыдущий материал. Такой подход помогает учащимся лучше понимать и запоминать информацию, а также выстраивать логические связи между разными темами.",
            example:
              "При изучении темы «Делимость чисел» не следует сразу переходить к признакам делимости на 7 или 11. Сначала необходимо убедиться, что ученики хорошо понимают признаки делимости на 2, 3, 5, 9 и 10. Затем можно перейти к более сложным признакам, объясняя, как они связаны с ранее изученными.",
            keyWords: [
              "логическая последовательность",
              "от простого к сложному",
              "прочное усвоение",
            ],
          },
          {
            title: "Принцип наглядности и доступности",
            icon: "👁️",
            color: "green",
            description:
              "Использование наглядных материалов делает обучение более доступным и понятным, особенно для шестиклассников.",
            details:
              "Визуализация помогает учащимся лучше усваивать абстрактные концепции, устанавливать связи между понятиями и запоминать информацию. У шестиклассников еще не полностью сформировано абстрактное мышление, поэтому наглядность критически важна.",
            example:
              "При изучении темы «Дроби» можно использовать наглядные модели: разрезать пиццу на равные части, использовать полоски бумаги, разделить круг на сектора. Это поможет ученикам лучше понять, что такое дробь, как сравнивать дроби и выполнять действия с ними.",
            keyWords: [
              "графики и диаграммы",
              "модели и схемы",
              "визуализация",
              "интерактивные чертежи",
            ],
          },
          {
            title: "Принцип проблемности и активности",
            icon: "🧩",
            color: "orange",
            description:
              "Создание проблемных ситуаций, требующих активного участия учащихся, способствует развитию их логического мышления.",
            details:
              "Учащиеся должны быть вовлечены в процесс решения задач, а не просто пассивно воспринимать информацию. Стимулируйте их к поиску новых решений, выдвижению гипотез и обоснованию своих выводов. Важно не просто давать готовые решения, а подводить учеников к самостоятельному открытию новых знаний.",
            example:
              "Вместо того чтобы просто рассказывать, как решать задачи на проценты, можно предложить ученикам проблемную ситуацию: «В магазине объявили скидку 20% на все товары. Сколько будет стоить ваша любимая игрушка после скидки?»",
            keyWords: [
              "проблемные ситуации",
              "активное участие",
              "самостоятельное открытие",
              "выдвижение гипотез",
            ],
          },
          {
            title: "Принцип дифференцированного подхода",
            icon: "👥",
            color: "purple",
            description:
              "Учет индивидуальных особенностей и потребностей учащихся позволяет адаптировать методы обучения к каждому ученику.",
            details:
              "Это может включать задачи разного уровня сложности и индивидуальные задания, использование различных форм работы (индивидуальная, групповая, парная) и темп обучения. Каждый ученик должен работать в зоне своего ближайшего развития.",
            example:
              "При изучении темы «Решение уравнений» одним ученикам можно предложить простые уравнения, требующие выполнения одного-двух действий, а другим — более сложные уравнения, включающие дроби, скобки и несколько переменных.",
            keyWords: [
              "индивидуальные особенности",
              "разный уровень сложности",
              "зона ближайшего развития",
              "адаптация методов",
            ],
          },
          {
            title: "Принцип связи теории с практикой",
            icon: "🌍",
            color: "teal",
            description:
              "Связь теоретических знаний с практическими задачами помогает учащимся увидеть реальное применение математики.",
            details:
              "Это может быть реализовано через проекты, эксперименты, практические занятия и решение задач, связанных с реальными ситуациями. Важно показывать ученикам, что математика — это не просто набор абстрактных правил и формул, а инструмент для решения практических задач.",
            example:
              "После изучения темы «Масштаб» можно предложить ученикам проект «Составление плана своей комнаты в масштабе». Можно предложить рассчитать стоимость ремонта комнаты, вычислив количество необходимых материалов.",
            keyWords: [
              "реальное применение",
              "проекты и эксперименты",
              "практические задачи",
              "связь с жизнью",
            ],
          },
        ].map((principle, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-${principle.color}-50 to-${principle.color}-100 rounded-xl border-l-4 border-${principle.color}-500 p-8 shadow-md hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-16 h-16 bg-${principle.color}-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0`}
              >
                {principle.icon}
              </div>
              <div className="flex-1">
                <h4
                  className={`text-2xl font-bold text-${principle.color}-800 mb-3`}
                >
                  {principle.title}
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {principle.description}
                </p>
              </div>
            </div>

            {/* Подробное описание */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h5
                  className={`text-lg font-bold text-${principle.color}-800 mb-3 flex items-center gap-2`}
                >
                  <Icon name="Info" size={20} />
                  Подробное описание
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  {principle.details}
                </p>
              </div>

              {/* Ключевые слова */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h5
                  className={`text-lg font-bold text-${principle.color}-800 mb-3 flex items-center gap-2`}
                >
                  <Icon name="Tag" size={20} />
                  Ключевые понятия
                </h5>
                <div className="flex flex-wrap gap-2">
                  {principle.keyWords.map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className={`px-3 py-1 bg-${principle.color}-100 text-${principle.color}-800 rounded-full text-sm font-medium border border-${principle.color}-200`}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              {/* Практический пример */}
              <div
                className={`bg-gradient-to-r from-${principle.color}-50 to-white p-6 rounded-lg border border-${principle.color}-200 shadow-sm`}
              >
                <h5
                  className={`text-lg font-bold text-${principle.color}-800 mb-3 flex items-center gap-2`}
                >
                  <Icon name="Lightbulb" size={20} />
                  💡 Практический пример
                </h5>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 leading-relaxed italic">
                    "{principle.example}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Заключение */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200 shadow-md">
        <h4 className="text-2xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center gap-3">
          ⭐ Ключевые моменты для успешного применения
        </h4>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h5 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <Icon name="Target" size={20} />
              Цель применения принципов
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>
                  Создание благоприятной среды для развития логического мышления
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Стимулирование познавательной активности учеников</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Повышение интереса к предмету</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Достижение высоких результатов в обучении</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <h5 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <Icon name="Award" size={20} />
              Долгосрочные результаты
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">🎯</span>
                <span>Развитие критического мышления</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">🎯</span>
                <span>Повышение самостоятельности учеников</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">🎯</span>
                <span>Формирование уверенности в себе</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">🎯</span>
                <span>Подготовка к успешному будущему</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-200">
          <p className="text-center text-gray-800 font-medium text-lg">
            🌟 <strong className="text-purple-700">Помните:</strong> соблюдение
            этих методических принципов — это важная{" "}
            <em>инвестиция в будущее</em> ваших учеников, которая поможет им
            стать
            <strong className="text-indigo-700">
              успешными и уверенными в себе людьми
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );

  const renderAgeCharacteristicsContent = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
      {/* Заголовок */}
      <div className="text-center space-y-4 border-b pb-6">
        <h3 className="text-3xl font-bold text-purple-800 flex items-center justify-center gap-3">
          👥 Возрастные особенности развития логического мышления у
          шестиклассников
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Понимание особенностей развития мышления в{" "}
          <strong className="text-purple-700">11–12 лет</strong> является
          ключевым для эффективного планирования и проведения уроков математики.
          Шестой класс — это важный этап перехода от более наглядного и
          конкретного мышления к более абстрактному и логическому.
        </p>
      </div>

      {/* Характерные черты мышления */}
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-gray-800 text-center flex items-center justify-center gap-3">
          🧠 Характерные черты мышления детей 11-12 лет
        </h4>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
          <h5 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            🔄 Переход к абстрактно-логическому мышлению
          </h5>
          <p className="text-gray-700 leading-relaxed mb-4">
            В возрасте 11–12 лет происходит переход от{" "}
            <em>конкретно-образного</em> мышления к{" "}
            <strong className="text-purple-700">абстрактно-логическому</strong>.
            Это означает, что ученики постепенно учатся оперировать не только
            конкретными предметами и образами, но и абстрактными понятиями и
            идеями.
          </p>
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <p className="text-sm text-purple-800 font-medium mb-2">
              💡 Практический пример:
            </p>
            <p className="text-sm text-gray-600">
              Если раньше ученику было сложно понять, что такое «площадь», пока
              он не видел конкретный прямоугольник, то теперь он может понимать,
              что площадь — это характеристика любой плоской фигуры.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <h5 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
              🎯 Понимание абстрактных понятий
            </h5>
            <p className="text-gray-700 leading-relaxed mb-3">
              Учащиеся начинают лучше понимать{" "}
              <strong className="text-blue-700">
                абстрактные понятия и идеи
              </strong>
              . Вместо простого заучивания формул, они могут понять логику их
              построения.
            </p>
            <div className="bg-white p-3 rounded border border-blue-200">
              <p className="text-xs text-blue-800 font-medium">🔍 Пример:</p>
              <p className="text-xs text-gray-600 mt-1">
                Шестиклассник может понять, почему формула площади
                прямоугольника именно такая, представив разбиение на квадратики.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h5 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
              🤔 Гипотетические рассуждения
            </h5>
            <p className="text-gray-700 leading-relaxed mb-3">
              Способность рассуждать о <em>гипотетических ситуациях</em> и
              делать выводы на основе логических рассуждений. Понимают фразы:{" "}
              <strong className="text-green-700">
                «что, если...?», «допустим...?»
              </strong>
            </p>
            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-xs text-green-800 font-medium">🎲 Пример:</p>
              <p className="text-xs text-gray-600 mt-1">
                «Если увеличить каждую сторону квадрата в 2 раза, как изменится
                площадь?» → Логический вывод: увеличится в 4 раза.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
          <h5 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
            🪞 Развитие рефлексии
          </h5>
          <p className="text-gray-700 leading-relaxed">
            Развивается способность к{" "}
            <strong className="text-orange-700">самоанализу и рефлексии</strong>
            . Дети начинают осознавать свои мыслительные процессы, понимать, как
            они решают задачи, и анализировать свои ошибки. Это важный шаг к
            развитию <em>умения учиться</em>.
          </p>
        </div>
      </div>

      {/* Возможности и ограничения */}
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-gray-800 text-center flex items-center justify-center gap-3">
          ⚖️ Возможности и ограничения развития
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Возможности */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200">
            <h5 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              ✅ Возможности
            </h5>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h6 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  🎯 Критическое мышление
                </h6>
                <p className="text-sm text-gray-700 mb-2">
                  Ученики становятся более критичными к информации, задают
                  вопросы, ищут доказательства.
                </p>
                <div className="text-xs text-emerald-800 bg-emerald-50 p-2 rounded">
                  <strong>Пример:</strong> «Все чётные числа делятся на 4» → «А
                  как насчёт числа 6?»
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h6 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  💭 Абстрагирование
                </h6>
                <p className="text-sm text-gray-700 mb-2">
                  Способность оперировать абстрактными понятиями: «множество»,
                  «отношение», «функция».
                </p>
                <div className="text-xs text-emerald-800 bg-emerald-50 p-2 rounded">
                  <strong>Пример:</strong> Понимание, что все числа, делящиеся
                  на 2, образуют множество четных чисел.
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h6 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  🔍 Анализ и синтез
                </h6>
                <p className="text-sm text-gray-700">
                  Улучшение навыков анализа сложных задач и синтеза решений.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h6 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  🧩 Нестандартные задачи
                </h6>
                <p className="text-sm text-gray-700">
                  Возрастает интерес к головоломкам и творческому подходу.
                </p>
              </div>
            </div>
          </div>

          {/* Ограничения */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
            <h5 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
              ⚠️ Ограничения
            </h5>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h6 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  😤 Эмоциональная нестабильность
                </h6>
                <p className="text-sm text-gray-700 mb-2">
                  Гормональные изменения влияют на концентрацию и логическое
                  мышление.
                </p>
                <div className="text-xs text-red-800 bg-red-50 p-2 rounded">
                  <strong>💡 Рекомендация:</strong> Создавайте атмосферу
                  поддержки, давайте возможность выражать эмоции.
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h6 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  👥 Влияние сверстников
                </h6>
                <p className="text-sm text-gray-700 mb-2">
                  Мнение сверстников может приводить к конформизму и нежеланию
                  высказывать своё мнение.
                </p>
                <div className="text-xs text-red-800 bg-red-50 p-2 rounded">
                  <strong>💡 Рекомендация:</strong> Поощряйте дискуссии и
                  самостоятельность мышления.
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h6 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  📈 Недостаток опыта
                </h6>
                <p className="text-sm text-gray-700 mb-2">
                  Трудности при решении задач, требующих длительного анализа.
                </p>
                <div className="text-xs text-red-800 bg-red-50 p-2 rounded">
                  <strong>💡 Рекомендация:</strong> Начинайте с простых задач,
                  постепенно усложняя.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Индивидуальные особенности */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-200">
        <h4 className="text-2xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center gap-3">
          🎭 Индивидуальные особенности развития мышления
        </h4>
        <p className="text-center text-gray-700 mb-6 text-lg">
          <strong className="text-indigo-700">Важно помнить:</strong> каждый
          ученик уникален. Скорость и особенности развития логического мышления
          могут существенно различаться.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-indigo-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h5 className="font-bold text-indigo-800">Уровень интеллекта</h5>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Ученики с более высоким уровнем интеллекта быстрее усваивают новые
              понятия.
            </p>
            <div className="bg-indigo-50 p-3 rounded text-xs">
              <strong className="text-indigo-800">💡 Решение:</strong>{" "}
              Дифференцированные задания для разных уровней подготовки.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h5 className="font-bold text-indigo-800">Предыдущий опыт</h5>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Ученики с большим опытом в решении логических задач справляются
              лучше.
            </p>
            <div className="bg-indigo-50 p-3 rounded text-xs">
              <strong className="text-indigo-800">💡 Решение:</strong>{" "}
              Повторение и закрепление материала разными методами.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-indigo-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h5 className="font-bold text-indigo-800">Мотивация</h5>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Мотивированные ученики активнее развивают логическое мышление.
            </p>
            <div className="bg-indigo-50 p-3 rounded text-xs">
              <strong className="text-indigo-800">💡 Решение:</strong> Игровые
              элементы, связь с реальной жизнью.
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg border border-purple-200">
          <p className="text-center text-gray-800 font-medium">
            🌟 <strong className="text-purple-700">Помните:</strong> развитие
            логического мышления — это постепенный процесс, требующий
            систематической работы и индивидуального подхода к каждому ученику.
            Учитывая возрастные особенности и индивидуальные различия, вы
            сможете создать оптимальные условия для развития логического
            мышления ваших шестиклассников.
          </p>
        </div>
      </div>
    </div>
  );

  const methodologyContent = [
    {
      title: "Глава 1. Теоретические основы формирования логического мышления",
      subtitle: "1.1. Что такое логическое мышление?",
      content: [
        "Логическое мышление — это фундамент рационального познания мира, основа принятия взвешенных решений и эффективного решения проблем. Это не просто заучивание правил, а умение думать последовательно, обоснованно и критически.",
        "",
        "Логическое мышление в психологии: это сложный мыслительный процесс, при котором человек активно использует логические понятия и конструкции для обработки информации. Ему свойственны доказательность и рассудительность, то есть каждый шаг мыслительного процесса опирается на обоснованные аргументы.",
        "",
        "Логическое мышление в педагогике: это целенаправленный мыслительный процесс, который с помощью логических операций позволяет установить причинно-следственные связи между явлениями, раскрыть объективные закономерности мира и понять их сущность.",
        "",
        "Основные компоненты логического мышления:",
        "• Анализ — разделение сложной информации на простые составные части",
        "• Синтез — объединение отдельных элементов в единое целостное представление",
        "• Сравнение — оценка сходств и различий между объектами и явлениями",
        "• Обобщение — формирование общих выводов на основе конкретных примеров",
        "• Классификация — группировка объектов по определенным признакам",
        "• Абстрагирование — выделение существенных признаков, игнорируя несущественные",
        "• Установление причинно-следственных связей — определение взаимосвязей между событиями",
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

  const handleLessonDownload = (lessonIndex: number, lessonTitle: string) => {
    // Прямые ссылки на файлы из Яндекс.Диска
    const fileUrls = [
      "https://disk.yandex.ru/i/1YUQxyW6bI8Bkw", // Занятие 1
      "https://disk.yandex.ru/i/LeaXSMuDERWwBA", // Занятие 2
      "https://disk.yandex.ru/i/D3_7ZEjRfett5g", // Занятие 3
      "https://disk.yandex.ru/i/IYQ5qwaO0p0fDw", // Занятие 4
      "https://disk.yandex.ru/i/YMc4e94KZnja9g", // Занятие 5
      "https://disk.yandex.ru/i/FY5yq7KISMRxuA", // Занятие 6
      "https://disk.yandex.ru/i/AovtEUtIndkGNA", // Занятие 7
      "https://disk.yandex.ru/i/E2M8xirs-h5YaA", // Занятие 8
      "https://disk.yandex.ru/i/Ra34d-txs1CJwg", // Занятие 9
      "https://disk.yandex.ru/i/1mpOH3v_aaB0cQ", // Занятие 10
      "https://disk.yandex.ru/i/1LcqhCPjv3ReSg", // Занятие 11
      "https://disk.yandex.ru/i/3EnPXtjEkMqfpg", // Занятие 12
      "https://disk.yandex.ru/i/pVft5VejS1v6gQ", // Занятие 13
      "https://disk.yandex.ru/i/CbjigS6_x4iHLg", // Занятие 14
      "https://disk.yandex.ru/i/hLxHQb9fUByLkQ", // Занятие 15
      "https://disk.yandex.ru/i/gITfFh1F2j0T6A", // Занятие 16
      "https://disk.yandex.ru/i/SHg60wxdaoLoKA", // Занятие 17
      "https://disk.yandex.ru/i/YWaoz2M_968m7Q", // Занятие 18
      "https://disk.yandex.ru/i/8cU-_Yt_15f2aQ", // Занятие 19
      "https://disk.yandex.ru/i/JvOGaIG74OJ37A", // Занятие 20
      "https://disk.yandex.ru/i/Bj1TfSMnRheYuw", // Занятие 21
      "https://disk.yandex.ru/i/UpvhpZowkutKzg", // Занятие 22
      "https://disk.yandex.ru/i/-J9i0V-8hpVvkg", // Занятие 23
      "https://disk.yandex.ru/i/2WbyaLiJ2YULrg", // Занятие 24
      "https://disk.yandex.ru/i/lvhDjUkVljGHrQ", // Занятие 25
      "https://disk.yandex.ru/i/Mvla27-mo1ATAQ", // Занятие 26
      "https://disk.yandex.ru/i/E784SY0v2_Tz_A", // Занятие 27
      "https://disk.yandex.ru/i/STiT84ah0bF4lA", // Занятие 28
      "https://disk.yandex.ru/i/hx1NU234P0NoVQ", // Занятие 29
      "https://disk.yandex.ru/i/6g5ms5_bUHCBHQ", // Занятие 30
    ];

    // Проверяем, что индекс в пределах массива
    if (lessonIndex >= 0 && lessonIndex < fileUrls.length) {
      const fileUrl = fileUrls[lessonIndex];

      // Создаем ссылку для скачивания
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Добавляем в DOM, кликаем и удаляем
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error(`Файл для занятия ${lessonIndex + 1} не найден`);
    }
  };

  const lessonPlans = [
    {
      title: "Занятие 1: Введение в логическое мышление",
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
      title: "Занятие 2: Анализ и синтез",
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
    {
      title: "Занятие 3: Сравнение",
      duration: "45 минут",
      objectives: [
        "Развивать навыки выявления сходств и различий между объектами и явлениями",
        "Научить использовать сравнение для решения задач",
        "Развить внимательность и наблюдательность",
      ],
      activities: [
        "Игры на сравнение объектов (10 минут)",
        "Решение задач на сравнение числовых выражений (15 минут)",
        "Сравнение геометрических фигур (10 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 4: Обобщение",
      duration: "45 минут",
      objectives: [
        "Развить умение делать общие выводы на основе конкретных примеров",
        "Научить находить общие признаки у разных объектов",
      ],
      activities: [
        "Игры на обобщение понятий (10 минут)",
        "Решение задач на обобщение числовых закономерностей (15 минут)",
        "Формулирование общих правил на основе примеров (10 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 5: Классификация",
      duration: "45 минут",
      objectives: [
        "Развивать умение группировать объекты по определенным признакам",
        "Научить создавать классификации на основе различных критериев",
      ],
      activities: [
        "Игры на классификацию объектов (10 минут)",
        "Классификация геометрических фигур по свойствам (15 минут)",
        "Классификация чисел по признакам делимости (10 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 6: Абстрагирование",
      duration: "45 минут",
      objectives: [
        "Развивать умение выделять существенные признаки, игнорируя несущественные",
        "Научить использовать абстрагирование для упрощения задач",
      ],
      activities: [
        "Игры на выделение существенных признаков (10 минут)",
        "Решение задач, требующих абстрагирования от конкретных деталей (15 минут)",
        "Упрощение математических выражений (10 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 7: Установление причинно-следственных связей",
      duration: "45 минут",
      objectives: [
        "Развить умение определять взаимосвязи между событиями и явлениями",
        "Научить строить логические цепочки",
      ],
      activities: [
        "Анализ причин и следствий в жизненных ситуациях (10 минут)",
        "Решение задач на установление причинно-следственных связей (15 минут)",
        "Построение логических схем и графов (10 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 8: Задачи на установление соответствия",
      duration: "45 минут",
      objectives: [
        "Научить решать задачи, в которых требуется установить соответствие между разными элементами",
      ],
      activities: [
        "Разбор примеров задач на установление соответствия (15 минут)",
        "Решение задач с использованием таблиц и схем (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 9: Задачи на правду и ложь",
      duration: "45 минут",
      objectives: [
        "Научить анализировать утверждения и определять, какие из них правдивы, а какие ложны",
      ],
      activities: [
        "Разбор примеров задач на правду и ложь (15 минут)",
        "Решение задач с использованием логических рассуждений (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 10: Задачи на взвешивание",
      duration: "45 минут",
      objectives: [
        "Научить решать задачи, связанные с использованием весов для определения веса предметов",
      ],
      activities: [
        "Разбор примеров задач на взвешивание (15 минут)",
        "Решение задач с использованием логических схем и алгоритмов (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 11: Задачи на переливание",
      duration: "45 минут",
      objectives: [
        "Научить решать задачи, связанные с переливанием жидкости из одних сосудов в другие",
      ],
      activities: [
        "Разбор примеров задач на переливание (15 минут)",
        "Решение задач с использованием таблиц и схем (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 12: Комбинаторные задачи",
      duration: "45 минут",
      objectives: [
        "Научить решать задачи, связанные с подсчётом различных комбинаций",
      ],
      activities: [
        "Разбор примеров комбинаторных задач (15 минут)",
        "Решение задач с использованием формул комбинаторики (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 13: Математические понятия и определения",
      duration: "45 минут",
      objectives: [
        "Научить понимать и правильно формулировать математические понятия и определения",
      ],
      activities: [
        "Анализ определений математических понятий (15 минут)",
        "Формулирование собственных определений (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 14: Доказательства в математике",
      duration: "45 минут",
      objectives: [
        "Научить строить логические цепочки для доказательства математических утверждений",
      ],
      activities: [
        "Разбор примеров доказательств в математике (15 минут)",
        "Самостоятельное доказательство математических утверждений (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 15: Решение текстовых задач",
      duration: "45 минут",
      objectives: [
        "Научить анализировать условия текстовых задач и составлять уравнения для их решения",
      ],
      activities: [
        "Анализ условий текстовых задач (15 минут)",
        "Составление уравнений и решение задач (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 16: Геометрические задачи",
      duration: "45 минут",
      objectives: [
        "Развитие пространственного мышления и умения решать геометрические задачи",
      ],
      activities: [
        "Решение задач на построение геометрических фигур (15 минут)",
        "Решение задач на вычисление площадей и объемов (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 17: Принятие решений",
      duration: "45 минут",
      objectives: [
        "Научить анализировать различные варианты решений и оценивать их последствия",
      ],
      activities: [
        "Анализ реальных жизненных ситуаций, требующих принятия решений (15 минут)",
        "Выбор оптимальных решений и обоснование своего выбора (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 18: Критическое мышление",
      duration: "45 минут",
      objectives: ["Научить проверять информацию и выявлять ложь"],
      activities: [
        "Анализ примеров дезинформации и манипуляций (15 минут)",
        "Поиск достоверной информации и оценка ее правдивости (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 19: Развитие аргументации",
      duration: "45 минут",
      objectives: ["Научиться убеждать и отстаивать свою точку зрения"],
      activities: [
        "Анализ примеров аргументированных выступлений (15 минут)",
        "Упражнения на развитие умения строить аргументы и контраргументы (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 20: Решение сложных логических задач",
      duration: "45 минут",
      objectives: [
        "Применить все полученные знания и навыки для решения сложных логических задач",
      ],
      activities: [
        "Решение комплексных логических задач (35 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: 'Занятие 21: Игра "Математический бой"',
      duration: "45 минут",
      objectives: [
        "Закрепление знаний математических понятий",
        "Тренировка логического мышления и умения быстро решать задачи",
      ],
      activities: [
        "Разделение класса на команды (5 минут)",
        "Задача вопросов по математике или предложений задач другой команде (30 минут)",
        "Подсчет очков и обсуждение результатов (10 минут)",
      ],
    },
    {
      title: "Занятие 22: Решение текстовых задач (углубленный уровень)",
      duration: "45 минут",
      objectives: [
        "Научить анализировать условия сложных текстовых задач",
        "Составлять уравнения для их решения",
      ],
      activities: [
        "Анализ условий текстовых задач (15 минут)",
        "Составление уравнений и решение задач (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 23: Геометрические задачи (углубленный уровень)",
      duration: "45 минут",
      objectives: [
        "Развитие пространственного мышления",
        "Умение решать сложные геометрические задачи",
      ],
      activities: [
        "Решение задач на построение геометрических фигур (15 минут)",
        "Решение задач на вычисление площадей и объемов (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 24: Игра «Танграм»",
      duration: "45 минут",
      objectives: [
        "Развитие пространственного мышления",
        "Умение анализировать формы и создавать новые фигуры",
      ],
      activities: [
        "Объяснение правил игры и демонстрация (10 минут)",
        "Игра в группах (25 минут)",
        "Обсуждение результатов и выводов (10 минут)",
      ],
    },
    {
      title: "Занятие 25: Принятие решений (углубленный уровень)",
      duration: "45 минут",
      objectives: [
        "Научить анализировать различные варианты решений",
        "Оценивать последствия принятых решений",
      ],
      activities: [
        "Анализ реальных жизненных ситуаций, требующих принятия решений (15 минут)",
        "Выбор оптимальных решений и обоснование своего выбора (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 26: Критическое мышление (углубленный уровень)",
      duration: "45 минут",
      objectives: ["Научить проверять информацию и выявлять дезинформацию"],
      activities: [
        "Анализ примеров дезинформации и манипуляций (15 минут)",
        "Поиск достоверной информации и оценка ее правдивости (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: 'Занятие 27: Игра "Дебаты" (упрощенная версия)',
      duration: "45 минут",
      objectives: [
        "Развитие критического мышления",
        "Умение аргументировать свою точку зрения и убеждать других",
      ],
      activities: [
        "Выбор темы для дебатов (5 минут)",
        "Разделение класса на две команды: «за» и «против» (5 минут)",
        "Подготовка аргументов (20 минут)",
        "Дебаты и обсуждение (15 минут)",
      ],
    },
    {
      title: "Занятие 28: Развитие аргументации (углубленный уровень)",
      duration: "45 минут",
      objectives: ["Научиться убеждать и отстаивать свою точку зрения"],
      activities: [
        "Анализ примеров аргументированных выступлений (15 минут)",
        "Упражнения на развитие умения строить аргументы и контраргументы (20 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: "Занятие 29: Решение сложных логических задач (итоговый)",
      duration: "45 минут",
      objectives: [
        "Применить все полученные знания и навыки для решения сложных логических задач",
      ],
      activities: [
        "Решение комплексных логических задач (35 минут)",
        "Рефлексия и домашнее задание (10 минут)",
      ],
    },
    {
      title: 'Занятие 30: Игра "Что? Где? Когда?" (Математическая версия)',
      duration: "45 минут",
      objectives: [
        "Закрепление всех полученных знаний и навыков",
        "Развитие командной работы и логического мышления",
      ],
      activities: [
        "Объяснение правил игры (5 минут)",
        "Игра в команды: решение логических вопросов и задач (35 минут)",
        "Подведение итогов курса (5 минут)",
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
                {/* Раздел 1.1 - Что такое логическое мышление */}
                <Card
                  key="logical-thinking"
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500"
                  onClick={() => handleSectionClick("logical-thinking")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <Icon
                          name="Brain"
                          size={20}
                          className="text-indigo-600"
                        />
                      </div>
                      1.1. Что такое логическое мышление?
                      <Icon
                        name={
                          expandedSection === "logical-thinking"
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        size={16}
                        className="ml-auto text-gray-400"
                      />
                    </CardTitle>
                    <CardDescription>
                      Основы логического мышления в психологии и педагогике
                    </CardDescription>
                  </CardHeader>
                </Card>
                {expandedSection === "logical-thinking" && (
                  <div className="mt-4 animate-fade-in">
                    {renderLogicalThinkingContent()}
                  </div>
                )}

                {/* Раздел 1.2 - Возрастные особенности */}
                <Card
                  key="age-characteristics"
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500"
                  onClick={() => handleSectionClick("age-characteristics")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <Icon
                          name="Users"
                          size={20}
                          className="text-indigo-600"
                        />
                      </div>
                      1.2. Возрастные особенности развития логического мышления
                      у шестиклассников
                      <Icon
                        name={
                          expandedSection === "age-characteristics"
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        size={16}
                        className="ml-auto text-gray-400"
                      />
                    </CardTitle>
                    <CardDescription>
                      Особенности мышления детей 11-12 лет и их влияние на
                      обучение
                    </CardDescription>
                  </CardHeader>
                </Card>
                {expandedSection === "age-characteristics" && (
                  <div className="mt-4 animate-fade-in">
                    {renderAgeCharacteristicsContent()}
                  </div>
                )}

                {/* Раздел 1.3 - Методические принципы */}
                <Card
                  key="methodical-principles"
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500"
                  onClick={() => handleSectionClick("methodical-principles")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <Icon
                          name="Target"
                          size={20}
                          className="text-indigo-600"
                        />
                      </div>
                      1.3. Методические принципы формирования логического
                      мышления
                      <Icon
                        name={
                          expandedSection === "methodical-principles"
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        size={16}
                        className="ml-auto text-gray-400"
                      />
                    </CardTitle>
                    <CardDescription>
                      Основные принципы эффективного развития логического
                      мышления
                    </CardDescription>
                  </CardHeader>
                </Card>
                {expandedSection === "methodical-principles" && (
                  <div className="mt-4 animate-fade-in">
                    {renderMethodicalPrinciplesContent()}
                  </div>
                )}
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
                {/* Раздел 2.1 - Использование проблемных ситуаций */}
                <Card
                  key="problem-situations"
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500"
                  onClick={() => handleSectionClick("problem-situations")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <Icon
                          name="AlertTriangle"
                          size={20}
                          className="text-emerald-600"
                        />
                      </div>
                      2.1. Использование проблемных ситуаций
                      <Icon
                        name={
                          expandedSection === "problem-situations"
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        size={16}
                        className="ml-auto text-gray-400"
                      />
                    </CardTitle>
                    <CardDescription>
                      Методы создания и организации проблемных ситуаций для
                      развития логического мышления
                    </CardDescription>
                  </CardHeader>
                </Card>
                {expandedSection === "problem-situations" && (
                  <div className="mt-4 animate-fade-in">
                    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
                      {/* Заголовок */}
                      <div className="text-center space-y-4 border-b pb-6">
                        <h3 className="text-3xl font-bold text-emerald-800 flex items-center justify-center gap-3">
                          🧩 Использование проблемных ситуаций
                        </h3>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                          Проблемные ситуации — это специально сконструированные
                          задачи, которые требуют от учащихся
                          <strong className="text-emerald-700">
                            {" "}
                            логического анализа и самостоятельного поиска
                            решений
                          </strong>
                          . Они создают когнитивный диссонанс, стимулируя
                          активную мыслительную деятельность.
                        </p>
                      </div>

                      {/* Типы проблемных ситуаций */}
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-gray-800 text-center flex items-center justify-center gap-3">
                          🎯 Типы проблемных ситуаций
                        </h4>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                            <h5 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                              🌍 На основе реальных ситуаций
                            </h5>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              Задачи, связанные с повседневной жизнью учащихся,
                              которые требуют математического решения.
                            </p>
                            <div className="bg-white p-3 rounded border border-blue-200">
                              <p className="text-xs text-blue-800 font-medium">
                                💡 Пример:
                              </p>
                              <p className="text-xs text-gray-600 mt-1">
                                "Как справедливо разделить пиццу между друзьями,
                                если у всех разные аппетиты?"
                              </p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                            <h5 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                              🔢 На основе абстрактных концепций
                            </h5>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              Математические парадоксы и неожиданные результаты,
                              которые противоречат интуиции.
                            </p>
                            <div className="bg-white p-3 rounded border border-purple-200">
                              <p className="text-xs text-purple-800 font-medium">
                                🤔 Пример:
                              </p>
                              <p className="text-xs text-gray-600 mt-1">
                                "Почему при умножении отрицательных чисел
                                получается положительное?"
                              </p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                            <h5 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                              📚 На основе исторических фактов
                            </h5>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              Занимательные истории из жизни математиков и
                              исторические задачи.
                            </p>
                            <div className="bg-white p-3 rounded border border-orange-200">
                              <p className="text-xs text-orange-800 font-medium">
                                🏛️ Пример:
                              </p>
                              <p className="text-xs text-gray-600 mt-1">
                                "Как древние египтяне строили точные прямые углы
                                без современных инструментов?"
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Методика организации работы */}
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-gray-800 text-center flex items-center justify-center gap-3">
                          ⚙️ Методика организации работы с проблемными
                          ситуациями
                        </h4>

                        <div className="space-y-4">
                          {[
                            {
                              step: "1",
                              title: "Формулировка проблемы",
                              description:
                                "Четкое и понятное изложение проблемной ситуации, которая вызывает познавательный интерес",
                              details:
                                "Проблема должна быть сформулирована так, чтобы ученики почувствовали противоречие или неожиданность",
                              color: "red",
                              time: "5-7 минут",
                            },
                            {
                              step: "2",
                              title: "Актуализация знаний",
                              description:
                                "Повторение и систематизация уже известных учащимся фактов и методов",
                              details:
                                "Помогает ученикам понять, какие знания они могут использовать для решения проблемы",
                              color: "orange",
                              time: "8-10 минут",
                            },
                            {
                              step: "3",
                              title: "Генерация идей (мозговой штурм)",
                              description:
                                "Свободное высказывание всех возможных идей и гипотез без критики",
                              details:
                                "Важно создать атмосферу, где каждый ученик может высказать свою точку зрения",
                              color: "yellow",
                              time: "10-12 минут",
                            },
                            {
                              step: "4",
                              title: "Групповая работа",
                              description:
                                "Разделение класса на малые группы для детальной проработки идей",
                              details:
                                "Каждая группа разрабатывает один из предложенных подходов к решению",
                              color: "green",
                              time: "15-18 минут",
                            },
                            {
                              step: "5",
                              title: "Презентация решений",
                              description:
                                "Представление и обоснование найденных решений каждой группой",
                              details:
                                "Развивает навыки аргументации и публичного выступления",
                              color: "blue",
                              time: "8-10 минут",
                            },
                            {
                              step: "6",
                              title: "Рефлексия",
                              description:
                                "Анализ процесса решения, выводы и обобщения",
                              details:
                                "Помогает осознать использованные методы и зафиксировать новые знания",
                              color: "purple",
                              time: "5-7 минут",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`bg-gradient-to-r from-${item.color}-50 to-white p-6 rounded-lg border-l-4 border-${item.color}-500 shadow-md`}
                            >
                              <div className="flex items-start gap-4">
                                <div
                                  className={`w-12 h-12 bg-${item.color}-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
                                >
                                  {item.step}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h5
                                      className={`text-xl font-bold text-${item.color}-800`}
                                    >
                                      {item.title}
                                    </h5>
                                    <span
                                      className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-700 rounded-full text-xs font-medium`}
                                    >
                                      {item.time}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 mb-3 leading-relaxed">
                                    {item.description}
                                  </p>
                                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                                    <p className="text-sm text-gray-600 italic">
                                      💡 {item.details}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Практический пример */}
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg border border-indigo-200">
                        <h4 className="text-2xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center gap-3">
                          🚀 Практический пример проблемной ситуации
                        </h4>

                        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                          <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Icon
                              name="AlertCircle"
                              size={24}
                              className="text-red-600"
                            />
                            Проблемная ситуация: "Парадокс дня рождения"
                          </h5>
                          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
                            <p className="text-gray-800 leading-relaxed">
                              <strong>Вопрос:</strong> "В классе 25 учеников.
                              Как вы думаете, какова вероятность того, что у
                              двоих из них день рождения в один и тот же день?"
                            </p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h6 className="font-bold text-indigo-700">
                                Первичные гипотезы учеников:
                              </h6>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                  <span>"Очень маленькая, примерно 1-2%"</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  <span>
                                    "Около 10%, потому что класс небольшой"
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                  <span>"25/365 ≈ 7%"</span>
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h6 className="font-bold text-green-700">
                                Неожиданный результат:
                              </h6>
                              <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                                <p className="text-lg font-bold text-green-800 text-center">
                                  Вероятность составляет около 57%!
                                </p>
                                <p className="text-sm text-green-700 text-center mt-2">
                                  Это больше половины!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h6 className="font-bold text-gray-800 mb-3">
                            🎯 Педагогические цели данной проблемной ситуации:
                          </h6>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <Icon
                                  name="Target"
                                  size={16}
                                  className="text-blue-600 mt-0.5"
                                />
                                <span>Развитие интуиции о вероятности</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Icon
                                  name="Brain"
                                  size={16}
                                  className="text-purple-600 mt-0.5"
                                />
                                <span>Понимание комбинаторики</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Icon
                                  name="Calculator"
                                  size={16}
                                  className="text-green-600 mt-0.5"
                                />
                                <span>Навыки логических вычислений</span>
                              </li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <Icon
                                  name="Users"
                                  size={16}
                                  className="text-orange-600 mt-0.5"
                                />
                                <span>Групповое обсуждение гипотез</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Icon
                                  name="Lightbulb"
                                  size={16}
                                  className="text-yellow-600 mt-0.5"
                                />
                                <span>Критическое мышление</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Icon
                                  name="CheckCircle"
                                  size={16}
                                  className="text-indigo-600 mt-0.5"
                                />
                                <span>Проверка предположений</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Преимущества метода */}
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200">
                        <h4 className="text-2xl font-bold text-emerald-800 mb-6 text-center flex items-center justify-center gap-3">
                          ⭐ Преимущества использования проблемных ситуаций
                        </h4>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                              <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                <Icon name="Zap" size={18} />
                                Мотивация к обучению
                              </h5>
                              <p className="text-sm text-gray-700">
                                Создает интерес и желание найти решение,
                                активизирует познавательную деятельность
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                              <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                <Icon name="Users" size={18} />
                                Развитие коммуникации
                              </h5>
                              <p className="text-sm text-gray-700">
                                Стимулирует обсуждение, обмен мнениями,
                                развивает навыки аргументации
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                              <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                <Icon name="Brain" size={18} />
                                Глубокое понимание
                              </h5>
                              <p className="text-sm text-gray-700">
                                Знания, полученные через решение проблем,
                                усваиваются лучше и дольше сохраняются
                              </p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                              <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                <Icon name="Target" size={18} />
                                Развитие самостоятельности
                              </h5>
                              <p className="text-sm text-gray-700">
                                Учит принимать решения, брать ответственность за
                                свой выбор
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                              <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                <Icon name="Lightbulb" size={18} />
                                Творческое мышление
                              </h5>
                              <p className="text-sm text-gray-700">
                                Поощряет поиск нестандартных решений, развивает
                                креативность
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                              <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                                <Icon name="CheckCircle" size={18} />
                                Практические навыки
                              </h5>
                              <p className="text-sm text-gray-700">
                                Готовит к решению реальных жизненных задач и
                                проблем
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Раздел 2.2 - Решение логических задач */}
                <Card
                  key="logical-tasks"
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500"
                  onClick={() => handleSectionClick("logical-tasks")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <Icon
                          name="Puzzle"
                          size={20}
                          className="text-emerald-600"
                        />
                      </div>
                      2.2. Решение логических задач различных типов
                      <Icon
                        name={
                          expandedSection === "logical-tasks"
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        size={16}
                        className="ml-auto text-gray-400"
                      />
                    </CardTitle>
                    <CardDescription>
                      Классификация, примеры и методы решения логических задач
                    </CardDescription>
                  </CardHeader>
                </Card>
                {expandedSection === "logical-tasks" && (
                  <div className="mt-4 animate-fade-in">
                    <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
                      {/* Классификация логических задач */}
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
                        <h5 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                          📋 Классификация логических задач
                        </h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                              <Icon
                                name="Target"
                                size={16}
                                className="text-blue-600"
                              />
                              <span className="font-medium text-gray-800">
                                1. Задачи на соответствие
                              </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                              <Icon
                                name="ArrowRight"
                                size={16}
                                className="text-purple-600"
                              />
                              <span className="font-medium text-gray-800">
                                2. Задачи на последовательность
                              </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                              <Icon
                                name="Calculator"
                                size={16}
                                className="text-orange-600"
                              />
                              <span className="font-medium text-gray-800">
                                3. Математические головоломки
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                              <Icon
                                name="Layers"
                                size={16}
                                className="text-red-600"
                              />
                              <span className="font-medium text-gray-800">
                                4. Задачи на множества
                              </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                              <Icon
                                name="GitBranch"
                                size={16}
                                className="text-indigo-600"
                              />
                              <span className="font-medium text-gray-800">
                                5. Логические схемы
                              </span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                              <Icon
                                name="Zap"
                                size={16}
                                className="text-yellow-600"
                              />
                              <span className="font-medium text-gray-800">
                                6. Задачи на дедукцию
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Пример задачи на соответствие */}
                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h5 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                          🎯 Пример: Задача на соответствие
                        </h5>
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                          <p className="text-gray-800 font-medium mb-3">
                            <strong>Условие:</strong> Трое друзей — Петя, Вася и
                            Коля — живут в разных городах: Москва,
                            Санкт-Петербург и Киев. Определите, кто где живёт,
                            если известно:
                          </p>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• Петя не живёт в Москве</li>
                            <li>• Вася живёт в Москве</li>
                            <li>
                              • Коля не живёт в Москве и не в Санкт-Петербурге
                            </li>
                          </ul>
                        </div>

                        {/* Таблица решения */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                          <h6 className="text-lg font-bold text-gray-800 p-4 bg-gray-50 border-b">
                            📊 Таблица для решения:
                          </h6>
                          <div className="p-4">
                            <img
                              src="https://cdn.poehali.dev/files/b1cceb5b-89cd-492c-8608-919c92824bcd.png"
                              alt="Таблица решения логической задачи"
                              className="mx-auto max-w-full h-auto rounded-lg border"
                            />
                          </div>
                        </div>

                        {/* Пошаговое решение */}
                        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                          <h6 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                            <Icon name="List" size={20} />
                            Пошаговое решение:
                          </h6>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                1
                              </div>
                              <p className="text-gray-800">
                                Вася живёт в Москве — ставим{" "}
                                <strong className="text-green-600">+</strong> в
                                соответствующую ячейку
                              </p>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                              <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                2
                              </div>
                              <p className="text-gray-800">
                                Петя не живёт в Москве — ставим{" "}
                                <strong className="text-red-600">-</strong> в
                                ячейку "Петя-Москва"
                              </p>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                              <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                3
                              </div>
                              <p className="text-gray-800">
                                Коля не живёт в Москве и СПб — ставим{" "}
                                <strong className="text-red-600">-</strong> в
                                соответствующие ячейки
                              </p>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                4
                              </div>
                              <p className="text-gray-800">
                                Логический вывод: Коля живёт в Киеве, Петя — в
                                Санкт-Петербурге
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Методы решения */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                        <h5 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                          ⚡ Основные методы решения
                        </h5>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon
                                  name="Table"
                                  size={18}
                                  className="text-blue-600"
                                />
                                <h6 className="font-bold text-gray-800">
                                  Табличный метод
                                </h6>
                              </div>
                              <p className="text-gray-600 text-sm">
                                Составление таблиц соответствий для визуализации
                                условий
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon
                                  name="TreePine"
                                  size={18}
                                  className="text-green-600"
                                />
                                <h6 className="font-bold text-gray-800">
                                  Метод дерева решений
                                </h6>
                              </div>
                              <p className="text-gray-600 text-sm">
                                Пошаговое построение логических цепочек
                              </p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon
                                  name="Minus"
                                  size={18}
                                  className="text-red-600"
                                />
                                <h6 className="font-bold text-gray-800">
                                  Метод исключения
                                </h6>
                              </div>
                              <p className="text-gray-600 text-sm">
                                Последовательное исключение невозможных
                                вариантов
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon
                                  name="CheckCircle"
                                  size={18}
                                  className="text-purple-600"
                                />
                                <h6 className="font-bold text-gray-800">
                                  Метод допущений
                                </h6>
                              </div>
                              <p className="text-gray-600 text-sm">
                                Проверка гипотез методом от противного
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Практические советы */}
                      <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                        <h5 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                          💡 Практические советы
                        </h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Icon
                                name="Eye"
                                size={16}
                                className="text-orange-600 mt-1"
                              />
                              <span className="text-gray-700">
                                Внимательно читайте условие несколько раз
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon
                                name="PenTool"
                                size={16}
                                className="text-orange-600 mt-1"
                              />
                              <span className="text-gray-700">
                                Выделяйте ключевые слова и условия
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon
                                name="Grid"
                                size={16}
                                className="text-orange-600 mt-1"
                              />
                              <span className="text-gray-700">
                                Составляйте схемы и таблицы
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Icon
                                name="ArrowRight"
                                size={16}
                                className="text-orange-600 mt-1"
                              />
                              <span className="text-gray-700">
                                Действуйте пошагово, не спешите
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon
                                name="RotateCcw"
                                size={16}
                                className="text-orange-600 mt-1"
                              />
                              <span className="text-gray-700">
                                Проверяйте полученные результаты
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon
                                name="BookOpen"
                                size={16}
                                className="text-orange-600 mt-1"
                              />
                              <span className="text-gray-700">
                                Практикуйтесь на разных типах задач
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "lessons" && (
        <div className="space-y-6">
          {lessonPlans.map((lesson, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500"
              onClick={() => handleLessonDownload(index, lesson.title)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-blue-600" size={20} />
                  {lesson.title}
                  <Icon
                    name="Download"
                    className="text-green-600 ml-auto"
                    size={18}
                  />
                </CardTitle>
                <CardDescription>
                  Продолжительность: {lesson.duration}
                  <span className="block text-green-600 font-medium mt-1">
                    📄 Нажмите для скачивания плана-конспекта
                  </span>
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
    </div>
  );
};

export default MethodicalGuideSection;
