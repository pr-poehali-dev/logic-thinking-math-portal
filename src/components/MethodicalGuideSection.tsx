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
      title: "Этапы развития логического мышления",
      content: [
        "1. Диагностический этап - определение начального уровня",
        "2. Формирующий этап - систематическое развитие навыков",
        "3. Контрольный этап - оценка достигнутых результатов",
        "4. Коррекционный этап - работа с выявленными пробелами",
      ],
    },
    {
      title: "Принципы работы с учениками 6 класса",
      content: [
        "• Постепенное усложнение заданий",
        "• Использование игровых элементов",
        "• Связь с жизненными ситуациями",
        "• Групповая и индивидуальная работа",
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
        <div className="space-y-6">
          {methodologyContent.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon
                    name="Lightbulb"
                    className="text-yellow-600"
                    size={20}
                  />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
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
                Формирование УУД: познавательные, регулятивные, коммуникативные
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
    </div>
  );
};

export default MethodicalGuideSection;
