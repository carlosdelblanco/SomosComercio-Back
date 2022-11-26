import React, { useState } from "react";
import { UserRegisteredData } from "../../data/types";
import useUser from "../../hooks/useUser";
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

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit: UserRegisteredData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    registerUser(formDataToSubmit);
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
          onChange={handleFormChange}
        />

        <label className="register-form__label" htmlFor="username">
          email
        </label>
        <input
          className="register-form__field"
          type="text"
          id="username"
          required
          autoComplete="off"
          onChange={handleFormChange}
        />

        <label className="register-form__label" htmlFor="username">
          Password
        </label>
        <input
          className="register-form__field"
          type="text"
          id="username"
          required
          autoComplete="off"
          onChange={handleFormChange}
        />
      </div>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
