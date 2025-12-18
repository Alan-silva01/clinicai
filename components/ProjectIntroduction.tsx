
import React from 'react';

interface Props {
  title: string;
  tagline: string;
}

const ProjectIntroduction: React.FC<Props> = ({ title, tagline }) => {
  return (
    <div className="text-center max-w-4xl mx-auto px-2">
      <span className="bg-blue-50 text-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest mb-3 md:mb-6 inline-block">
        Apresentação do Projeto
      </span>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-[1.1]">
        {title}
      </h1>
      <p className="text-sm md:text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
        {tagline}
      </p>
    </div>
  );
};

export default ProjectIntroduction;
