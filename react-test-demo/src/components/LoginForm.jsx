import React from 'react';

const LoginForm = ({ onSubmit }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username-input">Username</label>
      <input id="username-input" name="username" />

      <label htmlFor="password-input">Password</label>
      <input id="password-input" type="password" name="password" />

      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
