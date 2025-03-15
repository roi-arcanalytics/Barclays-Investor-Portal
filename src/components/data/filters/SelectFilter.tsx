import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFilterProps {
  placeholder: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SelectFilter = ({
  placeholder,
  options,
  value,
  onChange,
  className = "",
}: SelectFilterProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`w-[180px] h-9 text-sm font-normal ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="font-normal"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
