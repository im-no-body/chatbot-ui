import React, { useState } from "react";

import API from "../helpers/api";

function UploadPage() {
  const [fileObject, setFileObject] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      setFileObject(file);
    } else {
      alert("Please upload a valid .txt file");
    }
  };

  const handleFileUpload = async () => {
    if (!fileObject) {
      alert("Please upload a valid .txt file");
      return;
    }
    const message = await API.UploadFile(fileObject);
    alert(message);
  };

  return (
    <div className="upload-container">
      <div className="upload-header">Update knowledge</div>
      <div className="upload-body">
        <div className="upload-input">
          <p className="upload-instructions">Please upload a .txt file</p>
          <input type="file" accept=".txt" onChange={handleFileChange} />
        </div>
        <div>
          <button
            id="uploadButton"
            className="upload-button"
            onClick={handleFileUpload}
          >
            <span className="button-text">Upload</span>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/90/FFFFFF/upload--v1.png"
              alt="upload--v1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
