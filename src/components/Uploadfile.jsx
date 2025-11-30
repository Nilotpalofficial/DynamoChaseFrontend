import React, { useState } from 'react';

const Uploadfile = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div  >
      <div className=" rounded-lg ">
        <div className="my-2 mx-3 items-center justify-center">
          {image ? (
            <img src={image} alt="Uploaded" className="w-40 h-40" />
          ) : (
            <div className="w-40 h-40 bg-lime-200 rounded-md flex items-center justify-center">
              <span className="text-black">No Image Uploaded</span>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="file/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500
            file:mx-4 file:py-1
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-green-100 file:text-green-700
            hover:file:bg-blue-100"
        />
      </div>
    </div>
  );
};

export default Uploadfile