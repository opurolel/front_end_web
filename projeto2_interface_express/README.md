# Projeto 2 – Interface Express: do HTML ao CSS com IA

## Divulgação de evento de rock

**Metaleira Fest**: landing page de divulgação de um show de metal underground em São Paulo (evento fictício, criado para fins acadêmicos).

A página apresenta o evento, traz informações em três cards (data e horário, local e line-up) e tem um formulário demonstrativo para entrar na lista de presença.

## Integrantes

- Leonardo Delmondes Cunha

**Disciplina:** Desenvolvimento Front-End Para Web

## Como abrir a página

1. Baixe e extraia a pasta `projeto2_interface_express` (arquivo ZIP).
2. Confira se a estrutura está assim:

```
projeto2_interface_express
├── index.html
├── README.md
├── css
│   └── estilo.css
└── img
    └── rock.png
```

3. Dê dois cliques em `index.html` para abrir no navegador (Chrome, Firefox, Edge etc.).
4. Não é preciso instalar nada nem usar internet.

## Principais prompts utilizados

1. **Estrutura HTML:** "Faça uma estrutura HTML sem CSS e sem JavaScript para uma landing page de divulgação de um show de metal underground em São Paulo, com cabeçalho, menu com pelo menos 3 links internos, conteúdo principal, apresentação do tema, três cards informativos, formulário demonstrativo e rodapé."
2. **README:** "Faça o README do projeto com título, integrantes, instruções para abrir, prompts e explicação das propriedades mantidas."

## Três propriedades novas pesquisadas

| Propriedade | Para que serve |
|---|---|
| `box-shadow` | Cria sombra ao redor de um elemento. |
| `clamp()` | Define um valor que acompanha a tela, com limites mínimo e máximo. |
| `object-fit` | Controla como uma imagem se ajusta à caixa em que está. |

## Propriedades mantidas no projeto

### `box-shadow`

Foi aplicada nos cards (`.card`) com sombra vermelha (`0 6px 12px var(--cor-destaque)`). Os valores significam: deslocamento horizontal, deslocamento vertical, desfoque e cor. No `:hover`, a sombra aumenta (`0 14px 24px`) e o card sobe um pouco com `translateY(-8px)`, o que dá destaque ao card sob o cursor.

### `clamp()`

Foi aplicada no tamanho da fonte dos títulos (`font-size: clamp(1.6rem, 4vw, 2.6rem)`) e na altura do cartaz. O primeiro valor é o mínimo, o segundo é o ideal (proporcional à largura da tela) e o terceiro é o máximo. Assim, o texto se adapta ao tamanho da tela sem ficar pequeno demais no celular nem enorme no computador.

## Testes realizados

- [ ] Página aberta no computador (navegador: ______)
- [ ] Menu: links internos levam às seções corretas
- [ ] `:hover` e `:focus` testados no menu, nos cards, nos campos e no botão
- [ ] Layout testado em tela pequena (media query, `max-width: 600px`)
- [ ] Textos e dados personalizados pelo grupo
