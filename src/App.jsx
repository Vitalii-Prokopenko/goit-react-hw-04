import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errormessage/ErrorMessage";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import ImageGallery from "./components/imagegallery/ImageGallery";
import ImageModal from "./components/imagemodal/ImageModal";
import { fetchImagesWithTag } from "./services/images-api";

function App() {
  const [images, setImages] = useState([]);
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1000000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState({});

  const handleSearch = async (newTag) => {
    setImages([]);
    setTag(newTag);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (tag === "") {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImagesWithTag(tag, page);
        setTotalPages(data.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [tag, page]);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      setIsOpen(false);
    }
  };

  const handleClickOnImage = (event) => {
    const targetId = event.target.id;
    const clickedImage = images.find((image) => image.id === targetId);
    setClickedImage(clickedImage);
    setIsOpen(true);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery imagesToShow={images} onClickImage={handleClickOnImage} />
      )}
      {isOpen && (
        <ImageModal
          modalIsOpen={isOpen}
          handleRequestClose={handleModalClose}
          clickedImage={clickedImage}
          handleOverlayClick={handleOverlayClick}
        />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
