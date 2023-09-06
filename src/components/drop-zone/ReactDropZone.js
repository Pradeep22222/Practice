import React, { useCallback, useState } from "react";
import sytles from "./dropzone.module.css";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
export const ReactDropZone = ({ className }) => {
  const [files, setFiles] = useState([]);
  comst[(rejected, rejectedFiles)] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
      }
      if (rejectedFiles.length) {
          setRejected(previousFiles=>[...previousFiles,...rejectedFiles])
      }
    console.log("dropzone working");
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
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
      <ul>
        {rejected.map((file,errors) => (
          <li key={file.name}>
                <div>
                    <p>{file.name }</p>
            </div>
            <span onClick={() => removeFile(file.name)}>Cross</span>
          </li>
        ))}
      </ul>
    </form>
  );
};
