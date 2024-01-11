import { useState } from "react";

export default function SignIn() {
  const [values, setValues] = useState({ email: "", pass: "" });
  const [isEmailVAlid, setEmailValid] = useState<boolean>();
  const [isPassValid, setPassValid] = useState<boolean>();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleOnChange = (value: { value: any; type: string }) => {
    let validate = false;

    if (value?.type === "email") {
      setEmailValid(emailRegex.test(String(value?.value).toLocaleLowerCase()));
      setValues((prev) => {
        return {
          email: value?.value,
          pass: prev?.pass,
        };
      });
      return (validate = true);
    }

    if (value?.type === "password") {
      setPassValid(value?.value.length > 7);
      setValues((prev) => {
        return {
          email: prev?.email,
          pass: value?.value,
        };
      });
      return (validate = true);
    }

    return validate;
  };

  function isValidate() {
    let validate = false;

    if (
      emailRegex.test(String(values?.email).toLocaleLowerCase()) &&
      values?.pass?.length > 7
    ) {
      return (validate = true);
    }

    return validate;
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (isValidate()) {
      console.log(values);
    } else {
      window.alert("Please fill out the fields!");
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start cursor-pointer">
      <form
        action="#"
        className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Login
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to Login!
        </p>
        <div className={`mb-3`}>
          {"Email" && (
            <label
              htmlFor={"email"}
              className={`text-sm text-navy-700 dark:text-white ${
                "auth" === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
              }`}
            >
              {"Email"}
            </label>
          )}
          <input
            type={"email"}
            id={"email"}
            placeholder={"mail@simmple.com"}
            className={`${
              "Email" ? "mt-2" : ""
            } flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
              values?.email === ""
                ? "border-gray-200 dark:!border-white/10 dark:text-white"
                : isEmailVAlid
                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                : "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            } sdffffsdf`}
            onChange={(e) =>
              handleOnChange({ value: e.target.value, type: e.target.type })
            }
          />
        </div>
        <div className={`mb-3`}>
          {"Password" && (
            <label
              htmlFor={"password"}
              className={`text-sm text-navy-700 dark:text-white ${
                "auth" === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
              }`}
            >
              {"Password"}
            </label>
          )}
          <input
            type={"password"}
            id={"password"}
            placeholder={"Min. 8 characters"}
            className={`${
              "Password" ? "mt-2" : ""
            } flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
              values?.pass === ""
                ? "border-gray-200 dark:!border-white/10 dark:text-white"
                : isPassValid
                ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                : "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            } sdffffsdf`}
            onChange={(e) =>
              handleOnChange({ value: e.target.value, type: e.target.type })
            }
          />
        </div>
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          {/* <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div> */}
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
