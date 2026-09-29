import React from 'react';
import { Users, BookOpen, Clock, Award, ShieldCheck, TrendingUp } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '+1.000',
      label: 'Pessoas e Empreendedores',
      sublabel: 'Capacitados em Angola',
      icon: Users
    },
    {
      value: '+100',
      label: 'Conteúdos Educativos',
      sublabel: 'Aulas, planilhas e scripts',
      icon: BookOpen
    },
    {
      value: '+50',
      label: 'Temas de Formação',
      sublabel: 'Do primeiro pedido à frota',
      icon: Award
    },
    {
      value: '24/7',
      label: 'Aprendizagem Online',
      sublabel: 'No telemóvel ou computador',
      icon: Clock
    },
    {
      value: '+45',
      label: 'Empresas & Dark Kitchens',
      sublabel: 'Aceleradas em Luanda',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 bg-[#123B73] text-white border-b border-[#2457A6]/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F5B942]/40 transition-colors"
              >
                <Icon className="w-5 h-5 mx-auto text-[#F5B942] mb-3" />
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-2">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
