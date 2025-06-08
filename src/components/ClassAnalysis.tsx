import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface AnalysisData {
  [key: string]: {
    low: number;
    medium: number;
    high: number;
  };
}

const ClassAnalysis = () => {
  const [totalStudents, setTotalStudents] = useState<number>(0);
  const [data, setData] = useState<AnalysisData>({
    method1: { low: 0, medium: 0, high: 0 },
    method2: { low: 0, medium: 0, high: 0 },
    method3: { low: 0, medium: 0, high: 0 },
    method4: { low: 0, medium: 0, high: 0 },
  });
  const [results, setResults] = useState<any>(null);

  const methods = [
    {
      id: "method1",
      name: "Методика 1",
      description: "Логические последовательности",
    },
    { id: "method2", name: "Методика 2", description: "Аналогии и сравнения" },
    { id: "method3", name: "Методика 3", description: "Классификация понятий" },
    {
      id: "method4",
      name: "Методика 4",
      description: "Причинно-следственные связи",
    },
  ];

  const levels = [
    { id: "low", name: "Низкий уровень", color: "text-red-600" },
    { id: "medium", name: "Средний уровень", color: "text-yellow-600" },
    { id: "high", name: "Высокий уровень", color: "text-green-600" },
  ];

  const handleInputChange = (
    methodId: string,
    level: string,
    value: string,
  ) => {
    setData((prev) => ({
      ...prev,
      [methodId]: {
        ...prev[methodId],
        [level]: parseInt(value) || 0,
      },
    }));
  };

  const calculateResults = () => {
    const results: any = {};

    Object.keys(data).forEach((methodId) => {
      const method = data[methodId];
      const total = method.low + method.medium + method.high;

      results[methodId] = {
        total,
        lowPercent: total > 0 ? Math.round((method.low / total) * 100) : 0,
        mediumPercent:
          total > 0 ? Math.round((method.medium / total) * 100) : 0,
        highPercent: total > 0 ? Math.round((method.high / total) * 100) : 0,
      };
    });

    setResults(results);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="BarChart3" size={24} />
            Анализ результатов класса
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="totalStudents">Общее количество учеников</Label>
              <Input
                id="totalStudents"
                type="number"
                value={totalStudents}
                onChange={(e) =>
                  setTotalStudents(parseInt(e.target.value) || 0)
                }
                placeholder="Введите количество учеников"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">
                    Методика
                  </th>
                  <th className="border border-gray-300 p-3 text-center">
                    Низкий
                  </th>
                  <th className="border border-gray-300 p-3 text-center">
                    Средний
                  </th>
                  <th className="border border-gray-300 p-3 text-center">
                    Высокий
                  </th>
                </tr>
              </thead>
              <tbody>
                {methods.map((method) => (
                  <tr key={method.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      <div>
                        <div className="font-medium">{method.name}</div>
                        <div className="text-sm text-gray-600">
                          {method.description}
                        </div>
                      </div>
                    </td>
                    {levels.map((level) => (
                      <td
                        key={level.id}
                        className="border border-gray-300 p-3 text-center"
                      >
                        <Input
                          type="number"
                          value={
                            data[method.id][
                              level.id as keyof (typeof data)[typeof method.id]
                            ]
                          }
                          onChange={(e) =>
                            handleInputChange(
                              method.id,
                              level.id,
                              e.target.value,
                            )
                          }
                          className="w-20 text-center"
                          min="0"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Button onClick={calculateResults} className="w-full">
            <Icon name="Calculator" size={16} />
            Рассчитать результаты
          </Button>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Результаты анализа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {methods.map((method) => (
                    <div key={method.id} className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">{method.name}</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-red-600">Низкий уровень:</span>
                          <span>{results[method.id].lowPercent}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-yellow-600">
                            Средний уровень:
                          </span>
                          <span>{results[method.id].mediumPercent}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-600">
                            Высокий уровень:
                          </span>
                          <span>{results[method.id].highPercent}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassAnalysis;
