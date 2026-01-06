
import React from 'react';

interface Props {
    onBack: () => void;
    onPricingClick?: () => void;
}

const DetailedBriefing: React.FC<Props> = ({ onBack, onPricingClick }) => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Botão Voltar */}
            <button
                onClick={onBack}
                className="flex items-center space-x-3 text-slate-500 hover:text-blue-600 transition-all mb-12 group bg-white px-5 py-2 rounded-full border border-slate-100 shadow-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-bold text-xs uppercase tracking-widest">Voltar</span>
            </button>

            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Documentação Completa</span>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                    Como a <span className="text-blue-600">ClinicAI</span> funciona
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Uma automação inteligente que atende seus pacientes no WhatsApp como uma secretária de verdade. 24 horas por dia.
                </p>
            </div>

            {/* Seções */}
            <div className="space-y-12">

                {/* Seção 1: Identificação de Cliente Novo */}
                <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 rounded-[2rem] border border-green-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white text-xl shrink-0">🆕</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Identificação de Cliente Novo</h2>
                            <p className="text-slate-500 mt-1">Sistema automático de detecção de novos pacientes</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-green-100">
                        <p className="text-slate-600 mb-4">Quando alguém manda mensagem, a ClinicAI verifica automaticamente se essa pessoa já é cliente ou não.</p>
                        <div className="bg-green-100 rounded-xl p-4 border-l-4 border-green-500">
                            <p className="text-sm font-medium text-green-800 italic">
                                "Oi Maria! Vi aqui que é sua primeira vez na clínica. Temos uma promoção: a primeira consulta de avaliação (R$ 50) sai de graça pra você!"
                            </p>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">✅ Cliente novo = primeira consulta grátis (identificado automaticamente pelo histórico)</p>
                    </div>
                </section>

                {/* Seção 2: Cobrança de 30% */}
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-[2rem] border border-blue-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-xl shrink-0">💳</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Cobrança de 30% via PIX</h2>
                            <p className="text-slate-500 mt-1">Compromisso financeiro que elimina No-Shows</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-blue-100 mb-4">
                        <p className="text-slate-600 mb-4">Para outros serviços (ou clientes que já fizeram a primeira consulta), a ClinicAI cobra <strong>30% do valor total</strong> via PIX para confirmar o agendamento.</p>
                        <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                            <p className="text-sm font-medium text-blue-800 italic">
                                "Ana, pra confirmar sua limpeza, o PIX é de R$ 45. O restante (R$ 105) você paga aqui na clínica."
                            </p>
                        </div>
                    </div>
                    {/* Tabela de Valores */}
                    <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden">
                        <div className="bg-blue-600 text-white px-6 py-3 font-bold text-sm">Tabela de Valores</div>
                        <div className="divide-y divide-blue-50">
                            {[
                                { servico: "Avaliação", total: "R$ 50", pix: "Grátis (1ª vez)" },
                                { servico: "Emergência", total: "R$ 150", pix: "R$ 45" },
                                { servico: "Especialista", total: "R$ 180", pix: "R$ 54" },
                                { servico: "Limpeza", total: "R$ 150", pix: "R$ 45" },
                                { servico: "Clareamento", total: "R$ 900", pix: "R$ 270" },
                                { servico: "Canal", total: "R$ 1.200", pix: "R$ 360" },
                                { servico: "Extração", total: "R$ 450", pix: "R$ 135" },
                            ].map((item, i) => (
                                <div key={i} className="grid grid-cols-3 px-6 py-3 text-sm">
                                    <span className="font-medium text-slate-700">{item.servico}</span>
                                    <span className="text-slate-500">{item.total}</span>
                                    <span className="font-bold text-blue-600">{item.pix}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção 3: Pré-Agendamento */}
                <section className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 md:p-10 rounded-[2rem] border border-purple-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-white text-xl shrink-0">📅</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Pré-Agendamento Inteligente</h2>
                            <p className="text-slate-500 mt-1">Reserva o horário enquanto aguarda pagamento</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-purple-100">
                        <p className="text-slate-600 mb-4">Quando o cliente confirma que quer agendar, a ClinicAI:</p>
                        <div className="space-y-3">
                            {[
                                "Cria um pré-agendamento no calendário da profissional",
                                "Gera o PIX e envia pro cliente",
                                "Fica aguardando o pagamento",
                            ].map((step, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">{i + 1}</div>
                                    <span className="text-slate-700">{step}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-purple-600 mt-4 font-medium">📌 O evento fica marcado como "Pré-agendado" até o pagamento ser confirmado.</p>
                    </div>
                </section>

                {/* Seção 4: Confirmação Automática */}
                <section className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10 rounded-[2rem] border border-emerald-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white text-xl shrink-0">✅</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Confirmação Automática de Pagamento</h2>
                            <p className="text-slate-500 mt-1">Integração Asaas detecta pagamento em tempo real</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-emerald-100">
                        <p className="text-slate-600 mb-4">Quando o cliente paga o PIX, a ClinicAI:</p>
                        <div className="space-y-4">
                            {[
                                { icon: "🔍", text: "Identifica o pagamento automaticamente (integração com Asaas)" },
                                { icon: "💬", text: "Manda mensagem pro cliente confirmando" },
                                { icon: "📆", text: "Atualiza o calendário — muda de \"Pré-agendado\" pra \"Confirmado\"" },
                                { icon: "🔔", text: "Cliente recebe notificação do Google Calendar no celular" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-slate-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-emerald-100 rounded-xl p-4 border-l-4 border-emerald-500 mt-4">
                            <p className="text-sm font-medium text-emerald-800 italic">
                                "Recebi seu pagamento! Sua limpeza tá confirmada pra segunda às 14h. Te esperamos!"
                            </p>
                        </div>
                        <p className="text-sm text-emerald-600 mt-4 font-medium">⚡ Tudo isso acontece sozinho, sem ninguém precisar fazer nada.</p>
                    </div>
                </section>

                {/* Seção 5: Lembrete */}
                <section className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-10 rounded-[2rem] border border-amber-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white text-xl shrink-0">⏰</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Lembrete 2 Horas Antes</h2>
                            <p className="text-slate-500 mt-1">Reduz esquecimentos em até 90%</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-amber-100">
                        <p className="text-slate-600 mb-4">No dia da consulta, 2 horas antes do horário marcado, a ClinicAI manda uma mensagem automática:</p>
                        <div className="bg-amber-100 rounded-xl p-4 border-l-4 border-amber-500">
                            <p className="text-sm font-medium text-amber-800 italic">
                                "Oi João! Só passando pra lembrar da sua consulta hoje às 14h. Te esperamos aqui na clínica!"
                            </p>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">O cliente pode responder essa mensagem se precisar reagendar ou cancelar.</p>
                    </div>
                </section>

                {/* Seção 6: Reagendamento */}
                <section className="bg-gradient-to-br from-cyan-50 to-sky-50 p-8 md:p-10 rounded-[2rem] border border-cyan-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-xl shrink-0">🔄</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Reagendamento pelo WhatsApp</h2>
                            <p className="text-slate-500 mt-1">Paciente muda horário sem ligar na clínica</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-cyan-100">
                        <p className="text-slate-600 mb-4">Se o cliente precisar mudar o horário, é só mandar mensagem. A ClinicAI verifica se ele já pagou:</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                <h4 className="font-bold text-green-700 mb-2">✅ Se já pagou (RECEIVED)</h4>
                                <p className="text-sm text-green-600 italic">"Pronto! Reagendei sua limpeza pra terça às 10h. Te esperamos!"</p>
                                <p className="text-xs text-green-500 mt-2 font-medium">NÃO gera novo PIX — o pagamento já foi feito</p>
                            </div>
                            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                                <h4 className="font-bold text-yellow-700 mb-2">⏳ Se ainda não pagou (PENDING)</h4>
                                <p className="text-sm text-yellow-600 italic">"Reagendei pra terça às 10h! Só lembrar de fazer o pagamento do PIX pra confirmar."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção 7: Cancelamento */}
                <section className="bg-gradient-to-br from-rose-50 to-red-50 p-8 md:p-10 rounded-[2rem] border border-rose-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center text-white text-xl shrink-0">❌</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Cancelamentos Inteligentes</h2>
                            <p className="text-slate-500 mt-1">Pelo WhatsApp ou por falta de pagamento</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-rose-100">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-700 mb-3">Cancelamento pelo Cliente</h4>
                                <div className="bg-rose-100 rounded-xl p-4 border-l-4 border-rose-500">
                                    <p className="text-sm font-medium text-rose-800 italic">
                                        "Entendi. Vou cancelar sua consulta. Quando quiser remarcar, me chama."
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700 mb-3">Cancelamento por Falta de Pagamento</h4>
                                <div className="bg-orange-100 rounded-xl p-4 border-l-4 border-orange-500">
                                    <p className="text-sm font-medium text-orange-800 italic">
                                        "Oi Pedro, não conseguimos identificar o pagamento. Ela foi cancelada. Quer reagendar?"
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">📌 Se o cliente quiser remarcar, a IA já sabe todos os dados — não pergunta de novo.</p>
                    </div>
                </section>

                {/* Seção 8: UpSell */}
                <section className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8 md:p-10 rounded-[2rem] border border-violet-100">
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-violet-500 flex items-center justify-center text-white text-xl shrink-0">🚀</div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">UpSell Automático</h2>
                            <p className="text-slate-500 mt-1">Fidelização e recorrência sem esforço</p>
                        </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-violet-100">
                        <p className="text-slate-600 mb-4">A ClinicAI guarda o histórico de todos os procedimentos. Depois de um tempo, ela entra em contato automaticamente:</p>
                        <div className="bg-violet-100 rounded-xl p-4 border-l-4 border-violet-500">
                            <p className="text-sm font-medium text-violet-800 italic">
                                "Oi João! Faz 6 meses da sua última limpeza. Bora agendar a manutenção?"
                            </p>
                        </div>
                        <p className="text-sm text-violet-600 mt-4 font-medium">📈 Isso aumenta a recorrência e fideliza clientes sem você fazer nada.</p>
                    </div>
                </section>

                {/* Fluxo Completo */}
                <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -ml-24 -mb-24"></div>

                    <h2 className="text-3xl font-black mb-8 relative z-10">📋 Fluxo Completo</h2>

                    <div className="grid md:grid-cols-2 gap-4 relative z-10">
                        {[
                            "Cliente manda mensagem no WhatsApp",
                            "ClinicAI atende e verifica se é novo ou antigo",
                            "Se novo: primeira consulta grátis",
                            "Se antigo ou outro serviço: gera PIX de 30%",
                            "Cria pré-agendamento aguardando pagamento",
                            "Cliente paga → confirma automático",
                            "Atualiza calendário + notifica cliente",
                            "2h antes: lembrete no WhatsApp",
                            "Cliente pode reagendar/cancelar conversando",
                            "Histórico salvo para UpSell futuro",
                        ].map((step, i) => (
                            <div key={i} className="flex items-center space-x-3 bg-white/10 backdrop-blur px-4 py-3 rounded-xl">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                                <span className="text-sm text-slate-200">{step}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefícios */}
                <section className="text-center py-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-8">O que você ganha</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { icon: "🌙", title: "24/7 Ativo", desc: "Nunca perde cliente" },
                            { icon: "📉", title: "Menos faltas", desc: "30% antecipado" },
                            { icon: "🎁", title: "Atrai novos", desc: "1ª consulta grátis" },
                            { icon: "⚡", title: "Menos trabalho", desc: "Tudo automático" },
                            { icon: "🔁", title: "Recorrência", desc: "UpSell inteligente" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <div className="text-center py-12 border-t border-slate-100">
                    <p className="text-slate-400 text-sm italic mb-12">
                        Sistema 100% customizável. Valores, regras e mensagens ajustáveis para sua clínica.
                    </p>

                    {onPricingClick && (
                        <div className="mt-8">
                            <button
                                onClick={onPricingClick}
                                className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all shadow-2xl shadow-blue-500/30 active:scale-95 flex items-center space-x-4 mx-auto"
                            >
                                <span>Ter estimativa de preços</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailedBriefing;
