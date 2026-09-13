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
- Lint e format
- Testes automatizados aplicáveis
- Build
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

## Esteira obrigatória de qualidade antes da `main`

Nenhum código relevante deve entrar na branch `main` sem passar pelos gates aplicáveis ao escopo da alteração. A esteira deve proteger o projeto sem criar complexidade artificial.

### Gate 1 — Rastreabilidade
- Toda alteração deve estar vinculada a uma Issue.
- A implementação deve ocorrer em branch própria.
- O PR deve mencionar a Issue relacionada.
- Mudanças diretas em `main` são proibidas para trabalho que possa ser entregue por PR.

### Gate 2 — Qualidade de código
- Executar formatter e lint configurados para a stack.
- **Biome** é a opção preferencial para projetos JavaScript/TypeScript quando compatível.
- **Commitlint** pode ser adotado para padronizar commits quando houver benefício real no fluxo do projeto.
- **Knip** deve ser considerado para identificar arquivos, dependências e exports não utilizados quando o volume de código justificar a análise.
- **Stryker** deve ser considerado para mutation testing quando houver lógica relevante e cobertura de testes suficiente para que o custo seja justificável.
- **`arch-contract`** somente deve ser introduzido se existir uma necessidade arquitetural concreta e compatível com a stack.
- Ferramentas não devem ser adicionadas apenas para cumprir checklist: cada uma precisa ter finalidade e custo-benefício claros.

### Gate 3 — Testes
A estratégia de testes deve crescer conforme o produto cresce:
- **Unitários:** lógica reutilizável, utilitários e comportamentos isoláveis.
- **Integração:** interação entre componentes, módulos, serviços e integrações relevantes.
- **End-to-end:** fluxos críticos que precisam funcionar como o usuário final os executa.
- **Playwright** é a opção preferencial para E2E quando compatível com a stack.
- **Codecov** pode acompanhar cobertura quando existir uma suíte automatizada relevante.
- **Endtest** só deve ser adotado se houver uma necessidade que não seja atendida adequadamente pela estratégia existente; evitar duplicidade desnecessária com Playwright.
- Nenhum teste deve ser criado artificialmente apenas para aumentar percentual de cobertura; o objetivo é reduzir risco real.

### Gate 4 — Build e validação funcional
Antes do merge:
- build de produção deve concluir sem erros;
- rotas, navegação, links e CTAs relevantes devem ser validados;
- WhatsApp, mapa e demais integrações devem ser verificados quando fizerem parte da alteração;
- console deve ser revisado em busca de erros críticos;
- comportamento responsivo deve ser verificado conforme o escopo;
- alterações visuais devem passar por revisão de qualidade como produto, não apenas por compilação.

### Gate 5 — Segurança
- Fazer revisão de segurança proporcional ao risco da alteração.
- Qualquer endpoint/backend exposto que realmente precise de proteção contra abuso deve possuir **rate limit** adequado.
- Não expor segredos, chaves privadas ou credenciais no frontend ou no repositório.
- Validar entradas e integrações externas quando houver backend ou formulários processados por serviços.
- Separar claramente responsabilidades de frontend e backend caso backend seja introduzido.
- Dependências e configurações devem ser revisadas antes de releases relevantes.

### Gate 6 — Performance
- Definir e respeitar um **performance budget** compatível com um site institucional.
- Otimizar imagens e recursos antes do deploy.
- Usar lazy loading quando fizer sentido, principalmente para conteúdo abaixo da primeira dobra.
- Evitar JavaScript, bibliotecas e recursos desnecessários.
- Monitorar layout shift, tamanho de assets e tempo de carregamento.
- Não sacrificar simplicidade arquitetural por otimizações prematuras.

### Gate 7 — Observabilidade
A observabilidade deve ser proporcional ao porte e à arquitetura do projeto:
- **Sentry:** considerar para monitoramento de erros do frontend/produção quando houver necessidade de acompanhamento contínuo.
- **Datadog:** considerar apenas se a operação justificar uma plataforma de observabilidade mais ampla.
- **New Relic:** alternativa a Datadog quando houver necessidade operacional compatível.
- **OpenTelemetry:** considerar quando existir necessidade real de instrumentação padronizada, especialmente em arquiteturas com múltiplos serviços.
- Não adotar Sentry + Datadog + New Relic + OpenTelemetry simultaneamente sem justificativa técnica. Evitar custo, duplicidade e complexidade desnecessários.

### Gate 8 — Conteúdo jurídico
- Termos de Uso e Política de Privacidade não devem ser inventados pelo agente.
- Quando esses documentos forem necessários, seu conteúdo deve ser revisado e aprovado pelo jurídico responsável antes de ser considerado final.
- O agente pode estruturar tecnicamente as páginas e integrações, mas não deve representar conteúdo jurídico não validado como aprovado.

### Gate 9 — Arquitetura e reutilização
Desde o início da implementação:
- evitar **overengineering**;
- evitar gargalos arquiteturais desnecessários;
- componentizar desde o início, mantendo responsabilidades claras;
- aplicar **DRY com critério**, evitando abstrações prematuras;
- reutilizar componentes existentes em vez de reconstruí-los;
- antes de criar um novo componente, verificar se já existe um componente equivalente ou que possa ser estendido com segurança;
- preferir soluções simples, legíveis e adequadas ao porte do projeto;
- não introduzir infraestrutura, serviços ou camadas que não tenham uma necessidade concreta.

### Gate 10 — Review antes do merge
O PR só deve ser considerado pronto para `main` quando:
1. a Issue relacionada estiver clara;
2. a implementação estiver na branch correta;
3. lint/format aplicáveis estiverem aprovados;
4. testes aplicáveis estiverem aprovados;
5. build estiver aprovado;
6. segurança e performance tiverem sido revisadas conforme o escopo;
7. a interface tiver sido revisada visualmente quando houver alteração de UI;
8. riscos, limitações e próximos passos estiverem registrados no PR;
9. houver review antes do merge.

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

A interface deve seguir princípios de motion design com foco em **propósito, sutileza, consistência, acessibilidade e performance**, usando como referência a skill **Design Motion Principles** de Kyle Zantos (https://github.com/kylezantos/design-motion-principles). A skill trabalha com lentes de contenção e velocidade, refinamento de produção e experimentação seletiva; para este site institucional/landing page, a prioridade deve ser o refinamento profissional e discreto, com criatividade apenas quando ela reforçar a identidade da PsicoIncluir.

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
- #27 — Implantar esteira de qualidade, segurança e gates antes da branch principal

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
