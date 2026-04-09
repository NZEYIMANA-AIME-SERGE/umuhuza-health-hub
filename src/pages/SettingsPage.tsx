import { Accessibility, Eye, Globe } from 'lucide-react';
import { useAppStore } from '@/lib/store';

const SettingsPage = () => {
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const highContrast = useAppStore((s) => s.highContrast);
  const toggleHighContrast = useAppStore((s) => s.toggleHighContrast);

  return (
    <div className="pb-20 max-w-md mx-auto px-4 pt-6">
      <h1 className="text-xl font-bold text-foreground mb-6">
        {language === 'rw' ? 'Igenamiterere' : 'Settings'}
      </h1>

      <div className="space-y-3">
        {/* Language */}
        <div className="bg-card rounded-xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {language === 'rw' ? 'Ururimi' : 'Language'}
              </p>
            </div>
            <div className="flex bg-muted rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage('rw')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${language === 'rw' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                aria-pressed={language === 'rw'}
              >
                Kinyarwanda
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                aria-pressed={language === 'en'}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* High Contrast */}
        <div className="bg-card rounded-xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {language === 'rw' ? 'Ibara rikomeye' : 'High Contrast'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'rw' ? 'Kugira ngo usome neza' : 'For better readability'}
              </p>
            </div>
            <button
              onClick={toggleHighContrast}
              className={`w-12 h-7 rounded-full transition-colors ${highContrast ? 'bg-primary' : 'bg-muted'}`}
              role="switch"
              aria-checked={highContrast}
            >
              <span className={`block w-5 h-5 rounded-full bg-primary-foreground transition-transform ${highContrast ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>

        {/* Accessibility info */}
        <div className="bg-card rounded-xl p-4 shadow-card">
          <div className="flex items-center gap-3">
            <Accessibility className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {language === 'rw' ? 'Ubufasha bw\'ubumuga' : 'Accessibility'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'rw'
                  ? 'TTS, Video y\'amarenga, n\'ibindi bizaza vuba'
                  : 'TTS, Sign Language videos & more coming soon'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
