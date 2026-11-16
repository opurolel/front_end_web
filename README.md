# 🌐 Desenvolvimento Front-End para Web

Repositório com os estudos e códigos da disciplina **Desenvolvimento Front-End para Web**, ministrada pelo **Prof. Vinicius Alves** no 2º semestre de 2026.

A disciplina apresenta as três linguagens que formam a base de qualquer site, **HTML**, **CSS** e **JavaScript**, partindo de como a web funciona até a criação de páginas estruturadas, estilizadas e interativas.

---

## 🎯 Sobre a disciplina

O front-end é a parte da aplicação que roda no navegador do usuário. Na disciplina, cada linguagem tem um papel:

| Linguagem | Papel | Analogia usada em aula |
|---|---|---|
| 🏗️ **HTML** | Estrutura e conteúdo da página | A estrutura da casa: paredes, portas e janelas |
| 🎨 **CSS** | Aparência visual e layout | O designer de interiores: cores, móveis e iluminação |
| ⚙️ **JavaScript** | Comportamento e interatividade | O que responde às ações de quem usa a página |

**Principais tópicos estudados:**

- 🌍 Como a web funciona (HTTP/HTTPS, cliente/servidor, URL e DNS)
- Estrutura de um documento HTML5 e HTML semântico
- Formulários, validação nativa, áudio e vídeo
- Estilização com CSS: seletores, box model, cores, Flexbox e Grid
- Fundamentos de JavaScript: variáveis, operadores, decisões, repetições e funções
- DOM e eventos

---

## 🗂️ Conteúdo estudado

### Visão geral das aulas

| Aula | Tema | Principais conteúdos |
|---|---|---|
| 02a | Introdução ao HTML | Internet e protocolos, cliente/servidor, URL, linguagens do front-end, ferramentas |
| 02b | HTML5: estrutura e conteúdo | Estrutura básica, tags e atributos, títulos, listas, links, imagens, elementos semânticos |
| 03 | HTML semântico e formulários | Semântica e SEO, codificação de caracteres, tabelas, referências de arquivos, imagens |
| 05 | Formulários e recursos multimídia | `<form>`, tipos de `input`, atributos de validação, `<video>` e `<audio>` |
| 06 | Introdução ao CSS3 | Sintaxe, formas de inserir CSS, prioridades, seletores de tipo e de classe |
| 07 | CSS: div, span e box model | Seletor de id, combinadores, `div` e `span`, margens, bordas, sombras e cores |
| 08 | CSS: Flexbox e Grid | Layouts com Flexbox e Grid, menus de navegação, acessibilidade |
| 09 | Fundamentos do JavaScript | Inserção de código, `var`/`let`/`const`, strings, caixas de diálogo, conversão de tipos |
| 10 | JavaScript: decisões, repetições e funções | Operadores, `if`/`switch`, laços, funções, arrow functions, DOM e eventos |

### 🌍 Aula 02a — Introdução ao HTML

- Internet como uma grande biblioteca: protocolos **HTTP** e **HTTPS**
- Modelo de **requisição e resposta** e o fato de o HTTP ser *stateless*
- Criptografia, **TLS** e certificados de segurança
- Ambiente **cliente/servidor** e estrutura de uma **URL** (`protocolo://domínio:porta/caminho/recurso?query#referência`)
- Front-end, back-end e banco de dados: o que cada parte faz
- As três linguagens do front-end: HTML, CSS e JavaScript
- Ferramentas: editores de código (Visual Studio Code), navegadores e servidor web local (WAMP, opcional)
- Organização de projetos front-end, registro de domínio e **DNS**
- Primeiro contato com o HTML5: `<!DOCTYPE html>`, tags de título, parágrafo, lista e tabela
- Introdução ao **Git e GitHub**

### 🏗️ Aula 02b — HTML5: estrutura e conteúdo

