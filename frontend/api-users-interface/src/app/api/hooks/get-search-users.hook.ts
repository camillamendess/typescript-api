import { useEffect, useState } from "react";
import { GetUsersDTO } from "../gateway/api.gateway.dto";
import { apiGateway } from "../gateway/api.gateway";

export const useSearchUsers = (searchTerm: string) => {
  const [data, setData] = useState<GetUsersDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!searchTerm) {
        setData([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await apiGateway.searchUser({ name: searchTerm });
        setData(response.data);
      } catch (err) {
        console.error("error: ", err);
        setError("Erro ao buscar usuários")
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  return { data, loading, error };

}