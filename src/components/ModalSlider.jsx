import "./ModalSlider.css";

const ModalSlider = ({
  images,
  openModalSlider: open,
  setOpenModalSlider: setOpen,
  imageIndex,
  setImageIndex,
}) => {
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
    <div
      className={`hidden ${
        open ? "sm:block" : ""
      } sm:absolute sm:bg-neutral-950/80 z-30 sm:inset-0`}
    >
      <div
        id="modalSlider"
        className="w-full h-full flex flex-wrap flex-col place-content-center"
      >
        <div className="w-[600px] h-[600px] relative">
          <div className="w-full h-full overflow-hidden flex sm:rounded-2xl">
            {images.map((image) => (
              <img
                src={image.url}
                alt={image.alt}
                key={image.url}
                className="w-[600px] object-cover h-[600px] block slider-img shrink-0 grow-0 sm:rounded-2xl"
                style={{
                  translate: `${-100 * imageIndex}%`,
                  transition: "translate 300ms ease-in-out",
                }}
              />
            ))}
          </div>

          <button
            aria-label="Close modal slider"
            className="closeModalButton absolute right-0 top-[-2.5rem]"
            onClick={() => {
              setOpen(false);
            }}
          >
            <svg
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#FFFFFF"
                transform="scale(1.5)"
              />
            </svg>
          </button>

          <button
            aria-label="Previous image"
            className="changeImageButton absolute w-12 h-12 left-[-1.5rem] inset-y-0 mt-auto mb-auto bg-white flex flex-wrap place-content-center rounded-full"
            onClick={showPrevImage}
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <button
            aria-label="Next image"
            className="changeImageButton absolute w-12 h-12 right-[-1.5rem] inset-y-0 mt-auto mb-auto bg-white flex flex-wrap place-content-center rounded-full"
            onClick={showNextImage}
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="wrapper flex justify-center">
          <div className="w-[500px] mt-8 flex sm:max-w-full sm:justify-between gap-8">
            {images.map((image, pos) => (
              <div
                key={image.url}
                className={`${
                  pos === imageIndex
                    ? "bg-white outline outline-orange-600"
                    : ""
                } rounded-lg cursor-pointer`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`rounded-lg  ${
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
      </div>
    </div>
  );
};
export default ModalSlider;
