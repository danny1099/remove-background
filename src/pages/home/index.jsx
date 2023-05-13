import css from './home.module.scss';
import { Dropzone } from '@/components';
import { withHead } from '@/hoc';
import { routerTittles } from '@/routes/router-tittles';

function Home() {
  return (
    <main className={css.main}>
      <section className={css.section}>
        <div className={css.section__content}>
          <h2>Remove My Background platform</h2>
          <p>
            ¿Do you want to remove the background of your images in seconds and
            effortlessly? <br /> With our tool, you can removed with just one
            click, whether it's from your device and it's 100%{' '}
            <span className={css.free}>FREE</span>.
          </p>
        </div>

        <div className={css.section__image}>
          <Dropzone />
        </div>
      </section>
    </main>
  );
}

export default withHead(Home, routerTittles.home);
