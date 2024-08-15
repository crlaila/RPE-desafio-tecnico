# Arquitetura de Integração com Múltiplas APIs

## Estrutura do Projeto

- **Front-end (React + Next.js)**
- **Store (Redux)**:
  - Gerenciamento do estado global da aplicação.
- **Camada de Serviços (Axios)**:
  - Todos os requests para as APIs passam por aqui, centralizando a lógica de autenticação, tratamento de erros e outras funcionalidades comuns.

## Fluxo de Trabalho

1. **Interação entre Front-end e Store**:
   - O estado global é gerenciado pelo Redux, e qualquer mudança de estado reflete na UI.
2. **Chamadas para a Camada de Serviços**:
   - Todas as requisições são feitas através da camada de serviços, que lida com a comunicação com as APIs.
3. **Comunicação com as APIs**:
   - A camada de serviços usa Axios para gerenciar todas as requisições HTTP e é configurada para incluir autenticação, tratamento de erros, e lógica adicional.

## Autenticação e Autorização

- A autenticação é gerenciada via tokens JWT.
- Verificações de autorização são feitas no nível da rota, garantindo que apenas usuários autorizados tenham acesso.

## Tratamento de Erros

- Os erros das APIs são capturados na camada de serviços e repassados para a UI através do Redux.

## Logging

- Integração com Sentry para monitoramento de erros em produção.

## Conclusão

A estrutura foi escolhida para garantir modularidade, fácil manutenção e escalabilidade, centralizando a comunicação com as APIs na camada de serviços.

#

# Diagrama

![Digrama](https://imagizer.imageshack.com/img924/4189/zmQF7m.png)
