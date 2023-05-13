import { useEffect, useState } from 'react';
import { ButtonUpload } from '@/components/button';
import { CardPreview } from '@/components';
import { useStatusDrop } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { dropzoneConfig, dropzoneStatus } from '@/config';
import Dropzone from 'dropzone';
import css from './dropzone.module.scss';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function StepUpload() {
  const navigate = useNavigate();
  const [_mounted, setMounted] = useState(false);
  const { status, handleStatus, handleUrlOriginal, handleUrlModified } =
    useStatusDrop();

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
        handleUrlOriginal(response);
        navigate(`/transform`, { replace: false });
      })
      .on('error', (file, response) => {
        handleStatus(dropzoneStatus.ERROR);
      });

    return () => {
      Dropzone.autoDiscover = false;
      myDropzone.destroy();
    };
  }, []);

  return (
    <form id='dropzone' className={css.form}>
      <div className={css.content}>
        {status.urlOriginal && <CardPreview urlImage={status.urlOriginal} />}

        <div className={css.action}>
          <ButtonUpload loading={status.status === 'uploading'} />
          <p>Or</p>
          <p className={css.text}>Drag and drop your image</p>
        </div>
      </div>
    </form>
  );
}
