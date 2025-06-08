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
    const numValue = parseInt(value) || 0;
    setData((prev) => ({
      ...prev,
      [methodId]: {
        ...prev[methodId],
        [level]: numValue,
      },
    }));
  };

  const calculateResults = () => {
    if (totalStudents === 0) {
      alert("Укажите общее количество учеников");
      return;
    }

    const methodResults = methods.map((method) => {
      const methodData = data[method.id];
      const total = methodData.low + methodData.medium + methodData.high;

      return {
        name: method.name,
        description: method.description,
        total,
        percentages: {
          low: total > 0 ? Math.round((methodData.low / total) * 100) : 0,
          medium: total > 0 ? Math.round((methodData.medium / total) * 100) : 0,
          high: total > 0 ? Math.round((methodData.high / total) * 100) : 0,
        },
        counts: methodData,
      };
    });

    // Общая статистика по всем методикам
    const overallStats = {
      totalLow: Object.values(data).reduce(
        (sum, method) => sum + method.low,
        0,
      ),
      totalMedium: Object.values(data).reduce(
        (sum, method) => sum + method.medium,
        0,
      ),
      totalHigh: Object.values(data).reduce(
        (sum, method) => sum + method.high,
        0,
      ),
    };

    const grandTotal =
      overallStats.totalLow + overallStats.totalMedium + overallStats.totalHigh;

    setResults({
      methods: methodResults,
      overall: {
        ...overallStats,
        percentages: {
          low:
            grandTotal > 0
              ? Math.round((overallStats.totalLow / grandTotal) * 100)
              : 0,
          medium:
            grandTotal > 0
              ? Math.round((overallStats.totalMedium / grandTotal) * 100)
              : 0,
          high:
            grandTotal > 0
              ? Math.round((overallStats.totalHigh / grandTotal) * 100)
              : 0,
        },
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          📊 Анализ результатов класса
        </h2>
        <p className="text-gray-600">
          Введите результаты тестирования по каждой методике для анализа
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            Общие данные
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-48">
            <Label htmlFor="totalStudents">Общее количество учеников</Label>
            <Input
              id="totalStudents"
              type="number"
              min="1"
              value={totalStudents || ""}
              onChange={(e) => setTotalStudents(parseInt(e.target.value) || 0)}
              placeholder="Введите количество"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Table" size={20} />
            Таблица результатов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left font-medium">
                    Уровень развития
                  </th>
                  {methods.map((method) => (
                    <th
                      key={method.id}
                      className="border border-gray-300 p-3 text-center font-medium"
                    >
                      <div className="space-y-1">
                        <div>{method.name}</div>
                        <div className="text-xs text-gray-500">
                          ({method.description})
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {levels.map((level) => (
                  <tr key={level.id}>
                    <td
                      className={`border border-gray-300 p-3 font-medium ${level.color}`}
                    >
                      {level.name}
                    </td>
                    {methods.map((method) => (
                      <td
                        key={`${method.id}-${level.id}`}
                        className="border border-gray-300 p-2"
                      >
                        <Input
                          type="number"
                          min="0"
                          value={
                            data[method.id][
                              level.id as keyof typeof data.method1
                            ] || ""
                          }
                          onChange={(e) =>
                            handleInputChange(
                              method.id,
                              level.id,
                              e.target.value,
                            )
                          }
                          placeholder="0"
                          className="text-center"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Button onClick={calculateResults} className="px-8 py-2">
              <Icon name="Calculator" size={18} className="mr-2" />
              Рассчитать результаты
            </Button>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Общая статистика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="text-red-600 font-semibold">
                    Низкий уровень
                  </div>
                  <div className="text-2xl font-bold text-red-700">
                    {results.overall.percentages.low}%
                  </div>
                  <div className="text-sm text-red-600">
                    ({results.overall.totalLow} результатов)
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="text-yellow-600 font-semibold">
                    Средний уровень
                  </div>
                  <div className="text-2xl font-bold text-yellow-700">
                    {results.overall.percentages.medium}%
                  </div>
                  <div className="text-sm text-yellow-600">
                    ({results.overall.totalMedium} результатов)
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-green-600 font-semibold">
                    Высокий уровень
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    {results.overall.percentages.high}%
                  </div>
                  <div className="text-sm text-green-600">
                    ({results.overall.totalHigh} результатов)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="PieChart" size={20} />
                Результаты по методикам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {results.methods.map((method: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2">
                      {method.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {method.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-red-600 font-medium">Низкий</div>
                        <div className="text-xl font-bold text-red-700">
                          {method.percentages.low}%
                        </div>
                        <div className="text-sm text-gray-600">
                          ({method.counts.low} чел.)
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-yellow-600 font-medium">
                          Средний
                        </div>
                        <div className="text-xl font-bold text-yellow-700">
                          {method.percentages.medium}%
                        </div>
                        <div className="text-sm text-gray-600">
                          ({method.counts.medium} чел.)
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-600 font-medium">
                          Высокий
                        </div>
                        <div className="text-xl font-bold text-green-700">
                          {method.percentages.high}%
                        </div>
                        <div className="text-sm text-gray-600">
                          ({method.counts.high} чел.)
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ClassAnalysis;
