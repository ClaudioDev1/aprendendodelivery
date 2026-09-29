import React from 'react';
import { 
  Instagram, Facebook, Linkedin, Youtube, ArrowRight, 
  Mail, Shield, FileText, ExternalLink 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setActiveView, scrollToSection, setIsDocsModalOpen } = useApp();

  return (
    <footer className="bg-[#0A2244] text-slate-300 pt-16 pb-12 border-t border-[#123B73]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Description (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2457A6] to-[#4A90E2] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#123B73] rounded-[10px] flex items-center justify-center text-[#F5B942] font-black text-sm">
                  AD
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                APRENDENDO<span className="text-[#F5B942]"> DELIVERY</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              A plataforma pioneira em Angola e na África lusófona dedicada a ensinar, estruturar, gerir e acelerar negócios de delivery rentáveis, desde o primeiro pedido até à frota de estafetas.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5B942] hover:text-[#123B73] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5B942] hover:text-[#123B73] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5B942] hover:text-[#123B73] flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F5B942] hover:text-[#123B73] flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Plataforma Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5B942]">
              Plataforma
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Catálogo de Cursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('modulos')}
                  className="hover:text-white transition-colors"
                >
                  Aprenda Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Serviços para Empresas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Blog & Artigos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Suporte & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5B942]">
              Suporte & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { setActiveView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Contactos & Apoio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-white transition-colors"
                >
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsDocsModalOpen(true)}
                  className="hover:text-white transition-colors text-amber-200/90 flex items-center gap-1"
                >
                  <span>Manual do Projecto (Supabase)</span>
                </button>
              </li>
              <li>
                <span className="text-slate-400">Termos e Condições</span>
              </li>
              <li>
                <span className="text-slate-400">Política de Privacidade</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Acesso Rápido */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5B942]">
              Portais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { setActiveView('student_portal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white text-slate-200 transition-colors font-semibold"
                >
                  → Área do Aluno (Entrar)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('admin_portal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white text-slate-200 transition-colors font-semibold"
                >
                  → Painel Administrativo
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-400">
                Atendimento WhatsApp: <br />
                <span className="text-white font-mono font-bold">+244 923 456 789</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Aprendendo Delivery. Todos os direitos reservados. Luanda, Angola.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Desenvolvido com Tecnologia & Rigor Operacional</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
