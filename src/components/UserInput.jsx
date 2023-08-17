import React from "react";
import { useForm } from "react-hook-form";

function UserInput() {
  const { register, control } = useForm();

  return(

  <form className="form">
    <label className="label">Let's check your plate</label>
    <input className="input" name="plate" ></input>
    <div style={{ color: "red" }}></div>
    <label className="label">Type a specific date</label>
      <input className="input" name="date"></input>
      <div style={{ color: "red" }}></div>
      <label className="label">What time?</label>
      <input className="input" name="time"></input>
      <div style={{ color: "red" }}></div>
    <button type="submit">Check</button>
  </form>);
}

export default UserInput;
