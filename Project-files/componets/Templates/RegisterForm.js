import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import toast from "react-hot-toast";

import styles from "./Register.module.css";
import { register } from "../services/auth";

function RegisterForm() {
  const [registerForm, setregisterForm] = useState({
    username: "",
    password: "",
    comfirmPassword: "",
  });
  
  const { mutate, data } = useMutation({ mutationFn :register});
  const router = useRouter();
  const changeHandler = (event) => {
    event.preventDefault();

    const name = event.target.name;
    setregisterForm({ ...registerForm, [name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { username, password, comfirmPassword } = registerForm;

    if (!username || !password || !comfirmPassword) {
      return toast.error("لطفا تمامی فیلد ها را به درستی وارد نمایید");
    }
    if (password !== comfirmPassword) {
      return toast.error("تکرار کلمه عبور صحیح نمی باشد");
    }

    mutate(registerForm, {
      onSuccess: (data) => {
        toast.success("ثبت نام با موفقیت انجام شد");
        router.push("/login");
      },
      onError: (error) => toast.error("مشکلی پیش آمده"),
    });
    console.log(data);
  };

  return (
    <>
      <h2 className="header">بوت کمپ بوتو استارت</h2>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <img src="/images/Union.png" />

          <h4>فرم ثبت نام</h4>
        </div>
        <div className={styles.inputs}>
          <input
            value={registerForm.username}
            name="username"
            type="text"
            placeholder="نام کاربری"
            onChange={changeHandler}
          />
          <input
            value={registerForm.password}
            name="password"
            type="password"
            placeholder="رمز عبور"
            onChange={changeHandler}
          />
          <input
            value={registerForm.comfirmPassword}
            name="comfirmPassword"
            type="password"
            placeholder="تکرار رمز عبور"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formButton}>
          <button type="submit">ثبت نام</button>
          <Link href="/login">حساب کاربری دارید؟</Link>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