- Ferramentas do desenvolvedor do navegador: inspecionar e editar elementos
- O que é HTML: linguagem de marcação, não de programação
- Estrutura básica: `<!DOCTYPE html>`, `<html lang="pt-BR">`, `<head>`, `<meta charset="UTF-8">`, `viewport`, `<title>` e `<body>`
- **Tags, elementos e atributos**, elementos vazios (`<img>`, `<br>`, `<meta>`)
- Comentários e boas práticas de indentação
- Títulos (`<h1>` a `<h6>`), parágrafos e listas (`<ul>` e `<ol>`)
- Links (`href`, `target="_blank"`, `rel="noopener noreferrer"`) e imagens (`src` e `alt`)
- **HTML semântico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` e `<footer>`
- Erros comuns a evitar e validação do código

### 📄 Aula 03 — HTML semântico e formulários

- A "revolução semântica" do HTML5: acessibilidade e **SEO**
- Elementos semânticos × não semânticos (`<div>` e `<span>`)
- Padrão de escrita: tags e atributos em minúsculas, fechamento de tags e aspas nos valores
- Caracteres especiais (`&lt;`, `&gt;`, `&amp;`, `&nbsp;`...) e codificação **UTF-8**
- Tag `<meta>` para codificação e visualização em dispositivos móveis
- Comportamento de espaços em branco e quebras de linha no HTML
- Tags principais: `<p>`, `<strong>`, `<em>`, `<br>`, `<hr>`, `<h1>` a `<h6>`
- Listas ordenadas e não ordenadas
- Tabelas: `<table>`, `<tr>`, `<td>`, `<thead>`, `<th>`, `<tbody>` e `<tfoot>`
- Tag `<div>` para blocos e regiões genéricas
- Referências **absolutas e relativas** a arquivos
- Formatos de imagem para a web: GIF, JPG e PNG

### 📝 Aula 05 — Formulários e recursos multimídia

- Links entre páginas e por que nunca usar o caminho físico do arquivo
- Estrutura de um formulário: `<form>`, `method` (`get` ou `post`) e `action`
- Tipos de `<input>`: `text`, `password`, `email`, `url`, `hidden`, `checkbox`, `radio`, `file`, `image`, `button` e `submit`
- Diferença entre os atributos **`id`** (acesso por JavaScript) e **`name`** (envio ao servidor)
- `<fieldset>` e `<legend>`, `<button>`, `<select>` com `<optgroup>` e `<textarea>`
- Atributos de formulário: `disabled`, `readonly`, `maxlength`, `pattern`, `required`, `size`, `value`, `autofocus` e `placeholder`
- Envio de dados para um servidor (exemplo com PHP) e tipos de input modernos
- Máscaras e validação com `pattern` (expressões regulares)
- **Acessibilidade** em formulários: labels, mensagens de erro claras e ordem de tabulação
- Elementos `<video>` e `<audio>`: reprodução nativa, sem plugins
- Atalhos do Visual Studio Code (Emmet), como `ul>li*5` e `!` para gerar a estrutura HTML

### 🎨 Aula 06 — Introdução ao CSS3

- Papel do CSS e sintaxe de uma regra: seletor, propriedade e valor
- Três formas de inserir CSS: **externo** (arquivo `.css` com `<link>`), **incorporado** (`<style>`) e **inline** (evitar)
- Ordem de prioridade: inline > incorporado > externo
- Seletor de **tipo** (elemento), como `p { color: blue; }`
- Seletor de **classe** (`.nome_da_classe`) e uso do atributo `class`

### 📦 Aula 07 — CSS: div, span e box model

- Seletor de **id** (`#nome_do_id`) e diferença para classes (o id é único)
- Uso de `class` e `id` na mesma tag
- **Combinadores:** `tag1 > tag2` (filha) e `tag1 tag2` (descendente)
- Comentários em CSS (`/* ... */`)
- Tags `<div>` (blocos e layout) e `<span>` (trechos dentro do conteúdo)
- **Box model:** `width`, `height`, `margin`, `border` e `padding`
- Margens com um a quatro valores
- Bordas, estilos de borda e `border-radius`
- Sombra com `box-shadow`
- Cores: nomes, hexadecimal, RGB, RGBA, HSL e HSLA

### 📐 Aula 08 — CSS: Flexbox e Grid

