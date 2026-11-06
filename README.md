# WEB-01 — Site do Lumeterra

Site estático em pt-BR, sem build, dependências, fontes externas ou frameworks. Nenhuma publicação foi feita. O conteúdo distingue a visão do GDD de recursos disponíveis; os controles são previstos, não uma confirmação de implementação do cliente C++.

## Visualizar

Abra `index.html` diretamente no navegador, ou execute dentro de `site/`:

```sh
python -m http.server 8000
```

Depois abra `http://localhost:8000`. Todos os caminhos são relativos, inclusive as imagens. JavaScript só aplica o endereço de download; sem ele, o botão leva ao aviso de acesso e há uma mensagem orientando a ativá-lo.

## Configurar o download

Edite apenas `downloadUrl` em `config.js`. O botão externo usa o atributo `data-download`; os botões do cabeçalho e do hero levam à seção com os avisos antes do download.

O endereço atual é `https://github.com/lumeterra/lumeterra-releases/releases/latest`, o repositório público de downloads. Cada versão é publicada lá como release "latest", então o link sempre leva à mais recente. Nunca coloque tokens no JavaScript.


Referência: [documentação de releases do GitHub](https://docs.github.com/en/rest/releases/releases#get-the-latest-release).

## Hospedagem — decisão do usuário

- **Vercel (em uso):** projeto ligado a este repositório; cada push na branch principal publica o site. Domínio próprio pode ser adicionado depois nas configurações do projeto.
- **Vercel ou Netlify:** alternativas para hospedar os arquivos estáticos. Se escolhidas, configure `site/` como diretório publicado, sem comando de build, e confirme as condições do plano e do acesso ao repositório. Não há integração ou conta configurada por esta entrega.

Hospedar o site e liberar o download são decisões distintas. Não foi realizado push, deploy, criação de tags ou merge.

## Arte e direção visual

PNGs copiados de `assets/art/preview/`: `scene_crepusculo.png`, `player_x8.png` e `items_x8.png`. São estudos da arte atual, identificados como tais; não são capturas de gameplay. Renderização com `image-rendering: pixelated`; os arquivos originais foram preservados.

Direção revisada com a skill `frontend-design`: cena do crepúsculo como foco, títulos em Georgia (livro de aventura), corpo em Segoe UI e composição alinhada à esquerda. Base `#0b0d17`, noite `#141a2e`, profundidade `#1f2a44`, texto `#c7d3e3`, luz `#ffd166`, destaque `#fff1b8`; todas as cores vêm da paleta oficial. Layout: texto e cena lado a lado no desktop; fluxo único no celular. Evita efeitos automáticos e respeita redução de movimento.

## Validação

Validação local no navegador integrado do Orca, com servidor Python, em 2026-11-06:

- Viewports de 360×800, 768×1000 e 1280×900; inspeção das capturas e consulta das dimensões do DOM, sem conteúdo ultrapassando a largura disponível.
- Todas as âncoras locais resolvidas para IDs existentes; imagens decodificadas com dimensões naturais válidas (1152, 1280 e 1600 px de largura). Imagens abaixo da dobra usam carregamento adiado.
- Árvore de acessibilidade inspecionada: navegação nomeada, um h1, seções e níveis de títulos, descrições alternativas. Tab/Enter acionaram o link de pular conteúdo. Foco visível reforçado com `:focus` para o navegador integrado.
- `node --check` nos dois arquivos JavaScript; console do navegador sem mensagens. Link externo confirmado no DOM a partir de `config.js`.
- Conferência do HTML: fechamento de elementos, IDs únicos, idioma, viewport e referências locais. Contraste das combinações de texto e fundo calculado pela fórmula WCAG (mínimo 4,5:1 para texto normal).

Limitações: não é uma auditoria completa com leitor de tela ou matriz de navegadores. O ZIP não foi baixado nem executado, pois depende da DEP-01 e de acesso ao repositório. Sem alterações em `docs/QA.md`, conforme o escopo exclusivo de `site/`; limitações ficam registradas aqui para revisão do coordenador.
