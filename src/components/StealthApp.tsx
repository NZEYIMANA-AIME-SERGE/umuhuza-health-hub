import { useAppStore } from '@/lib/store';
import { Cloud, Sun, Thermometer, Wind } from 'lucide-react';

const StealthApp = () => {
  const deactivateStealth = useAppStore((s) => s.deactivateStealth);

  return (
    <div className="min-h-screen bg-muted p-4" role="application" aria-label="Weather App">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Weather</h1>
          <span className="text-sm text-muted-foreground">Kigali, Rwanda</span>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card text-center">
          <Sun className="w-16 h-16 mx-auto text-secondary mb-2" />
          <p className="text-4xl font-bold text-foreground">26°C</p>
          <p className="text-muted-foreground">Partly Cloudy</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Wind, label: 'Wind', value: '12 km/h' },
            { icon: Thermometer, label: 'Feels', value: '28°C' },
            { icon: Cloud, label: 'Humidity', value: '65%' },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-lg p-3 text-center shadow-card">
              <item.icon className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-foreground">7-Day Forecast</h2>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div key={day} className="flex items-center justify-between bg-card rounded-lg px-4 py-2 shadow-card">
              <span className="text-sm text-foreground w-12">{day}</span>
              <Sun className="w-4 h-4 text-secondary" />
              <span className="text-sm text-foreground">{24 + i}°C</span>
            </div>
          ))}
        </div>

        {/* Secret exit: triple tap on the temperature */}
        <button
          className="fixed bottom-4 right-4 w-1 h-1 opacity-0"
          onClick={deactivateStealth}
          onDoubleClick={deactivateStealth}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </div>
  );
};

export default StealthApp;
