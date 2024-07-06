import ImageCard from "../imagecard/ImageCard";
import PropTypes from "prop-types";
import css from "./imagegallery.module.css";

const ImageGallery = ({ imagesToShow }) => {
  return (
    <ul className={css.gallery}>
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

// ImageGallery.PropTypes = {};

export default ImageGallery;
