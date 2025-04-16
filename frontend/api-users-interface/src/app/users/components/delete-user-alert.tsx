import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteUserAlertProps {
  isOpen: boolean; // Controla se o alerta está aberto
  onConfirm: () => void; // Função chamada ao confirmar a exclusão
  onCancel: () => void;
}

const DeleteUserAlert = ({ isOpen, onConfirm, onCancel }: DeleteUserAlertProps) => {
  return (
    <AlertDialog

      open={isOpen}
      onOpenChange={onCancel}
    >
      <AlertDialogContent className="bg-[#483353] text-white border-none">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this user?</AlertDialogTitle>
          <AlertDialogDescription className="text-white">
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="cursor-pointer border-none bg-[#765086] text-white hover:bg-[#644774] transition duration-300 ease-in-out"
            onClick={onCancel}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out"
            onClick={onConfirm}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteUserAlert;