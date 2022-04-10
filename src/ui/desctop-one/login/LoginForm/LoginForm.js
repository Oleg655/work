import { useFormik } from "formik";
import React from "react";
import style from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "непрвильный email или пароль";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "непрвильный email или пароль";
      }
      if (!values.password || !values.password.match('^[a-zA-Z0-9]+$')) {
        errors.password = "пароль должен иметь латинские буквы";
      } else if (values.password.length < 8  ) {
        errors.password = "минимум 8 символов";
      }

      return errors;
    },

    onSubmit: (values) => {
      if (values) {
        navigate("/hotels");
      }

      formik.resetForm();
    },
  });

  return (
    <form className={style.formBlock} onSubmit={formik.handleSubmit}>
      Логин
      <input className={style.input} {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      Пароль
      <input {...formik.getFieldProps("password")} className={style.input} />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      ) : null}
      <div>
        <button type="submit" className={style.button}>
          Войти
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
