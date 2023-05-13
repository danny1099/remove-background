import { useRef, useState, useEffect } from 'react';
import { CloudUpload } from '@/components/icons';
import { dropzoneStatus } from '@/config';
import { Button } from '@chakra-ui/react';
import { useStatusDrop } from '@/hooks';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default function SearchImages({ loading = false }) {
  const { handleStatus, handleUrlOriginal } = useStatusDrop();
  const [image, setImage] = useState('');
  const hiddenFileInput = useRef(null);

  useEffect(() => {
    if (image) {
      handleStatus(dropzoneStatus.UPLOADING);

      /* Agrega los datos de configuracion de Cloudinary */
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'ml_default');
      formData.append('timestamp', Date.now() / 1000);
      formData.append('api_key', API_KEY);

      /* Llama a la funcion que sube la imagen  */
      uploadImage(formData);
    }
  }, [image]);

  /* Funcion que sube la imagen a Cloudinary */
  const uploadImage = (formData) => {
    fetch(API_URL, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const { secure_url } = data;
        handleUrlOriginal(secure_url);
      })
      .catch((error) => handleStatus(dropzoneStatus.ERROR));
  };

  return (
    <>
      <Button
        variant='solid'
        size='lg'
        colorScheme='whatsapp'
        leftIcon={<CloudUpload size={25} />}
        onClick={() => hiddenFileInput.current.click()}
        isLoading={loading}>
        Upload your Image
      </Button>
      <input
        type='file'
        ref={hiddenFileInput}
        onChange={(e) => setImage(e.target.files[0])}
        name='file'
        style={{ display: 'none' }}
      />
    </>
  );
}
