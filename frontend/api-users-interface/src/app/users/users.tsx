"use client";

import { useGetUsers } from "../api/hooks/get-users.hook";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddUserDialog } from "./components/add-user-dialog";
import { UserCard } from "./components/user-card";
import { UserFormValues } from "./components/user-form/user-schema";

const UsersPage = () => {
  const { data: users, loading, error, refetch } = useGetUsers();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data: UserFormValues) => {
    console.log("Form Data:", data);
    setOpenModal(false);
    refetch();
  };

  return (
    <>
      <AddUserDialog open={openModal} onOpenChange={setOpenModal} onSubmit={onSubmit} />

      <div className="flex flex-col justify-center items-center p-8 pb-2">
        <h1 className="text-3xl font-bold">Users</h1>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#525252] w-[500px] rounded-2xl p-2 mt-2 focus:outline-none"
          />
          <Button
            className="bg-[#6d4c7d] text-white p-5 rounded-2xl mt-2 cursor-pointer hover:bg-[#483353] transition duration-300 ease-in-out"
            onClick={() => setOpenModal(true)}
          >
            Add User
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 rounded-2xl mt-4 pt-2">
        {loading && <p>Carregando usuários...</p>}
        {!loading && !error && users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          !loading && <p>Nenhum usuário encontrado.</p>
        )}
      </div>
    </>
  );
};

export default UsersPage;
