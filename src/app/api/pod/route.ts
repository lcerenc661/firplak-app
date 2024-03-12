import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";


export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
 
  const pods = await prisma.pOD.findMany({

  });

  return NextResponse.json(pods);
}

// **********  POST  ************

const postSchema = object({
  guia_de_Transporte: string().required(),
  remision: string().required(),
  observacion: boolean().optional().default(false), //TODO show something interesting
});

export async function POST(request: Request) {
  try {
    const { guia_de_Transporte, remision, observacion } =
      await postSchema.validate(await request.json());
    const todo = await prisma.pOD.create({
      data: { guia_de_Transporte, remision, observacion },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

// **********  DELETE  ************

export async function DELETE(request: Request) {
  const podsToDelete = await prisma.pOD.deleteMany({
    // where: {
    //   complete: true,
    // },
  });
  return NextResponse.json(podsToDelete);
}
