import React, { useState } from "react"

import Button from "components/Button"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onLogin = () => {
    console.log(email, password)
  }

  return (
    <>
      <div>Login</div>
      <label htmlFor="email-field">Email</label>
      <input
        id="email-field"
        name="email"
        type="text"
        onChange={setEmail}
      />
      <label htmlFor="password-field">Password</label>
      <input
        id="password-field"
        name="password"
        type="password"
        onChange={setPassword}
      />
      <Button
        color="primary"
        outline
        onClick={onLogin}
      >
        Login
      </Button>
    </>
  )
}

export default Login
