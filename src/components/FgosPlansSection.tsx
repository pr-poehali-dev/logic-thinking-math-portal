import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const mainLessons = [
  {
    id: 1,
    title: "Натуральные числа и действия с ними",
    description:
      "Формирование УУД: познавательные, регулятивные, коммуникативные",
    class: "5 класс",
  },
  {
    id: 2,
    title: "Обыкновенные дроби",
    description:
      "Практико-ориентированные задачи, развитие логического мышления",
    class: "5 класс",
  },
];

const FgosPlansSection = () => {
  return (
    <div className="bg-green-50 p-8 rounded-lg space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="BookOpen" className="text-green-600" size={24} />
        <h2 className="text-xl font-bold text-gray-800">
          Планы-конспекты уроков по ФГОС
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mainLessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-800">
                Урок {lesson.id}: {lesson.title}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">{lesson.description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {lesson.class}
                </Badge>
                <Button variant="outline" size="sm" className="text-xs">
                  <Icon name="Download" size={14} className="mr-1" />
                  Скачать конспект
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-4">
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
          <Icon name="FolderOpen" size={16} className="mr-2" />
          Все планы-конспекты (15 уроков)
        </Button>
      </div>
    </div>
  );
};

export default FgosPlansSection;
