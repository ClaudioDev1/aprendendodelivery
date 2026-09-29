import React from 'react';
import { X, Book, Database, Terminal, FileCode, CheckCircle2, Copy } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DocsModal: React.FC = () => {
  const { isDocsModalOpen, setIsDocsModalOpen, showToast } = useApp();

  if (!isDocsModalOpen) return null;

  const handleCopyEnv = () => {
    const envContent = `# Variáveis de Ambiente Recomendadas para Produção com Supabase
VITE_SUPABASE_URL="https://seu-projeto.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
VITE_WHATSAPP_PHONE="244923456789"
VITE_APP_URL="https://aprendendodelivery.ao"`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(envContent);
      showToast('Variáveis de ambiente copiadas!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={() => setIsDocsModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#123B73] text-[#F5B942] flex items-center justify-center font-bold">
            <Book className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Guia de Execução & Arquitetura de Base de Dados
            </h2>
            <p className="text-xs text-slate-500">
              Instruções completas para execução do projeto e integração com Supabase.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
          
          {/* Section 1: How to run */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-sm">
              <Terminal className="w-4 h-4 text-[#2457A6]" />
              <span>1. Como Executar o Projeto Localmente</span>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              O projeto foi desenvolvido em <strong>React 19 + TypeScript + Vite + Tailwind CSS v4</strong>.
            </p>
            <div className="bg-slate-900 text-slate-200 p-3 rounded-xl font-mono text-[11px] space-y-1">
              <p># Instalar dependências</p>
              <p className="text-emerald-400">npm install</p>
              <p className="pt-2"># Iniciar servidor de desenvolvimento (Porta 3000)</p>
              <p className="text-emerald-400">npm run dev</p>
              <p className="pt-2"># Gerar build optimizado para produção</p>
              <p className="text-emerald-400">npm run build</p>
            </div>
          </div>

          {/* Section 2: Environment variables */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between font-bold text-slate-900 mb-2 text-sm">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#2457A6]" />
                <span>2. Configuração de Variáveis de Ambiente (.env)</span>
              </div>
              <button
                onClick={handleCopyEnv}
                className="text-xs text-[#2457A6] hover:underline flex items-center gap-1 font-semibold"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar .env</span>
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              Crie um ficheiro <code>.env</code> na raiz do projeto com as credenciais do seu projeto Supabase:
            </p>
            <div className="bg-slate-900 text-slate-200 p-3 rounded-xl font-mono text-[11px]">
              <p>VITE_SUPABASE_URL="https://seu-projeto.supabase.co"</p>
              <p>VITE_SUPABASE_ANON_KEY="sua_chave_anonima_supabase"</p>
              <p>VITE_WHATSAPP_PHONE="244923456789"</p>
            </div>
          </div>

          {/* Section 3: Supabase Architecture */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-2 text-sm">
              <Database className="w-4 h-4 text-emerald-600" />
              <span>3. Estrutura das Tabelas do Supabase (PostgreSQL)</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-5 text-xs text-slate-600">
              <li><strong>profiles</strong>: ID de autenticação do utilizador, nome, telemóvel e perfil (aluno/admin).</li>
              <li><strong>courses</strong>: Título, slug, preço em Kz, categoria, carga horária e módulos.</li>
              <li><strong>enrollments</strong>: Inscrições dos alunos, lições concluídas e cálculo de progresso em %.</li>
              <li><strong>leads</strong>: Mensagens de contacto, cotações de serviços e pedidos de orçamento.</li>
              <li><strong>certificates</strong>: Códigos criptográficos de verificação e dados dos certificados emitidos.</li>
            </ul>
            <div className="mt-3 text-[11px] text-[#2457A6] font-semibold">
              * O código SQL completo está disponível para cópia imediata na aba <strong>Base de Dados</strong> do Painel Administrativo.
            </div>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => setIsDocsModalOpen(false)}
            className="px-6 py-2.5 bg-[#123B73] hover:bg-[#2457A6] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
