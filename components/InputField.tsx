import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface InputFieldProps {
  icon: IconType;
  type: string;
  placeholder: string;
  name: string;
  errors?: string[];
}

function InputField({
  icon: Icon,
  type,
  placeholder,
  name,
  errors = [],
  ...rest
}: InputFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center border-b border-gray-300 py-2">
        <Icon className="text-gray-400 mr-2" />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          {...rest}
        />
      </div>

      {errors && (
        <div className="flex flex-col text-red-500 text-sm mt-1">
          {errors.map((error, index) => (
            <span key={`${error}-${index}`}>{error}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default InputField;
