# Estore

Aplicação de e-commerce front-end construída com Angular 19. O projeto inclui uma página inicial com navegação de categorias, listagem de produtos e ratings por estrelas usando ícones FontAwesome.

## Visão geral

- Interface de loja online com navegação de categorias e produtos.
- Componente de avaliações (`ratings`) com estrelas cheias, meia estrela e estrela vazia.
- SSR habilitado com `@angular/ssr` e script para servir o app em modo servidor.
- Uso de `signals` e `computed` para estado reativo.

## Tecnologias

- Angular 19
- Angular SSR
- FontAwesome Angular
- Tailwind CSS
- RxJS

## Estrutura principal

- `src/app/components/home`: página inicial, header, navegação e side navigation
- `src/app/components/products`: listagem de produtos
- `src/app/components/ratings`: componente de avaliação por estrelas
- `src/app/components/home/services`: serviço de categorias e store reativa
- `src/app/main.ts`: bootstrap do cliente
- `src/app/main.server.ts`: bootstrap do servidor
- `src/server.ts`: servidor SSR

## Instalação

No diretório do projeto:

```bash
npm install
```

## Desenvolvimento

```bash
npm start
```

Abra `http://localhost:4200/` no navegador.

## Modo SSR

```bash
npm run serve:ssr:estore
```

## Build para produção

```bash
npm run build
```

Os arquivos compilados serão gerados em `dist/`.

## Testes

Executar testes unitários:

```bash
npm test
```

## Observações

- O serviço de categorias faz requisição para `http://localhost:5001/product-categories`.
- Garanta que o backend de categorias esteja ativo para carregar dados dinâmicos de categorias.

## Contato

README atualizado para documentar a execução e a estrutura do projeto Estore.
