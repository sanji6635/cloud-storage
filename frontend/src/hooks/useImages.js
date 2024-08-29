import React from "react";

const useImages = () => {
  const getImages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/images/getImages");
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      return data;

      //---------------
    } catch (err) {
      console.log(`error while geeting images => ${err}`);
    }
  };

  return { getImages };
};

export default useImages;
