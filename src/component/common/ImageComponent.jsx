import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

const ImageComponent = ({ src, alt, imgCss, cardCss, variant }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center ${
        cardCss || "w-full h-auto"
      }`}
    >
      {/* Skeleton Loader */}
      {loading && !error && (
        <Skeleton
          variant={variant || "rounded"}
          width={"100%"}
          height={"100%"}
          className="absolute inset-0"
        />
      )}

      {/* Next.js Image Component */}
      {!error && src ? (
        <Image
          src={src}
          alt={alt || "Image"}
          className={`rounded-lg ${imgCss || "object-cover"} 
            transition-opacity duration-500 
            ${loading ? "opacity-0" : "opacity-100"}`}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          placeholder="empty"
          loading="lazy"
        />
      ) : null}
    </div>
  );
};

export default ImageComponent;
