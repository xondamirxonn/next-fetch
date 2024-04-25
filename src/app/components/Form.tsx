"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { CreateTodo } from "../services/getData";
import { revalidateTag } from "next/cache";
interface InputType {
  id: number;
  title: string;
  description: string;
}
export const Form = () => {
  const { register, handleSubmit, reset } = useForm<InputType>();
  const [loading, startLoading] = React.useTransition();
  const submit = (data: InputType) => {
    startLoading(() => {
      CreateTodo(data).then(() => {
        reset();
      });
    });
  };
  return (
    <form className="mb-4 flex items-center gap-5" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-3">
        <div>
          <input
            {...register("title", { required: true })}
            className="border border-blue-400"
            name="title"
            type="text"
          />
        </div>{" "}
        <div>
          <input
            {...register("description", { required: true })}
            className="border border-blue-400"
            name="description"
            type="text"
          />
        </div>
      </div>
      <button className="border bg-green-600 p-3">
        {loading ? "Loading" : "Send"}
      </button>
    </form>
  );
};
