import React from 'react';
import { Search, PlayCircle, Wrench, TrendingUp, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HowItWorks: React.FC = () => {
  const { setActiveView } = useApp();

  const steps = [
    {
      number: '01',
      title: 'Escolha o que quer aprender',
      description: 'Selecione a formação ideal para o seu momento: seja para abrir o seu primeiro delivery ou otimizar a sua frota existente.',
      icon: Search
    },
    {
      number: '02',
      title: 'Comece as aulas imediatamente',
      description: 'Assista às aulas práticas no seu telemóvel ou computador, com explicações directas ao ponto e sem enrolação teórica.',
      icon: PlayCircle
    },
    {
      number: '03',
      title: 'Aplique no seu negócio real',
      description: 'Utilize os nossos modelos de contratos, calculadoras de rotas, checklists térmicos e scripts de vendas prontos a usar.',
      icon: Wrench
    },
    {
      number: '04',
      title: 'Faça o seu Delivery crescer',
      description: 'Acompanhe a subida diária de pedidos, reduza o tempo de espera dos clientes e multiplique a sua margem de lucro.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Passo a Passo Simples
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Como funciona a nossa metodologia
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Um caminho prático e testado para transformar esforço disperso em lucro previsível.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2457A6]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-[#123B73]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2457A6] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#2457A6]">
                  <span>Etapa {idx + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setActiveView('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2457A6] hover:bg-[#123B73] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow cursor-pointer active:scale-95"
          >
            <span>COMEÇAR O MEU PROCESSO HOJE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
