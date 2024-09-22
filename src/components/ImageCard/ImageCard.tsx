import { Photo } from "../types";


interface image {
  url: {
    regular: string;
    small: string;
  };
  alt: string;
  openModal: () => void;
  setOnPhoto: (photo: Photo) => void;
}

const ImageCard: React.FC<image> = ({ url, alt, openModal, setOnPhoto }) => {
  const handleClick = () => {
    setOnPhoto({ url: url.regular, alt });
    openModal();
  };
  return (
    <div onClick={handleClick} >
      <img
        src={url.small}
        alt={alt}
        width={320}
        height={220}
      />
    </div>
  );
};

export default ImageCard;