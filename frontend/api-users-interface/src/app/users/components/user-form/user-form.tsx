import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { UserFormValues } from "./user-schema";
import { useCreateUser } from "@/app/api/hooks/create-user.hook";
import { useUpdateUser } from "@/app/api/hooks/update-user.hook";
import { useEffect } from "react";
import { User } from "@/types";

const fields: Array<{ name: "firstName" | "lastName" | "city" | "country" | "img"; label: string; placeholder: string }> = [
  { name: "firstName", label: "First Name", placeholder: "John" },
  { name: "lastName", label: "Last Name", placeholder: "Doe" },
  { name: "city", label: "City", placeholder: "New York" },
  { name: "country", label: "Country", placeholder: "USA" },
  { name: "img", label: "Imagem", placeholder: ".png" },
] as const;

interface UserFormProps {
  onSubmit: (data: UserFormValues) => void;
  onClose: () => void;
  user?: User | null;
}

export const UserForm = ({ onSubmit, onClose, user }: UserFormProps) => {
  const form = useFormContext<UserFormValues>();
  const { createUser } = useCreateUser();
  const { updateUser } = useUpdateUser();

  useEffect(() => {
    if (user) {
      form.reset(user);
    } else {
      form.reset({
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        img: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = async (values: UserFormValues) => {
    try {
      if (user && user.id) {
        await updateUser({ id: user.id, ...values });
        toast.success("Usuário atualizado com sucesso!");
      } else {
        await createUser(values);
        toast.success("Usuário criado com sucesso!");
      }
      onSubmit(values);
      form.reset();
      onClose();
    } catch (error: unknown) {
      console.error("Error saving user:", error);
      toast.error("Erro ao salvar usuário.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {fields.map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="bg-[#6d4c7d] text-white cursor-pointer">
          {user ? "Update" : "Add"}
        </Button>
      </form>
    </Form>
  );
};
