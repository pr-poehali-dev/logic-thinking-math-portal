import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FgosPlansSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Планы-конспекты уроков по ФГОС
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Готовые планы-конспекты уроков с учетом требований ФГОС для развития
          логического мышления
        </p>
      </div>

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

export default FgosPlansSection;
