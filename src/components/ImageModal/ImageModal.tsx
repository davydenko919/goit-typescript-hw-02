import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface modal {
  onPhoto: {
    url: string;
    alt: string;
  };
  isOpenModal: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<modal> = ({ isOpenModal, closeModal, onPhoto }) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(90, 180, 190, 0.5)",
        },
        content: {
          borderRadius: "8px",
          width: "50%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          background: "transparent",
          transform: "translate(-50%, -50%)",
        },
      }}
      closeTimeoutMS={200}
    >
      <img className={css.img} src={onPhoto.url} alt={onPhoto.alt} />
    </Modal>
  );
};

export default ImageModal;