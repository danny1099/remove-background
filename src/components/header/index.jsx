import { Logo } from '@/components';
import { Button } from '@/components/button';
import { useNavigate } from 'react-router-dom';
import css from './header.module.scss';

export default function Header() {
  const navigate = useNavigate();

  const handleTryFreeButton = () => {
    navigate(`/upload`, { replace: false });
  };

  return (
    <header className={css.header}>
      <Logo />

      <nav>
        <Button onClick={handleTryFreeButton}>Try It Free</Button>
      </nav>
    </header>
  );
}
