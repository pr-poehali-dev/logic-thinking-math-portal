export interface Puzzle {
  id: string;
  title: string;
  description: string;
  difficulty: "Легкая" | "Средняя" | "Сложная";
  hint: string;
  solution: string;
}

export interface PuzzleCategory {
  id: string;
  title: string;
  icon: string;
  puzzles: Puzzle[];
}

export type Difficulty = "Легкая" | "Средняя" | "Сложная";
