import { AlertCircle } from "lucide-react";
import { Button } from "./button";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

export const EmptyState = ({ title, description, action, icon }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 text-center">
      <div className="mb-4">
        {icon || <AlertCircle className="h-12 w-12 text-muted-foreground" />}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {description}
      </p>
      {action && (
        <Button onClick={action.onClick} className="bg-coffee-700 hover:bg-coffee-800 text-white">
          {action.label}
        </Button>
      )}
    </div>
  );
};