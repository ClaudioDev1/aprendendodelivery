import React, { useState, useEffect } from 'react';
import { Menu, X, User, Shield, BookOpen, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    currentUser, 
    setIsAuthModalOpen, 
    setAuthMode, 
    scrollToSection,
    setIsDocsModalOpen
  } = useApp();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, viewTarget: 'home' | 'courses' | 'services' | 'blog' | 'contact') => {
    setIsMobileMenuOpen(false);
    if (viewTarget === 'home') {
      scrollToSection(sectionId);
    } else {
      setActiveView(viewTarget);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#123B73]/95 backdrop-blur-md shadow-md py-3 border-b border-[#2457A6]/30' 
          : 'bg-[#123B73] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ZONE 1: Brand Wordmark (Single text element with delivery symbol) */}
          <button 
            onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2457A6] to-[#4A90E2] p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-[#123B73] rounded-[10px] flex items-center justify-center text-[#F5B942] font-bold text-lg">
                AD
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white block leading-none">
                APRENDENDO<span className="text-[#F5B942]"> DELIVERY</span>
              </span>
            </div>
          </button>

          {/* ZONE 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <button 
              onClick={() => handleNavClick('hero', 'home')}
              className={`hover:text-white transition-colors cursor-pointer py-1 ${activeView === 'home' ? 'text-white border-b-2 border-[#F5B942]' : ''}`}
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('modulos', 'home')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Aprenda Delivery
            </button>
            <button 
              onClick={() => handleNavClick('cursos', 'courses')}
              className={`hover:text-white transition-colors cursor-pointer py-1 ${activeView === 'courses' ? 'text-white border-b-2 border-[#F5B942]' : ''}`}
            >
              Cursos
            </button>
            <button 
              onClick={() => handleNavClick('como-funciona', 'home')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => handleNavClick('servicos', 'services')}
              className={`hover:text-white transition-colors cursor-pointer py-1 ${activeView === 'services' ? 'text-white border-b-2 border-[#F5B942]' : ''}`}
            >
              Serviços
            </button>
            <button 
              onClick={() => handleNavClick('blog', 'blog')}
              className={`hover:text-white transition-colors cursor-pointer py-1 ${activeView === 'blog' ? 'text-white border-b-2 border-[#F5B942]' : ''}`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavClick('faq', 'home')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavClick('contactos', 'contact')}
              className={`hover:text-white transition-colors cursor-pointer py-1 ${activeView === 'contact' ? 'text-white border-b-2 border-[#F5B942]' : ''}`}
            >
              Contactos
            </button>
          </nav>

          {/* ZONE 3: 1-2 Primary actions + Quick Portal Switchers */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Portal Switcher (Aluno / Admin) */}
            <button
              onClick={() => {
                setActiveView(activeView === 'student_portal' ? 'home' : 'student_portal');
              }}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                activeView === 'student_portal'
                  ? 'bg-[#2457A6] text-white border-transparent'
                  : 'bg-white/10 text-slate-100 hover:bg-white/20 border-white/20'
              }`}
              title="Aceder à Área do Aluno"
            >
              <User className="w-3.5 h-3.5 text-[#F5B942]" />
              <span className="whitespace-nowrap">Área do Aluno</span>
            </button>

            <button
              onClick={() => {
                setActiveView(activeView === 'admin_portal' ? 'home' : 'admin_portal');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-colors border ${
                activeView === 'admin_portal'
                  ? 'bg-amber-500/20 text-[#F5B942] border-[#F5B942]/40'
                  : 'text-slate-300 hover:text-white border-transparent hover:bg-white/5'
              }`}
              title="Painel de Gestão e Base de Dados"
            >
              <Shield className="w-3.5 h-3.5 text-slate-300" />
              <span className="whitespace-nowrap">Admin</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                setActiveView('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-[#123B73] bg-[#F5B942] hover:bg-[#ffc65c] rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              COMEÇAR AGORA
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setActiveView('student_portal')}
              className="p-2 text-slate-200 hover:text-white bg-white/10 rounded-lg"
              title="Área do Aluno"
            >
              <User className="w-5 h-5 text-[#F5B942]" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#123B73] border-b border-[#2457A6] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <button
              onClick={() => { setActiveView('student_portal'); setIsMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 p-2.5 bg-white/10 rounded-lg text-xs font-semibold text-white"
            >
              <User className="w-4 h-4 text-[#F5B942]" />
              Área do Aluno
            </button>
            <button
              onClick={() => { setActiveView('admin_portal'); setIsMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 p-2.5 bg-white/5 rounded-lg text-xs font-semibold text-slate-300"
            >
              <Shield className="w-4 h-4 text-[#F5B942]" />
              Painel Admin
            </button>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <button 
              onClick={() => handleNavClick('hero', 'home')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Início</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('modulos', 'home')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Aprenda Delivery</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('cursos', 'courses')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Cursos</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('como-funciona', 'home')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Como Funciona</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('servicos', 'services')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Serviços</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('blog', 'blog')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Blog</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('faq', 'home')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Perguntas Frequentes</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('contactos', 'contact')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-left"
            >
              <span>Contactos</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>

          <button
            onClick={() => {
              setActiveView('courses');
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#123B73] bg-[#F5B942] rounded-lg shadow"
          >
            COMEÇAR AGORA
          </button>

          <button
            onClick={() => {
              setIsDocsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-2 text-center text-xs text-slate-400 hover:text-white"
          >
            Guia de Arquitetura & Configuração Supabase
          </button>
        </div>
      )}
    </header>
  );
};
