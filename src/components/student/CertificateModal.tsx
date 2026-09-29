import React from 'react';
import { X, Award, Download, CheckCircle, ShieldCheck, Printer, Calendar } from 'lucide-react';
import { Certificate } from '../../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Frame Print Area */}
        <div id="printable-certificate" className="border-8 border-double border-[#123B73] p-8 sm:p-12 text-center bg-[#FAFBFD] relative rounded-xl shadow-inner">
          
          {/* Subtle Decorative Corners */}
          <div className="absolute top-2 left-2 text-[#2457A6] font-mono text-xs">◆ ◆ ◆</div>
          <div className="absolute top-2 right-2 text-[#2457A6] font-mono text-xs">◆ ◆ ◆</div>
          <div className="absolute bottom-2 left-2 text-[#2457A6] font-mono text-xs">◆ ◆ ◆</div>
          <div className="absolute bottom-2 right-2 text-[#2457A6] font-mono text-xs">◆ ◆ ◆</div>

          {/* Seal / Badge */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#123B73] to-[#2457A6] text-[#F5B942] mx-auto flex items-center justify-center mb-4 shadow-md">
            <Award className="w-9 h-9" />
          </div>

          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#2457A6] mb-1">
            República de Angola · Formação Profissional
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#123B73] tracking-tight">
            CERTIFICADO DE CONCLUSÃO
          </h2>

          <p className="text-xs text-slate-500 mt-2">
            Certificamos solenemente que
          </p>

          <div className="text-xl sm:text-3xl font-extrabold text-slate-900 border-b-2 border-slate-300 py-3 my-4 max-w-md mx-auto font-serif">
            {certificate.studentName}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            concluiu com êxito todas as etapas teórico-práticas da formação profissional especializada em:
          </p>

          <div className="text-lg sm:text-xl font-bold text-[#123B73] mt-2 mb-4">
            {certificate.courseTitle}
          </div>

          <p className="text-xs text-slate-500 max-w-md mx-auto">
            com aproveitamento de <strong>{certificate.grade}</strong>, demonstrando proficiência em estruturação, gestão de frotas e operações de delivery.
          </p>

          {/* Signatures & Verification Code */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-6 text-xs text-slate-600">
            <div>
              <div className="font-serif italic text-sm text-slate-800 border-b border-slate-400 pb-1 w-36 mx-auto">
                Manuel Kilamba
              </div>
              <div className="text-[11px] font-bold text-slate-700 mt-1">Diretor Pedagógico</div>
              <div className="text-[10px] text-slate-400">Aprendendo Delivery Angola</div>
            </div>

            <div>
              <div className="font-mono text-xs font-bold text-[#123B73] bg-blue-50 py-1 px-2 rounded border border-blue-100 w-fit mx-auto">
                {certificate.verificationCode}
              </div>
              <div className="text-[11px] font-bold text-slate-700 mt-1">Emissão: {certificate.issueDate}</div>
              <div className="text-[10px] text-emerald-600 font-semibold flex items-center justify-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Autenticação Digital Verificada</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Certificado</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#123B73] hover:bg-[#2457A6] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
