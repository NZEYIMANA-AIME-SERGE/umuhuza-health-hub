import { useNavigate } from 'react-router-dom';
import { BookOpen, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CreditBadge from '@/components/CreditBadge';
import QuestCard from '@/components/QuestCard';
import { quests } from '@/lib/quest-data';
import { useAppStore } from '@/lib/store';

const HomePage = () => {
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const completedQuests = useAppStore((s) => s.completedQuests);
  const progress = Math.round((completedQuests.length / quests.length) * 100);

  return (
    <div className="pb-20 max-w-md mx-auto">
      {/* Hero */}
      <header className="gradient-hero rounded-b-3xl px-5 pt-8 pb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-primary-foreground">Umuhuza</h1>
            <p className="text-primary-foreground/80 text-xs">
              {language === 'rw' ? 'Ubuzima bwawe, Agaciro kawe' : 'Your Health, Your Value'}
            </p>
          </div>
          <CreditBadge />
        </div>

        {/* Progress */}
        <div className="bg-primary-foreground/10 rounded-full h-2 overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-secondary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-primary-foreground/70 text-xs mt-2">
          {language === 'rw'
            ? `${completedQuests.length}/${quests.length} amasomo yarangiye`
            : `${completedQuests.length}/${quests.length} quests completed`}
        </p>
      </header>

      {/* Quick Actions */}
      <section className="px-4 -mt-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: BookOpen, labelRw: 'Amasomo', labelEn: 'Quests', path: '/quests' },
            { icon: Heart, labelRw: 'Ubujyanama', labelEn: 'Counseling', path: '/safety' },
            { icon: ShieldCheck, labelRw: 'Umutekano', labelEn: 'Safety', path: '/safety' },
          ].map((action) => (
            <Button
              key={action.path + action.labelEn}
              variant="outline"
              className="flex flex-col items-center gap-1 h-auto py-4 bg-card shadow-card border-none"
              onClick={() => navigate(action.path)}
              aria-label={language === 'rw' ? action.labelRw : action.labelEn}
            >
              <action.icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium text-foreground">
                {language === 'rw' ? action.labelRw : action.labelEn}
              </span>
            </Button>
          ))}
        </div>
      </section>

      {/* Recent Quests */}
      <section className="px-4 mt-6" aria-label={language === 'rw' ? 'Amasomo' : 'Recent Quests'}>
        <h2 className="text-sm font-semibold text-foreground mb-3">
          {language === 'rw' ? 'Tangira Isomo' : 'Start a Quest'}
        </h2>
        <div className="space-y-3">
          {quests.slice(0, 3).map((q, i) => (
            <div key={q.id} className="animate-float-in" style={{ animationDelay: `${i * 100}ms` }}>
              <QuestCard quest={q} />
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-3 text-primary" onClick={() => navigate('/quests')}>
          {language === 'rw' ? 'Reba byose →' : 'View all →'}
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
