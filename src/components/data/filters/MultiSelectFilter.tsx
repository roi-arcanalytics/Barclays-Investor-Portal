import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiSelectFilterProps {
  placeholder: string;
  options: { label: string; value: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

export const MultiSelectFilter = ({
  placeholder,
  options,
  selectedValues,
  onChange,
  className = "",
}: MultiSelectFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const displayText =
    selectedValues.length > 0
      ? `${selectedValues.length} selected`
      : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[240px] justify-between h-9", className)}
        >
          <span className="truncate text-sm font-normal">{displayText}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0" align="start">
        <ScrollArea className="h-[300px] p-2">
          <div className="space-y-2">
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`option-${option.value}`}
                  checked={selectedValues.includes(option.value)}
                  onCheckedChange={() => handleToggleOption(option.value)}
                />
                <Label
                  htmlFor={`option-${option.value}`}
                  className="flex-grow cursor-pointer text-sm font-normal"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
