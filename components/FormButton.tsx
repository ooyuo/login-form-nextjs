"use client";

import React from "react";
import { useFormStatus } from "react-dom";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full py-3 bg-gray-400 text-black text-sm rounded-full"
      disabled={pending}
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}

export default FormButton;
