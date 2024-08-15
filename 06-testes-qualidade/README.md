# Plann.er - Planeje Sua Próxima Viagem

Este projeto é uma aplicação Next.js construída com TypeScript e estilizada com `styled-components`, projetada para ajudar os usuários a planejar suas viagens.

## Estrutura do Projeto

O projeto segue a estrutura padrão de componentes, páginas, estilos e testes dentro da pasta `src`.

## Pipeline CI/CD

A pipeline CI/CD foi configurada com GitHub Actions para garantir a qualidade do código através de:

1. **Linting e Formatação**: Automatizado com ESLint e Prettier.
2. **Testes Unitários**: Implementados com Jest e React Testing Library para validar componentes isoladamente.
3. **Testes de Integração**: Verificam a interação entre diferentes partes do sistema.
4. **Testes End-to-End (E2E)**: Utilizando Cypress para simular o fluxo completo do usuário.
5. **Deploy Automatizado**: Implantação contínua para Vercel após a aprovação em todos os testes.

## Como Rodar o Projeto

1. Instale as dependências:

   ```bash
   npm install

   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev

   ```

3. Execute o teste unitários e de integração:

   ```bash
   npm run test

   ```

4. Excecute os testes E2E:
   ```bash
   npm run buil
   npx cypress open
   ```

\*\* A estrutura de CI/CD implementada garante que o código seja testado antes de ser implantado em produção.

#

# DIAGRAMA

![DIAGRAMA](https://imagizer.imageshack.com/img922/4084/jeS1Mq.png)
