// O objetivo desse código é criar um componente que exibe um texto simples.
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
`;

const Loaded = () => (
  <StyledDiv>
    Página sem conteúdo criada para exibição do código exemplo utilizando
    exemplo com lazy loading.
  </StyledDiv>
);

export default Loaded;
