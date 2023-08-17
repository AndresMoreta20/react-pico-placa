import React, { useEffect } from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, string } from "zod";
import { plateRestriction } from "../utils/Restriction";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import InputField from "./InputField";

//Generic inputfield that includes its validation message

function UserInput() {
  //ZOD is used for validation and each instance must have custom messages
  const schema = z.object({
    plate: string()
      .min(1, { message: "The plate is required" })
      .regex(/^[a-zA-Z]{3}-\d{4}$/, { message: "Incorrect format" }),
    date: string()
      .min(1, { message: "Date is required" })
      .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, {
        message: "The date must be in this format: 'DD/MM/YYYY'",
      }),
    time: string().min(1, { message: "Time is required" }),
  });

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      plate: "",
      date: "",
      time: "",
    },
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (formValues) => {
    console.log(formValues);
    plateRestriction(formValues)
      ? Swal.fire({
          title: "Good!",
          text: "There is no restriction",
          icon: "success",
          confirmButtonText: "Ok",
        })
      : Swal.fire({
          title: "Unfortunate",
          text: "There is a restriction for your plate",
          icon: "error",
          confirmButtonText: "Ok",
        });
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSave)}>
      <InputField
        label="Let's check your plate"
        name="plate"
        register={register}
        errors={errors}
      />

      <InputField
        label="Type a specific date"
        name="date"
        register={register}
        errors={errors}
      />

      <InputField
        label="Pick a time"
        name="time"
        type="time"
        register={register}
        errors={errors}
      />

      <button type="submit">Check</button>
    </form>
  );
}

export default UserInput;
