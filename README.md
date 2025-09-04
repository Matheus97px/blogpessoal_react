# 📝 Blog Pessoal - Frontend

Um blog pessoal moderno e responsivo desenvolvido com React, consumindo uma API REST própria para gerenciamento de postagens, temas e usuários.

## 🚀 Tecnologias Utilizadas

- **React** 18+ com TypeScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router Dom** - Roteamento SPA
- **Axios** - Cliente HTTP para consumo da API
- **Context API** - Gerenciamento de estado global
- **React Hooks** - useState, useEffect, useContext
- **Vercel** - Deploy e hospedagem

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login e cadastro de usuários
- Autenticação via JWT Token
- Context API para gerenciamento de estado de autenticação
- Rotas protegidas

### 📝 Gestão de Conteúdo
- **Postagens**
  - Listar todas as postagens
  - Visualizar postagem individual
  - Criar nova postagem
  - Editar postagem existente
  - Deletar postagem
  
- **Temas**
  - Gerenciar temas/categorias
  - Associar postagens a temas
  - CRUD completo de temas

### 🎨 Interface e UX
- Componentes reutilizáveis
- Interface intuitiva com Tailwind CSS
- Navegação fluida com React Router

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn
- Backend do Blog Pessoal rodando

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/blog-pessoal-frontend.git
   cd blog-pessoal-frontend
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   
   Configure a URL da API no arquivo `.env`:
   ```env
   VITE_API_URL=http://localhost:4000
   ```
   

4. **Inicie o servidor de desenvolvimento**
   ```bash
   yarn dev
   ```

5. **Acesse a aplicação**
   
   Abra seu navegador em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
blog-pessoal-frontend/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.tsx
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   ├── postagens/
│   │   │   ├── cardpostagem/
│   │   │   ├── listapostagens/
│   │   │   ├── formulariopostagem/
│   │   │   └── deletarpostagem/
│   │   └── temas/
│   │       ├── cardtema/
│   │       ├── listatemas/
│   │       ├── formulariotema/
│   │       └── deletartema/
│   ├── pages/
│   │   ├── home/
│   │   ├── login/
│   │   ├── cadastro/
│   │   └── perfil/
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── models/
│   │   ├── Usuario.ts
│   │   ├── Postagem.ts
│   │   ├── Tema.ts
│   │   └── UsuarioLogin.ts
│   ├── services/
│   │   └── Service.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── README.md
```

## 🎯 Principais Componentes

### Context API - AuthContext
Gerencia o estado global de autenticação:
- Estado do usuário logado
- Token JWT
- Funções de login/logout
- Proteção de rotas

### Services - Axios
Centraliza todas as chamadas para a API:
- Interceptadores para token JWT
- Métodos para todas as operações CRUD
- Tratamento de erros HTTP

### Models/Interfaces
Tipagem TypeScript para:
- Usuario
- Postagem  
- Tema
- UsuarioLogin

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev          # Inicia servidor de desenvolvimento

```



## 🔐 Autenticação e Segurança

- **JWT Token**: Armazenado no LocalStorage
- **Context API**: Gerenciamento global do estado de auth
- **Rotas Protegidas**: Redirecionamento automático para login
- **Interceptadores Axios**: Inclusão automática do token nas requisições
- **Logout Automático**: Em caso de token expirado

## 🌐 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório ao Vercel**
2. **Configure as variáveis de ambiente:**
   ```env
   VITE_API_URL=https://sua-api-backend.render.com
   ```
3. **Deploy automático** a cada push na branch main

### Build Manual
```bash
npm run build
# Os arquivos estarão em /dist
```

## 🔗 Integração com Backend

Este frontend consome uma API REST desenvolvida em NestJS que oferece:
- Autenticação JWT
- CRUD de usuários
- CRUD de postagens
- CRUD de temas
- Relacionamentos entre entidades

**Repositório do Backend**: [blog-pessoal-backend](https://github.com/Matheus97px/blogpessoal)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Roadmap

- [ ] Implementar sistema de comentários
- [ ] Adicionar busca por postagens
- [ ] Sistema de curtidas
- [ ] Upload de imagens
- [ ] Modo escuro/claro
- [ ] Paginação de postagens
- [ ] Sistema de notificações
- [ ] PWA (Progressive Web App)

## 📄 Licença e Créditos

Este projeto foi desenvolvido durante o bootcamp **Full Stack Java** da **Generation Brasil**.

- 🎓 **Bootcamp**: Generation Brasil
- 👨‍💻 **Desenvolvido por**:  Matheus Pereira Xavier 
- 📚 **Para fins**: Educacionais e portfólio
- 📄 **Licença**: MIT License

O código está disponível sob a [Licença MIT](LICENSE) para estudo e referência.

**Generation Brasil** - Transformando vidas através da tecnologia! 🚀

## 👤 Autor

**Seu Nome**
- GitHub: [@Matheus97px](https://github.com/Matheus97px)
- LinkedIn: [Matheuspx97](https://www.linkedin.com/in/matheuspx97/)
- Email: matheus97p.q@gmail.com
- Portfolio: [meu portifolio](https://matheus97px.github.io/portifolio/)


---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

**Desenvolvido com ❤️ e React**