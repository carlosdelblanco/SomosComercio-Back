import React, { useState } from "react";
import { UserRegisteredData } from "../../data/types";
import useUser from "../../hooks/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialRegisterForm = {
  username: "",
  password: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();
  const [formData, setFormData] = useState(initialRegisterForm);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit: UserRegisteredData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    await registerUser(formDataToSubmit);
  };
  return (
    <RegisterFormStyled
      className="register-form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <br />
      <div className="register-form__input">
        <label className="register-form__label" htmlFor="username">
          Usuario
        </label>
        <input
          className="register-form__field"
          type="text"
          id="username"
          required
          autoComplete="off"
          aria-label="username-input"
          onChange={handleFormChange}
        />

        <label className="register-form__label" htmlFor="email">
          email
        </label>
        <input
          className="register-form__field"
          type="email"
          id="email"
          required
          autoComplete="off"
          aria-label="email-input"
          onChange={handleFormChange}
        />

        <label className="register-form__label" htmlFor="password">
          Password
        </label>
        <input
          className="register-form__field"
          type="password"
          id="password"
          aria-label="password-input"
          required
          autoComplete="off"
          onChange={handleFormChange}
        />
        <Button text={"Registrarse"} />
      </div>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
