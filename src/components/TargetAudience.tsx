import React from 'react';
import { Briefcase, UtensilsCrossed, Store, Bike, Megaphone, Building2, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TargetAudience: React.FC = () => {
  const { setActiveView } = useApp();

  const audiences = [
    {
      title: 'Empreendedores',
      subtitle: 'Para quem quer começar um novo negócio',
      icon: Briefcase,
      benefit: 'Aprenda a estruturar um delivery do zero, sem perder capital em erros evitáveis e com lucro sustentável desde o início.'
    },
    {
      title: 'Restaurantes & Lanchonetes',
      subtitle: 'Para aumentar os pedidos online',
      icon: UtensilsCrossed,
      benefit: 'Elimine a dependência de salão aberto e conquiste dezenas de pedidos diários direto pelo WhatsApp e canais próprios.'
    },
    {
      title: 'Lojas & Comércio Local',
      subtitle: 'Para lojas que querem implementar entregas',
      icon: Store,
      benefit: 'Leve as suas roupas, cosméticos, eletrónicos ou farmácia até à porta do cliente em poucas horas na mesma cidade.'
    },
    {
      title: 'Motoboys & Estafetas',
      subtitle: 'Para trabalhar profissionalmente com entregas',
      icon: Bike,
      benefit: 'Profissionalize o seu serviço, aprenda atendimento de excelência, gestão de rotas e crie a sua própria carteira de clientes.'
    },
    {
      title: 'Profissionais de Marketing',
      subtitle: 'Para quem trabalha com negócios locais',
      icon: Megaphone,
      benefit: 'Domine a arte de gerar vendas para clientes do ramo gastronómico e de retalho através de anúncios locais e funis de WhatsApp.'
    },
    {
      title: 'Empresas & Franquias',
      subtitle: 'Para implementar ou modernizar sistemas',
      icon: Building2,
      benefit: 'Implemente tecnologia de ponta, padronize equipas e crie centros de distribuição e cozinhas industriais eficientes.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Perfis de Alunos & Parceiros
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            O Aprendendo Delivery é para si
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Desenvolvemos formações e soluções específicas para cada etapa da sua jornada profissional.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div 
                key={aud.title}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:border-[#2457A6]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2457A6] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {aud.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#2457A6] mt-0.5 mb-3">
                    {aud.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {aud.benefit}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Conteúdos e ferramentas dedicadas</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Ainda na dúvida sobre qual é a formação ideal para o seu perfil?
          </p>
          <button
            onClick={() => setActiveView('contact')}
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Fale com um Orientador Pedagógico
          </button>
        </div>

      </div>
    </section>
  );
};
