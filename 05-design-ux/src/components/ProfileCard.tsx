// src/components/ProfileCard.tsx
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: ${({ theme }) => theme.space.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.medium};
`;

const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space.large};
`;

const EditButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.space.small}
    ${({ theme }) => theme.space.medium};
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export function ProfileCard() {
  return (
    <Card>
      <Avatar src="/avatar.jpg" alt="Leslie Alexander" />
      <Name>Leslie Alexander</Name>
      <Role>UI Designer</Role>
      <EditButton>Editar seu perfil</EditButton>
    </Card>
  );
}
