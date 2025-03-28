"use client";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

const ImageComponent = ({ src, alt, imgCss, variant }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative flex items-center overflow-hidden justify-center `}
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
          className={` w-full h-full ${imgCss || "object-cover rounded-lg "}`}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          placeholder="empty"
          loading="lazy"
          fill
        />
      ) : null}
    </div>
  );
};

export default ImageComponent;
