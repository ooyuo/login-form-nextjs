"use client";

import React from "react";
import { useFormState } from "react-dom";
import { handleCreateAccount } from "./actions";
import InputField from "@/components/InputField";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import FormButton from "@/components/FormButton";
import TextareaField from "@/components/TextareaField";

export interface IFormInput {
  username: string;
  email: string;
  bio?: string;
  password: string;
  confirm_password: string;
}

function CreateAccountpage() {
  const [state, action] = useFormState(handleCreateAccount, null);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          action={action}
          className="p-6 rounded w-full max-w-sm bg-white shadow-md gap-8 flex flex-col"
        >
          <InputField
            icon={FaUser}
            type="text"
            placeholder="User Name"
            name="username"
            minLength={5}
            errors={state?.fieldErrors.username}
          />
          <InputField
            icon={FaEnvelope}
            type="email"
            placeholder="Email"
            name="email"
            errors={state?.fieldErrors.email}
          />
          <TextareaField
            icon={FaEnvelope}
            placeholder="Bio"
            name="bio"
            rows={4}
          />
          <InputField
            icon={FaLock}
            type="password"
            placeholder="Password"
            name="password"
            errors={state?.fieldErrors.password}
          />
          <InputField
            icon={FaLock}
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            errors={state?.fieldErrors.confirm_password}
          />

          <FormButton type="create-account" />
        </form>
      </div>
    </>
  );
}
export default CreateAccountpage;
