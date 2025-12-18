
import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  version: string;
}

const BriefingHeader: React.FC<Props> = ({ title, subtitle, version }) => {
  return (
    <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-mono mb-4">
          DOC_TYPE: TECH_SPECIFICATION_V{version}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{title}</h1>
        <p className="text-slate-500 mt-2 text-lg">{subtitle}</p>
      </div>
      <div className="text-right hidden md:block">
        <p className="text-xs text-slate-400 font-mono">Última atualização: {new Date().toLocaleDateString()}</p>
        <p className="text-xs text-green-600 font-bold mt-1">● STATUS: PRONTO PARA IMPLEMENTAÇÃO</p>
      </div>
    </div>
  );
};

export default BriefingHeader;
