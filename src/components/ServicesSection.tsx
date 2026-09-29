import React, { useState } from 'react';
import { 
  Globe, Smartphone, Layers, CreditCard, MessageSquare, 
  Briefcase, CheckCircle2, ArrowRight, Calculator, Send, Sparkles 
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const ServicesSection: React.FC = () => {
  const { submitLead, setActiveView } = useApp();
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['srv-01', 'srv-05']);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [cityZone, setCityZone] = useState('Luanda - Talatona');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const totalEstimatedPriceKz = selectedServiceIds.reduce((sum, id) => {
    const srv = SERVICES.find(s => s.id === id);
    return sum + (srv ? srv.estimatedPriceKz : 0);
  }, 0);

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    const selectedTitles = selectedServiceIds
      .map(id => SERVICES.find(s => s.id === id)?.title)
      .filter(Boolean) as string[];

    submitLead({
      type: 'service_quote',
      name: clientName,
      email: clientEmail || 'contacto@cliente.ao',
      phone: clientPhone,
      selectedServices: selectedTitles,
      estimatedBudget: `${totalEstimatedPriceKz.toLocaleString('pt-AO')} Kz`,
      message: `Zona de operação: ${cityZone}. Serviços selecionados: ${selectedTitles.join(', ')}`
    });

    setIsSubmitted(true);
  };

  return (
    <section id="servicos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Soluções Sob Medida para Empresas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Também ajudamos a criar o seu Delivery
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Se prefere que a nossa equipa especializada de engenharia e marketing monte a sua plataforma, configure os seus sistemas e treine a sua equipa, nós cuidamos de tudo.
          </p>
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((srv) => {
            const isSelected = selectedServiceIds.includes(srv.id);
            return (
              <div
                key={srv.id}
                onClick={() => toggleService(srv.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'border-[#2457A6] bg-blue-50/40 ring-1 ring-[#2457A6]/30 shadow-md' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2457A6] flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#123B73]">
                      A partir de {srv.estimatedPriceKz.toLocaleString('pt-AO')} Kz
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#2457A6]' : 'text-slate-400'}>
                    {isSelected ? '✓ Selecionado para Proposta' : '+ Clique para adicionar à cotação'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Quote & Project Generator */}
        <div className="bg-gradient-to-br from-[#123B73] to-[#1E4E8C] rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Summary of selected package */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-[#F5B942]">
                <Calculator className="w-4 h-4" />
                <span>Simulador de Investimento em Serviços</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Pacote Personalizado de Implementação
              </h3>

              <p className="text-xs sm:text-sm text-slate-200">
                Selecione os serviços acima para compor a sua solução. A nossa equipa entrega sistemas chaves-na-mão prontos a operar em menos de 14 dias úteis.
              </p>

              {/* Price Tag */}
              <div className="pt-4 border-t border-white/15">
                <div className="text-xs text-slate-300">Estimativa Prévia do Pacote ({selectedServiceIds.length} serviços selecionados):</div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#F5B942] mt-1">
                  {totalEstimatedPriceKz.toLocaleString('pt-AO')} Kz
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  *Valores sujeitos a confirmação após análise de requisitos específicos.
                </div>
              </div>
            </div>

            {/* Right Column: Direct Submission Form */}
            <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Pedido de Proposta Recebido!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Obrigado, <strong>{clientName}</strong>. Um dos nossos consultores de tecnologia entrará em contacto pelo WhatsApp <strong>{clientPhone}</strong> dentro de 4 horas úteis.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Simular outro pacote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRequestQuote} className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
                    Solicitar Proposta Formal Gratuita
                  </h4>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      O seu Nome / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Baptista - Hamburgueria Kilamba"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] focus:bg-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp para Contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+244 923 000 000"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] focus:bg-white outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email (Opcional)
                      </label>
                      <input
                        type="email"
                        placeholder="contacto@empresa.ao"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Cidade / Zona de Actuação
                    </label>
                    <select
                      value={cityZone}
                      onChange={(e) => setCityZone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] focus:bg-white outline-none"
                    >
                      <option value="Luanda - Talatona / Belas">Luanda - Talatona / Belas</option>
                      <option value="Luanda - Kilamba / Camama">Luanda - Kilamba / Camama</option>
                      <option value="Luanda - Centro / Maianga / Ingombota">Luanda - Centro / Maianga / Ingombota</option>
                      <option value="Luanda - Viana / Cazenga">Luanda - Viana / Cazenga</option>
                      <option value="Benguela / Lobito">Benguela / Lobito</option>
                      <option value="Huíla / Lubango">Huíla / Lubango</option>
                      <option value="Outra Província">Outra Província</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#2457A6] hover:bg-[#123B73] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>QUERO CRIAR O MEU DELIVERY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
