"use client";

import { useState } from "react";
import { UploadButton } from "../../utils/uploadthing";
import Link from "next/link";


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

export default function Home() {
  const [images, setImages] = useState<ImageObject[]
  >([]);

  const title = images.length ? (
    <>
      <p>Upload Complete</p>
      <p className="mt-2"> {images.length} </p>
    </>
  ) : null;

  const imgList = (
    <>
      {title}
      <ul>
        {images.map((image) => (
          <li key={image.url} className="mt-2">
            <Link href={image.url} target="_blank">
              {image.url}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          if (res) {
            console.log("Files: ", res);
            setImages(res);
            const json = JSON.stringify(res);
          }

          // alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imgList}
    </main>
  );
}
