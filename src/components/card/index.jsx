import css from './card.module.scss';

export default function CardImage({ urlImage }) {
  return (
    <div className={css.preview}>
      <img
        src={urlImage}
        alt='Imagen seleccionada por el usuario'
        loading='lazy'
      />
    </div>
  );
}
