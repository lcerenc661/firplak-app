// import prisma from "@/lib/prisma";
// import { useEffect } from "react";

import prisma from "@/lib/prisma";
import { SinglePod } from "@/pods/components/SinglePod";

export const metadata = {
    title: "Registered POD",
    description: "Registered proofs of delivery",
  };
  
  export default async function resgiteredPage() {

    const pods = await prisma.pOD.findMany({
      orderBy: { createdAt: "desc" },
    });

  
  
    return (
      <div>
        <h1>Registros POD</h1>
        { pods.map((pod) =>{
          return (
            <SinglePod key={pod.id} pod={pod} />
          )
        })}
      </div>
    );
  }
  

