import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import type { Topic } from "@/data/topicsData";

interface SubtopicViewProps {
  topic: Topic;
  onSelectSubtopic: (subtopicId: string) => void;
  onBack: () => void;
}

const SubtopicView = ({
  topic,
  onSelectSubtopic,
  onBack,
}: SubtopicViewProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">{topic.title}</h1>
        <Button variant="outline" onClick={onBack}>
          <Icon name="ArrowLeft" size={16} className="mr-2" />К темам
        </Button>
      </div>

      <div className="grid gap-4">
        {topic.subtopics.map((subtopic) => (
          <Card
            key={subtopic.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelectSubtopic(subtopic.id)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{subtopic.title}</span>
                <Icon name="ChevronRight" size={20} className="text-gray-400" />
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubtopicView;
