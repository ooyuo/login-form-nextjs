"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  type: "create-account" | "login";
}
function FormButton({ type }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`w-full py-3 text-white text-sm rounded-full ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#FF7E36] hover:bg-[#e56e2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7E36]"
      }`}
      disabled={pending}
    >
      {pending
        ? "Loading..."
        : type === "create-account"
        ? "Create account"
        : "Log in"}
    </button>
  );
}

export default FormButton;
