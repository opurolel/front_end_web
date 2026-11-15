# Descubra seu caminho no Front-End

**Projeto 3 – Painel Interativo com JavaScript**
Desenvolvimento Front-End para Web – Universidade Cruzeiro do Sul – 2026

## 1. Tema

Página interativa em que o visitante informa o nome, escolhe uma tecnologia de interesse (HTML, CSS ou JavaScript) e recebe uma orientação personalizada de estudos. A página também permite alternar entre o tema claro e o tema escuro.

O projeto separa as três camadas do Front-End:

- **HTML** (`index.html`): estrutura da página.
- **CSS** (`css/estilo.css`): aparência, layout, responsividade e temas.
- **JavaScript** (`js/script.js`): comportamento (eventos, validação, mensagens e troca de tema).

## 2. Integrante

Projeto realizado individualmente.

| Nome completo |
|---|
| [Leonardo Delmondes Cunha] |

## 3. Divisão das tarefas

Como o projeto foi feito de forma individual, todas as etapas foram realizadas por mim: estrutura HTML, estilização com CSS, programação em JavaScript, testes e documentação.

## 4. Estrutura de arquivos

```
projeto3_javascript/
├── index.html
├── README.md
├── css/
│   └── estilo.css
└── js/
    └── script.js
```

## 5. Comandos JavaScript utilizados

| Comando / recurso | Para que serve no projeto |
|---|---|
| `document.querySelector()` | Localiza os elementos pelo seletor CSS: o campo de nome (`#campo-nome`), os botões (`#btn-gerar` e `#btn-tema`), a área de resultado (`#area-resultado`) e o radio marcado (`input[name="tecnologia"]:checked`). |
| `const` e `let` | `const` guarda os elementos e os valores lidos; `let` guarda a variável `mensagem`, cujo valor só é definido depois, dentro do `switch`. |
| `function` | Agrupa o código de cada ação em um bloco com nome: `gerarOrientacao` e `alterarTema`. |
| `addEventListener('click', ...)` | Executa `gerarOrientacao` ou `alterarTema` quando o botão correspondente é clicado. |
| `event.preventDefault()` | Impede que o botão, por estar dentro de um formulário, recarregue a página ao ser clicado. |
| `.value` | Lê o texto digitado no campo de nome e o `value` do radio marcado. |
| `.trim()` | Remove espaços do início e do fim do nome, para detectar um campo preenchido apenas com espaços. |
| `if` | Valida o nome vazio e a ausência de tecnologia selecionada. |
| `return` | Encerra a função quando há erro de validação, sem gerar a orientação. |
| `switch / case / default / break` | Escolhe a orientação conforme o valor do radio (`html`, `css` ou, no `default`, JavaScript). |
| Template string `` `Olá, ${nome}!` `` | Insere o nome do visitante dentro da mensagem. |
| `.textContent` | Exibe a mensagem (de erro ou de orientação) na área de resultado, na própria página. |
| `.classList.add()` / `.classList.remove()` | Liga a classe `campo__erro` nas mensagens de erro e a remove quando o resultado é normal. |
| `.classList.toggle()` | Alterna a classe `escuro` no elemento `<html>` (`document.documentElement`) para trocar entre os temas. |

## 6. Como funciona

### Gerar orientação

1. Ao clicar em **Gerar orientação**, a função `gerarOrientacao` é executada.
2. A função lê o nome com `.value`, remove os espaços das pontas com `.trim()` e procura qual radio do grupo `tecnologia` está marcado.
3. **Validação do nome:** se o nome estiver vazio, a página exibe "Digite seu nome para receber a orientação!!" com a classe de erro `campo__erro`, e a função termina com `return`.
4. **Validação da tecnologia:** se nenhum radio estiver marcado (`null`), a página exibe "Selecione uma tecnologia!!" com a classe de erro, e a função termina.
5. Se os dados estiverem corretos, o `switch` compara o `value` do radio com `"html"` e `"css"`; qualquer outro valor cai no `default`, que é a orientação de JavaScript.
6. A mensagem é montada com template string, incluindo o nome do visitante. Em seguida, a classe `campo__erro` é removida e o texto é exibido com `.textContent`.

Cada novo clique substitui a mensagem anterior.

### Alterar tema

O CSS define as cores do tema escuro dentro do seletor `:root.escuro`, usando variáveis de cor. O JavaScript não conhece as cores: ao clicar em **Alterar tema**, a função `alterarTema` executa `document.documentElement.classList.toggle("escuro")`, que adiciona ou remove a classe `escuro` no `<html>`. Com a classe, a página fica escura; sem ela, volta ao tema claro.

A troca é **manual**: a página não acompanha a preferência de tema do sistema operacional.

## 7. Testes realizados

| Teste | Resultado |
|---|---|
| Nome vazio | Aviso exibido na página, com estilo de erro |
| Nome com apenas espaços | Aviso exibido (o `.trim()` detecta o campo vazio) |
| Nome preenchido sem tecnologia marcada | Aviso "Selecione uma tecnologia!!" |
| Nome + HTML | Orientação de HTML com o nome do visitante |
| Nome + CSS | Orientação de CSS com o nome do visitante |
| Nome + JavaScript | Orientação de JavaScript com o nome do visitante |
| Resultado normal após um erro | A mensagem aparece sem o estilo de erro |
| Botão **Alterar tema** | Alterna entre claro e escuro a cada clique |
| Tela pequena | Layout se adapta pela media query |

## 8. Captura de tela

![Página funcionando](.png)

*(Coloque a imagem `captura-de-tela.png` na pasta do projeto, ou ajuste o nome acima.)*

## 9. Uso de IA

O assistente de IA foi utilizado como apoio para explicar comandos de JavaScript e identificar erros durante o desenvolvimento. O código foi testado e adaptado por mim, e consigo explicar cada recurso utilizado.