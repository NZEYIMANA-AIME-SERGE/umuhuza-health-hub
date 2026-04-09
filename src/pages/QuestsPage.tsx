import QuestCard from '@/components/QuestCard';
import { quests, categoryLabels } from '@/lib/quest-data';
import { useAppStore } from '@/lib/store';

const QuestsPage = () => {
  const language = useAppStore((s) => s.language);
  const categories = [...new Set(quests.map((q) => q.category))];

  return (
    <div className="pb-20 max-w-md mx-auto px-4 pt-6">
      <h1 className="text-xl font-bold text-foreground mb-1">
        {language === 'rw' ? 'Amasomo' : 'Health Quests'}
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        {language === 'rw' ? 'Iga kandi ubone Agaciro Credits' : 'Learn and earn Agaciro Credits'}
      </p>

      {categories.map((cat) => {
        const catQuests = quests.filter((q) => q.category === cat);
        const label = categoryLabels[cat];
        return (
          <section key={cat} className="mb-6" aria-label={language === 'rw' ? label.rw : label.en}>
            <h2 className="text-sm font-semibold text-primary mb-3">
              {language === 'rw' ? label.rw : label.en}
            </h2>
            <div className="space-y-3">
              {catQuests.map((q) => (
                <QuestCard key={q.id} quest={q} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default QuestsPage;
