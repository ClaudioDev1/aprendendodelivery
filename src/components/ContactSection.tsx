import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, Clock, 
  CheckCircle2, ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactSection: React.FC = () => {
  const { submitLead } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Informações sobre os Cursos');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    submitLead({
      type: 'contact',
      name,
      email: email || 'sem-email@cliente.ao',
      phone,
      subject,
      message
    });

    setIsSent(true);
  };

  return (
    <section id="contactos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Estamos Aqui Para Ajudar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Fale com a Aprendendo Delivery
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Seja para esclarecer dúvidas sobre os cursos, contratar consultoria ou solicitar uma plataforma completa de entregas, fale connosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Map Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Box */}
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Atendimento Imediato via WhatsApp</h4>
                  <p className="text-xs text-slate-600">Tempo de resposta médio: 5 minutos</p>
                </div>
              </div>
              <a
                href="https://wa.me/244923456789?text=Olá! Gostaria de falar com a equipa da Aprendendo Delivery."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>INICIAR CONVERSA NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Details List */}
            <div className="p-6 bg-[#F8FAFC] border border-slate-200 rounded-2xl space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2457A6] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Telefones Directos</div>
                  <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">+244 923 456 789</div>
                  <div className="text-xs text-slate-600 font-mono">+244 912 888 777</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2457A6] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Correio Electrónico</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">contacto@aprendendodelivery.ao</div>
                  <div className="text-xs text-slate-500">pedagogico@aprendendodelivery.ao</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2457A6] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Localização e Escritórios</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Edifício Kilamba Plaza, Bloco B, 3º Andar</div>
                  <div className="text-xs text-slate-600">Talatona / Kilamba, Luanda - Angola</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2457A6] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Horário de Funcionamento</div>
                  <div className="text-xs font-medium text-slate-800 mt-0.5">Segunda a Sexta: 08h00 às 18h00</div>
                  <div className="text-xs text-slate-600">Sábados: 09h00 às 13h00 (Suporte Online)</div>
                </div>
              </div>
            </div>

            {/* Styled Map Representation */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-[#E2E8F0] p-4 text-center">
              <div className="w-full h-36 bg-gradient-to-tr from-slate-200 via-blue-100 to-slate-200 rounded-xl relative flex items-center justify-center overflow-hidden">
                {/* Visual road lines representation */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2457A6_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute w-full h-1 bg-amber-400 top-1/2 -translate-y-1/2 rotate-12" />
                <div className="absolute h-full w-1 bg-blue-400 left-1/3 rotate-45" />

                <div className="relative z-10 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-600 fill-rose-600" />
                  <span>Sede Aprendendo Delivery · Luanda</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 rounded-2xl">
            {isSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Mensagem Enviada!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Agradecemos a sua mensagem, <strong>{name}</strong>. A nossa equipa entrará em contacto através do número <strong>{phone}</strong> com brevidade.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-5 py-2.5 bg-[#2457A6] text-white text-xs font-semibold rounded-xl"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Envie a sua Mensagem Directa
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Ferreira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+244 923 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.ao"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Assunto Principal
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] outline-none"
                    >
                      <option value="Informações sobre os Cursos">Informações sobre os Cursos</option>
                      <option value="Criação de Website ou App">Criação de Website ou App de Delivery</option>
                      <option value="Consultoria para Restaurantes">Consultoria para Restaurantes / Negócios</option>
                      <option value="Treinamento de Frotas de Motoboys">Treinamento de Frotas de Motoboys</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mensagem Detalhada *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva a sua ideia, necessidade ou dúvida..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#2457A6] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2457A6] hover:bg-[#123B73] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>ENVIAR MENSAGEM</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
