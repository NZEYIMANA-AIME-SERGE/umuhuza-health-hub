import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Coins, Home, Settings, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/lib/store';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);

  const items = [
    { path: '/', icon: Home, labelRw: 'Ahabanza', labelEn: 'Home' },
    { path: '/quests', icon: BookOpen, labelRw: 'Amasomo', labelEn: 'Quests' },
    { path: '/wallet', icon: Coins, labelRw: 'Agaciro', labelEn: 'Wallet' },
    { path: '/safety', icon: ShieldCheck, labelRw: 'Umutekano', labelEn: 'Safety' },
    { path: '/settings', icon: Settings, labelRw: 'Igenamiterere', labelEn: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-pb" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-around max-w-md mx-auto h-16">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
              aria-current={isActive ? 'page' : undefined}
              aria-label={language === 'rw' ? item.labelRw : item.labelEn}
            >
              <item.icon className={cn('w-5 h-5', isActive && 'animate-pulse-glow')} />
              <span className="text-[10px] font-medium">
                {language === 'rw' ? item.labelRw : item.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
