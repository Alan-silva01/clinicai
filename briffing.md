# ClinicAI - Apresentação do Sistema

## O que é a ClinicAI?

É uma automação inteligente que atende seus pacientes no WhatsApp como uma secretária de verdade. Ela conversa, agenda, cobra e lembra — tudo sozinha, 24 horas por dia.

---

## Como ela funciona na prática?

### Identificação de Cliente Novo

Quando alguém manda mensagem, a ClinicAI verifica automaticamente se essa pessoa já é cliente ou não.

**Se for a primeira vez:**
> "Oi Maria! Vi aqui que é sua primeira vez na clínica. Temos uma promoção: a primeira consulta de avaliação (R$ 50) sai de graça pra você!"

Ela identifica isso sozinha olhando o histórico. Cliente novo = primeira consulta grátis.

---

### Cobrança de 30% para Confirmar

Para outros serviços (ou clientes que já fizeram a primeira consulta), a ClinicAI cobra **30% do valor total** via PIX para confirmar o agendamento. O restante o cliente paga na clínica.

**Exemplo - Cliente quer limpeza (R$ 150):**
> "Ana, pra confirmar sua limpeza, o PIX é de R$ 45. O restante (R$ 105) você paga aqui na clínica."

**Tabela de valores:**

| Serviço | Total | PIX (30%) |
|---------|-------|-----------|
| Avaliação | R$ 50 | Grátis (1ª vez) |
| Emergência | R$ 150 | R$ 45 |
| Especialista | R$ 180 | R$ 54 |
| Limpeza | R$ 150 | R$ 45 |
| Clareamento | R$ 900 | R$ 270 |
| Canal | R$ 1.200 | R$ 360 |
| Extração | R$ 450 | R$ 135 |

---

### Pré-Agendamento Inteligente

Quando o cliente confirma que quer agendar, a ClinicAI:

1. **Cria um pré-agendamento** no calendário da profissional
2. **Gera o PIX** e envia pro cliente
3. **Fica aguardando o pagamento**

O evento fica marcado como "Pré-agendado" até o pagamento ser confirmado.

---

### Confirmação Automática de Pagamento

Quando o cliente paga o PIX, a ClinicAI:

1. **Identifica o pagamento** automaticamente (integração com Asaas)
2. **Manda mensagem** pro cliente:
   > "Recebi seu pagamento! Sua limpeza tá confirmada pra segunda às 14h. Te esperamos!"
3. **Atualiza o calendário** — muda de "Pré-agendado" pra "Confirmado"
4. **Cliente recebe notificação** do Google Calendar no celular

Tudo isso acontece sozinho, sem ninguém precisar fazer nada.

---

### Lembrete 2 Horas Antes

No dia da consulta, 2 horas antes do horário marcado, a ClinicAI manda uma mensagem automática:

> "Oi João! Só passando pra lembrar da sua consulta hoje às 14h. Te esperamos aqui na clínica!"

O cliente pode responder essa mensagem se precisar reagendar ou cancelar.

---

### Reagendamento pelo WhatsApp

Se o cliente precisar mudar o horário, é só mandar mensagem:

**Cliente:** "Preciso reagendar minha consulta"

A ClinicAI verifica se ele já pagou:

**Se já pagou (status RECEIVED):**
> "Claro! Qual horário fica melhor pra você?"
> *(após escolher)*
> "Pronto! Reagendei sua limpeza pra terça às 10h. Te esperamos!"

**NÃO gera novo PIX** — o pagamento já foi feito, só muda o horário.

**Se ainda não pagou (status PENDING):**
> "Reagendei pra terça às 10h! Só lembrar de fazer o pagamento do PIX pra confirmar."

---

### Cancelamento pelo WhatsApp

Cliente também pode cancelar conversando:

**Cliente:** "Preciso cancelar minha consulta"

> "Entendi. Vou cancelar sua consulta. Quando quiser remarcar, me chama."

Se tiver regra de estorno configurada, a ClinicAI processa sozinha.

---

### Cancelamento por Falta de Pagamento

Se o cliente não pagar o PIX dentro do prazo, a ClinicAI:

1. **Cancela automaticamente** o pré-agendamento
2. **Manda mensagem** oferecendo remarcar:
   > "Oi Pedro, não conseguimos identificar o pagamento da sua consulta. Ela foi cancelada. Quer reagendar?"

Se o cliente quiser remarcar, ela já sabe todos os dados — não pergunta de novo.

---

### UpSell Automático

A ClinicAI guarda o histórico de todos os procedimentos. Depois de um tempo, ela entra em contato automaticamente:

> "Oi João! Faz 6 meses da sua última limpeza. Bora agendar a manutenção?"

Isso aumenta a recorrência e fideliza clientes sem você fazer nada.

---

## Resumo do Fluxo Completo

```
1. Cliente manda mensagem no WhatsApp
2. ClinicAI atende e verifica se é novo ou antigo
3. Se novo: primeira consulta grátis
4. Se antigo ou outro serviço: gera PIX de 30%
5. Cria pré-agendamento aguardando pagamento
6. Cliente paga → confirma automático
7. Atualiza calendário + notifica cliente
8. 2h antes: lembrete no WhatsApp
9. Cliente pode reagendar/cancelar conversando
10. Histórico salvo para UpSell futuro
```

---

## O que você ganha

- **Atendimento 24/7** — nunca perde cliente por demora
- **Menos faltas** — 30% antecipado compromete o cliente
- **Atrai novos** — primeira consulta grátis
- **Menos trabalho** — tudo automático
- **Mais recorrência** — UpSell inteligente

---

*Sistema 100% customizável. Valores, regras e mensagens ajustáveis para sua clínica.*
