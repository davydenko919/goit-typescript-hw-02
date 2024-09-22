import { useEffect, useState } from "react";
import { fetchPhotosApi } from "./components/services/photos-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { imageItem, Photo } from "./components/types";


function App() {
  const [photos, setPhotos] = useState<imageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [onPhoto, setOnPhoto] = useState<Photo>({ url: "", alt: "" });

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (searchValue.trim() === "") return;
    const fetchPhotosBySearchValue = async (): Promise<void> => {
      try {
        setLoading(true);
        const data = await fetchPhotosApi(searchValue, pageNumber);

        setPhotos((prev) => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          console.log("Unknown error type");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPhotosBySearchValue();
  }, [searchValue, pageNumber]);

  const onSubmit = (searchTerm: string): void => {
    setPhotos([]);
    setSearchValue(searchTerm);
    setPageNumber(1);
  };
  const onLoadMore = (): void => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        onPhoto={onPhoto}
      />
      {loading && <Loader />}
      {error !== null && <ErrorMessage errorMessage={error} />}
      {photos.length > 0 && (
        <ImageGallery
          photos={photos}
          openModal={openModal}
          setOnPhoto={setOnPhoto}
        />
      )}
      {pageNumber < totalPage && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  );
}

export default App;