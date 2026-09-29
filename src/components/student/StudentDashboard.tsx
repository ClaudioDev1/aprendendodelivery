import React, { useState } from 'react';
import { 
  BookOpen, Award, CheckCircle2, Clock, PlayCircle, 
  Bookmark, User, Settings, ArrowRight, FileText, Download, 
  Check, Save, Sparkles, AlertCircle, LogOut 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Course, Lesson } from '../../types';
import { CertificateModal } from './CertificateModal';

export const StudentDashboard: React.FC = () => {
  const { 
    currentUser, 
    setCurrentUser, 
    allCourses, 
    toggleCompleteLesson, 
    setActiveView,
    selectedCertificate,
    setSelectedCertificate,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'classroom' | 'certificates' | 'favorites' | 'profile'>('overview');
  const [selectedCourseForClass, setSelectedCourseForClass] = useState<Course>(() => {
    const enrolled = allCourses.filter(c => currentUser.enrolledCourseIds.includes(c.id));
    return enrolled[0] || allCourses[0];
  });

  const [activeLesson, setActiveLesson] = useState<Lesson>(() => {
    return selectedCourseForClass.modules[0]?.lessons[0] || {
      id: 'default',
      title: 'Aula Inaugural',
      duration: '15 min',
      type: 'video',
      contentSummary: 'Bem-vindo ao curso!'
    };
  });

  const [studentNote, setStudentNote] = useState('Dica do professor: Manter o tempo de triagem de pedidos abaixo de 3 minutos no WhatsApp para evitar cancelamentos.');

  // Calculate enrolled courses
  const enrolledCourses = allCourses.filter(c => currentUser.enrolledCourseIds.includes(c.id));
  const favoriteCourses = allCourses.filter(c => currentUser.favorites.includes(c.id));

  // Compute total lessons and completed count
  const allEnrolledLessons = enrolledCourses.flatMap(c => c.modules.flatMap(m => m.lessons));
  const completedLessonsInEnrolled = allEnrolledLessons.filter(l => currentUser.completedLessonIds.includes(l.id));
  const progressOverallPercent = allEnrolledLessons.length > 0 
    ? Math.round((completedLessonsInEnrolled.length / allEnrolledLessons.length) * 100) 
    : 0;

  const handleSelectLesson = (lesson: Lesson, course: Course) => {
    setSelectedCourseForClass(course);
    setActiveLesson(lesson);
    setActiveTab('classroom');
  };

  const handleSaveNotes = () => {
    showToast('Anotações do aluno guardadas com sucesso!');
  };

  return (
    <div className="pt-24 pb-20 bg-[#F4F7FB] min-h-screen">
      
      {/* Certificate Modal Viewer */}
      <CertificateModal 
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Greeting Banner */}
        <div className="bg-gradient-to-r from-[#123B73] via-[#1F4C8C] to-[#123B73] rounded-3xl p-6 sm:p-8 text-white shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#F5B942] shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                    Olá, {currentUser.name}!
                  </h1>
                  <span className="px-2 py-0.5 bg-[#F5B942] text-[#123B73] rounded text-[10px] font-bold uppercase">
                    Aluno Activo
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Continue a aprender e transforme conhecimento em resultados reais para o seu negócio de delivery.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedCourseForClass(enrolledCourses[0] || allCourses[0]);
                  setActiveTab('classroom');
                }}
                className="px-5 py-2.5 bg-[#F5B942] hover:bg-[#ffc65c] text-[#123B73] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer active:scale-95 whitespace-nowrap"
              >
                CONTINUAR APRENDIZAGEM
              </button>
            </div>
          </div>

          {/* Quick Progress Bar */}
          <div className="mt-6 pt-6 border-t border-white/15">
            <div className="flex items-center justify-between text-xs text-slate-200 mb-2">
              <span>Progresso Global das Formações</span>
              <span className="font-mono font-bold text-[#F5B942]">{progressOverallPercent}% Concluído</span>
            </div>
            <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#F5B942] rounded-full transition-all duration-500"
                style={{ width: `${progressOverallPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout (Sidebar 3 cols, Content 9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                activeTab === 'overview' ? 'bg-[#123B73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Visão Geral</span>
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                activeTab === 'courses' ? 'bg-[#123B73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <PlayCircle className="w-4 h-4" />
                <span>Meus Cursos</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#2457A6]">
                {enrolledCourses.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('classroom')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                activeTab === 'classroom' ? 'bg-[#123B73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Sala de Aula / Player</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                activeTab === 'certificates' ? 'bg-[#123B73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4" />
                <span>Certificados</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-[#D97706]">
                {currentUser.certificates.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                activeTab === 'favorites' ? 'bg-[#123B73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bookmark className="w-4 h-4" />
                <span>Favoritos</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {favoriteCourses.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${
                activeTab === 'profile' ? 'bg-[#123B73] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Perfil & Definições</span>
            </button>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveView('home');
                  showToast('Sessão terminada.');
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-xs font-medium text-slate-400 hover:text-rose-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair da Conta</span>
              </button>
            </div>
          </div>

          {/* Main Display Area (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-500">Cursos Activos</div>
                    <div className="text-2xl font-extrabold text-[#123B73] font-mono mt-1">
                      {enrolledCourses.length}
                    </div>
                    <div className="text-[11px] text-emerald-600 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Inscrições Válidas</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-500">Aulas Concluídas</div>
                    <div className="text-2xl font-extrabold text-[#123B73] font-mono mt-1">
                      {currentUser.completedLessonIds.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      De {allEnrolledLessons.length} aulas inscritas
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-500">Certificados Oficiais</div>
                    <div className="text-2xl font-extrabold text-[#F5B942] font-mono mt-1">
                      {currentUser.certificates.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Pronto para descarregar
                    </div>
                  </div>
                </div>

                {/* Last Course Accessed */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                      Último Curso Acessado
                    </h3>
                    <span className="text-xs font-semibold text-[#2457A6]">
                      Continuar de onde parou
                    </span>
                  </div>

                  {enrolledCourses.length > 0 ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <img
                        src={enrolledCourses[0].image}
                        alt={enrolledCourses[0].title}
                        className="w-full sm:w-36 h-24 object-cover rounded-lg"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 space-y-1 text-center sm:text-left">
                        <div className="text-[11px] font-bold text-[#2457A6] uppercase">
                          {enrolledCourses[0].category}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {enrolledCourses[0].title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          Próxima lição: {enrolledCourses[0].modules[0]?.lessons[1]?.title || 'Introdução'}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedCourseForClass(enrolledCourses[0]);
                          setActiveLesson(enrolledCourses[0].modules[0]?.lessons[0]);
                          setActiveTab('classroom');
                        }}
                        className="px-5 py-2.5 bg-[#2457A6] hover:bg-[#123B73] text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                      >
                        Abrir Aula
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-6 text-xs text-slate-500">
                      Ainda não está inscrito em nenhum curso.
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB: MY COURSES */}
            {activeTab === 'courses' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">
                    Meus Cursos Inscritos ({enrolledCourses.length})
                  </h3>
                  <button
                    onClick={() => setActiveView('courses')}
                    className="text-xs font-semibold text-[#2457A6] hover:underline"
                  >
                    + Explorar mais cursos
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {enrolledCourses.map((c) => {
                    const cLessons = c.modules.flatMap(m => m.lessons);
                    const completedInC = cLessons.filter(l => currentUser.completedLessonIds.includes(l.id));
                    const pct = cLessons.length > 0 ? Math.round((completedInC.length / cLessons.length) * 100) : 0;

                    return (
                      <div key={c.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                        <div className="aspect-video relative">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-3 left-3 bg-[#123B73]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            {c.category}
                          </span>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 leading-snug">
                              {c.title}
                            </h4>
                            <div className="text-xs text-slate-500 mt-1">
                              {c.totalLessons} aulas · {c.duration}
                            </div>

                            {/* Progress bar for course */}
                            <div className="mt-4">
                              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                                <span>Progresso</span>
                                <span className="font-bold font-mono">{pct}%</span>
                              </div>
                              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-emerald-500 rounded-full"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <button
                              onClick={() => {
                                setSelectedCourseForClass(c);
                                setActiveLesson(c.modules[0]?.lessons[0]);
                                setActiveTab('classroom');
                              }}
                              className="w-full py-2 bg-[#123B73] hover:bg-[#2457A6] text-white text-xs font-bold rounded-xl transition-colors text-center"
                            >
                              Continuar Aulas
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB: CLASSROOM / LESSON PLAYER */}
            {activeTab === 'classroom' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                
                {/* Course Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2457A6]">
                      Sala de Aula Virtual · {selectedCourseForClass.title}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                      {activeLesson.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCompleteLesson(activeLesson.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        currentUser.completedLessonIds.includes(activeLesson.id)
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>
                        {currentUser.completedLessonIds.includes(activeLesson.id) 
                          ? 'Aula Concluída ✓' 
                          : 'Marcar como Concluída'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Simulated Lesson Video Player */}
                <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative shadow-inner flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-[#F5B942]">
                      Duração: {activeLesson.duration}
                    </span>
                    <span className="text-xs text-slate-300">
                      Formato HD 1080p · Áudio Digital
                    </span>
                  </div>

                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[#F5B942] text-[#123B73] mx-auto flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
                      <PlayCircle className="w-8 h-8 fill-current" />
                    </div>
                    <h4 className="font-bold text-base mt-3">
                      {activeLesson.title}
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                      {activeLesson.contentSummary}
                    </p>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl flex items-center justify-between text-xs text-slate-300">
                    <span>00:00 / {activeLesson.duration}</span>
                    <span className="text-[11px] text-emerald-400 font-semibold">● Servidor Local Luanda Disponível</span>
                  </div>
                </div>

                {/* Two Columns: Lesson Syllabus List + Student Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Left: Syllabus Navigator */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Módulos do Curso:
                    </h4>
                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {selectedCourseForClass.modules.map((m) => (
                        <div key={m.id} className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                          <div className="bg-slate-50 p-2.5 font-bold text-slate-800">
                            Módulo 0{m.moduleNumber}: {m.title}
                          </div>
                          <div className="divide-y divide-slate-100">
                            {m.lessons.map((les) => {
                              const isCurrent = activeLesson.id === les.id;
                              const isDone = currentUser.completedLessonIds.includes(les.id);
                              return (
                                <button
                                  key={les.id}
                                  onClick={() => setActiveLesson(les)}
                                  className={`w-full p-2.5 text-left flex items-center justify-between hover:bg-blue-50/40 transition-colors ${
                                    isCurrent ? 'bg-blue-50 text-[#2457A6] font-bold' : 'text-slate-600'
                                  }`}
                                >
                                  <div className="flex items-center gap-2 truncate">
                                    {isDone ? (
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                    ) : (
                                      <PlayCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                    )}
                                    <span className="truncate">{les.title}</span>
                                  </div>
                                  <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">
                                    {les.duration}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Student Notes & Resources */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Caderno de Anotações do Aluno
                        </label>
                        <button
                          onClick={handleSaveNotes}
                          className="text-[11px] font-bold text-[#2457A6] flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          <Save className="w-3 h-3" />
                          <span>Guardar Notas</span>
                        </button>
                      </div>
                      <textarea
                        rows={4}
                        value={studentNote}
                        onChange={(e) => setStudentNote(e.target.value)}
                        placeholder="Escreva insights, ideias e pontos-chave desta aula..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-[#2457A6] text-slate-800 resize-none"
                      />
                    </div>

                    {/* Resources */}
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs">
                      <div className="font-bold text-[#123B73] mb-1">
                        Arquivos e Ferramentas Anexas:
                      </div>
                      <div className="space-y-1.5 mt-2">
                        <button
                          onClick={() => showToast('A descarregar Planilha de CMV em Excel...')}
                          className="flex items-center justify-between w-full p-2 bg-white rounded-lg border border-blue-100 text-slate-700 hover:bg-blue-50 text-[11px] font-medium"
                        >
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[#2457A6]" />
                            Planilha_CMV_Precificacao_Delivery.xlsx
                          </span>
                          <Download className="w-3.5 h-3.5 text-slate-400" />
                        </button>

                        <button
                          onClick={() => showToast('A descarregar Scripts de WhatsApp em PDF...')}
                          className="flex items-center justify-between w-full p-2 bg-white rounded-lg border border-blue-100 text-slate-700 hover:bg-blue-50 text-[11px] font-medium"
                        >
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[#2457A6]" />
                            Scripts_Atendimento_Rapido_WhatsApp.pdf
                          </span>
                          <Download className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* TAB: CERTIFICATES */}
            {activeTab === 'certificates' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Meus Certificados Digitais Oficiais
                </h3>
                <p className="text-xs text-slate-500">
                  Os certificados emitidos contêm código de autenticação único válido perante parceiros e recrutadores.
                </p>

                <div className="space-y-3 pt-2">
                  {currentUser.certificates.map((cert) => (
                    <div key={cert.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{cert.courseTitle}</h4>
                          <div className="text-xs text-slate-500 font-mono mt-0.5">
                            Código: {cert.verificationCode} · Emissão: {cert.issueDate}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedCertificate(cert)}
                        className="px-4 py-2 bg-[#123B73] hover:bg-[#2457A6] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
                      >
                        Visualizar & Imprimir Certificado
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: FAVORITES */}
            {activeTab === 'favorites' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Cursos Guardados nos Favoritos ({favoriteCourses.length})
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favoriteCourses.map((c) => (
                    <div key={c.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <div className="font-bold text-sm text-slate-900">{c.title}</div>
                      <div className="text-xs text-slate-500">{c.totalLessons} aulas · {c.duration}</div>
                      <div className="text-sm font-bold text-[#123B73] font-mono">{c.priceFormatted}</div>
                      <button
                        onClick={() => {
                          setSelectedCourseForClass(c);
                          setActiveView('course_detail');
                        }}
                        className="w-full mt-2 py-2 bg-[#2457A6] text-white text-xs font-semibold rounded-lg hover:bg-[#123B73]"
                      >
                        Ver Detalhes do Curso
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: PROFILE */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Definições do Perfil do Aluno
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      value={currentUser.name}
                      onChange={(e) => setCurrentUser(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-[#2457A6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={currentUser.email}
                      onChange={(e) => setCurrentUser(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-[#2457A6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      value={currentUser.phone || ''}
                      onChange={(e) => setCurrentUser(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-[#2457A6] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Função / Tipo de Negócio</label>
                    <input
                      type="text"
                      defaultValue="Proprietário de Restaurante / Delivery"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:ring-1 focus:ring-[#2457A6]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => showToast('Dados de perfil guardados com sucesso!')}
                    className="px-6 py-2.5 bg-[#2457A6] hover:bg-[#123B73] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Guardar Alterações
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
