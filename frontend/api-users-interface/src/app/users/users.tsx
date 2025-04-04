"use client"

import Image from "next/image";
import { useGetUsers } from "../api/hooks/get-users.hook";

const UsersPage = () => {
  const { data: users, loading, error } = useGetUsers();

  console.log("Users:", users);

  return (
    <>
      <div className="flex flex-col justify-center items-start p-10 pb-2 ml-[88px]">
        <h1 className="text-3xl font-bold">Users</h1>
        <input
          type="text"
          placeholder="Search"
          className="border border-[#525252] rounded-2xl p-4 mt-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 rounded-2xl mt-4 pt-2">
        {/* Verifica se está carregando */}
        {loading && <p>Carregando usuários...</p>}

        {/* Lista os usuários */}
        {!loading && !error && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="flex justify-center items-center gap-7 p-6 border border-transparent hover:border hover:border-[#525252] rounded-2xl transition duration-300 ease-in-out"
            >
              <Image
                src={user.img}
                alt={user.firstName}
                width={150}
                height={150}
                className="rounded-full border border-[#525252]"
              />
              <div className="pr-4">
                <h3 className="text-2xl font-bold">{user.firstName} {user.lastName}</h3>
                <p>{user.city}, {user.country}</p>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>Nenhum usuário encontrado.</p>
        )}
      </div>
    </>
  );
};

export default UsersPage;
