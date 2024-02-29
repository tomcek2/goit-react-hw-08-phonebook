import React from 'react';

const Register = () => {
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
