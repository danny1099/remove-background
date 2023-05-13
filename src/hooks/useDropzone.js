import { useEffect, useState } from 'react';
import { dropzoneConfig, dropzoneStatus } from '@/config';
import { useStatusDrop } from '@/hooks';
import Dropzone from 'dropzone';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function useDropzone() {
  const [_mounted, setMounted] = useState(false);
  const { status, handleStatus, handleUrlOriginal } = useStatusDrop();

  useEffect(() => {
    setMounted(true);

    /* Crea la instancia de Dropzone */
    const myDropzone = new Dropzone('#dropzone', dropzoneConfig);

    /* Eventos de Dropzone  */
    myDropzone
      .on('sending', (file, xhr, formData) => {
        handleStatus(dropzoneStatus.UPLOADING);

        formData.append('upload_preset', 'ml_default');
        formData.append('timestamp', Date.now() / 1000);
        formData.append('api_key', API_KEY);
      })
      .on('success', (file, response) => {
        handleUrlOriginal(response.secure_url);
      })
      .on('error', (file, response) => {
        handleStatus(dropzoneStatus.ERROR);
        console.log(response);
      });

    return () => {
      Dropzone.autoDiscover = false;
      myDropzone.destroy();
    };
  }, []);

  return { status };
}
