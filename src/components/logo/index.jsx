import css from './logo.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`, { replace: false });
  };

  return (
    <div className={css.logo} onClick={handleClickLogo}>
      <img
        src='/images/logo-remove.png'
        alt='Logo de la aplicación'
        loading='lazy'
        lang='es'
        height={32}
        width={32}
      />
      <h1 className={css.title}>
        RemoveMy.<span>bg</span>
      </h1>
    </div>
  );
}
