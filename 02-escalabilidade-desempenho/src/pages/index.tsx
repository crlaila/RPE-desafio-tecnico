// O fallback serve para exibir um componente de carregamento enquanto o componente principal é carregado.
// O suspense serve para exibir um fallback enquanto o componente principal é carregado.
// O ssr serve para definir se o componente deve ser renderizado no servidor ou no cliente.

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const Loaded = dynamic(() => import("../components/Loaded"), {
  suspense: true,
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <h1>Bem vindo ao segundo desafio.</h1>
      <Suspense fallback={<p>Carregando o component...</p>}>
        <Loaded />
      </Suspense>
    </div>
  );
};

export default Home;
