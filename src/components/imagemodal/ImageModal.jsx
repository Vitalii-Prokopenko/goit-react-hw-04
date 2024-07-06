import ReactModal from "react-modal";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./imagemodal.module.css";

const modalRoot = document.querySelector("#modal-root");

ReactModal.setAppElement("#root");

const ImageModal = ({
  modalIsOpen,
  handleRequestClose,
  clickedImage,
  handleOverlayClick,
}) => {
  return createPortal(
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={handleRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div onClick={handleOverlayClick} className={css.overlay}>
        <div className={css.modal}>
          <img className={css.modalImg} src={clickedImage.urls.regular} />
        </div>
      </div>
    </ReactModal>,
    modalRoot
  );
};

ImageModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
  clickedImage: PropTypes.object.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
};

export default ImageModal;
