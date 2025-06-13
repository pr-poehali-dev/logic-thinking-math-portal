import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import TaskLevelCard from "./TaskLevelCard";
import type { Topic, Subtopic, TaskLevel } from "@/data/topicsData";

interface TasksViewProps {
  topic: Topic;
  subtopic: Subtopic;
  tasks: TaskLevel;
  showSolutions: { [key: string]: boolean };
  onToggleSolution: (taskId: string) => void;
  onBack: () => void;
}

const TasksView = ({
  topic,
  subtopic,
  tasks,
  showSolutions,
  onToggleSolution,
  onBack,
}: TasksViewProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          {topic.title}: {subtopic.title}
        </h1>
        <Button variant="outline" onClick={onBack}>
          <Icon name="ArrowLeft" size={16} className="mr-2" />К видам задач
        </Button>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <p className="text-blue-800">{tasks.description}</p>
        </CardContent>
      </Card>

      <TaskLevelCard
        tasks={tasks.easy}
        level="easy"
        levelTitle="Легкий"
        description="Задачи, решаемые в 1-2 шага"
        showSolutions={showSolutions}
        onToggleSolution={onToggleSolution}
      />

      <TaskLevelCard
        tasks={tasks.medium}
        level="medium"
        levelTitle="Средний"
        description="Задачи, требующие логической последовательности в рассуждениях"
        showSolutions={showSolutions}
        onToggleSolution={onToggleSolution}
      />

      <TaskLevelCard
        tasks={tasks.hard}
        level="hard"
        levelTitle="Сложный"
        description="Задачи, требующие нестандартного решения и применения логики"
        showSolutions={showSolutions}
        onToggleSolution={onToggleSolution}
      />
    </div>
  );
};

export default TasksView;
