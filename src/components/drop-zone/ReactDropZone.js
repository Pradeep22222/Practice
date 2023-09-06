import React, { useCallback, useState } from "react";
import sytles from "./dropzone.module.css";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
export const ReactDropZone = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };
  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (files?.length) {
      return;
    }
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    formData.append("upload_preset");
  };
  return (
    <form>
      <div {...getRootProps({ className: sytles.border })}>
        <input {...getInputProps()} />

        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {/* preview section */}
      <h3>accepted files</h3>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {
              <Image
                src={file.preview}
                alt=""
                width={100}
                height={100}
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
            }
            <span onClick={() => removeFile(file.name)}>Cross</span>
          </li>
        ))}
      </ul>
      {/* rejected section */}
      <h3>rejected files</h3>
      <ul className="mt-6 flex flex-col">
        {rejected.map(({ file, errors }) => (
          <li key={file.name} className="flex items-start justify-between">
            <div>
              <p className="mt-2 text-neutral-500 text-sm font-medium">
                {file.name}
              </p>
              <ul className="text-[12px] text-red-400">
                {errors.map((error) => (
                  <li key={error.code}>{error.message}</li>
                ))}
              </ul>
            </div>
            <span onClick={() => removeRejected(file.name)}>Cross</span>
          </li>
        ))}
      </ul>
      <button type="submit"></button>
    </form>
  );
};
