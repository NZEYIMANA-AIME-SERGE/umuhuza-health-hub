import { Coins } from 'lucide-react';
import { useAppStore } from '@/lib/store';

const CreditBadge = () => {
  const credits = useAppStore((s) => s.credits);

  return (
    <div className="inline-flex items-center gap-1.5 gradient-gold text-gold-foreground px-3 py-1.5 rounded-full text-sm font-semibold shadow-card">
      <Coins className="w-4 h-4" />
      <span>{credits}</span>
    </div>
  );
};

export default CreditBadge;
