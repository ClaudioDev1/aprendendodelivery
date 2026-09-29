import React from 'react';
import { 
  Clock, Zap, CheckCircle2, DollarSign, ShieldCheck, 
  Cpu, Megaphone, TrendingUp 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BenefitsSection: React.FC = () => {
  const { setActiveView } = useApp();

  const benefits = [
    {
      title: 'Aprenda no seu próprio ritmo',
      description: 'Acesse quando puder, sem horários fixos. Reveja as aulas no trânsito ou nas horas livres no telemóvel.',
      icon: Clock
    },
    {
      title: 'Conteúdo 100% prático e real',
      description: 'Zero teorias inúteis: tudo é focado na operação real das ruas, motos, embalagens e clientes de Angola.',
      icon: Zap
    },
    {
      title: 'Conhecimento aplicável imediato',
      description: 'Modelos de checklist, planilhas de precificação e scripts prontos para copiar e colar na sua rotina.',
      icon: CheckCircle2
    },
    {
      title: 'Estratégias de vendas comprovadas',
      description: 'Engenharia de cardápio, combos irresistíveis e técnicas de fidelização que aumentam o ticket médio.',
      icon: DollarSign
    },
    {
      title: 'Gestão profissional de estafetas',
      description: 'Como recrutar, treinar, bonificar e liderar motoboys evitando avarias, atrasos e litígios.',
      icon: ShieldCheck
    },
    {
      title: 'Tecnologia sem complicações',
      description: 'Implementação de pedidos online, catálogos digitais e pagamentos automáticos sem depender de apps caros.',
      icon: Cpu
    },
    {
      title: 'Marketing e tráfego local certeiro',
      description: 'Atraia clientes num raio de 3 a 5 km com anúncios de baixo custo no Instagram e WhatsApp.',
      icon: Megaphone
    },
    {
      title: 'Expansão segura do negócio',
      description: 'Aprenda a estruturar Dark Kitchens e abrir pontos de entrega em novas zonas urbanas com baixo risco.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Diferenciais Competitivos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Por que aprender Delivery connosco?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            O mercado não tolera amadorismo. A capacitação estruturada é a diferença entre um delivery que fecha em 3 meses e uma operação que gera lucro diário.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2457A6]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2457A6] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setActiveView('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-[#2457A6] hover:bg-[#123B73] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer active:scale-95"
          >
            QUERO APRENDER AGORA
          </button>
        </div>

      </div>
    </section>
  );
};
