import { useState } from "react";
import Checkmark from "./checkmark";
import { cn } from "../lib/utils";

type CheckboxProps = {
  label?: string;
};

function Checkbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const [hovering, setHovering] = useState(false);

  const baseStyle =
    "flex items-center justify-between gap-3 px-4 py-3 bg-white cursor-pointer select-none";

  const checkedStyles = hovering
    ? "bg-blue-400 text-white"
    : "bg-blue-500 text-white";
  return (
    <label
      className={cn(baseStyle)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span className="text-gray-700 text-sm">{label}</span>
      <div
        className={cn(
          "flex items-center justify-center w-6 h-6 border border-border text-gray-800  rounded-[6px]",
          checked ? checkedStyles : "",
        )}
      >
        {(checked || hovering) && <Checkmark />}
      </div>
      <input
        type="checkbox"
        className="sr-only"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </label>
  );
}

export default Checkbox;
