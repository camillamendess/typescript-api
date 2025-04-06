"use client";

import Image from "next/image";
import { useGetUsers } from "../api/hooks/get-users.hook";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define o schema de validação com Zod
const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  img: z.string().url("Image URL is required"),
});

type UserFormValues = z.infer<typeof userSchema>;

const UsersPage = () => {
  const { data: users, loading, error } = useGetUsers();
  const [openModal, setOpenModal] = useState(false);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      img: "",
    },
  });

  const handleOpenDialog = () => {
    setOpenModal(true);
  };

  const handleCloseDialog = () => {
    setOpenModal(false);
  };

  const onSubmit = (data: UserFormValues) => {
    console.log("Form Data:", data);
    handleCloseDialog();
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={(isOpen) => setOpenModal(isOpen)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription>Fill in the details below to add a new user.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="USA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="img"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagem</FormLabel>
                    <FormControl>
                      <Input placeholder=".png" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-[#6d4c7d] text-white">
                Add
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

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
            onClick={handleOpenDialog}
          >
            Add User
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 rounded-2xl mt-4 pt-2">
        {loading && <p>Carregando usuários...</p>}
        {!loading && !error && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="flex w-[400px] h-[200px] justify-center items-center gap-7 p-6 border border-transparent hover:border hover:border-[#525252] rounded-2xl transition duration-300 ease-in-out"
            >
              <Image
                src={user.img}
                alt={user.firstName}
                width={150}
                height={150}
                className="rounded-full border border-[#525252]"
              />
              <div className="pr-4">
                <h3 className="text-2xl font-bold">
                  {user.firstName} {user.lastName}
                </h3>
                <p>
                  {user.city}, {user.country}
                </p>
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
