import img1 from "/src/assets/image-product-1.jpg";
import img2 from "/src/assets/image-product-2.jpg";
import img3 from "/src/assets/image-product-3.jpg";
import img4 from "/src/assets/image-product-4.jpg";
import ImageSlider from "./ImageSlider";
import ProdDescription from "./ProdDescription";

const Product = () => {
  const IMAGES = [
    { url: img1, alt: "Image product 1" },
    { url: img2, alt: "Image product 2" },
    { url: img3, alt: "Image product 3" },
    { url: img4, alt: "Image product 4" },
  ];
  const PRODUCTINFO = {
    id: "1",
    imgUrl: img1,
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    oldPrice: "$250.00",
    newPrice: "$125.00",
    discount: "50%",
  };

  return (
    <main className="flex flex-col grow flex-wrap justify-start sm:place-content-center">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-16">
        <ImageSlider images={IMAGES} />
        <ProdDescription productInfo={PRODUCTINFO} />
      </div>
    </main>
  );
};
export default Product;
