import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAppStore } from "@/lib/store";
import { useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import StealthApp from "@/components/StealthApp";
import HomePage from "@/pages/HomePage";
import QuestsPage from "@/pages/QuestsPage";
import QuestDetailPage from "@/pages/QuestDetailPage";
import WalletPage from "@/pages/WalletPage";
import SafetyPage from "@/pages/SafetyPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const stealthMode = useAppStore((s) => s.stealthMode);
  const highContrast = useAppStore((s) => s.highContrast);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  if (stealthMode) return <StealthApp />;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="/quest/:id" element={<QuestDetailPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
