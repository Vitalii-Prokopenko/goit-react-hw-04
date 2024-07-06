import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errormessage/ErrorMessage";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import { fetchImagesWithTag } from "./services/images-api";
import ImageGallery from "./components/imagegallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1000000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);  

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

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery imagesToShow={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && page < totalPages &&<LoadMoreBtn onClick={handleLoadMore} /> }
    </>
  );
}

export default App;
