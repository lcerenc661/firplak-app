"use client";

// import prisma from "@/lib/prisma";
import { useEffect, useState } from "react";

import prisma from "@/lib/prisma";
import { SinglePod } from "@/pods/components/SinglePod";
import { POD } from "@prisma/client";

// export const metadata = {
//     title: "Registered POD",
//     description: "Registered proofs of delivery",
//   };


    export default function RegisteredPage() {
      const [pods, setPods] = useState<POD[]>([]);
      const [loading, setLoading] = useState(true);
    
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/pod`);
          console.log()
          const data = await response.json();
          console.log(data);
          setPods(data);
          setLoading(false); 
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []); 
    
      return (
        <div>
          <h1>Registered POD</h1>
          {loading ? (
            <p>Loading...</p>
          ) : pods.length === 0 ? (
            <p>No PODs found.</p>
          ) : (
            pods.map((pod) => <SinglePod key={pod.id} pod={pod} />)
          )}
        </div>
      );
    }
  

