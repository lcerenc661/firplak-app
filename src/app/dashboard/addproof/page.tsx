// import prisma from "@/lib/prisma";
// import { useEffect } from "react";

import { PodForm } from "@/pods";

export const metadata = {
  title: "Add POD",
  description: "Add proof of delivery",
};

export default async function RestAddPage() {


  return (
    <div>
      <p> Agrega una nueva POD </p>
      <PodForm />
    </div>
  );
}
