-- CreateTable
CREATE TABLE "POD" (
    "id" TEXT NOT NULL,
    "guia_de_Transporte" TEXT NOT NULL,
    "remision" TEXT NOT NULL,
    "observacion" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "POD_pkey" PRIMARY KEY ("id")
);
