import type { Difficulty } from "@/types/puzzle";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "Легкая":
        return "bg-green-100 text-green-800";
      case "Средняя":
        return "bg-yellow-100 text-yellow-800";
      case "Сложная":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}
    >
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
