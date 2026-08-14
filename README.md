# CAPYFLIX
🦫 CAPYFLIX <br>

Uma plataforma de streaming fictícia desenvolvida para estudo e aplicação prática de tecnologias de desenvolvimento de software.

O **CAPYFLIX** é um projeto inspirado em plataformas modernas de streaming, desenvolvido com o objetivo de colocar em prática conhecimentos de **desenvolvimento frontend, backend, APIs REST, banco de dados e arquitetura de software**.

A proposta combina uma experiência de streaming com uma identidade visual própria, utilizando uma estética **kawaii**, baseada em capivaras, tons de laranja, bege e cores pastéis.

O projeto será desenvolvido de forma incremental, começando pelo **protótipo e construção da interface**, avançando posteriormente para a implementação do backend em **Java com Spring Boot**, integração com **MySQL** e desenvolvimento das funcionalidades da plataforma.

O CAPYFLIX tem como objetivo servir como um projeto prático para demonstrar a evolução do desenvolvimento de uma aplicação desde sua concepção visual até uma aplicação integrada, explorando conceitos como:

- Desenvolvimento de interfaces
- Responsividade
- UX/UI
- Programação orientada a objetos
- Desenvolvimento de APIs REST
- Arquitetura em camadas
- Persistência de dados
- Autenticação de usuários
- Integração entre frontend e backend
- Versionamento com Git e GitHub

> **Observação:** O CAPYFLIX é um projeto fictício desenvolvido exclusivamente para fins de estudo, prática e portfólio. Os conteúdos, planos, valores e informações apresentados na plataforma são ilustrativos.


## 1. Primeiro Passo 

Fase 1 — Interface

Primeiro você constrói:

### Home <br>
Navbar/sidebar <br>
Cards dos filmes <br>
Banner principal <br>
Busca <br>
Página de detalhes <br>
Perfil <br>
Página de planos <br>

---

## ☕ 2. E onde entra o Java?

<p></p>

### Java + SpringBoot :<br>

```
Java
  ↓
Spring Boot
  ↓
API REST
  ↓
Banco de dados
```
<p></p>

### E para o frontend:
<p></p>

```
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
React
```

## 🎬 4. A Home seria o coração


![Texto Alternativo](/public/img/prototipoimg.png "Prototipo HomePage")

---

## 🎨 5. Paleta

| Uso            | Cor       |
| -------------- | --------- |
| Fundo          | `#FFF7E8` |
| Bege           | `#F3E2C7` |
| Laranja pastel | `#F4A261` |
| Laranja claro  | `#FFD0A8` |
| Marrom         | `#6B4F3A` |
| Creme          | `#FFFDF7` |
| Verde capivara | `#A8C3A0` |

---

## 💳 6. Página de planos

Lembrando que o sistema tem como base estudo das tecnologias citadas entao os valores e tudo remetende e ficticio.

### 🌱 Capy Básico

#### R$ 19,90

- Qualidade HD
- 1 tela
- Catálogo completo

### 🍊 Capy Plus
 
#### R$ 29,90
- Full HD
- 2 telas
- Downloads
- Sem anúncios


### 🦫 Capy Premium

#### R$ 39,90

- 4K
- 4 telas
- Downloads
- Perfil personalizado
- Conteúdo 

---

## 🧱 7. Estrutura do projeto Java

```
capyflix/
│
├── src/
│   └── main/
│       └── java/
│           └── com.capyflix/
│
│               ├── controller/
│               │
│               ├── service/
│               │
│               ├── repository/
│               │
│               ├── model/
│               │
│               └── dto/
│
├── resources/
│   ├── application.properties
│   └── ...
│
└── pom.xml
```

## 🚀 8. O Projeto tem 6 versões

#### 🦫 V0.1 — Layout

Só:

- Home
- Navbar
- Cards
- Banner
- Sidebar/mobile navigation

#### 🦫 V0.2 — Catálogo

Adicionar:

- Filmes
- Categorias
- Busca
- Página de detalhes

#### 🦫 V0.3 — Usuário

Adicionar:

- Cadastro
- Login
- Perfil

#### 🦫 V0.4 — Banco

- Java + Spring Boot + MySQL.

- Agora os filmes e usuários deixam de ser dados "fake".

#### 🦫 V0.5 — Recursos

Adicionar:

- Favoritos
- Minha lista
- Histórico
- Continuar assistindo
- Avaliações

#### 🦫 V1.0 — CapyFlix

Aí sim:
```
Login
   ↓
Home
   ↓
Catálogo
   ↓
Filme
   ↓
Assistir
   ↓
Histórico
   ↓
Perfil
```
# Resumo da Arquitetura 
```
capyflix/
│
├── backend/
│   │
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── com/capyflix/
│   │
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── dto/
│   └── config/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
└── README.md
```