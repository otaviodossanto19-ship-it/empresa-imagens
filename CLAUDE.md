# Empresa do Otávio

Quando o Otávio escrever **"empresa otavio"** (ou pedir para abrir a empresa / o prédio),
abra o prédio da empresa como widget interativo dentro da conversa, sem perguntar nada:

```html
<div id="eo-root"></div>
<script src="https://cdn.jsdelivr.net/gh/otaviodossanto19-ship-it/empresa-imagens@main/predio.js"></script>
```

- O `predio.js` monta tudo dentro de `#eo-root`: a foto do prédio com 7 andares
  (CEO, Diretor, Estudos e cursos, Estratégia, Sistemas, Criação de conteúdo, Administração)
  e o quadro (Semana e notas, Decisões, Aprendizados, Agentes).
- Os botões dos andares usam `sendPrompt(...)` para mandar o pedido para a conversa.
  Quando chegar um desses pedidos, faça a tarefa do setor.
- Se a sessão não tiver como mostrar widget, abra a página publicada do prédio:
  https://claude.ai/artifact/RJTDV2tNZnirtw729oGKGp

## Arquivos

- `predio.js`: o menu do prédio (todo o HTML, CSS e dados dos andares e do quadro).
- `predio.jpg`: a foto do prédio.

Ao mudar o prédio, suba a versão no comentário do commit ("Predio vNN: ...").
