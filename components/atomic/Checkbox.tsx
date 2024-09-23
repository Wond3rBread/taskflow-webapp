// src/components/atoms/Checkbox.tsx

import React from "react";
import classNames from "classnames";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelStyling: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  labelStyling,
  className,
}) => {
  return (
    <div className={classNames("flex m-2 items-center space-x-2", className)}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)} // Toggle the checked state
        className=" form-checkbox h-5 w-5 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
      />
      <label
        htmlFor={id}
        className={labelStyling}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
