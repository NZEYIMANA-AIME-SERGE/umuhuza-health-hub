import { Coins, QrCode, TrendingUp } from 'lucide-react';
import { useAppStore } from '@/lib/store';

const WalletPage = () => {
  const language = useAppStore((s) => s.language);
  const credits = useAppStore((s) => s.credits);
  const lifetimeCredits = useAppStore((s) => s.lifetimeCredits);

  return (
    <div className="pb-20 max-w-md mx-auto px-4 pt-6">
      <h1 className="text-xl font-bold text-foreground mb-6">
        {language === 'rw' ? 'Agaciro Credits' : 'Agaciro Wallet'}
      </h1>

      {/* Balance card */}
      <div className="gradient-hero rounded-2xl p-6 text-center shadow-elevated mb-6">
        <Coins className="w-10 h-10 mx-auto text-secondary mb-2" />
        <p className="text-4xl font-bold text-primary-foreground">{credits}</p>
        <p className="text-primary-foreground/70 text-sm">
          {language === 'rw' ? 'Credits uriho' : 'Available Credits'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-card rounded-xl p-4 shadow-card text-center">
          <TrendingUp className="w-5 h-5 mx-auto text-primary mb-1" />
          <p className="text-lg font-bold text-foreground">{lifetimeCredits}</p>
          <p className="text-xs text-muted-foreground">
            {language === 'rw' ? 'Byose wahawe' : 'Lifetime Earned'}
          </p>
        </div>
        <div className="bg-card rounded-xl p-4 shadow-card text-center">
          <QrCode className="w-5 h-5 mx-auto text-primary mb-1" />
          <p className="text-lg font-bold text-foreground">{lifetimeCredits - credits}</p>
          <p className="text-xs text-muted-foreground">
            {language === 'rw' ? 'Byakoreshejwe' : 'Redeemed'}
          </p>
        </div>
      </div>

      {/* QR placeholder */}
      <div className="bg-card rounded-xl p-6 shadow-card text-center">
        <QrCode className="w-24 h-24 mx-auto text-primary mb-3" />
        <p className="text-sm font-semibold text-foreground">
          {language === 'rw' ? 'Koresha QR kuri Merchant' : 'Show QR at Merchant'}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {language === 'rw'
            ? 'Erekana iyi kode ku iduka kugira ngo ubone igiciro gito'
            : 'Present this code at a partner shop for discounts'}
        </p>
      </div>
    </div>
  );
};

export default WalletPage;
