import React from 'react';

export const Login = () => {
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
