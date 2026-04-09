import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Coins, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quests } from '@/lib/quest-data';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const QuestDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const addCredits = useAppStore((s) => s.addCredits);
  const completeQuest = useAppStore((s) => s.completeQuest);
  const completedQuests = useAppStore((s) => s.completedQuests);

  const quest = quests.find((q) => q.id === id);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showReward, setShowReward] = useState(false);

  if (!quest) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Quest not found</p>
      </div>
    );
  }

  const lesson = quest.lessons[lessonIndex];
  const isCorrect = selectedOption === lesson.question.correctIndex;
  const alreadyCompleted = completedQuests.includes(quest.id);

  const handleAnswer = () => {
    if (selectedOption === null) return;
    setAnswered(true);
    if (isCorrect && !alreadyCompleted) {
      setTimeout(() => {
        addCredits(quest.creditsReward);
        completeQuest(quest.id);
        setShowReward(true);
      }, 800);
    }
  };

  return (
    <div className="pb-20 max-w-md mx-auto px-4 pt-4">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground mb-4" aria-label="Go back">
        <ArrowLeft className="w-4 h-4" /> {language === 'rw' ? 'Gusubira' : 'Back'}
      </button>

      <div className="text-center mb-6">
        <span className="text-4xl" aria-hidden="true">{quest.icon}</span>
        <h1 className="text-lg font-bold text-foreground mt-2">
          {language === 'rw' ? quest.titleRw : quest.titleEn}
        </h1>
      </div>

      {/* Lesson content */}
      <div className="bg-card rounded-xl p-5 shadow-card mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          {language === 'rw' ? lesson.contentRw : lesson.contentEn}
        </p>
      </div>

      {/* Quiz */}
      {!showReward && (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {language === 'rw' ? lesson.question.textRw : lesson.question.textEn}
          </h2>
          <div className="space-y-2">
            {lesson.question.options.map((opt, i) => (
              <button
                key={i}
                disabled={answered}
                onClick={() => setSelectedOption(i)}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg border text-sm transition-all',
                  selectedOption === i && !answered && 'border-primary bg-accent',
                  answered && i === lesson.question.correctIndex && 'border-primary bg-accent text-accent-foreground',
                  answered && selectedOption === i && i !== lesson.question.correctIndex && 'border-destructive bg-destructive/10',
                  !answered && selectedOption !== i && 'border-border bg-card hover:bg-muted'
                )}
                aria-pressed={selectedOption === i}
              >
                {language === 'rw' ? opt.labelRw : opt.labelEn}
              </button>
            ))}
          </div>

          {!answered && (
            <Button variant="hero" className="w-full mt-4" onClick={handleAnswer} disabled={selectedOption === null}>
              {language === 'rw' ? 'Emeza' : 'Submit'}
            </Button>
          )}

          {answered && (
            <div className={cn('flex items-center gap-2 p-3 rounded-lg mt-3', isCorrect ? 'bg-accent' : 'bg-destructive/10')}>
              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <XCircle className="w-5 h-5 text-destructive" />}
              <span className="text-sm font-medium text-foreground">
                {isCorrect
                  ? language === 'rw' ? 'Ni byo! Wabikoze neza!' : 'Correct! Well done!'
                  : language === 'rw' ? 'Si byo. Ongera ugerageze.' : 'Incorrect. Try again.'}
              </span>
            </div>
          )}

          {answered && !isCorrect && (
            <Button variant="outline" className="w-full" onClick={() => { setAnswered(false); setSelectedOption(null); }}>
              {language === 'rw' ? 'Ongera ugerageze' : 'Try Again'}
            </Button>
          )}
        </div>
      )}

      {/* Reward screen */}
      {showReward && (
        <div className="text-center animate-float-in">
          <div className="inline-flex items-center gap-2 gradient-gold text-gold-foreground px-6 py-3 rounded-full text-lg font-bold shadow-elevated animate-credit-pop">
            <Coins className="w-6 h-6" />
            +{quest.creditsReward} Agaciro!
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {language === 'rw' ? 'Komeza wige kandi ubone byinshi!' : 'Keep learning to earn more!'}
          </p>
          <Button variant="hero" className="w-full mt-6" onClick={() => navigate('/quests')}>
            {language === 'rw' ? 'Amasomo menshi' : 'More Quests'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestDetailPage;
