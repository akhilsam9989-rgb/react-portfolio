/** <img> that swaps to a placeholder if the file is missing, so a wrong path never shows a broken image. */
function ImageWithFallback({ src, alt, fallbackSrc = "/images/image-placeholder.svg", ...imageProps }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(event) => {
        // Guard against an endless loop if the fallback itself fails
        if (!event.currentTarget.src.endsWith(fallbackSrc)) {
          event.currentTarget.src = fallbackSrc;
        }
      }}
      {...imageProps}
    />
  );
}

export default ImageWithFallback;
