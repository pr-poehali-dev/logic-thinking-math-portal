import { useState } from "react";
import TopicCard from "./TopicCard";
import SubtopicView from "./SubtopicView";
import TasksView from "./TasksView";
import { topics, getTasksBySubtopic } from "@/data/topicsData";

const LogicProblemsSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [showSolutions, setShowSolutions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSolution = (taskId: string) => {
    setShowSolutions((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  // Если выбрана подтема
  if (selectedTopic && selectedSubtopic) {
    const topic = topics.find((t) => t.id === selectedTopic)!;
    const subtopic = topic.subtopics.find((s) => s.id === selectedSubtopic)!;
    const tasks = getTasksBySubtopic(selectedTopic, selectedSubtopic);

    return (
      <TasksView
        topic={topic}
        subtopic={subtopic}
        tasks={tasks}
        showSolutions={showSolutions}
        onToggleSolution={toggleSolution}
        onBack={() => setSelectedSubtopic(null)}
      />
    );
  }

  // Если выбрана тема
  if (selectedTopic) {
    const topic = topics.find((t) => t.id === selectedTopic)!;

    return (
      <SubtopicView
        topic={topic}
        onSelectSubtopic={setSelectedSubtopic}
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  // Главная страница с темами
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} onSelect={setSelectedTopic} />
      ))}
    </div>
  );
};

export default LogicProblemsSection;
