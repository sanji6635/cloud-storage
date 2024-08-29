import React, { useState } from "react";
import "./addFiles.css";
import Button from "react-bootstrap/Button";

const AddFiles = () => {
  const [file, setfile] = useState("");
  const [filesrc, setFilesrc] = useState("");

  //reading the url of the selected file

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFilesrc(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setfile(e.target.files[0]);
  };

  //submit the file at the location
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/data/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="addFiles">
      <h3>Add Your Files</h3>

      <form
        method="post"
        encType="multipart/form-data"
        className="form-file"
        onSubmit={handleSubmit}
      >
        <Button variant="outline-primary">
          <input type="file" name="file[]" onChange={handleChange} multiple />
        </Button>
        <Button variant="outline-primary" size="lg" type="submit">
          Add
        </Button>
      </form>
      <div className="selectedFile">
        {file && file.type == "image/jpeg" && (
          <img src={file.name} alt="selected image " className="image-style" />
        )}
        {/* {file && (
          <iframe
            src={filesrc}
            height={"300px"}
            width={"300px"}
            className="image-style"
          ></iframe>
        )} */}
        {/* {file && (
          <object
            data={filesrc}
            type="application/pdf"
            height={"300px"}
            width={"300px"}
          ></object>
        )} */}
        {file && file.type == "application/pdf" && (
          <embed src={filesrc} type="application/pdf" className="image-style" />
        )}
      </div>
    </div>
  );
};

export default AddFiles;
