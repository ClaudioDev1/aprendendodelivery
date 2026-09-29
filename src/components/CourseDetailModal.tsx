import React, { useState } from 'react';
import { 
  ArrowLeft, Star, Clock, BookOpen, CheckCircle, ShieldCheck, 
  Award, PlayCircle, HelpCircle, ChevronDown, ChevronUp, Share2, 
  Download, Sparkles, MessageCircle 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CourseDetailPage: React.FC = () => {
  const { selectedCourse, setActiveView, enrollInCourse, currentUser, showToast } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!selectedCourse) {
    return (
      <div className="py-32 text-center">
        <p className="text-slate-600">Nenhum curso selecionado.</p>
        <button 
          onClick={() => setActiveView('courses')}
          className="mt-4 px-6 py-2.5 bg-[#2457A6] text-white rounded-xl text-xs font-semibold"
        >
          Voltar aos Cursos
        </button>
      </div>
    );
  }

  const isEnrolled = currentUser.enrolledCourseIds.includes(selectedCourse.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link do curso copiado para a área de transferência!');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F8FAFC]">
      {/* Top Breadcrumb & Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => {
            setActiveView('courses');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2457A6] hover:text-[#123B73] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Catálogo de Cursos</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Course Content (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                <span className="font-semibold text-[#2457A6] bg-blue-50 px-2.5 py-1 rounded-md">
                  {selectedCourse.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>Nível {selectedCourse.level}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#F5B942] text-[#F5B942]" />
                  <span className="font-bold text-slate-800">{selectedCourse.rating}</span>
                  <span>({selectedCourse.reviewsCount} alunos avaliações)</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {selectedCourse.title}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedCourse.longDescription}
              </p>

              {/* Meta stats bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-100 text-center">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <Clock className="w-4 h-4 mx-auto text-[#2457A6] mb-1" />
                  <div className="text-xs text-slate-500">Carga Horária</div>
                  <div className="text-sm font-bold text-slate-900 font-mono">{selectedCourse.duration}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <BookOpen className="w-4 h-4 mx-auto text-[#2457A6] mb-1" />
                  <div className="text-xs text-slate-500">Aulas Gravadas</div>
                  <div className="text-sm font-bold text-slate-900 font-mono">{selectedCourse.totalLessons} lições</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <Award className="w-4 h-4 mx-auto text-[#F5B942] mb-1" />
                  <div className="text-xs text-slate-500">Certificação</div>
                  <div className="text-sm font-bold text-slate-900">Oficial</div>
                </div>
              </div>
            </div>

            {/* Course Video / Image Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video bg-slate-900">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#F5B942] text-[#123B73] mx-auto flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <PlayCircle className="w-8 h-8 fill-current" />
                  </div>
                  <span className="text-xs font-semibold text-white mt-3 block tracking-wide">
                    Assista à Aula 01 Demonstrativa Gratuitamente
                  </span>
                </div>
              </div>
            </div>

            {/* Highlights & What you will learn */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                O que vai dominar nesta formação
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCourse.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus / Modules Breakdown */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Conteúdo Programático Completo
                </h2>
                <span className="text-xs text-slate-500 font-mono">
                  {selectedCourse.modules.length} Módulos Especializados
                </span>
              </div>

              <div className="space-y-4">
                {selectedCourse.modules.map((mod, index) => (
                  <div key={mod.id} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50/80 p-4 border-b border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#2457A6] uppercase tracking-wide">
                          Módulo {index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                          {mod.title}
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        {mod.lessons.length} aulas
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100 p-2">
                      {mod.lessons.map((lesson) => (
                        <div key={lesson.id} className="p-3 flex items-center justify-between hover:bg-slate-50/50 rounded-lg transition-colors">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-4 h-4 text-[#2457A6] shrink-0" />
                            <div>
                              <div className="text-xs font-semibold text-slate-800">
                                {lesson.title}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">
                                {lesson.contentSummary}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-slate-400 shrink-0 ml-3">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Profile */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Formador do Curso
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={selectedCourse.instructor.avatar}
                  alt={selectedCourse.instructor.name}
                  className="w-20 h-20 rounded-2xl object-cover shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {selectedCourse.instructor.name}
                  </h3>
                  <div className="text-xs font-medium text-[#2457A6] mb-2">
                    {selectedCourse.instructor.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedCourse.instructor.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Course Specific FAQs */}
            {selectedCourse.faqs && selectedCourse.faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Perguntas Frequentes Sobre o Curso
                </h2>
                <div className="space-y-3">
                  {selectedCourse.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-[#2457A6]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </button>
                        {isOpen && (
                          <div className="p-4 text-xs text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Sidebar Checkout & Guarantee (Right 4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl">
              
              <div className="text-center pb-5 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Começar este curso hoje
                </span>
                <div className="text-3xl font-extrabold text-[#123B73] font-mono mt-1">
                  {selectedCourse.priceFormatted}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Pagamento seguro por Multicaixa Express, Transferência ou Cartão
                </div>
              </div>

              {/* Action Button */}
              <div className="py-5 space-y-3">
                {isEnrolled ? (
                  <button
                    onClick={() => {
                      setActiveView('student_portal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ACEDER ÀS AULAS (JÁ INSCRITO)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => enrollInCourse(selectedCourse.id)}
                    className="w-full py-4 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>INSCREVER-ME AGORA</span>
                  </button>
                )}

                <button
                  onClick={handleShare}
                  className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Partilhar com um Colega</span>
                </button>
              </div>

              {/* Course Includes List */}
              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="font-bold text-slate-900 text-xs mb-1">
                  Esta inscrição inclui:
                </div>
                <div className="flex items-center gap-2.5">
                  <PlayCircle className="w-4 h-4 text-[#2457A6] shrink-0" />
                  <span>Acesso vitalício às {selectedCourse.totalLessons} aulas gravadas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-[#2457A6] shrink-0" />
                  <span>Planilhas de CMV, precificação e scripts de WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#F5B942] shrink-0" />
                  <span>Certificado Oficial com código de autenticação</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Acesso ao grupo exclusivo de empreendedores no WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2457A6] shrink-0" />
                  <span>Garantia incondicional de satisfação de 7 dias</span>
                </div>
              </div>

            </div>

            {/* Support Quick Box */}
            <div className="bg-[#123B73] text-white p-5 rounded-2xl text-xs space-y-2">
              <div className="font-bold text-sm text-[#F5B942]">Dúvidas antes de comprar?</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Fale com a nossa equipa de apoio ao aluno pelo WhatsApp e tire todas as suas dúvidas.
              </p>
              <a
                href="https://wa.me/244923456789?text=Olá! Gostaria de esclarecer dúvidas sobre o curso de Delivery."
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 font-bold text-white underline hover:text-[#F5B942]"
              >
                Conversar pelo WhatsApp →
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
