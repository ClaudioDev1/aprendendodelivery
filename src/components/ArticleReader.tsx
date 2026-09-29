import React from 'react';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ArticleReader: React.FC = () => {
  const { selectedArticle, setActiveView, showToast } = useApp();

  if (!selectedArticle) {
    return (
      <div className="py-32 text-center">
        <p className="text-slate-600">Nenhum artigo selecionado.</p>
        <button
          onClick={() => setActiveView('blog')}
          className="mt-4 px-6 py-2 bg-[#2457A6] text-white text-xs font-semibold rounded-xl"
        >
          Voltar ao Blog
        </button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link do artigo copiado com sucesso!');
    }
  };

  return (
    <article className="pt-24 pb-20 bg-[#F8FAFC]">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => {
            setActiveView('blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2457A6] hover:text-[#123B73] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar a Todos os Artigos</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-sm">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-semibold text-[#2457A6] bg-blue-50 px-2.5 py-1 rounded-md">
              {selectedArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {selectedArticle.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {selectedArticle.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {selectedArticle.title}
          </h1>

          {/* Author bar */}
          <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#123B73] text-white flex items-center justify-center font-bold text-xs">
                {selectedArticle.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {selectedArticle.author.name}
                </div>
                <div className="text-[11px] text-slate-500">
                  {selectedArticle.author.role} · Equipa Pedagógica
                </div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Partilhar</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-8 bg-slate-100">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
            {selectedArticle.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-900 pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('* ')) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-600">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Bottom CTA Box inside Article */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#123B73] to-[#2457A6] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5B942]">
                Aprofunde o seu Conhecimento
              </span>
              <h4 className="text-lg font-bold mt-1">
                Quer aplicar este conhecimento passo a passo?
              </h4>
              <p className="text-xs text-slate-200 mt-1">
                Conheça os nossos cursos práticos com modelos de documentos e acompanhamento.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveView('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow shrink-0 cursor-pointer"
            >
              VER CURSOS DISPONÍVEIS
            </button>
          </div>

        </div>
      </div>
    </article>
  );
};
