"use server"

import { revalidateTag } from "next/cache";

export interface CategoryType {
  id: number;
  title: string;
  description: string;
}
interface CategoryPost {
  title: string;
  description: string;
}

export const getData = async (): Promise<CategoryType[]> => {
  try {
    const res = await fetch("http://localhost:3600/todos", {
      next: {
        tags: ["todos"],
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Faild to fetch data");
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3600/todos/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    revalidateTag("todos");
    return data;
  } catch (error) {
    throw new Error("Faild to fetch data");
  }
};

export const CreateTodo = async (data: CategoryPost) => {
  try {
    const res = await fetch("http://localhost:3600/todos/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const dataResponse = await res.json();
    revalidateTag("todos");
    return dataResponse;
  } catch (error) {
    throw new Error("Faild to create data");
  }
};
