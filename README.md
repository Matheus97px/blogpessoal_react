# Blog Pessoal

## Descrição

O **Blog Pessoal** é uma aplicação web desenvolvida em [React](https://reactjs.org/) com [TypeScript](https://www.typescriptlang.org/), utilizando [Vite](https://vitejs.dev/) para build e [Tailwind CSS](https://tailwindcss.com/) para estilização. O frontend consome uma API REST desenvolvida em [NestJS](https://nestjs.com/) e hospedada no [Render](https://render.com/).

O sistema permite que usuários se cadastrem, façam login, criem, editem e deletem postagens e temas, além de associar postagens a temas. Todo o fluxo de autenticação, cadastro e manipulação de dados é realizado via requisições HTTP para a API NestJS.

## Funcionalidades

- Cadastro e login de usuários
- Criação, leitura, atualização e exclusão de postagens
- Criação, leitura, atualização e exclusão de temas
- Associação de postagens a temas
- Interface responsiva e moderna
- Consumo de API externa (NestJS no Render)
- Feedback visual com loaders/spinners

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Spinners](https://www.davidhu.io/react-spinners/)
- [ReactJS Popup](https://react-popup.elazizi.com/)
- [NestJS (API)](https://nestjs.com/) - [Repositório Backend](https://github.com/seu-usuario/blogpessoal-nestjs)
- [Render](https://render.com/) (deploy da API)

## Como Funciona

O frontend faz requisições para a API NestJS hospedada no Render. O endereço base da API está configurado em [`src/services/Service.ts`](src/services/Service.ts):

```ts
const api = axios.create({
    baseURL: 'https://blogpessoal-0ssq.onrender.com/'
})
```

## Instalação e Uso

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/seu-usuario/blogpessoal.git
cd blogpessoal
npm install
```

### Executando o Projeto

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Backend

O backend deve estar rodando e acessível via [https://blogpessoal-0ssq.onrender.com/](https://blogpessoal-0ssq.onrender.com/). O código do backend está disponível em: [blogpessoal-nestjs](https://github.com/Matheus97px/blogpessoal).

## Estrutura do Projeto

```
src/
├── components/
│   ├── footer/
│   ├── navbar/
│   ├── postagem/
│   └── tema/
├── contexts/
├── models/
├── pages/
├── services/
├── App.tsx
├── main.tsx
├── index.css
└── ...
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas alterações (`git commit -m 'feat: NovaFeature'`)
4. Push para o repositório (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

##  Licença e Créditos

Este projeto foi desenvolvido durante o bootcamp **Full Stack Java** da **Generation Brasil**.

-  **Bootcamp**: Generation Brasil
-  **Desenvolvido por**:  Matheus Pereira Xavier 
-  **Para fins**: Educacionais e portfólio
-  **Licença**: MIT License

O código está disponível sob a [Licença MIT](LICENSE) para estudo e referência.

**Generation Brasil** - Transformando vidas através da tecnologia! 🚀

##  Autor

**Seu Nome**
- GitHub: [@Matheus97px](https://github.com/Matheus97px)
- LinkedIn: [Matheuspx97](https://www.linkedin.com/in/matheuspx97/)
- Email: matheus97p.q@gmail.com
- Portfolio: [meu portifolio](https://matheus97px.github.io/portifolio/)


---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

**Desenvolvido com ❤️ e React**