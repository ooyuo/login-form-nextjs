import { TextareaHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface TextareaFieldProps {
  icon?: IconType;
  placeholder: string;
  name: string;
  errors?: string[];
}

function TextareaField({
  icon: Icon,
  placeholder,
  name,
  errors = [],
  ...rest
}: TextareaFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start border-b border-gray-300 py-2">
        {Icon && <Icon className="text-gray-400 mr-2 mt-1" />}
        <textarea
          name={name}
          placeholder={placeholder}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          {...rest}
        />
      </div>

      {errors && <span className="text-red-500 text-sm mt-1">{errors}</span>}
    </div>
  );
}

export default TextareaField;
