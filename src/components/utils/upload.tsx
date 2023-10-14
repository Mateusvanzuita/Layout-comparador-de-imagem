import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ButtonStyle } from '../../components/ButtonUpload/ButtonUpload';
import { Cloudy } from '../../components/icons/iconCloudy';

export default function ImagemUpload({ onImagesChange, selectedImages }) {
  const onDrop = (acceptedFiles) => {
    const newImages = [...selectedImages, ...acceptedFiles];
    onImagesChange(newImages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <ButtonStyle text='Carregar Arquivo' icon={<Cloudy />} />
        <input {...getInputProps()} style={{ display: 'none' }} />
      </div>
    
    </div>
  );
}
