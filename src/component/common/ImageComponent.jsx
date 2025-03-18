import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

const ImageComponent = ({
  src,
  alt,
  imgCss,
  cardCss,
  variant,
  width,
  height,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`relative flex items-center justify-center ${
        cardCss || "w-full h-auto"
      }`}
    >
      {/* Skeleton Loader */}
      {loading && (
        <Skeleton
          variant={variant || "rounded"}
          width={ "100%"}
          height={ "100%"}
          className="absolute inset-0"
        />
      )}

      {/* Next.js Image Component */}
      <Image
        src={src}
        alt={alt || "Image"}
        // width={width || 300} 
        // height={height || 200} 
        className={`rounded-lg ${imgCss || "object-cover"} 
          transition-opacity duration-500 
          ${loading ? "opacity-0" : "opacity-100"}`}
        onLoadingComplete={() => setLoading(true)}
        placeholder="empty" 
        loading="lazy"
      />
    </div>
  );
};

export default ImageComponent;
