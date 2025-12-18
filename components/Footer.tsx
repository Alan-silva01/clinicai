
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Envio para o webhook sem travar a interface (fire-and-forget)
    // URL de produção solicitada
    fetch('https://autonomia-n8n-webhook.w8liji.easypanel.host/webhook/email-clinicai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: email,
        timestamp: new Date().toISOString(),
        source: 'ClinicAI Landing Page'
      }),
      keepalive: true // Garante que a requisição termine mesmo se houver navegação
    }).catch(err => {
      console.warn('Silent webhook error:', err);
    });

    // Feedback imediato para o usuário conforme solicitado (não espera resposta do servidor)
    alert('Ok! Nossa equipe entrará em contato em breve.');
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl italic">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Clinic<span className="text-blue-600">AI</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              O futuro da gestão clínica através de multi-agentes de IA especializados em conversão e humanidade.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Produto</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Multi-Agendas</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pagamentos PIX</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Upsell Automático</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Empresa</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-6">Newsletter</h5>
            <p className="text-sm text-gray-600 mb-4">Receba dicas de como automatizar sua clínica.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail" 
                className="flex-grow px-4 py-2 bg-gray-100 rounded-l-lg text-sm outline-none focus:ring-1 focus:ring-blue-500 transition-all" 
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-blue-700 transition-all active:scale-95"
              >
                Ok
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-xs">
          <p>© 2024 ClinicAI Intelligence. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900">Privacidade</a>
            <a href="#" className="hover:text-gray-900">Termos</a>
            <a href="#" className="hover:text-gray-900">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
