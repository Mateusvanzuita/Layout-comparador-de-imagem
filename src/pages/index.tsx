import React, { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Title } from '../components/Title/Title';
import ImagemUpload from '../components/utils/upload';
//import { LuView } from "react-icons/lu"
import { ConteudoStyle, Conteudo, BodyUpload, ButtonUpload } from '../styles/home';
import { Button } from '../components/Button/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function Home() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImagesChange = (newImages) => {
    if (newImages.length > 2) {
      toast.error('Você só pode adicionar até 2 imagens.')
    } else {
      setSelectedImages(newImages);
    }
  };


  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    handleImagesChange(updatedImages);
  };

  const openImagePreview = (image) => {
    setPreviewImage(image);
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
  };

  return (
    <Layout>
      <Title
        text="Comparar Imagens Online"
        subtitle="A maneira mais fácil de comparar a diferença entre duas imagens – pixel por pixel."
      />
      <ConteudoStyle>
        <Conteudo>
          <ImagemUpload
            onImagesChange={handleImagesChange}
            selectedImages={selectedImages}
          />
        </Conteudo>
      </ConteudoStyle>
<Button text='INICIAR' style={{ width: '110px', marginBottom: '20px' }}/>
      <div>
        {selectedImages.map((file, index) => (
          <BodyUpload
            key={index}
          >
            <p>{file.name}</p>
            <div>
           {/* <button
                style={{
                  fontWeight: 800,
                  border: 'none',
                  marginRight: '15px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                }}
                onClick={() => openImagePreview(file)}
              >
                <LuView />
              </button>*/}
              <span
                style={{
                  backgroundColor: '#DCDCDC',
                  borderRadius: '3px',
                  marginRight: '20px',
                }}
              >
                Tamanho: {file.size} bytes
              </span>
              <ButtonUpload
                onClick={() => removeImage(index)}
              >
                X
              </ButtonUpload>
            </div>
          </BodyUpload>
        ))}
      </div>
      {/*previewImage && (
        <div>
          <img
            src={URL.createObjectURL(previewImage)}
            alt={previewImage.name}
          />
          <button onClick={closeImagePreview}>Fechar Visualização</button>
        </div>
      )*/}
    </Layout>
  );
}
