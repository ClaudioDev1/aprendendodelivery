import React, { useState } from 'react';
import { Mail, CheckCircle2, Download, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NewsletterSection: React.FC = () => {
  const { submitLead, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    submitLead({
      type: 'newsletter',
      name: 'Subscritor Newsletter',
      email: email,
      message: 'Download do Guia Prático: Checklist para Iniciar um Delivery em 7 Dias'
    });

    setIsSubscribed(true);
    showToast('Guia enviado para o seu email com sucesso!');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#123B73] to-[#0A2540] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#F5B942] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Guia Digital Gratuito 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Receba dicas para criar e fazer crescer o seu Delivery
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Receba estratégias, novidades, oportunidades e conteúdos gratuitos directamente no seu email. Ganhe de imediato o nosso <strong>Checklist Operacional em PDF</strong>.
          </p>

          <div className="mt-8 max-w-md mx-auto">
            {isSubscribed ? (
              <div className="p-6 bg-white/10 border border-emerald-400/40 rounded-2xl backdrop-blur-md text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Inscrição Confirmada!</h4>
                <p className="text-xs text-slate-300">
                  Enviámos o checklist para <strong>{email}</strong>. Verifique a sua caixa de entrada ou spam.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="mt-2 text-xs text-[#F5B942] underline hover:text-white"
                >
                  Registar outro email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite o seu melhor email..."
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B942] focus:bg-white/15"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  QUERO RECEBER
                </button>
              </form>
            )}
            <p className="text-[11px] text-slate-400 mt-3">
              Não enviamos spam. Pode cancelar a subscrição a qualquer momento com 1 clique.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
