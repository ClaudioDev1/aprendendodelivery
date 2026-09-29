import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { CORE_CURRICULUM_MODULES } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const CurriculumModules: React.FC = () => {
  const { setActiveView } = useApp();
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('mod-01');

  const toggleModule = (id: string) => {
    setExpandedModuleId(prev => (prev === id ? null : id));
  };

  return (
    <section id="modulos" className="py-20 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
              Plataforma de Formação Completa
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Aprenda tudo sobre Delivery
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
              A nossa grade curricular foi estruturada por especialistas que vivem o dia a dia da logística urbana e restauração comercial.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => {
                setActiveView('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2457A6] hover:bg-[#123B73] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>VER TODOS OS CURSOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CURRICULUM_MODULES.map((mod) => {
            const isExpanded = expandedModuleId === mod.id;
            return (
              <div 
                key={mod.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isExpanded ? 'border-[#2457A6] shadow-md ring-1 ring-[#2457A6]/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {/* Module Header Bar */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                    <span className="font-mono font-bold text-[#2457A6] bg-blue-50 px-2.5 py-1 rounded-md">
                      Módulo 0{mod.moduleNumber}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>{mod.lessons.length} Aulas Chave</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {mod.description}
                  </p>

                  {/* Bullet Summary */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {mod.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center gap-2 text-xs text-slate-700">
                        <PlayCircle className="w-3.5 h-3.5 text-[#2457A6] shrink-0" />
                        <span className="truncate">{lesson.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Syllabus Detail */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 bg-slate-50/70 -mx-6 -mb-6 p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Conteúdo Programático do Módulo:
                      </span>
                      {mod.lessons.map((lesson, idx) => (
                        <div key={lesson.id} className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                          <div className="flex items-center justify-between font-semibold text-slate-900 mb-1">
                            <span>0{idx + 1}. {lesson.title}</span>
                            <span className="text-slate-400 font-mono text-[11px] shrink-0 ml-2">{lesson.duration}</span>
                          </div>
                          <p className="text-slate-600 text-[11px] leading-relaxed">
                            {lesson.contentSummary}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Toggle */}
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full py-3 px-6 bg-slate-50 hover:bg-slate-100 border-t border-slate-100 text-xs font-semibold text-slate-700 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Recolher detalhes' : 'Ver programa detalhado'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-[#2457A6]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Floating Callout Bottom */}
        <div className="mt-12 bg-gradient-to-r from-[#123B73] to-[#2457A6] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-[#F5B942]">
              <Sparkles className="w-4 h-4" />
              <span>Material Prático Incluído</span>
            </div>
            <h4 className="text-xl font-bold">
              Descarregue planilhas de CMV, calculadoras de rotas e scripts de WhatsApp
            </h4>
            <p className="text-xs text-slate-200">
              Todas as aulas contêm ferramentas prontas para aplicar hoje mesmo no seu negócio.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveView('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow shrink-0 cursor-pointer active:scale-95"
          >
            INICIAR AGORA
          </button>
        </div>

      </div>
    </section>
  );
};
