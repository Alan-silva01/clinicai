
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const barData = [
  { name: 'Convencional', value: 25 },
  { name: 'ClinicAI', value: 65 },
];

const pieData = [
  { name: 'Automatizado', value: 80, color: '#3b82f6' },
  { name: 'Manual', value: 20, color: '#1f2937' },
];

const ResultsDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-white">Taxa de Conversão de Agendamentos</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={100} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{backgroundColor: '#1f2937', border: 'none', color: '#fff'}}
              />
              <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#4b5563' : '#3b82f6'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-400 text-sm mt-4 italic text-center">
          *Aumento médio de +40% na conversão final.
        </p>
      </div>

      <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-white">Redução de Trabalho Manual</h4>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-bold text-white">-80%</span>
            <span className="text-xs text-gray-500 uppercase">Economia</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4 italic text-center">
          *Economia de 80% do tempo gasto pela recepção.
        </p>
      </div>
    </div>
  );
};

export default ResultsDashboard;
