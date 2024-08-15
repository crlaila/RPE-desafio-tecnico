// components/Hero.tsx
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: #fff;
  flex: 1;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  background-color: #99ff33;
  border: none;
  color: #000;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Convide seus amigos e planeje sua próxima viagem!</h1>
      <InputWrapper>
        <Input placeholder="Para onde você vai?" />
        <Button>Continuar &rarr;</Button>
      </InputWrapper>
      <p>Aplicação sem funcionalidades, apenas para testes</p>
    </HeroContainer>
  );
};

export default Hero;
