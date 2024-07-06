import ImageCard from "../imagecard/ImageCard";
import PropTypes from "prop-types";
import css from "./imagegallery.module.css";

const ImageGallery = ({ imagesToShow, onClickImage }) => {
  return (
    <ul className={css.gallery} onClick={onClickImage}>
      {imagesToShow.map((image) => {
        return (
          <li className={css.galleryItem} key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesToShow: PropTypes.array.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
