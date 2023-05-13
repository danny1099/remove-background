import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DownloadIcon, LoadingIcon } from '@/components/icons';
import { useStatusDrop } from '@/hooks';
import { Cloudinary } from '@cloudinary/url-gen';
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect';
import 'two-up-element';
import css from './transform.module.scss';

let intervalId = null;

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: CLOUD_NAME,
  },
  url: { secure: true },
});

export default function Transform() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { status, handleUrlModified } = useStatusDrop();

  useEffect(() => {
    if (!status.urlOriginal) navigate(`/`, { replace: true });

    /* Genera la url de la image sin el fondo */
    const imageWithoutBackground = cloudinary
      .image(status.publicId)
      .effect(backgroundRemoval());

    handleUrlModified(imageWithoutBackground.toURL());
  }, []);

  useEffect(() => {
    if (loading) {
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  return (
    <main className={css.main}>
      <div className={css.view}>
        <img
          src={status.urlOriginal}
          alt='Original image loaded by user'
          className={css.imgContent}
        />
      </div>

      {/* Opcion para descargar el recurso */}
      <a
        download
        href={status.urlModified}
        target='_blank'
        className={css.download}>
        {loading ? <LoadingIcon color='#fff' /> : <DownloadIcon size={20} />}
        {loading ? 'Processing...' : 'Download'}
      </a>
    </main>
  );
}
