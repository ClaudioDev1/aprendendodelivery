import React from 'react';
import { Rocket, Layers, BarChart3, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PillarsSection: React.FC = () => {
  const { setActiveView } = useApp();

  const pillars = [
    {
      step: '01',
      title: 'Criar',
      icon: Rocket,
      description: 'Aprenda a estruturar um negócio de delivery desde o princípio, mesmo a começar em casa.',
      points: [
        'Validação de demanda e escolha de nicho lucrativo',
        'Cálculo de custos operacionais e margem líquida',
        'Selecção de embalagens térmicas e equipamentos'
      ],
      color: 'from-blue-600 to-indigo-700'
    },
    {
      step: '02',
      title: 'Gerir',
      icon: Layers,
      description: 'Aprenda a organizar pedidos, clientes, estafetas/motoboys, produtos e operações diárias.',
      points: [
        'Triagem de pedidos sem atrasos nos picos',
        'Contratação e remuneração de estafetas pontuais',
        'Gestão de stocks e controlo rigoroso de desperdícios'
      ],
      color: 'from-sky-600 to-blue-700'
    },
    {
      step: '03',
      title: 'Vender',
      icon: BarChart3,
      description: 'Aprenda técnicas de marketing digital, atendimento persuasivo no WhatsApp e conversão.',
      points: [
        'Anúncios locais direcionados por geolocalização',
        'Scripts de venda e atendimento em menos de 2 minutos',
        'Fotografia de produto atraente com telemóvel'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      step: '04',
      title: 'Crescer',
      icon: TrendingUp,
      description: 'Aprenda estratégias para multiplicar os pedidos, reter clientes e expandir para novas filiais.',
      points: [
        'Combos e engenharia de cardápio de alto ticket',
        'Programas de cashback e fidelização contínua',
        'Modelo de Dark Kitchen e franquias'
      ],
      color: 'from-emerald-600 to-teal-700'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Pilares da Metodologia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Tudo o que precisa para entrar no mundo do Delivery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Aprendendo Delivery é uma plataforma criada para ensinar, orientar e ajudar empreendedores a transformar uma ideia de delivery num negócio estruturado, organizado e preparado para crescer.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="group relative bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#2457A6]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2457A6]/10 text-[#2457A6] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#2457A6]/30 transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-200/80">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-tight">
                        <Check className="w-3.5 h-3.5 text-[#2457A6] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setActiveView('courses')}
                  className="w-full mt-auto py-2.5 px-3 bg-white hover:bg-[#2457A6] text-[#2457A6] hover:text-white border border-slate-200 hover:border-[#2457A6] rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explorar Módulos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
