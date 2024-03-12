"use client";

import { FormEvent, useState } from "react";
import { UploadButton } from "../../utils/uploadthing";
import Link from "next/link";
import * as podsAPI from "@/pods/helpers/pods";
import { useRouter } from "next/navigation";

interface ImageObject {
  name: string;
  size: number;
  type: string;
  key: string;
  url: string;
  serverData: {
    uploadedBy: string;
  };
  customId: null | string;
}

export function PodForm() {
  const [imagesRemision, setImagesRemision] = useState<ImageObject[]>([]);
  const [imagesGuia, setImagesGuia] = useState<ImageObject[]>([]);
  const [observacion, setObservacion] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (imagesRemision.length === 0 || imagesGuia.length === 0) {
      return;
    }

    try {
      const pod = await podsAPI.createPod(
        imagesGuia[0].url,
        imagesRemision[0].url,
        observacion
      );
      setImagesRemision([]);
      setImagesGuia([]);
      setObservacion(false);
      console.log(pod);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const titleRemision = imagesRemision.length ? (
    <>
      <p>Upload Complete</p>
      <p className="mt-2"> {imagesRemision.length} </p>
    </>
  ) : null;
  const titleGuia = imagesGuia.length ? (
    <>
      <p>Upload Complete</p>
      <p className="mt-2"> {imagesGuia.length} </p>
    </>
  ) : null;

  const imgListRemision = (
    <>
      {titleRemision}

      {imagesRemision.map((image) => (
        <div key={image.url} className="ml-4 my-2 border-grey-200 rounded-2xl">
          <Link className="text-[0.6rem]" href={image.url} target="_blank">
            <span className="font-bold text-grey-500 mr-3">vista previa:</span>
            {image.url}
          </Link>
        </div>
      ))}
    </>
  );
  const imgListGuia = (
    <>
      {titleGuia}
      {imagesGuia.map((image) => (
        <div key={image.url} className="ml-4 my-2 border-grey-200 rounded-2xl">
          <Link className="text-[0.6rem]" href={image.url} target="_blank">
            <span className="font-bold text-grey-500 mr-3">vista previa:</span>
            {image.url}
          </Link>
        </div>
      ))}
    </>
  );
  return (
    <form
      className="flex items-center justify-start p-24 gap-5 flex-col md:flex-row"
      onSubmit={(e) => onSubmit(e)}>
      <div className="border-2 border-grey-200 rounded-3xl flex items-center flex-col md:w-[450px] w-[320px] pb-10">
        <p className="text-center text-sm font-light">Agregar</p>
        <h3 className="inline-block text-xl font-bold text-center mb-10">
          {" "}
          Remision
        </h3>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            if (res) {
              console.log("Files: ", res);
              setImagesRemision(res);
              const json = JSON.stringify(res);
            }

            // alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
        {imgListRemision}
      </div>

      <div className="border-2 border-grey-200 rounded-3xl flex items-center flex-col md:w-[450px] w-[320px] pb-10">
        <p className="text-center text-sm font-light">Agregar</p>
        <h3 className="inline-block text-xl font-bold text-center mb-10">
          {" "}
          Guia de transporte
        </h3>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            if (res) {
              console.log("Files: ", res);
              setImagesGuia(res);
              const json = JSON.stringify(res);
            }

            // alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
        {imgListGuia}
      </div>
      <div className=" flex flex-col gap-10">
        <div>
          <input
            type="radio"
            name="observacion"
            onChange={() => setObservacion(!observacion)}
            checked={observacion}
          />
          <label htmlFor="observacion"> Observacion</label>
          <p className="text-xs">
            {" "}
            Marcar la caja en caso de existir alguna novedad con la entrega del
            producto
          </p>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit">
          Guardar POD
        </button>
      </div>
    </form>
  );
}
