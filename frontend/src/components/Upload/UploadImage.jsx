import React, { useState, useRef } from "react";
import { HiMiniPhoto } from "react-icons/hi2";
import { X } from 'lucide-react';

const UploadImage = () => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName =
        file.name.length > 20 ? file.name.slice(0, 20) + "..." : file.name;
      setSelectedFileName(fileName);
    }
  };

  const handleDeleteImage = () => {
    setSelectedFileName("");
    // Reset the file input value to allow selecting the same image again
    fileInputRef.current.value = "";
  };

  const handleButtonClick = () => {
    // Trigger a click event on the hidden file input
    fileInputRef.current.click();
  };

  return (
    <div>
      {selectedFileName ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center content horizontally
            height: "100%", // Ensure the container takes full height
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative", // Add relative positioning
            }}
          >
            <p
              style={{
                backgroundColor: "white",
                width: "370px", // Reduced width to accommodate the icon
                height: "3.7rem",
                borderColor: "#d1d5db",
                borderWidth: "1px",
                color: "rgb(20 184 166)",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center", // Center the text horizontally
                lineHeight: "3.7rem", // Adjusted to the height of the container
                display: "flex",
                alignItems: "center", // Center content vertically
                gap: "8px", // Add some space between the icon and text
                position: "relative", // Add relative positioning
              }}
            >
<div className="flex items-center">
  <HiMiniPhoto size={20} className="mr-4 ml-4" />
  <span className="pl-4 ext-[#14B8A6] text-opacity-100">{selectedFileName}</span>
</div>



              <div
                style={{
                  position: "absolute", // Use absolute positioning
                  top: "50%", // Move to the middle vertically
                  right: "15px", // Adjust the distance from the right
                  transform: "translateY(-50%)", // Center vertically
                }}
              >
                <X color="#6b7280" onClick={handleDeleteImage} />
              </div>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="image-upload"
            ref={fileInputRef} // Reference to the file input element
            style={{ display: "none" }}
          />
          <label htmlFor="image-upload">
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: "white",
                width: "370px",
                height: "3.7rem",
                borderColor: "#d1d5db", // Change border color to red
                borderWidth: "1px", // Set border width to 2px
                borderStyle: "solid", // Border style (e.g., solid, dashed, etc.)
                color: "#6b7280",
                cursor: "pointer",
                borderRadius: "10px", // Rounded edges
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center content horizontally
              }}
            >
              <HiMiniPhoto size={20} style={{ marginRight: "8px" }} />
              Select Image
            </button>
          </label>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
