import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cropper from "react-easy-crop";

const ImageModal = ({ selectedImg, handleClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <>
      <Modal
        show={true}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{ height: "500px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Image</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "500px" }}>
          {" "}
          <div style={{ height: "500px !important" }}>
            <Cropper
              image={selectedImg}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              style={{ containerStyle: { height: "500px" } }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    /* <motion.img
        initial={{y: "-100vh"}}
        animate={{y: 0}}
        src={selectedImg}
        alt="enlarged pic"
        style={{backgroundColor: "#fff"}}
      /> */
  );
};

export default ImageModal;
