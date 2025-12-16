import { useState } from "react";

const useGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openGalleryModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return { isModalOpen, modalImageSrc, openGalleryModal, closeGalleryModal };
};

export default useGallery;
