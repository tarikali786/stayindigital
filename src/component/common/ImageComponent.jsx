"use client";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

/**
 * Reusable image with lazy loading and skeleton placeholder.
 * Supports both fill and intrinsic layouts.
 */
const ImageComponent = ({
  src,
  alt,
  imgCss,
  containerCss,
  variant,
  fill,
  sizes,
  priority,
  width,
  height,
  quality,
  placeholder = "empty",
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const wrapperClasses = `relative overflow-hidden flex items-center justify-center ${
    imgCss ? imgCss : ""
  } ${containerCss ? containerCss : ""}`;

  return (
    <div className={wrapperClasses}>
      {loading && !error && (
        <Skeleton
          variant={variant || "rounded"}
          width={"100%"}
          height={"100%"}
          className={fill ? "absolute inset-0" : "w-full h-full"}
        />
      )}
      {!error && src ? (
        <Image
          src={src}
          alt={alt || "Image"}
          className={`${imgCss || "object-cover rounded-lg"}`}
          onLoadingComplete={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          placeholder={placeholder}
          loading={priority ? undefined : "lazy"}
          fill={!!fill}
          sizes={sizes}
          priority={priority}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          quality={quality}
        />
      ) : null}
    </div>
  );
};

export default ImageComponent;
