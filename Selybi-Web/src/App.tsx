import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicePages/ServicesPage";
import WebDevelopmentPage from "./pages/ServicePages/WebDevelopmentPage";
import MobileDevelopmentPage from "./pages/ServicePages/MobileDevelopmentPage";
import DatabaseAdministrationPage from "./pages/ServicePages/DatabaseAdministrationPage";
import CloudSolutionsPage from "./pages/ServicePages/CloudSolutionsPage";
import DevOpsPage from "./pages/ServicePages/DevOpsPage";
import ApiDevelopmentPage from "./pages/ServicePages/ApiDevelopmentPage";
import ConsultingPage from "./pages/ServicePages/ConsultingPage";
import MaintenancePage from "./pages/ServicePages/MaintenancePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import EdoraPage from "./pages/EdoraPage";
import InnoVault from "./pages/InnoVault";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/mobile-development" element={<MobileDevelopmentPage />} />
            <Route path="/services/database-administration" element={<DatabaseAdministrationPage />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
            <Route path="/services/devops" element={<DevOpsPage />} />
            <Route path="/services/api-development" element={<ApiDevelopmentPage />} />
            <Route path="/services/consulting" element={<ConsultingPage />} />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/edora" element={<EdoraPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/innovault" element={
              <ProtectedRoute>
                <InnoVault />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
