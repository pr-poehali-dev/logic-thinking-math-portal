import PuzzleCard from "./PuzzleCard";
import type { Puzzle } from "@/types/puzzle";

interface PuzzleGridProps {
  puzzles: Puzzle[];
  onSelectPuzzle: (puzzleId: string) => void;
}

const PuzzleGrid = ({ puzzles, onSelectPuzzle }: PuzzleGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {puzzles.map((puzzle) => (
        <PuzzleCard key={puzzle.id} puzzle={puzzle} onSelect={onSelectPuzzle} />
      ))}
    </div>
  );
};

export default PuzzleGrid;
