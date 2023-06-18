import React, { useState, useEffect } from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const useImage = (src: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
        setIsLoading(false);
    };
    image.onerror = (e) => {
        setIsLoading(false);
        setError('Failed to load image');
    };
    image.src = src;

    return () => {
        // Clean up the image object
        image.onload = null;
        image.onerror = null;
        image.src = '';
    };
  }, [src]);

  return { isLoading, error };
};

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  const { isLoading, error } = useImage(src);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <img src={src} alt={alt} />;
};

export default ImageComponent;
