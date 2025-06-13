import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import type { Topic } from "@/data/topicsData";

interface TopicCardProps {
  topic: Topic;
  onSelect: (topicId: string) => void;
}

const TopicCard = ({ topic, onSelect }: TopicCardProps) => {
  return (
    <Card
      className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onSelect(topic.id)}
    >
      <CardHeader className="text-center">
        <div
          className={`w-16 h-16 bg-${topic.color}-100 text-${topic.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
        >
          <Icon name={topic.icon as any} size={32} />
        </div>
        <CardTitle className="text-xl">{topic.title}</CardTitle>
        <CardDescription className="text-sm">
          {topic.subtopics.length} видов задач
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TopicCard;
