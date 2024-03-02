import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(registerData);
    dispatch(register(registerData));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
