import { useState, useEffect } from "react";
import { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Simulando uma chamada API
        const response = await new Promise<{ data: User[] }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: [
                  {
                    id: 1,
                    name: "Laila Silva",
                    email: "lailasilva@example.com",
                    avatar: "",
                  },
                  {
                    id: 2,
                    name: "Laila Silva",
                    email: "lailasilva@example.com",
                    avatar: "",
                  },
                  {
                    id: 3,
                    name: "Laila Silva",
                    email: "lailasilva@example.com",
                    avatar: "",
                  },
                ],
              }),
            1000
          )
        );
        setUsers(response.data);
      } catch (err) {
        setError("Falha ao obter os dados");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
