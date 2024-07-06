import PropTypes from "prop-types";
import css from "./loadmorebtn.module.css";

const LoadMoreBtn = ({onClick}) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

// LoadMoreBtn.PropTypes = {};

export default LoadMoreBtn;
