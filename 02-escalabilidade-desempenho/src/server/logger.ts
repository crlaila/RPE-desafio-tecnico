/*Middleware para registrar solicitações e sua duração. É uma função que, antes das rotas,
 registra solicitações e sua duração. Ele usa os objetos req, res e a função next para 
 seguir com a execução da aplicação.*/

export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  //O método Date.now() registra o início da solicitação.
  const start = Date.now();
  //O método res.on registra o término da solicitação e a duração.
  res.on("finish", () => {
    const duration = Date.now() - start;
    //O método console.log registra o método e a URL da solicitação.
    console.log(`${req.method} ${req.url} took ${duration}ms`);
  });
  //O método next segue com a execução da aplicação.
  next();
};
f