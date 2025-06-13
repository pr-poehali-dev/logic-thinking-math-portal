import { Button } from "@/components/ui/button";
import type { Task } from "@/data/topicsData";

interface TaskItemProps {
  task: Task;
  taskId: string;
  showSolution: boolean;
  onToggleSolution: (taskId: string) => void;
}

const TaskItem = ({
  task,
  taskId,
  showSolution,
  onToggleSolution,
}: TaskItemProps) => {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <p className="text-gray-700 leading-relaxed">{task.text}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onToggleSolution(taskId)}
        className="text-blue-600 hover:text-blue-700"
      >
        {showSolution ? "Скрыть решение" : "Решение"}
      </Button>
      {showSolution && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-blue-800 text-sm font-medium mb-2">Решение:</p>
          <p className="text-blue-700">{task.solution}</p>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
