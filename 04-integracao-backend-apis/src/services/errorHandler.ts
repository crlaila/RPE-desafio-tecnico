import { AxiosError } from "axios";

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    // Erro de resposta do servidor
    console.error("API Error:", error.response.data);
  } else if (error.request) {
    // Erro na requisição
    console.error("Network Error:", error.request);
  } else {
    // Outro tipo erro
    console.error("Error:", error.message);
  }
};