- **Flexbox:** propriedades do container e dos itens, ideal para layouts em uma dimensão
- **CSS Grid:** `display: grid`, `grid-template-columns`, `grid-template-areas` e `repeat(auto-fit, minmax())`, ideal para layouts em duas dimensões
- Quando usar cada um (e como combiná-los no mesmo projeto)
- **Menus de navegação:** menu horizontal (`display: flex`, `position: sticky`) e menu vertical (`transform` e `transition`)
- Efeitos com `:hover` e `transition`
- Navegação responsiva e acessível (teclado, leitores de tela e WAI-ARIA)
- Recursos de apoio: Can I Use, CodePen e documentação MDN

### ⚙️ Aula 09 — Fundamentos do JavaScript

- História da linguagem (1995) e edições do **ECMAScript** (ES5, ES6/ES2015 e atualizações anuais)
- Como inserir JavaScript: no `<body>`, no `<head>`, em uma tag (evento) ou em arquivo `.js` externo
- Modo estrito (`"use strict"`)
- Variáveis com **`var`**, **`let`** e **`const`**, escopo (global, de função e de bloco) e *hoisting*
- Regras de nomes de variáveis e *case sensitive*
- Comentários, operadores aritméticos e de atribuição
- **Strings:** aspas duplas, simples e acento grave, concatenação e *template strings* (`${ }`)
- Caixas de diálogo: `alert()`, `confirm()` e `prompt()`
- Conversão de tipos: `parseInt()` e `parseFloat()`
- Desenvolvimento em camadas: estrutura (HTML), apresentação (CSS) e comportamento (JavaScript)
- Ferramenta do desenvolvedor do navegador (F12): erros, `console.log` e *breakpoints*

### 🔁 Aula 10 — JavaScript: decisões, repetições, funções, DOM e eventos

- Outras conversões: `String()`, `Number()` e `typeof`
- Operadores de comparação e **lógicos** (`&&`, `||`, `!`) com tabela-verdade
- Estruturas de decisão: `if`, `if...else`, `if...else if...else`, **operador ternário** e `switch...case`
- Estruturas de repetição: `for`, `while` e `do...while`, com `break` e `continue`
- **Funções:** parâmetros, retorno com `return`, funções com e sem retorno
- **Arrow functions** (`(a, b) => a + b`) e formas de criar funções
- **DOM (Document Object Model):** `getElementById`, `getElementsByName`, `getElementsByTagName`, `getElementsByClassName`, `querySelector` e `querySelectorAll`
- Alteração de estilos via `elemento.style`
- **Eventos:** manipulador e disparador, eventos de mouse (`click`, `mouseover`...), de teclado (`keydown`, `keyup`...) e de HTML (`load`, `change`, `submit`...)

---

## 🧭 Trilha de aprendizagem

1. **Como a web funciona** → protocolos, cliente/servidor, URL e DNS.
2. **Estrutura** → HTML5, tags, atributos e semântica.
3. **Interação do usuário** → tabelas, formulários, áudio e vídeo.
4. **Aparência** → CSS: seletores, box model, cores e layouts com Flexbox e Grid.
5. **Comportamento** → JavaScript: lógica, funções, DOM e eventos.

Os três pilares trabalham em camadas separadas: **HTML** (estrutura), **CSS** (apresentação) e **JavaScript** (comportamento), cada um em seu próprio arquivo.

---

## ⚙️ Como visualizar os projetos

Não é necessário compilar nada: basta um editor de código e um navegador.

```bash
git clone https://github.com/opurolel/front_end_web.git
```

1. Abra a pasta no **Visual Studio Code**.
2. Abra o arquivo `.html` desejado em um navegador (Chrome, Firefox ou Edge).
3. Use as **Ferramentas do Desenvolvedor** (`F12`) para inspecionar o HTML, o CSS e o console do JavaScript.

> 💡 Exemplos que enviam dados a um servidor (como os formulários com PHP) exigem um servidor web local, como o WAMP.

---

## 🛠️ Ferramentas utilizadas

- Visual Studio Code
- Navegadores: Google Chrome, Brave.
- Git e GitHub

---

## 👤 Autor

Repositório organizado como registro de estudo da disciplina.

- **Nome:** _Leonardo Delmondes Cunha_
- **RGM:** _047531495_
---
