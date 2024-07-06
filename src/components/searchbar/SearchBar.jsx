import { Formik, Form, Field } from "formik";
import { ImSearch } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import css from "./searchbar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (values.tag === "") {
      toast.error('Type something to search!');
      return;
    }
    onSearch(values.tag);
    actions.resetForm();
  };
  return (
    <header className={css.searchBar}>
      <Formik
        initialValues={{
          tag: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.searchForm}>
          <button type="submit" className={css.searchBtn}>
            <ImSearch />
          </button>
          <Field
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="tag"
          />
        </Form>
      </Formik>
      <Toaster position="top-right"/>
    </header>
  );
};

// SearchBar.propTypes = {};

export default SearchBar;
