import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import { Button } from '@mui/material';
import getCroppedImg from './cropUtils'; // utility function to crop the image
import './AddImg.css';

function AddImg({ file, handleChange }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 3145728,
  });

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      handleChange(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, handleChange]);

  const handleRemoveImage = () => {
    setImageSrc(null);
    handleChange(null);
  };

  return (
    <>
      <div className="upload-img-container">
        <div className="upload-img-secondary-container">
          {imageSrc ? (
            <>
              <div className="crop-container">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={400 / 150}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: 15 }}
                onClick={showCroppedImage}
              >
                Save Image
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: 15 }}
                onClick={handleRemoveImage}
              >
                Remove Image
              </Button>
            </>
          ) : (
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop an image here, or click to select an image</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddImg;
