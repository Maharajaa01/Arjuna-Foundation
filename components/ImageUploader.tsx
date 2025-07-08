'use client';

import { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

type Props = {
  onUpload: (url: string) => void;
  currentImage: string;
  clearImage: () => void;
};

export default function ImageUploader({ onUpload, currentImage, clearImage }: Props) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="space-y-2">
      {currentImage ? (
        <div className="relative w-full">
          <img src={currentImage} alt="Uploaded" className="w-full h-48 object-cover rounded" />
          <button
            onClick={clearImage}
            type="button"
            className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded"
          >
            Remove
          </button>
        </div>
      ) : (
        <CldUploadWidget
          uploadPreset="unsigned_preset"
          onUpload={(result: any) => {
            const url = result?.info?.secure_url;
            if (url) {
              onUpload(url);
              setIsUploading(false);
            }
          }}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => {
                setIsUploading(true);
                open();
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isUploading ? 'Uploading...' : 'Upload Image'}
            </button>
          )}
        </CldUploadWidget>
      )}
    </div>
  );
}
