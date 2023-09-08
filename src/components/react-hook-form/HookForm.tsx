import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  textInput: string;
  checkbox: boolean;
}

export const HookForm = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [rejected, setRejected] = useState<any[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
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
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); // This will contain the form data
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div {...getRootProps({})}>
          <input {...getInputProps()} />

          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
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
        <div>
          <label htmlFor="textInput">Text Input</label>
          <Controller
            name="textInput"
            control={control}
            defaultValue="" // Initial value for the text input
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>
        <div>
          <label>
            <Controller
              name="checkbox"
              control={control}
              defaultValue={false} // Initial value for the checkbox
              render={({ field }) => <input {...field} type="checkbox" />}
            />
            Check this box
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
