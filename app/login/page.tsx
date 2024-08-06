"use client";

import InputField from "@/components/InputField";
import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Result from "@/components/Result";
import FormButton from "@/components/FormButton";
import { useFormState } from "react-dom";
import { handleForm } from "@/actions/login";

export interface IFormInput {
  email: string;
  username: string;
  password: string;
}

function LoginPage() {
  const [state, action] = useFormState(handleForm, null);

  return (
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
          error={state?.errors?.email}
        />
        <InputField
          icon={FaUser}
          type="text"
          placeholder="Username"
          name="username"
          error={state?.errors?.username}
        />
        <InputField
          icon={FaLock}
          type="password"
          placeholder="Password"
          name="password"
          error={state?.errors?.password}
        />
        <FormButton />
      </form>
      <Result isSuccess={state?.isSuccess} message={state?.message} />
    </div>
  );
}

export default LoginPage;
