import React, { useState } from "react";
import "./uploadedFiles.css";
import Button from "react-bootstrap/Button";
import useImages from "../../hooks/useImages";

const UploadedFiles = () => {
  const [image, setImage] = useState([]);

  const { getImages } = useImages();

  const handleImages = async () => {
    const { file } = await getImages();
    setImage(file);
    console.log(image);
  };

  return (
    <div className="uploadedFiles">
      <div className="head">
        <h1>Images</h1>
        <Button onClick={handleImages}>Refresh to load laytest images</Button>
      </div>
      <div className="images">
        {image.map((item, index) => {
          return (
            <div key={index}>
              <img src={`http://localhost:5000/uploads/${item}`} alt={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadedFiles;
