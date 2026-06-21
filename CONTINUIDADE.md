# Continuidade do Projeto NEX

Este arquivo e o GitHub são a memória oficial do projeto entre Mac, Windows e futuras conversas no Codex.

## Fonte Principal

- Repositório: `https://github.com/Nexus-VR-AR/nex-site.git`
- Branch principal: `main`
- Site atual: `outputs/site/index.html`
- Pasta de assets: `outputs/site/assets/`

## Estado Atual

- O projeto é uma landing page estática em HTML, CSS e JavaScript.
- A página apresenta a NEX como braço digital e comercial para serviços de alto valor.
- A estrutura atual tem hero, oferta, operação, segmentos atendidos, processo e formulário de diagnóstico.
- O formulário ainda não envia dados para WhatsApp, CRM ou agenda; ele apenas mostra uma mensagem local.
- O repositório foi clonado no macOS em `nex-site-github`.

## Decisões De Produto E Design

- A NEX deve ter identidade própria, com inspiração estética de referências modernas, sem copiar marca, mascote, composição ou elementos proprietários de terceiros.
- O posicionamento deve ser direto, comercial e mais próximo de uma plataforma/serviço operacional do que de uma agência genérica.
- O público inicial é formado por profissionais liberais e empresas de serviços de alto valor, como arquitetos, engenheiros, médicos e clínicas.
- A linguagem deve transmitir confiança, organização comercial e ganho de previsibilidade.

## Fluxo Seguro Entre Mac E Windows

Antes de começar em qualquer máquina:

```bash
git pull
```

Depois de terminar uma sessão:

```bash
git status
git add .
git commit -m "Descreva a alteração"
git push
```

Na outra máquina, antes de continuar:

```bash
git pull
```

## Checklist Para Encerrar Uma Sessão

1. Atualizar este arquivo com o que foi feito.
2. Registrar pendências claras.
3. Testar a página localmente.
4. Fazer commit com mensagem objetiva.
5. Enviar para o GitHub.

## Pendências Atuais

- Conectar o formulário a WhatsApp, CRM ou agenda.
- Evoluir o visual para uma experiência mais SaaS-like e comercial.
- Revisar copy para deixar a oferta mais objetiva.
- Definir caminho de publicação em produção.
- Decidir se o projeto continuará como site estático ou migrará para uma stack com build, como Vite/React.

## Registro De Sessões

### Retomada No Mac

- Repositório clonado com sucesso no macOS após tornar o GitHub público temporariamente.
- Confirmado que vieram HTML, CSS, JavaScript, assets e histórico Git.
- Criado este arquivo para manter a continuidade do projeto independente do histórico de chat em cada máquina.
