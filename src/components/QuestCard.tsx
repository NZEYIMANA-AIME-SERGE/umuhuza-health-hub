import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Quest, categoryLabels } from '@/lib/quest-data';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface QuestCardProps {
  quest: Quest;
}

const QuestCard = ({ quest }: QuestCardProps) => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const completedQuests = useAppStore((s) => s.completedQuests);
  const isCompleted = completedQuests.includes(quest.id);
  const catLabel = categoryLabels[quest.category];

  return (
    <button
      onClick={() => navigate(`/quest/${quest.id}`)}
      className={cn(
        'w-full flex items-center gap-4 bg-card rounded-xl p-4 shadow-card transition-all hover:shadow-elevated text-left',
        isCompleted && 'opacity-75'
      )}
      aria-label={`${language === 'rw' ? quest.titleRw : quest.titleEn} - ${quest.creditsReward} credits`}
    >
      <div className="text-3xl flex-shrink-0" aria-hidden="true">{quest.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-sm truncate">
          {language === 'rw' ? quest.titleRw : quest.titleEn}
        </p>
        <p className="text-xs text-muted-foreground">
          {language === 'rw' ? catLabel.rw : catLabel.en}
        </p>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: quest.difficulty }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
          ))}
          <span className="text-xs text-secondary font-medium ml-2">+{quest.creditsReward}</span>
        </div>
      </div>
      {isCompleted ? (
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
      ) : (
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      )}
    </button>
  );
};

export default QuestCard;
