import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.pOD.deleteMany({});

  await prisma.pOD.createMany({
    data: [
      {
        guia_de_Transporte:
          "https://utfs.io/f/a863f18d-faeb-4ff6-bd29-015a59e6bbe7-i5ifou.png",
        remision:
          "https://utfs.io/f/4ae73115-f514-4fd7-9fb5-9c11322f2a77-qufpkt.png",
        observacion: true,
      },
      {
        guia_de_Transporte:
          "https://utfs.io/f/a863f18d-faeb-4ff6-bd29-015a59e6bbe7-i5ifou.png",
        remision:
          "https://utfs.io/f/4ae73115-f514-4fd7-9fb5-9c11322f2a77-qufpkt.png",
        observacion: true,
      },
      {
        guia_de_Transporte:
          "https://utfs.io/f/a863f18d-faeb-4ff6-bd29-015a59e6bbe7-i5ifou.png",
        remision:
          "https://utfs.io/f/4ae73115-f514-4fd7-9fb5-9c11322f2a77-qufpkt.png",
      },
      {
        guia_de_Transporte:
          "https://utfs.io/f/a863f18d-faeb-4ff6-bd29-015a59e6bbe7-i5ifou.png",
        remision:
          "https://utfs.io/f/4ae73115-f514-4fd7-9fb5-9c11322f2a77-qufpkt.png",
      },
      {
        guia_de_Transporte:
          "https://utfs.io/f/a863f18d-faeb-4ff6-bd29-015a59e6bbe7-i5ifou.png",
        remision:
          "https://utfs.io/f/4ae73115-f514-4fd7-9fb5-9c11322f2a77-qufpkt.png",
      },
    ],
  });
  return NextResponse.json({ message: "Seed Executed" });
}
