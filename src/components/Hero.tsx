import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Play, Bike, TrendingUp, Bell, MapPin, ShieldCheck, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { setActiveView, scrollToSection } = useApp();
  const [activeNotificationIndex, setActiveNotificationIndex] = useState(0);

  const notifications = [
    { text: 'Novo Pedido #4082 · 3x Combos Burger · Kilamba', time: 'Agora mesmo', tag: 'Despacho' },
    { text: 'Estafeta Tukoo #4082 em trânsito · Chegada em 12 min', time: 'Há 1 min', tag: 'Frota Tukoo' },
    { text: 'Pagamento Multicaixa Express 14.500 Kz recebido', time: 'Há 3 min', tag: 'Automático' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotificationIndex((prev) => (prev + 1) % notifications.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [notifications.length]);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#123B73] via-[#1A4480] to-[#123B73] text-white">
      {/* Background Subtle Tech Grid & Ambient Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A90E2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-[#F5B942]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Editorial Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Turma Outubro 2026 Aberta</span>
              <span className="text-white/40">·</span>
              <span className="text-slate-300">Formação 100% Prática em Angola</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              APRENDA DELIVERY. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B942] to-amber-200">
                CRIE O SEU NEGÓCIO.
              </span> <br />
              VENDA MAIS.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Descubra como criar, organizar e fazer crescer um negócio de delivery sustentável, mesmo começando do zero a partir de casa ou modernizando o seu restaurante.
            </p>

            {/* CTA Buttons Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  setActiveView('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>COMEÇAR A APRENDER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('cursos')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXPLORAR CURSOS</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F5B942] shrink-0" />
                <span>Casos reais de Luanda</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F5B942] shrink-0" />
                <span>Certificado Reconhecido</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F5B942] shrink-0" />
                <span>Acesso Imediato 24/7</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Smartphone Mockup, Route Card and Courier Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Generated High Quality Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0e2c56]">
                <img
                  src="/src/assets/images/hero_delivery_tukoo_1790671957715.jpg"
                  alt="Estafeta profissional Tukoo com mochila e capacete azul-lapiseira em Luanda"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B73] via-transparent to-black/20" />

                {/* Live Floating Order Status Pill Inside */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-[#123B73]/90 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl transition-all duration-500">
                    <div className="flex items-center justify-between text-xs text-slate-300 pb-1.5 border-b border-white/10">
                      <div className="flex items-center gap-1.5 font-medium text-white">
                        <Bike className="w-3.5 h-3.5 text-[#F5B942]" />
                        <span>Operação ao Vivo</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#F5B942]">{notifications[activeNotificationIndex].tag}</span>
                    </div>
                    <div className="pt-1.5 flex items-center justify-between">
                      <p className="text-xs font-semibold text-white truncate max-w-[240px]">
                        {notifications[activeNotificationIndex].text}
                      </p>
                      <span className="text-[10px] text-slate-300 shrink-0 font-mono">
                        {notifications[activeNotificationIndex].time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Card: Real Metric */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                      <div className="text-[11px] text-slate-300">Tempo Médio Despacho</div>
                      <div className="text-lg font-bold text-white font-mono">18 min</div>
                      <div className="text-[10px] text-emerald-400 font-medium">↓ 60% vs. manual</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                      <div className="text-[11px] text-slate-300">Ticket Médio Otimizado</div>
                      <div className="text-lg font-bold text-[#F5B942] font-mono">+42% Kz</div>
                      <div className="text-[10px] text-slate-200">Combos & Upsell</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Badges Outside */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white text-slate-900 px-4 py-3 rounded-xl shadow-xl border border-slate-100 z-20">
                <div className="w-10 h-10 rounded-lg bg-[#2457A6] flex items-center justify-center text-white shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#F5B942]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#123B73]">+1.000 Alunos & Negócios</div>
                  <div className="text-[11px] text-slate-500">Transformando o delivery em Angola</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner Divider Info */}
        <div className="mt-16 pt-8 border-t border-white/15 text-center">
          <p className="text-xs sm:text-sm tracking-wide text-slate-300 font-medium flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-white font-semibold">Conteúdo prático</span>
            <span className="text-[#F5B942]">·</span>
            <span className="text-white font-semibold">Estratégias reais</span>
            <span className="text-[#F5B942]">·</span>
            <span className="text-white font-semibold">Tecnologia</span>
            <span className="text-[#F5B942]">·</span>
            <span className="text-white font-semibold">Gestão</span>
            <span className="text-[#F5B942]">·</span>
            <span className="text-white font-semibold">Marketing</span>
          </p>
        </div>

      </div>
    </section>
  );
};
