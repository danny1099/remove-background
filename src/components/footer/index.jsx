import css from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <p>© {new Date().getFullYear()} - All rights reserved</p>

      <p className={css.developed}>
        <img
          src='/images/logo_dale_cube.png'
          alt='Logo Dale'
          height={22}
          width={22}
          loading='lazy'
        />
        <span className='dale'>DALE</span>
      </p>
    </footer>
  );
}
