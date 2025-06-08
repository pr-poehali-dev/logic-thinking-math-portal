import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import PuzzleGrid from "./puzzle/PuzzleGrid";
import PuzzleDetail from "./puzzle/PuzzleDetail";
import { usePuzzleState } from "@/hooks/usePuzzleState";
import { puzzleCategories } from "@/data/puzzleData";

const PuzzleSection = () => {
  const {
    selectedPuzzle,
    setSelectedPuzzle,
    showSolutions,
    toggleSolution,
    resetPuzzle,
  } = usePuzzleState();

  if (selectedPuzzle) {
    const puzzle = puzzleCategories
      .flatMap((cat) => cat.puzzles)
      .find((p) => p.id === selectedPuzzle);

    if (!puzzle) return null;

    return (
      <PuzzleDetail
        puzzle={puzzle}
        showSolution={showSolutions[puzzle.id]}
        onToggleSolution={toggleSolution}
        onBack={resetPuzzle}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">
          Головоломки и задачи
        </h1>
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
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <PuzzleGrid
              puzzles={category.puzzles}
              onSelectPuzzle={setSelectedPuzzle}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PuzzleSection;
