import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserForm } from "./user-form/user-form";
import { UserFormValues, userSchema } from "./user-form/user-schema";

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormValues) => void;
}

export const AddUserDialog = ({ open, onOpenChange, onSubmit }: AddUserDialogProps) => {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <FormProvider {...form}>
          <UserForm onSubmit={onSubmit} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
