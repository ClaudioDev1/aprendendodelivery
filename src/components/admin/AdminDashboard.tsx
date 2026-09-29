import React, { useState } from 'react';
import { 
  Users, BookOpen, DollarSign, MessageSquare, Plus, 
  Search, Shield, CheckCircle2, Edit3, Trash2, Database, 
  Copy, ExternalLink, ArrowRight, TrendingUp, Sparkles 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Course } from '../../types';

export const AdminDashboard: React.FC = () => {
  const { allCourses, setAllCourses, leadsList, showToast, setActiveView } = useApp();
  const [adminTab, setAdminTab] = useState<'metrics' | 'courses' | 'students' | 'leads' | 'database'>('metrics');
  const [searchStudent, setSearchStudent] = useState('');
  const [copiedSql, setCopiedSql] = useState(false);

  // Demo student records
  const mockStudents = [
    { id: '1', name: 'Carlos Bento', email: 'carlos.bento@gmail.com', phone: '+244 923 456 789', courses: 2, progress: '75%', joined: '2026-09-24' },
    { id: '2', name: 'Mateus Diogo', email: 'mateus.diogo@sabordluanda.ao', phone: '+244 912 334 556', courses: 1, progress: '100%', joined: '2026-09-18' },
    { id: '3', name: 'Helena Bartolomeu', email: 'helena.doces@gmail.com', phone: '+244 934 887 112', courses: 3, progress: '45%', joined: '2026-09-12' },
    { id: '4', name: 'Jorge Miguel', email: 'jorge.miguel@express.ao', phone: '+244 928 990 100', courses: 2, progress: '90%', joined: '2026-09-05' },
    { id: '5', name: 'Elizabete Neves', email: 'elizabete.fresh@gmail.com', phone: '+244 944 221 334', courses: 1, progress: '60%', joined: '2026-08-28' },
  ];

  const filteredStudents = mockStudents.filter(s => 
    s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
    s.email.toLowerCase().includes(searchStudent.toLowerCase())
  );

  const supabaseSqlSchema = `-- SUPABASE POSTGRESQL SCHEMA FOR APRENDENDO DELIVERY
-- Executar no SQL Editor do painel Supabase (supabase.com)

-- 1. Tabela de Utilizadores & Perfis
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'admin', 'instructor')),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de Cursos
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  level TEXT NOT NULL,
  duration TEXT NOT NULL,
  price_kz NUMERIC NOT NULL,
  description TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Inscrições de Alunos (Enrollments)
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  progress_percent INT DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(student_id, course_id)
);

-- 4. Tabela de Leads & Mensagens de Contacto
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('contact', 'newsletter', 'service_quote')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT,
  selected_services JSONB,
  estimated_budget TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Políticas de Leitura Pública para Cursos
CREATE POLICY "Cursos visíveis para todos" ON public.courses FOR SELECT USING (published = true);
`;

  const handleCopySql = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(supabaseSqlSchema);
      setCopiedSql(true);
      showToast('Schema Supabase SQL copiado com sucesso!');
      setTimeout(() => setCopiedSql(false), 3000);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#0F172A] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#F5B942] flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                Painel Administrativo
              </h1>
              <p className="text-xs text-slate-400">
                Gestão central de cursos, alunos inscritos, leads comerciais e infraestrutura Supabase.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('home')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Voltar ao Site Público
            </button>
          </div>
        </div>

        {/* Admin Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setAdminTab('metrics')}
            className={`px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              adminTab === 'metrics' ? 'bg-[#2457A6] text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Métricas Gerais
          </button>
          <button
            onClick={() => setAdminTab('courses')}
            className={`px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              adminTab === 'courses' ? 'bg-[#2457A6] text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Gestão de Cursos ({allCourses.length})
          </button>
          <button
            onClick={() => setAdminTab('students')}
            className={`px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              adminTab === 'students' ? 'bg-[#2457A6] text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Alunos Registados
          </button>
          <button
            onClick={() => setAdminTab('leads')}
            className={`px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              adminTab === 'leads' ? 'bg-[#2457A6] text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Leads & Contactos ({leadsList.length})
          </button>
          <button
            onClick={() => setAdminTab('database')}
            className={`px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              adminTab === 'database' ? 'bg-emerald-600 text-white' : 'text-emerald-400 hover:bg-slate-800'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Base de Dados Supabase (SQL)</span>
          </button>
        </div>

        {/* TAB 1: METRICS */}
        {adminTab === 'metrics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400">Total de Alunos Formados</div>
                <div className="text-3xl font-extrabold text-white font-mono mt-1">1.240</div>
                <div className="text-[11px] text-emerald-400 mt-1">+18% este mês em Angola</div>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400">Cursos Publicados</div>
                <div className="text-3xl font-extrabold text-white font-mono mt-1">{allCourses.length}</div>
                <div className="text-[11px] text-slate-400 mt-1">6 formações activas</div>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400">Receita Total de Inscrições</div>
                <div className="text-3xl font-extrabold text-[#F5B942] font-mono mt-1">18.450.000 Kz</div>
                <div className="text-[11px] text-slate-400 mt-1">Multicaixa Express & Transferências</div>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400">Propostas de Serviços</div>
                <div className="text-3xl font-extrabold text-white font-mono mt-1">{leadsList.length}</div>
                <div className="text-[11px] text-emerald-400 mt-1">Leads para conversão imediata</div>
              </div>
            </div>

            {/* Inbound Leads Table Snapshot */}
            <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Contactos & Cotações Recentes
                </h3>
                <button
                  onClick={() => setAdminTab('leads')}
                  className="text-xs text-[#F5B942] hover:underline"
                >
                  Ver todos os registos →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="text-slate-400 border-b border-slate-700 pb-2">
                    <tr>
                      <th className="py-2.5 font-semibold">Cliente</th>
                      <th className="py-2.5 font-semibold">Tipo</th>
                      <th className="py-2.5 font-semibold">Contacto</th>
                      <th className="py-2.5 font-semibold">Resumo</th>
                      <th className="py-2.5 font-semibold">Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {leadsList.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-700/30">
                        <td className="py-3 font-bold text-white">{lead.name}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">
                            {lead.type}
                          </span>
                        </td>
                        <td className="py-3 text-slate-300 font-mono">{lead.phone || lead.email}</td>
                        <td className="py-3 text-slate-300 max-w-xs truncate">{lead.message || lead.subject}</td>
                        <td className="py-3 text-slate-400 font-mono">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COURSES MANAGEMENT */}
        {adminTab === 'courses' && (
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Catálogo de Cursos Activos
              </h3>
              <button
                onClick={() => showToast('Funcionalidade de adicionar novo curso aberta.')}
                className="px-4 py-2 bg-[#2457A6] hover:bg-[#123B73] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Adicionar Novo Curso</span>
              </button>
            </div>

            <div className="divide-y divide-slate-700/60">
              {allCourses.map((c) => (
                <div key={c.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-16 h-12 object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-[#F5B942] uppercase">{c.category} · {c.level}</div>
                      <div className="text-sm font-bold text-white">{c.title}</div>
                      <div className="text-xs text-slate-400 font-mono">{c.duration} · {c.totalLessons} aulas</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold font-mono text-emerald-400">
                      {c.priceFormatted}
                    </span>
                    <button
                      onClick={() => showToast(`Curso "${c.title}" editado.`)}
                      className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 transition-colors"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STUDENTS */}
        {adminTab === 'students' && (
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Alunos Matriculados ({mockStudents.length})
              </h3>
              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Pesquisar por nome ou email..."
                  value={searchStudent}
                  onChange={(e) => setSearchStudent(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 outline-none"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="text-slate-400 border-b border-slate-700 pb-2">
                  <tr>
                    <th className="py-2 font-semibold">Nome</th>
                    <th className="py-2 font-semibold">Email</th>
                    <th className="py-2 font-semibold">Telefone</th>
                    <th className="py-2 font-semibold">Cursos</th>
                    <th className="py-2 font-semibold">Progresso</th>
                    <th className="py-2 font-semibold">Data de Adesão</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-700/30">
                      <td className="py-3 font-bold text-white">{s.name}</td>
                      <td className="py-3 text-slate-300">{s.email}</td>
                      <td className="py-3 text-slate-300 font-mono">{s.phone}</td>
                      <td className="py-3 text-slate-300 font-mono">{s.courses}</td>
                      <td className="py-3 text-emerald-400 font-bold font-mono">{s.progress}</td>
                      <td className="py-3 text-slate-400 font-mono">{s.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: LEADS */}
        {adminTab === 'leads' && (
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Caixa de Entrada de Leads & Mensagens do Site
            </h3>

            <div className="space-y-3">
              {leadsList.map((lead) => (
                <div key={lead.id} className="p-4 bg-slate-900 rounded-xl border border-slate-700 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{lead.name}</span>
                      <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-[10px] uppercase font-mono">
                        {lead.type}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{lead.date}</span>
                  </div>

                  <div className="text-xs text-slate-300 flex items-center gap-4">
                    <span>Email: <strong>{lead.email}</strong></span>
                    {lead.phone && <span>WhatsApp: <strong className="font-mono text-emerald-400">{lead.phone}</strong></span>}
                    {lead.estimatedBudget && <span>Orçamento Estimado: <strong className="text-[#F5B942] font-mono">{lead.estimatedBudget}</strong></span>}
                  </div>

                  {lead.message && (
                    <p className="text-xs text-slate-400 bg-slate-800/60 p-3 rounded-lg border border-slate-750">
                      "{lead.message}"
                    </p>
                  )}

                  {lead.phone && (
                    <div className="pt-1">
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Olá ${encodeURIComponent(lead.name)}, entramos em contacto a partir da Aprendendo Delivery.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        <span>Responder pelo WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: DATABASE / SUPABASE SETUP GUIDE */}
        {adminTab === 'database' && (
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-400" />
                  <span>Configuração e Schema SQL para Supabase</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Script pronto a executar no Supabase para activar base de dados relacional e utilizadores.
                </p>
              </div>

              <button
                onClick={handleCopySql}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer shrink-0"
              >
                {copiedSql ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSql ? 'Copiado para a Área de Transferência!' : 'Copiar Script SQL'}</span>
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto text-[11px] font-mono text-emerald-300 leading-relaxed max-h-96">
              <pre>{supabaseSqlSchema}</pre>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-700 text-xs space-y-2 text-slate-300">
              <div className="font-bold text-white">Instruções de Instalação no Supabase:</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Crie um projeto em <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">supabase.com</a>.</li>
                <li>No painel lateral do Supabase, clique em <strong>SQL Editor</strong> e depois em <strong>New Query</strong>.</li>
                <li>Cole o código SQL acima e clique em <strong>Run</strong>.</li>
                <li>Em <strong>Settings → API</strong>, copie a sua <code>SUPABASE_URL</code> e <code>SUPABASE_ANON_KEY</code> para o ficheiro <code>.env</code>.</li>
              </ol>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
