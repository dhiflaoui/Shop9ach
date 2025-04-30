"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailSelection = (index: number) => {
    setSelectedImage(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(index);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative min-h-[300px] w-full" aria-hidden="true">
        <Image
          src={images[selectedImage]}
          alt={`Product image ${selectedImage + 1} of ${images.length}`}
          className="object-cover rounded-md"
          width={1000}
          height={1000}
        />
      </div>

      {/* Thumbnail images */}
      <div
        className="flex gap-2 flex-wrap"
        role="tablist"
        aria-label="Product images"
      >
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => handleThumbnailSelection(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            tabIndex={0}
            aria-selected={selectedImage === index}
            aria-controls={`product-image-${index}`}
            aria-label={`Select product image ${index + 1}`}
            className={cn(
              "cursor-pointer border-2 border-transparent hover:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300",
              selectedImage === index ? "border-orange-500" : ""
            )}
          >
            <Image
              src={image}
              alt=""
              height={100}
              width={100}
              className="h-20 w-20 object-cover rounded-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
