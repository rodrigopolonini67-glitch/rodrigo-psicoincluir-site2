# Contexto do Projeto — PsicoIncluir

## Objetivo
Este repositório é destinado ao desenvolvimento do site institucional da PsicoIncluir — Clínica Multidisciplinar.

## Padrão obrigatório de desenvolvimento

Este projeto utiliza **GitHub Issues e Pull Requests** como padrão de gerenciamento do desenvolvimento.

Antes de implementar qualquer nova alteração, o agente deve:
1. Consultar este arquivo de contexto.
2. Verificar se existe uma Issue correspondente à tarefa.
3. Caso não exista, criar uma Issue e classificá-la como **Correção**, **Melhoria** ou **Nova função**.

### Fluxo obrigatório

**Issue → Branch → Implementação → Validação → Pull Request → Review → Merge → Deploy**

Nenhuma mudança relevante deve ser feita diretamente na branch principal quando puder ser entregue por Pull Request.

### Branches

Cada tarefa deve ser desenvolvida em uma branch própria, seguindo preferencialmente:
- `feature/<numero>-<descricao>` para novas funções;
- `improvement/<numero>-<descricao>` para melhorias;
- `fix/<numero>-<descricao>` para correções.

### Pull Requests

Todo Pull Request deve obrigatoriamente:
- mencionar a Issue relacionada, preferencialmente usando `Closes #<numero>` quando a entrega concluir a Issue;
- explicar objetivamente o que mudou;
- descrever como a alteração foi validada;
- registrar riscos e limitações;
- registrar próximos passos, quando houver.

Exemplo de estrutura:

```md
## Issue relacionada
Closes #XX

## O que mudou
Descrição objetiva das alterações.

## Como foi validado
- Testes realizados
- Desktop/mobile quando aplicável
- Links e CTAs quando aplicável
- Console sem erros críticos quando aplicável

## Riscos e limitações
- Pontos pendentes ou dependências externas.

## Próximos passos
- Pendências futuras, quando houver.
```

### Regra para agentes

Qualquer agente, independentemente do modelo utilizado, deve consultar este arquivo antes de implementar novas mudanças e respeitar este padrão de Issues, branches, Pull Requests, review, merge e deploy.

## Diretrizes do site

O site é institucional, de apresentação e contato da PsicoIncluir. Deve transmitir acolhimento, inclusão, cuidado multidisciplinar, profissionalismo e humanidade.

### Estrutura principal
- Início / Hero
- A PsicoIncluir
- Especialidades
- Nosso Espaço
- Como Chegar
- Contato
- Rodapé institucional
- Botão flutuante de WhatsApp

### Informações institucionais fornecidas
**Nome:** PsicoIncluir – Clínica Multidisciplinar

**Frase:** Cuidado multidisciplinar, acolhimento e inclusão em cada atendimento.

**Endereço:** Rua Dezessete de Junho, 489 – Menino Deus – Porto Alegre/RS

**WhatsApp:** (51) 99780-3232

**E-mail:** psicoincluir01@gmail.com

### Especialidades
- Psicologia
- Fonoaudiologia
- Psicopedagogia
- Pedagogia
- Terapia Ocupacional
- Fisioterapia
- Nutrição
- Musicoterapia
- Arteterapia
- Psicomotricidade
- ABA
- Ambientoterapia

### Referência visual
Os prints do Instagram fornecidos no contexto do projeto devem ser tratados como referência de identidade e atmosfera visual. O site deve aproveitar a sensação acolhedora, inclusiva, humana, colorida e alegre da comunicação da clínica, mantendo uma apresentação web mais limpa, profissional, organizada e acessível.

Não inventar informações institucionais que não tenham sido fornecidas ou validadas.

## Padrões obrigatórios de motion, carregamento e feedback

A interface deve seguir princípios de motion design com foco em **propósito, sutileza, consistência, acessibilidade e performance**, usando como referência a skill **Design Motion Principles** de Kyle Zantos. A skill trabalha com lentes de contenção e velocidade, refinamento de produção e experimentação seletiva; para este site institucional/landing page, a prioridade deve ser o refinamento profissional e discreto, com criatividade apenas quando ela reforçar a identidade da PsicoIncluir. urlDesign Motion Principleshttps://github.com/kylezantos/design-motion-principles

