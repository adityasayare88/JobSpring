"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string;
}

export const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      {value ? (
        <>
          <div className="w-full h-60 aspect-video relative rounded-md flex items-center justify-center overflow-hidden">
            <Image
              fill
              className="w-full h-full object-cover"
              alt="Image cover"
              src={value}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
