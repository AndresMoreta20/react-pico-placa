import React from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z, string } from "zod";





function UserInput() {

  const schema = z.object({
    plate:string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    date:string(),
    time:string()
  })



  const { register, handleSubmit, formState} = useForm({
    defaultValues: {
      plate: "",
      date: "",
      time: "",
    }
    , resolver:zodResolver(schema) 
  });

  const {errors} = formState;
  //const {field} = useController({})

  const handleSave = (formValues) => {
    console.log(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSave)}>
      <label className="label">Let's check your plate</label>
      <input className="input" name="plate" {...register("plate")}></input>
      <div style={{ color: "red" }}>{errors.plate?.message}</div>

      <label className="label">Type a specific date</label>
      <input className="input" name="date" {...register("date")}></input>
      <div style={{ color: "red" }}>{errors.date?.message}</div>

      <label className="label">What time?</label>
      <input className="input" name="time" {...register("time")}></input>
      <div style={{ color: "red" }}>{errors.time?.message}</div>
      <button type="submit">Check</button>
    </form>
  );
}

export default UserInput;
