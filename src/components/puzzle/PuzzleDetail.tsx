import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import type { Puzzle } from "@/types/puzzle";

interface PuzzleDetailProps {
  puzzle: Puzzle;
  showSolution: boolean;
  onToggleSolution: (puzzleId: string) => void;
  onBack: () => void;
}

const PuzzleDetail = ({
  puzzle,
  showSolution,
  onToggleSolution,
  onBack,
}: PuzzleDetailProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{puzzle.title}</CardTitle>
            <Button variant="outline" onClick={onBack}>
              <Icon name="ArrowLeft" size={16} />К списку
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Задача:</h3>
            <p className="text-base">{puzzle.description}</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center text-sm text-yellow-800">
              <Icon name="Lightbulb" size={16} className="mr-2" />
              <span>Подсказка: {puzzle.hint}</span>
            </div>
          </div>

          <Button
            onClick={() => onToggleSolution(puzzle.id)}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {showSolution ? "Скрыть решение" : "Показать решение"}
          </Button>

          {showSolution && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-green-800 text-sm font-medium mb-2">
                Решение:
              </p>
              <p className="text-green-700">{puzzle.solution}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PuzzleDetail;
