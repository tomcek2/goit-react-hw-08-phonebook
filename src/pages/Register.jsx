import React from 'react';

export const Register = () => {
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
