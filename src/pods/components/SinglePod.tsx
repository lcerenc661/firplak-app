import { POD } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  pod: POD;
}

export const SinglePod = ({ pod }: Props) => {
  const date = `${pod.createdAt.getMonth()}/${pod.createdAt.getDate()} - ${pod.createdAt.getHours()}:${pod.createdAt.getMinutes()}`;

  return (
    <div className=" px-4 py-2 border-2 border-gray-200 flex justify-between text-[0.8rem] flex-col md:flex-row">
      <div className="flex flex-col">
      <p className="min-w-1/6 inline-block ">
        {" "}
        <span className="font-bold bg-cyan-900 text-white px-2">
          {" "}
          POD ID:
        </span>{" "}
        {pod.id}{" "}
      </p>

      <p
        className={` inline-block ${
          pod.observacion ? "text-red-500" : "text-grey-200"
        }`}>
        observacion: {pod.observacion ? "SI" : "NO"}{" "}
      </p>
      <p className="inline-block font-light"> fecha:{date} </p>

      </div>
      <div className="flex gap-4 self-center justify-items-start ">
        {" "}
        <Link
          href={pod.guia_de_Transporte}
          target="_blank"
          className="inline-block px-4 py-2 bg-teal-300 rounded-md">
          {" "}
          Guia de Transporte
        </Link>
        <Link href={pod.remision} target="_blank" className="inline-block px-4 py-2 bg-teal-300 rounded-md">
          {" "}
          Remision
        </Link>
      </div>
    </div>
  );
};
