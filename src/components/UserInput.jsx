import React from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z, string } from "zod";

//Generic inputfield that includes its validation message
const InputField = ({ label, name, type = "text", register, errors }) => (
  <div>
    <label className="label">{label}</label>
    <input className="input" name={name} type={type} {...register(name)} />
    <div style={{ color: "red" }}>{errors[name]?.message}</div>
  </div>
);

function UserInput() {
//ZOD is used for validation and each instance must have custom messages
  const schema = z.object({
    plate:string().min(1,{message:"The plate is required"}).regex(/^[a-zA-Z]{3}-\d{4}$/, {message:"Incorrect format"}),
    date:string().min(1,{message:"Date is required"}).regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, {message:"The date must be in this format: 'DD/MM/YYYY'"}),
    time:string().min(1,{message:"Time is required"})
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

  const handleSave = (formValues) => {
     console.log(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSave)}>
      <InputField label="Let's check your plate" name="plate" register={register} errors={errors} />

      <InputField label="Type a specific date" name="date" register={register} errors={errors} />

      <InputField label="Pick a time" name="time" type="time" register={register} errors={errors} />

      <button type="submit">Check</button>
    </form>
  );
}

export default UserInput;
