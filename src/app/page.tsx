"use server";
import {  getData } from "./services/getData";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

export default async function Home() {
  const data = await getData();



  return (
    <div className="grid justify-center mt-4">
      <Form />
      {data?.map((item) => (
        <div key={item.id} className=" items-center  gap-5">
          <Card {...item} key={item.id} />
        </div>
      ))}
    </div>
  );
}
