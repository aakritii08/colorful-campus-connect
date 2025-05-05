
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Parents from "./pages/Parents";
import Sports from "./pages/Sports";
import Exams from "./pages/Exams";
import Library from "./pages/Library";
import CalendarPage from "./pages/Calendar";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/library" element={<Library />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
      <Toaster />
      <SonnerToaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
