import React from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { login } from '../redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const passRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        name: nameRef.current.value.trim(),
        password: passRef.current.value.trim(),
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} required />
        </label>
        <label>
          Password:
          <input type="password" ref={passRef} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
