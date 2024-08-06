interface IFormInput {
  email: string;
  username: string;
  password: string;
}

export async function handleForm(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const errors: { [key: string]: string } = {};

  if (!email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "이메일 형식으로 입력해주세요.";
  }

  if (!username) {
    errors.username = "이름을 입력해주세요.";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Validation failed.",
      isSuccess: false,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 200));

  if (password === "12345") {
    return {
      errors: {},
      message: "Success!",
      isSuccess: true,
    };
  } else {
    return {
      errors: { password: "비밀번호가 틀렸어요." },
      message: "Failure",
      isSuccess: false,
    };
  }
}
