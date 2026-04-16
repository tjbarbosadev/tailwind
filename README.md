# Sistema de Reembolsos (Frontend)

Aplicação web em React para solicitação e acompanhamento de reembolsos, com navegação por perfil (`manager` e `employee`) e interface estilizada com Tailwind CSS.

## Features implementadas até agora

- Autenticação com telas de `login` e `cadastro` (formulários prontos na interface).
- Fluxo de solicitação de reembolso para colaborador com:
  - nome da solicitação;
  - categoria da despesa;
  - valor;
  - upload de comprovante.
- Tela de confirmação de envio com proteção de rota (acesso apenas após submissão).
- Dashboard de gerente com:
  - busca por nome (estrutura de filtro pronta);
  - listagem de solicitações;
  - paginação (anterior/próxima).
- Visualização de reembolso por ID para gerente (`/refund/:id`) em modo de leitura.
- Layouts separados para área pública (auth) e área logada (app).
- Roteamento por perfil de usuário com fallback para página `404`.
- Componentes reutilizáveis de UI (`Button`, `Input`, `Select`, `Upload`, `Pagination`, `Loading`, `Header`).
- Catálogo de categorias com ícones (alimentação, transporte, hospedagem, serviços e outros).

## Status atual

- O projeto está em fase de frontend/protótipo.
- Fluxos principais de navegação e formulários estão prontos visualmente.
- Integração com backend e persistência de dados ainda não foi implementada (dados e sessão estão mockados no código).

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS 4
- clsx + tailwind-merge

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, abra a URL exibida no terminal (normalmente `http://localhost:5173`).
