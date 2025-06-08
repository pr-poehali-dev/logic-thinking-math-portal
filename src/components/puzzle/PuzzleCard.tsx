import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DifficultyBadge from "./DifficultyBadge";
import type { Puzzle } from "@/types/puzzle";

interface PuzzleCardProps {
  puzzle: Puzzle;
  onSelect: (puzzleId: string) => void;
}

const PuzzleCard = ({ puzzle, onSelect }: PuzzleCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{puzzle.title}</CardTitle>
          <DifficultyBadge difficulty={puzzle.difficulty} />
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {puzzle.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => onSelect(puzzle.id)}
          className="w-full"
          variant="outline"
        >
          Решить задачу
        </Button>
      </CardContent>
    </Card>
  );
};

export default PuzzleCard;
