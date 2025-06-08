import { useState } from "react";

export const usePuzzleState = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [showSolutions, setShowSolutions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSolution = (puzzleId: string) => {
    setShowSolutions((prev) => ({
      ...prev,
      [puzzleId]: !prev[puzzleId],
    }));
  };

  const resetPuzzle = () => {
    setSelectedPuzzle(null);
    setUserAnswer("");
  };

  return {
    selectedPuzzle,
    setSelectedPuzzle,
    userAnswer,
    setUserAnswer,
    showSolutions,
    toggleSolution,
    resetPuzzle,
  };
};
