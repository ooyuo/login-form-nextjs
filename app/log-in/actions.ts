"use server";

import db from "@/lib/db";
import { toast } from "react-toastify";
import { z } from "zod";
import bcrypt from "bcrypt";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "유효한 이메일 주소를 입력해주세요." })
    .toLowerCase()
    .refine(checkEmailExists, "해당 이메일로 등록된 계정이 없습니다."),
  password: z
    .string({
      required_error: "비밀번호를 입력해주세요.",
    })
    .min(PASSWORD_MIN_LENGTH, {
      message: "비밀번호는 최소 10자 이상이어야 합니다.",
    })
    .refine((password) => /\d/.test(password), {
      message: "비밀번호는 최소한 1개의 숫자를 포함해야 합니다.",
    }),
});

export async function handleLogin(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.spa(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx"
    );

    if (ok) {
      const session = await getSession();
      session.id = user!.id;

      await session.save();
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["비밀번호가 올바르지 않습니다."],
          email: [],
        },
      };
    }
  }
}
