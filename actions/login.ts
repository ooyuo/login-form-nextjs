import { toast } from "react-toastify";
import { z } from "zod";

interface IFormInput {
  email: string;
  username: string;
  password: string;
}

const formSchema = z.object({
  email: z
    .string()
    .refine(
      (name) => name.includes("@zod.com"),
      "@zod.com 이메일만 가능합니다."
    ),
  username: z
    .string()
    .min(5, "최소 5글자 이상 입력해주세요.")
    .regex(/^[a-zA-Z가-힣]*$/, "영어와 한글만 입력 가능합니다."),
  password: z
    .string()
    .min(10)
    .refine((password) => /\d/.test(password), {
      message: "비밀번호는 최소한 1개의 숫자를 포함해야 합니다.",
    }),
});

export async function handleForm(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const data = {
    email,
    username,
    password,
  };

  await new Promise((resolve) => setTimeout(resolve, 200));
  const result = formSchema.safeParse(data);

  if (!result.success) {
    toast.error("로그인에 실패했어요");
    return result.error.flatten();
  } else {
    toast.success("로그인 성공 !");
  }
}