### Regras de motion
- Toda animação deve ter uma função clara: orientar, contextualizar uma mudança, melhorar a percepção de resposta ou reforçar a hierarquia.
- Evitar animações decorativas excessivas, entradas repetitivas, stagger em excesso, escalas exageradas, efeitos de blur generalizados e animações que pareçam artificiais ou geradas automaticamente.
- Preferir transições curtas e suaves para interações frequentes e tempos deliberados apenas quando o contexto justificar.
- Estados de entrada podem usar pequenas mudanças de opacidade e deslocamento; saídas devem ser mais discretas.
- A origem da animação deve fazer sentido em relação ao elemento que a acionou.
- Hover, focus, abertura/fechamento de modais, expansão de cards e mudanças de estado devem possuir transições consistentes.
- Não animar tudo. Interações de alta frequência devem ser instantâneas ou quase instantâneas quando a animação não acrescentar valor.
- Toda animação deve respeitar `prefers-reduced-motion`, reduzindo ou removendo movimentos não essenciais.

### Carregamento e progresso
- Usar **lazy loading** em imagens e recursos que não sejam necessários no primeiro viewport, especialmente na galeria e demais imagens abaixo da dobra.
- Usar **skeleton screens** ou placeholders estruturais quando houver conteúdo que realmente dependa de carregamento assíncrono, evitando telas vazias ou mudanças bruscas de layout.
- Preservar dimensões/áreas reservadas para imagens para evitar layout shift.
- Elementos interativos que executem uma ação assíncrona devem apresentar **estado de progresso/loading** e impedir ações duplicadas quando necessário.
- Após uma ação, fornecer **feedback visual claro** de sucesso, erro, mudança de estado ou conclusão.
- Não usar spinners ou indicadores animados sem necessidade; o estado de carregamento deve comunicar o que está acontecendo.

### Consistência de transições
- Cards, listas, modais, menus, navegação por âncoras e estados condicionais devem compartilhar uma linguagem de movimento consistente.
- Entradas e saídas devem parecer parte do mesmo sistema, evitando cada componente usar uma animação diferente sem justificativa.
- Scroll suave deve ser usado quando apropriado, sem prejudicar navegação por teclado ou `prefers-reduced-motion`.
- Foco de teclado deve permanecer perceptível e não deve depender exclusivamente de movimento.

### Revisão de qualidade visual
Antes de considerar uma entrega de interface concluída, o agente deve fazer uma revisão como **designer de produto sênior**, procurando e corrigindo elementos que pareçam bruscos, travados, genéricos, inconsistentes ou amadores. A revisão deve considerar:
- ritmo e duração das animações;
- coerência entre estados de entrada, saída, hover e focus;
- feedback de ações e estados de progresso;
- carregamento e ausência de layout shift;
- comportamento em mobile, tablet e desktop;
- acessibilidade e `prefers-reduced-motion`;
- performance e uso responsável de recursos.

## Roadmap inicial

### Nova função
- #01 — Criar estrutura base do site institucional
- #02 — Desenvolver seção Início / Hero
- #03 — Desenvolver seção A PsicoIncluir
- #04 — Desenvolver seção Especialidades
- #05 — Desenvolver seção Nosso Espaço
- #06 — Desenvolver seção Como Chegar
- #07 — Desenvolver seção Contato
- #08 — Desenvolver rodapé institucional
- #09 — Implementar botão flutuante de WhatsApp
- #10 — Implementar identidade visual da PsicoIncluir
- #11 — Implementar responsividade completa
- #12 — Implementar acessibilidade
- #13 — Implementar animações e microinterações
- #14 — Implementar SEO básico
- #15 — Preparar imagens reais da clínica

### Melhoria
- #16 — Refinar experiência de navegação
- #17 — Refinar experiência de conversão
- #18 — Refinar estética visual
- #19 — Otimizar performance

### Correção
- #20 — Corrigir inconsistências de responsividade
- #21 — Corrigir problemas de acessibilidade
- #22 — Corrigir links e CTAs
- #23 — Corrigir problemas de layout e espaçamento
- #24 — Corrigir problemas de carregamento de imagens
- #25 — Correção final pré-deploy

## Observação de bootstrap
O repositório estava vazio no momento da criação deste contexto e ainda não possuía commits ou branches. Por isso, a criação inicial deste arquivo constitui a inicialização necessária do repositório. A partir dessa base, as alterações de implementação devem seguir o fluxo Issue → Branch → Pull Request → Review → Merge → Deploy.
