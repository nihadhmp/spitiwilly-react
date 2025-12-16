import { useState } from "react";

const useGalleryModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return { isModalOpen, modalImageSrc, openModal, closeModal };
};

export default useGalleryModal;
