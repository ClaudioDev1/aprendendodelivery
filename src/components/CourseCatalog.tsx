import React, { useState } from 'react';
import { Star, Clock, BookOpen, ArrowRight, Bookmark, Check, ShieldCheck } from 'lucide-react';
import { Course } from '../types';
import { useApp } from '../context/AppContext';

export const CourseCatalog: React.FC = () => {
  const { allCourses, setSelectedCourse, setActiveView, toggleFavorite, currentUser } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Iniciante',
    'Intermédio',
    'Avançado',
    'Marketing',
    'Gestão',
    'Tecnologia',
    'Empreendedorismo'
  ];

  const filteredCourses = allCourses.filter(course => {
    if (selectedCategory === 'Todos') return true;
    return course.category === selectedCategory || course.level === selectedCategory;
  });

  const handleOpenCourse = (course: Course) => {
    setSelectedCourse(course);
    setActiveView('course_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="cursos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2457A6]">
            Formação Especializada
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Cursos para transformar conhecimento em negócio
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Formações completas concebidas para a realidade económica, operacional e tecnológica de Angola e mercados lusófonos.
          </p>
        </div>

        {/* Filter Controls (Segmented Control conforming to skill: functional buttons, clean segmented background) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit md:mx-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#123B73] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const isEnrolled = currentUser.enrolledCourseIds.includes(course.id);
            const isFav = currentUser.favorites.includes(course.id);

            return (
              <div 
                key={course.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-[#2457A6]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Course Image Header with Scrim */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Tag (Clean, unboxed or minimal pill as interactive) */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold tracking-wide text-white bg-[#123B73]/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {course.category}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(course.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors ${
                      isFav ? 'bg-[#F5B942] text-[#123B73]' : 'bg-black/40 hover:bg-black/60 text-white'
                    }`}
                    title={isFav ? 'Remover dos favoritos' : 'Guardar nos favoritos'}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white">
                    <Star className="w-3.5 h-3.5 fill-[#F5B942] text-[#F5B942]" />
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-slate-300 text-[11px]">({course.reviewsCount} avaliações)</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                      <span>Nível: {course.level}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {course.duration}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-slate-400" />
                        {course.totalLessons} aulas
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2457A6] transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Instructor Row */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-7 h-7 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-slate-800 block leading-tight">{course.instructor.name}</span>
                        <span className="text-[10px] text-slate-500 line-clamp-1">{course.instructor.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Price & CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Investimento Único
                      </span>
                      <span className="text-xl font-extrabold text-[#123B73] font-mono">
                        {course.priceFormatted}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isEnrolled ? (
                        <button
                          onClick={() => handleOpenCourse(course)}
                          className="px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Inscrito</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOpenCourse(course)}
                          className="px-4 py-2 bg-[#2457A6] hover:bg-[#123B73] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm group-hover:bg-[#123B73]"
                        >
                          <span>Ver Curso</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
