import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { UserFormValues } from "./user-schema";

const fields: Array<{ name: "firstName" | "lastName" | "city" | "country" | "img"; label: string; placeholder: string }> = [
  { name: "firstName", label: "First Name", placeholder: "John" },
  { name: "lastName", label: "Last Name", placeholder: "Doe" },
  { name: "city", label: "City", placeholder: "New York" },
  { name: "country", label: "Country", placeholder: "USA" },
  { name: "img", label: "Imagem", placeholder: ".png" },
];

interface UserFormProps {
  onSubmit: (data: UserFormValues) => void;
}

export const UserForm = ({ onSubmit }: UserFormProps) => {
  const form = useFormContext<UserFormValues>();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <Button type="submit" className="bg-[#6d4c7d] text-white">
          Add
        </Button>
      </form>
    </Form>
  );
};
