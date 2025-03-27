'use client'
import { handleLogin } from "@/app/user/action";
import { SubmitButton } from "@/app/user/submit.button";
import { message } from "antd";
import { useEffect } from "react";
import { useFormState } from "react-dom";


export default function Home() {

  const [state, formAction] = useFormState(handleLogin, {})

  useEffect(() => {
    if (state?.data?.access_token) {
      message.success('Login successful!')
    }
  }, [state])


  return (
    <div>
      <h2>HTML Forms</h2>

      <form action={formAction}>
        <label >Username:</label>
        <br />
        <input type="text" name="username" />
        <br />
        <label >Password:</label>
        <br />
        <input type="password" name="password" />
        <br />
        {/* <input type="submit" value="Submit" /> */}
        <SubmitButton />
        <div>

          {JSON.stringify(state)}
        </div>
      </form>
    </div>
  )
}
