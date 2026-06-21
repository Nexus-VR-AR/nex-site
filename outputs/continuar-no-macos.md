# Continuar o projeto NEX no macOS

Este projeto hoje está em:

`C:\Users\Usuario\Documents\Codex\2026-06-20\vamo\outputs\site`

## Melhor caminho: GitHub

Use Git/GitHub para sincronizar Windows, macOS e Codex sem perder histórico.

No Windows, criar um repositório e enviar para um remoto:

```bash
cd C:\Users\Usuario\Documents\Codex\2026-06-20\vamo
git init
git add outputs/site
git commit -m "Initial NEX landing page"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO_GITHUB>
git push -u origin main
```

No macOS:

```bash
git clone <URL_DO_REPOSITORIO_GITHUB> nex
cd nex
open outputs/site/index.html
```

Depois, abra essa pasta no Codex do macOS como projeto local.

## Caminho rápido: ZIP

Use o arquivo `nex-site.zip` gerado junto deste README.

No macOS:

```bash
unzip nex-site.zip -d nex-site
open nex-site/index.html
```

## Continuidade no Codex

A mesma conta Codex ajuda com acesso e threads, mas arquivos locais de uma máquina não sincronizam automaticamente para outra. Para continuar bem entre Windows e macOS, use uma destas opções:

- GitHub: melhor para projeto vivo, histórico, branches e colaboração.
- ZIP: bom para levar a versão atual rapidamente.
- iCloud/Google Drive/Dropbox: funciona para arquivos, mas Git ainda é melhor para desenvolvimento.
- Remote connections: útil para controlar uma máquina com Codex aberto, mas usa os arquivos e ferramentas da máquina host.

## Próximo passo recomendado

Transformar este site estático em um projeto versionado da NEX:

1. Criar repositório `nex-site`.
2. Colocar o site em GitHub.
3. Abrir no Codex do macOS.
4. Continuar o redesign baseado na referência visual da Soro, com identidade própria da NEX.
