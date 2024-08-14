import { useState, useEffect } from "react";
import { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Simulating an API call
        const response = await new Promise<{ data: User[] }>((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: [
                  {
                    id: 1,
                    name: "John Doe",
                    email: "john@example.com",
                    avatar: "/images/user-placeholder.jpg",
                  },
                  {
                    id: 2,
                    name: "Jane Smith",
                    email: "jane@example.com",
                    avatar: "/images/user-placeholder.jpg",
                  },
                ],
              }),
            1000
          )
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
