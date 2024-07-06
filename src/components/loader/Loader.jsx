import { ThreeDots } from "react-loader-spinner";
import PropTypes from "prop-types";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#C21292"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        marginTop: "70px",

      }}
      wrapperClass=""
    />
  );
};

// Loader.PropTypes = {};

export default Loader;
