import React from 'react';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { useApp } from '../context/AppContext';

export const BlogSection: React.FC = () => {
  const { setSelectedArticle, setActiveView } = useApp();

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
    setActiveView('article_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
              Artigos & Estratégias Gratuitas
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Conteúdos para fazer o seu negócio crescer
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
              Análises de mercado, guias práticos e estudos de caso focados no ecossistema de delivery em Angola.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs text-slate-500 font-medium">
              Atualizado semanalmente com novos artigos
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((art) => (
            <div 
              key={art.id}
              onClick={() => handleOpenArticle(art)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#2457A6]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Article Image */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold text-white bg-[#123B73]/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {art.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#2457A6] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2457A6]">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
