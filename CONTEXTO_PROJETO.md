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
