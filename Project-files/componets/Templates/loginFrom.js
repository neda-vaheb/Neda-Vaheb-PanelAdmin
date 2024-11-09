

import { useState } from "react";
import styles from "./Register.module.css";
import { useRouter } from 'next/router'
import { setCookie } from "../utiles/cookie";
import toast from "react-hot-toast";
import Link from "next/link";
import { login } from "../services/auth";
import { useMutation } from "@tanstack/react-query";
import api from "../config/api";



function LoginForm() {
    const router =useRouter();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const mutationFn=({username , password})=>{
    return api.post("http://localhost:3000/auth/login", {
      username,
      password,
    });
  }
  const { mutate, data, error } = useMutation({mutationFn});

  const changeHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    setLoginForm({ ...loginForm, [name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { username, password } = loginForm;
    if (!username || !password) {
      return toast.error("لطفا تمامی فیلد ها را به درستی وارد نمایید");
    }

    mutate({username, password},{
      onSuccess:(data)=>{
        toast.success("ورود با موفقیت انجام شد");
        setCookie("token", data.data?.token);
        router.push("/")
      },
      onError:(error)=>{

      toast.error("خطایی پیش آمده");
      console.log(error)

      }

    });

  
   
  };
  return (
    <>
      <h2 className="header">بوت کمپ بوتو استارت</h2>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <img src="/images/Union.png" />

          <h4>فرم وود</h4>
        </div>
        <div className={styles.inputs}>
          <input
            value={loginForm.username}
            name="username"
            type="text"
            placeholder="نام کاربری"
            onChange={changeHandler}
          />
          <input
            value={loginForm.password}
            name="password"
            type="password"
            placeholder="رمز عبور"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formButton}>
          <button type="submit"> ورود</button>
          <Link href="/register">ایجاد حساب کاربری؟</Link>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
