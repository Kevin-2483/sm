import { useState, useEffect } from "react";

const useImage = (url) => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = new Image();
        img.src = url;

        img.onload = () => {
          setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
          setImageData(url);
          setLoading(false);
        };

        img.onerror = (err) => {
          setError(new Error("图片加载失败"));
          setLoading(false);
        };
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (url) {
      loadImage();
    }
  }, [url]);

  return { imageData, loading, error, dimensions };
};

export default useImage;
