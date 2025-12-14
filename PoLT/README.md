# PoLT - Proof of Local Trust

## 📋 Sobre o Projeto

**Proof of Local Trust (PoLT)** é um protocolo inovador de consenso baseado na confiança comunitária local, permitindo pagamentos offline seguros através de validação peer-to-peer via Bluetooth e mesh networks.

Este projeto explora uma nova abordagem para blockchain: em vez de depender de poder computacional global (PoW) ou stake financeiro (PoS), o PoLT utiliza **reputação social e validação comunitária** para garantir segurança e confiança.

## 🚀 Como Executar

### Pré-requisitos
- Node.js (para usar Yarn)
- Ou Python 3 (alternativa)

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   yarn install
   ```

2. **Executar o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```
   Ou
   ```bash
   yarn start
   ```

3. **Abrir no navegador:**
   - Acesse: `http://localhost:3000`
   - A página inicial (`index.html`) será aberta automaticamente

### Alternativa sem Node.js
```bash
python -m http.server 8000
```
Depois acesse: `http://localhost:8000/index.html`

## 📚 Estrutura da Documentação

### 🏗️ Conceito e Arquitetura
- **[Conceito PoLT](conceito-polt.html)** - Ideia central e lógica de confiança
- **[Introdução Inovação](introducao-inovacao.html)** - Problema e abordagens existentes
- **[Arquitetura Mesh Offline](arquitetura-mesh-offline.html)** - Sistema mesh P2P e validação local

### 🔒 Segurança e Consenso
- **[Consenso k-of-n](consenso-k-of-n.html)** - Validação por múltiplos dispositivos
- **[Regras de Segurança](regras-de-seguranca.html)** - Mecanismos anti-Sybil e validação
- **[Validação Bluetooth](validacao-bluetooth.html)** - Implementação prática via BLE
- **[Análise de Riscos](analise-de-riscos.html)** - Ataques e mitigações
- **[Comparativo Segurança Bitcoin](comparativo-seguranca-bitcoin.html)** - PoLT vs PoW/PoS

### 🚀 Implementação e Estratégia
- **[Estratégia L2 TON](estrategia-l2-ton.html)** - Implementação sobre TON Blockchain
- **[Whitepaper Técnico v1](whitepaper-tecnico-v1.html)** - Especificação completa
- **[Whitepaper L2 TON](whitepaper-l2-ton.html)** - Implementação detalhada

## 🎯 Casos de Uso

- **Pagamentos offline em mercados/feiras** - Compras locais sem internet
- **Economias comunitárias rurais** - Transações entre produtores e consumidores
- **Programas sociais** - Distribuição de benefícios com rastreabilidade
- **Identidade e reputação social** - Trust Score como ativo econômico
- **Micropagamentos urbanos** - Café, transporte público, etc.

## 🛠️ Scripts Disponíveis

- `yarn dev` - Servidor de desenvolvimento (porta 3000)
- `yarn serve` - Servidor na porta 8000
- `yarn start` - Mesmo que `yarn dev`

## 📞 Contato

**Autor:** Jorge Paim
**Status:** Pesquisa & Desenvolvimento
**Objetivo:** Primeira blockchain socialmente descentralizada da África

---

*"A confiança não precisa ser global para ser valiosa. Ela pode ser local, comunitária e profundamente humana."*

— PoLT: Proof of Local Trust