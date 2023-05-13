import css from './upload.module.scss';
import { Dropzone } from '@/components';
import { withHead } from '@/hoc';
import { routerTittles } from '@/routes/router-tittles';

function UploadPage() {
  return (
    <main className={css.main}>
      <div className={css.title}>
        <h2>Hey there!</h2>
        <h3>Upload an image to remove the background.</h3>
      </div>

      {/* Componente para realizar la importación de imagenes */}
      <Dropzone />
    </main>
  );
}

export default withHead(UploadPage, routerTittles.upload);
