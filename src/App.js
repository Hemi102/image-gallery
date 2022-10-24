import React, { useEffect } from "react";
import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ImageModal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const handleClose = () => {
    setSelectedImg(null);
  };
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} handleClose={handleClose} />
      )}
    </div>
  );
}

export default App;
