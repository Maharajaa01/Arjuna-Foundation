'use client';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface Props {
  onUpload: (url: string) => void;
  currentImage: string;
  clearImage: () => void;
}

export default function ImageUploader({ onUpload, currentImage, clearImage }: Props) {
  const [uploading, setUploading] = useState(false);

  return (
    <div className="space-y-2">
      {currentImage ? (
        <div className="relative">
          <img src={currentImage} alt="Preview" className="w-full h-48 object-cover rounded" />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ) : (
        <CldUploadWidget
          uploadPreset="your_upload_preset" // Replace with your Cloudinary preset
          onUpload={(result: any) => {
            setUploading(false);
            const url = result?.info?.secure_url;
            if (url) {
              onUpload(url);
            }
          }}
          onOpen={() => setUploading(true)}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          )}
        </CldUploadWidget>
      )}
    </div>
  );
}
