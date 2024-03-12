import { POD } from "@prisma/client";


export const createPod = async (guia_de_Transporte:string, remision:string, observacion:boolean): Promise<POD> => {
    const body = { guia_de_Transporte, remision, observacion };
    console.log("............................ creating");
  
    const todo = await fetch(`/api/pod`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
    console.log(todo);
  
    return todo;
  };