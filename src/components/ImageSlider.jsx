import { useState } from "react";
import iconPrev from "/src/assets/icon-previous.svg";
import iconNext from "/src/assets/icon-next.svg";
import ModalSlider from "./ModalSlider";

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [openModalSlider, setOpenModalSlider] = useState(false);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <>
      <div id="imageSlider" className="w-full sm:w-2/5 h-full relative">
        <div className="w-full h-full overflow-hidden flex sm:rounded-2xl">
          {images.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              key={image.url}
              onClick={() => {
                setOpenModalSlider((prev) => !prev);
              }}
              className="w-full object-cover max-h-[40vh] sm:max-h-full h-full block slider-img shrink-0 grow-0 sm:rounded-2xl"
              style={{
                translate: `${-100 * imageIndex}%`,
                transition: "translate 300ms ease-in-out",
              }}
            />
          ))}
        </div>

        <button
          aria-label="Previous image"
          className="sm:hidden absolute w-8 h-8 left-4 inset-y-0 mt-auto mb-auto bg-white flex flex-wrap place-content-center rounded-full"
          onClick={showPrevImage}
        >
          <img src={iconPrev} className="scale-75" />
        </button>
        <button
          aria-label="Next image"
          className="sm:hidden absolute w-8 h-8 right-4 inset-y-0 mt-auto mb-auto bg-white flex flex-wrap place-content-center rounded-full"
          onClick={showNextImage}
        >
          <img src={iconNext} className="scale-75" />
        </button>

        <div className="hidden mt-8 sm:flex sm:max-w-full sm:justify-between gap-8">
          {images.map((image, pos) => (
            <div
              key={image.url}
              className={`${
                pos === imageIndex
                  ? "bg-white/20 outline outline-orange-600"
                  : ""
              } rounded-lg cursor-pointer`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`rounded-lg ${
                  pos === imageIndex ? "opacity-20" : ""
                }`}
                onClick={(e) => {
                  setImageIndex(pos);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <ModalSlider
        images={images}
        openModalSlider={openModalSlider}
        setOpenModalSlider={setOpenModalSlider}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
    </>
  );
};
export default ImageSlider;
