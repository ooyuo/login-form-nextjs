"use client";

import InputField from "@/components/InputField";
import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import FormButton from "@/components/FormButton";
import { useFormState } from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import { handleLogin } from "./actions";

export interface IFormInput {
  email: string;
  password: string;
}

function LoginPage() {
  const [state, action] = useFormState(handleLogin, null);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          action={action}
          className="p-6 rounded w-full max-w-sm bg-white shadow-md gap-8 flex flex-col"
        >
          <InputField
            icon={FaEnvelope}
            type="email"
            placeholder="Email"
            name="email"
            errors={state?.fieldErrors.email}
          />
          <InputField
            icon={FaLock}
            type="password"
            placeholder="Password"
            name="password"
            errors={state?.fieldErrors.password}
          />
          <FormButton type="login" />
        </form>
      </div>
    </>
  );
}

export default LoginPage;
