import { useState } from "react";
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
          <div>
            <h3 className="font-semibold mb-2">Условие задачи:</h3>
            <p className="text-gray-700">{puzzle.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Подсказка:</h3>
            <p className="text-blue-600 italic">{puzzle.hint}</p>
          </div>

          <div>
            <Button
              onClick={() => onToggleSolution(puzzle.id)}
              variant={showSolution ? "secondary" : "default"}
              className="mb-4"
            >
              <Icon name={showSolution ? "EyeOff" : "Eye"} size={16} />
              {showSolution ? "Скрыть решение" : "Решение"}
            </Button>

            {showSolution && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-green-800">Решение:</h3>
                <p className="text-green-700">{puzzle.solution}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PuzzleDetail;
