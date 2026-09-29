import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { CurriculumModules } from './components/CurriculumModules';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseDetailPage } from './components/CourseDetailModal';
import { HowItWorks } from './components/HowItWorks';
import { TargetAudience } from './components/TargetAudience';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BlogSection } from './components/BlogSection';
import { ArticleReader } from './components/ArticleReader';
import { NewsletterSection } from './components/NewsletterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaFinal } from './components/CtaFinal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { StudentDashboard } from './components/student/StudentDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { DocsModal } from './components/DocsModal';
import { CheckCircle2 } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { activeView, toastMessage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      
      {/* Top Header */}
      <Header />

      {/* Floating System Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-[#123B73] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#2457A6] flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#F5B942]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Dynamic View Routing */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero />
            <PillarsSection />
            <CurriculumModules />
            <CourseCatalog />
            <HowItWorks />
            <TargetAudience />
            <ServicesSection />
            <StatsSection />
            <BenefitsSection />
            <BlogSection />
            <NewsletterSection />
            <TestimonialsSection />
            <FaqSection />
            <CtaFinal />
            <ContactSection />
          </>
        )}

        {activeView === 'courses' && (
          <div className="pt-16">
            <CourseCatalog />
            <CurriculumModules />
            <CtaFinal />
          </div>
        )}

        {activeView === 'course_detail' && (
          <CourseDetailPage />
        )}

        {activeView === 'services' && (
          <div className="pt-16">
            <ServicesSection />
            <ContactSection />
            <CtaFinal />
          </div>
        )}

        {activeView === 'blog' && (
          <div className="pt-16">
            <BlogSection />
            <NewsletterSection />
          </div>
        )}

        {activeView === 'article_detail' && (
          <ArticleReader />
        )}

        {activeView === 'student_portal' && (
          <StudentDashboard />
        )}

        {activeView === 'admin_portal' && (
          <AdminDashboard />
        )}

        {activeView === 'contact' && (
          <div className="pt-16">
            <ContactSection />
            <FaqSection />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />

      {/* Documentation / Supabase Setup Modal */}
      <DocsModal />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
