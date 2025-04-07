import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, useFormContext } from "react-hook-form";
import { UserFormValues } from "./user-schema";
import { useCreateUser } from "@/app/api/hooks/create-user.hook";

const fields: Array<{ name: "firstName" | "lastName" | "city" | "country" | "img"; label: string; placeholder: string }> = [
  { name: "firstName", label: "First Name", placeholder: "John" },
  { name: "lastName", label: "Last Name", placeholder: "Doe" },
  { name: "city", label: "City", placeholder: "New York" },
  { name: "country", label: "Country", placeholder: "USA" },
  { name: "img", label: "Imagem", placeholder: ".png" },
];

interface UserFormProps {
  onSubmit: (data: UserFormValues) => void;
  onClose: () => void; // Função para fechar o modal
}

export const UserForm = ({ onSubmit, onClose }: UserFormProps) => {
  const form = useFormContext<UserFormValues>();
  const { createUser } = useCreateUser();

  const handleSubmit = async (values: FieldValues) => {
    const newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      city: values.city,
      country: values.country,
      img: values.img,
    };

    // Cria o usuário
    await createUser(newUser);

    // Atualiza a lista de usuários
    await onSubmit(newUser);

    // Reseta o formulário
    form.reset();

    // Fecha o modal
    onClose();
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
          Add
        </Button>
      </form>
    </Form>
  );
};
