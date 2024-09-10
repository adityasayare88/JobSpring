"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ListItemProps {
  category: { label: string; value: string };  // Define the shape of `category`
  onSelect: (category: { label: string; value: string }) => void;
  isChecked: boolean;
}

export const ListItem = ({ category, onSelect, isChecked }: ListItemProps) => {
  return (
    <div
      className="flex items-center px-2 py-1 cursor-pointer hover:bg-gray-50 text-muted-foreground hover:text-primary"
      onClick={() => onSelect(category)}
    >
      <p className="w-full truncate text-sm whitespace-nowrap">
        {category.label}
      </p>
      <Check
        className={cn(
          "ml-auto h-4 w-4",
          isChecked ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};
