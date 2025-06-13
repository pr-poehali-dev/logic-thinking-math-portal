import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import TaskItem from "./TaskItem";
import type { Task } from "@/data/topicsData";

interface TaskLevelCardProps {
  tasks: Task[];
  level: string;
  levelTitle: string;
  description: string;
  showSolutions: { [key: string]: boolean };
  onToggleSolution: (taskId: string) => void;
}

const TaskLevelCard = ({
  tasks,
  level,
  levelTitle,
  description,
  showSolutions,
  onToggleSolution,
}: TaskLevelCardProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              level === "easy"
                ? "bg-green-100 text-green-800"
                : level === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {levelTitle}
          </span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => {
          const taskId = `${level}-${index}`;
          return (
            <TaskItem
              key={index}
              task={task}
              taskId={taskId}
              showSolution={showSolutions[taskId]}
              onToggleSolution={onToggleSolution}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TaskLevelCard;
