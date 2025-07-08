import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Birthday from "./pages/Birthday";
import Journey from "./pages/Journey";
import Timeline from "./pages/Timeline";
import Song from "./pages/Song";
import Letter from "./pages/Letter";
import Gifts from "./pages/Gifts";
import Countdown from "./pages/Countdown";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Birthday />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/song" element={<Song />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/countdown" element={<Countdown />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
