import PropTypes from "prop-types";
import css from "./imagecard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={css.imageWrap}>
      <img className={css.image} src={image.urls.small} id={image.id} />
    </div>
  );
};

// ImageCard.PropTypes = {};

export default ImageCard;
