import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CtaFinal: React.FC = () => {
  const { setActiveView } = useApp();

  return (
    <section className="py-24 bg-gradient-to-br from-[#123B73] via-[#0E2F5E] to-[#0A2244] text-white relative overflow-hidden">
      {/* Decorative Orbs & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#4A90E2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#F5B942]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#F5B942] mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>Acelere os seus Resultados</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          A sua ideia de Delivery pode começar hoje.
        </h2>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Aprenda, coloque em prática e construa um negócio preparado para crescer de forma rentável e organizada.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveView('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>COMEÇAR AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setActiveView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#F5B942]" />
            <span>FALAR COM UM ESPECIALISTA</span>
          </button>
        </div>

        {/* Reassurance */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#F5B942]" />
            Garantia incondicional de 7 dias
          </span>
          <span className="hidden sm:inline">·</span>
          <span>Acesso imediato às aulas gravadas</span>
          <span className="hidden sm:inline">·</span>
          <span>Certificado emitido após conclusão</span>
        </div>

      </div>
    </section>
  );
};
