import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: ${({ theme }) => theme.space.large};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin-bottom: ${({ theme }) => theme.space.small};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.medium};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.small}
    ${({ theme }) => theme.space.large};
  border: none;
  border-radius: ${({ theme }) => theme.radii.small};
  margin-top: ${({ theme }) => theme.space.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

interface FeedbackFormProps {
  onCommentSubmit: (comment: string) => void;
}

export function FeedbackForm({ onCommentSubmit }: FeedbackFormProps) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      onCommentSubmit(feedback);
      setFeedback(""); // Limpa o campo após o envio
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="feedback">Deixe seu feedback</Label>
      <TextArea
        id="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={4}
        placeholder="Nossa, adorei amigo! Parabéns!"
      />
      <SubmitButton type="submit">Publicar</SubmitButton>
    </Form>
  );
}
