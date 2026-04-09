import { useState } from 'react';
import { AlertTriangle, Lock, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/lib/store';

const SafetyPage = () => {
  const language = useAppStore((s) => s.language);
  const activateStealth = useAppStore((s) => s.activateStealth);
  const [showPanicConfirm, setShowPanicConfirm] = useState(false);

  return (
    <div className="pb-20 max-w-md mx-auto px-4 pt-6">
      <h1 className="text-xl font-bold text-foreground mb-1">
        {language === 'rw' ? 'Umutekano' : 'Safety'}
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        {language === 'rw' ? 'Ubuzima bwawe n\'umutekano wawe ni ingenzi' : 'Your wellbeing and safety matter'}
      </p>

      {/* Panic button */}
      <div className="bg-card rounded-xl p-5 shadow-card mb-4">
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-foreground">
              {language === 'rw' ? 'Uburyo bwo Kwihisha (Stealth Mode)' : 'Stealth Mode'}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {language === 'rw'
                ? 'Hindura app igasa n\'iyi minsi. Nta muntu uzamenya ko ukoresha Umuhuza.'
                : 'Instantly disguise the app as a weather app. No one will know you\'re using Umuhuza.'}
            </p>
            {!showPanicConfirm ? (
              <Button variant="destructive" size="sm" className="mt-3" onClick={() => setShowPanicConfirm(true)}>
                {language === 'rw' ? 'Fungura Stealth Mode' : 'Activate Stealth Mode'}
              </Button>
            ) : (
              <div className="mt-3 space-y-2">
                <p className="text-xs text-destructive font-medium">
                  {language === 'rw' ? 'Uremeza? App izahinduka igasa n\'iyi minsi.' : 'Are you sure? App will switch to weather view.'}
                </p>
                <div className="flex gap-2">
                  <Button variant="destructive" size="sm" onClick={activateStealth}>
                    {language === 'rw' ? 'Yego' : 'Yes'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setShowPanicConfirm(false)}>
                    {language === 'rw' ? 'Oya' : 'No'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Crisis resources */}
      <div className="bg-card rounded-xl p-5 shadow-card mb-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              {language === 'rw' ? 'Ukeneye ubufasha bwihutirwa?' : 'Need urgent help?'}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {language === 'rw'
                ? 'Niba uri mu kaga, hamagara umujyanama cyangwa utumenyeshe.'
                : 'If you\'re in crisis, reach out to a counselor or alert us.'}
            </p>
          </div>
        </div>
      </div>

      {/* Contact options */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4 bg-card shadow-card border-none">
          <Phone className="w-5 h-5 text-primary" />
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">
              {language === 'rw' ? 'Hamagara Umujyanama' : 'Call Counselor'}
            </p>
            <p className="text-xs text-muted-foreground">*114 - 24/7</p>
          </div>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4 bg-card shadow-card border-none">
          <MessageCircle className="w-5 h-5 text-primary" />
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">
              {language === 'rw' ? 'Andika ubutumwa' : 'Send Message'}
            </p>
            <p className="text-xs text-muted-foreground">WhatsApp / SMS</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SafetyPage;
