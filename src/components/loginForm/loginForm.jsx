"use client"

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="Username" name="username"/> 
        <input type="password" placeholder="Password" name="password"/> 
        <button>Login</button>
        {state?.error}
        <Link href="/register">{"Don't have an account?"} <b>Register</b></Link>
      </form>
    </div>
  );
};

export default LoginForm;