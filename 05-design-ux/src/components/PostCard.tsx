// src/components/PostCard.tsx
import { useState } from "react";
import styled from "styled-components";
import { FeedbackForm } from "./FeedbackForm";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: ${({ theme }) => theme.space.large};
  margin-top: ${({ theme }) => theme.space.large};
  color: ${({ theme }) => theme.colors.text};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-right: ${({ theme }) => theme.space.small};
`;

const UserName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
`;

const Timestamp = styled.time`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.space.medium} 0;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Hashtags = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const CommentsSection = styled.div`
  margin-top: ${({ theme }) => theme.space.large};
  padding-top: ${({ theme }) => theme.space.large};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Comment = styled.div`
  margin-top: ${({ theme }) => theme.space.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.space.medium};
  border-radius: ${({ theme }) => theme.radii.small};
`;

interface CommentData {
  text: string;
  user: string;
  avatar: string;
  timestamp: string;
}

export function PostCard() {
  const [comments, setComments] = useState<CommentData[]>([]);

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 60) {
      return `Publicado há ${diffInSeconds} segundos`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Publicado há ${minutes} minutos`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Publicado há ${hours} horas`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `Publicado há ${days} dias`;
    }
  };

  const handleCommentSubmit = (commentText: string) => {
    const newComment = {
      text: commentText,
      user: "Jane Cooper", // Essas informações podem ser dinâmicas no futuro
      avatar: "/avatar.jpg", 
      timestamp: formatTimestamp(new Date()), // Timestamp dinâmico
    };
    setComments([...comments, newComment]);
  };

  return (
    <Card>
      <Header>
        <UserInfo>
          <Avatar src="/avatar.jpg" alt="Jane Cooper" />
          <UserName>Jane Cooper</UserName>
        </UserInfo>
        <Timestamp>{formatTimestamp(new Date())}</Timestamp>
      </Header>
      <Content>
        Fala galeraa 👋
        <br />
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
        NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </Content>
      <Link href="#">👉 jane.design/doctorcare</Link>
      <Hashtags>#novoprojeto #nlw #rocketseat</Hashtags>
      <CommentsSection>
        {comments.map((comment, index) => (
          <Comment key={index}>
            <Header>
              <UserInfo>
                <Avatar src={comment.avatar} alt={comment.user} />
                <UserName>{comment.user}</UserName>
              </UserInfo>
              <Timestamp>{comment.timestamp}</Timestamp>
            </Header>
            <p>{comment.text}</p>
          </Comment>
        ))}
      </CommentsSection>
      <FeedbackForm onCommentSubmit={handleCommentSubmit} />
    </Card>
  );
}
