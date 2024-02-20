import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  } else {
    return (
      <div className="bg-destructive/15 rounded-md p-3 flex items-center gap-x-2 text-sm text-destructive my-4">
        <ExclamationTriangleIcon className="w-4 h-4" />
        <p>{message}</p>
      </div>
    );
  }
};
