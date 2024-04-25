"use client";

import React from "react";
import { deleteTodo } from "../services/getData";
interface ProspType {
  title: string;
  description: string;
  id: number;
}
export const Card: React.FC<ProspType> = ({ title, description, id }) => {
  const [loading, startLoading] = React.useTransition();
  const deleteItem = (id: number) => {
    startLoading(() => {
      deleteTodo(id);
    });
  };
  return (
    
      <div className="flex flex-col gap-5  ">
        <div className="flex justify-between  border border-black  gap-3 min-w-[300px] p-4">
          <p>{id}</p>
          <div>
            <h1>{title}</h1>
            <span>{description}</span>
          </div>
          <button
            className="border bg-rose-400 p-2"
            onClick={() => deleteItem(id)}
          >
            {loading ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
  );
};
