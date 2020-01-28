import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";

export default function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    axiosWithAuth()
      .post("/api/login", data)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "30px" }}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        name="username"
        placeholder="username"
        ref={register}
        style={{
          marginRight: "30px",
          borderRadius: "5px",
          border: ".5px solid rgba(0, 0, 0, 0.2)",
          paddingLeft: "5px"
        }}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        name="password"
        placeholder="password"
        ref={register}
        style={{
          marginRight: "30px",
          borderRadius: "5px",
          border: ".5px solid rgba(0, 0, 0, 0.2)",
          paddingLeft: "5px"
        }}
      />
      {/* errors will return when field validation fails  */}

      <input
        type="submit"
        style={{
          borderRadius: "5px",
          border: ".5px solid rgba(0, 0, 0, 0.2)"
        }}
      />
    </form>
  );
}
