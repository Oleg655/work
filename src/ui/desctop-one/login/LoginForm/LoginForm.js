import { useFormik } from "formik";
import React from "react";
import style from "./LoginForm.module.scss";
import { Link } from "react-router-dom";



const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters or more";
      }

      return errors;
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values));
      formik.resetForm()
    },
  });

  return (
    <form className={style.formBlock} onSubmit={formik.handleSubmit}>
      Логин
      <input
        className={style.input}
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      Пароль
      <input
        {...formik.getFieldProps("password")}
        className={style.input}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      ) : null}
      <Link to={'/hotels'}><div><button type="submit" className={style.button}>Войти</button></div></Link>
    </form>
  );
};

export default LoginForm;
