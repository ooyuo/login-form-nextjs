import React from "react";
import { useFormStatus } from "react-dom";

interface ResultProps {
  message?: string;
  isSuccess?: boolean;
}

function Result({ message, isSuccess }: ResultProps) {
  return (
    <>
      {message && (
        <div
          className={`absolute top-4 text-center p-2 rounded shadow-lg ${
            isSuccess ? "bg-green-400 text-white" : "bg-white text-red-500"
          }`}
        >
          {isSuccess ? "✅ " : "❌ "}
          {message}
        </div>
      )}
    </>
  );
}

export default Result;
