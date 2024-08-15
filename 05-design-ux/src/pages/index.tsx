import styled from "styled-components";
import { ProfileCard } from "../components/ProfileCard";
import { PostCard } from "../components/PostCard";

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.large};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.large};
`;

const Sidebar = styled.div`
  flex: 1;
`;

const MainContent = styled.div`
  flex: 2;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.large};
  color: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.large};
`;

export default function HomePage() {
  return (
    <>
      <Header>
        <Logo>Desafio 05 - Design e UX</Logo>
      </Header>
      <Container>
        <Sidebar>
          <ProfileCard />
        </Sidebar>
        <MainContent>
          <PostCard />
        </MainContent>
      </Container>
    </>
  );
}
