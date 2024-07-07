import ReactModal from "react-modal";
import PropTypes from "prop-types";
import css from "./imagemodal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({
  modalIsOpen,
  handleRequestClose,
  clickedImage,
  handleOverlayClick,
}) => {
  return (
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
    </ReactModal>
  );
};

ImageModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
  clickedImage: PropTypes.object.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
};

export default ImageModal;
