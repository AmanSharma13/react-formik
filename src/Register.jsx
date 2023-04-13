import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(8).required("Please Enter Your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? errors.name : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? errors.email : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? errors.password : null}
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="confirm password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password
            ? errors.confirm_password
            : null}
        </div>
        <div>
          <button type="submit">Registration</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
