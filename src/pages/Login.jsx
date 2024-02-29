import React from 'react';

const Login = () => {
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Password:
          <input type="text" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
