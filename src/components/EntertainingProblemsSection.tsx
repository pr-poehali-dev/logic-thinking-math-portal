import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import PuzzleGrid from "./puzzle/PuzzleGrid";
import PuzzleDetail from "./puzzle/PuzzleDetail";
import LogicProblemsSection from "./logic-tasks/LogicProblemsSection";
import { usePuzzleState } from "@/hooks/usePuzzleState";
import { puzzleCategories } from "@/data/puzzleData";
import { useState } from "react";

const EntertainingProblemsSection = () => {
  const [activeTab, setActiveTab] = useState("logic");

  // Puzzle state for puzzles tab
  const {
    selectedPuzzle,
    setSelectedPuzzle,
    showSolutions: puzzleShowSolutions,
    toggleSolution: puzzleToggleSolution,
    resetPuzzle,
  } = usePuzzleState();

  // Главная страница с темами
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Занимательные задачи
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Выберите раздел для изучения увлекательных логических задач и
          головоломок
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="logic" className="flex items-center gap-2">
            <Icon name="Brain" size={16} />
            Логические задачи
          </TabsTrigger>
          <TabsTrigger value="puzzles" className="flex items-center gap-2">
            <Icon name="Puzzle" size={16} />
            Головоломки
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logic" className="mt-8">
          <LogicProblemsSection />
        </TabsContent>

        <TabsContent value="puzzles" className="mt-8">
          {selectedPuzzle ? (
            (() => {
              const puzzle = puzzleCategories
                .flatMap((cat) => cat.puzzles)
                .find((p) => p.id === selectedPuzzle);

              if (!puzzle) return null;

              return (
                <PuzzleDetail
                  puzzle={puzzle}
                  showSolution={puzzleShowSolutions[puzzle.id]}
                  onToggleSolution={puzzleToggleSolution}
                  onBack={resetPuzzle}
                />
              );
            })()
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Головоломки и задачи
                </h2>
                <p className="text-gray-600">
                  Развивайте логическое мышление через интересные головоломки
                </p>
              </div>

              <Tabs defaultValue={puzzleCategories[0].id} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {puzzleCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2"
                    >
                      <Icon name={category.icon} size={16} />
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {puzzleCategories.map((category) => (
                  <TabsContent
                    key={category.id}
                    value={category.id}
                    className="mt-6"
                  >
                    <PuzzleGrid
                      puzzles={category.puzzles}
                      onSelectPuzzle={setSelectedPuzzle}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center">
            <Icon name="Star" className="text-yellow-500" size={24} />
            Особенности занимательных задач
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>• Развитие аналитического мышления</p>
            <p>• Тренировка логических рассуждений</p>
            <p>• Пошаговые решения для понимания</p>
          </div>
          <div className="space-y-2">
            <p>• Задачи разного уровня сложности</p>
            <p>• Классические головоломки и задачи</p>
            <p>• Подготовка к олимпиадам</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EntertainingProblemsSection;
