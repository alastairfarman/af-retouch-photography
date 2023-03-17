import React, { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const ImageSection = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const coverImageRef = useRef(null);
  const panTimeoutRef = useRef(null);

  const panImage = useCallback((imgElement, axis) => {
    const container = imgElement.parentElement;
    const containerAspectRatio = container.clientWidth / container.clientHeight;
    const imgAspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;

    const ratio =
      axis === "x"
        ? imgAspectRatio / containerAspectRatio
        : containerAspectRatio / imgAspectRatio;
    const duration = 5 * ratio; // Adjust the duration based on the ratio

    imgElement.style.transition = `object-position ${duration}s ease-out`;
    const initialPosition = axis === "x" ? "0% 50%" : "50% 25%";
    const finalPosition = axis === "x" ? "50% 50%" : "50% 75%";

    imgElement.style.objectPosition =
      imgElement.style.objectPosition === initialPosition
        ? finalPosition
        : initialPosition;
    panTimeoutRef.current = setTimeout(
      () => panImage(imgElement, axis),
      duration * 1000
    );
  }, []);

  useEffect(() => {
    if (coverImageRef.current) {
      const imgElement = coverImageRef.current;
      imgElement.style.objectPosition = "";
      imgElement.style.transition = "";
      clearTimeout(panTimeoutRef.current);

      imgElement.onload = () => {
        const axis = detectOverflowAxis(imgElement);
        panImage(imgElement, axis);
      };
    }
  }, [currentIndex, panImage]);

  const detectOverflowAxis = (imgElement) => {
    const container = imgElement.parentElement;
    const containerAspectRatio = container.clientWidth / container.clientHeight;
    const imgAspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;

    return imgAspectRatio > containerAspectRatio ? "x" : "y";
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const focus = () => {
    setIsFocus(isFocus ? false : true);
  };

  return (
    <div className={`image-section`}>
      <div className="title" id={title}>
        <span>{title}</span>
      </div>
      <img
        ref={coverImageRef}
        className="cover"
        src={images[currentIndex]}
        alt={title}
      />
      {isFocus ? (
        <img className="fit" src={images[currentIndex]} alt={title} />
      ) : null}
      <button className="prev-button" onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-button" onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button className="focus" onClick={focus}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default ImageSection;
