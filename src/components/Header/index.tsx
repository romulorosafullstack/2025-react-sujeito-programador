//import o css
import './header.css'

interface HeaderProps {
  title: string;
}

// Crio o component/função Header
// export - para ser usado em outros componentes
export function Header({title}: HeaderProps) {
  return (
    <header className='header__wrapper'>
      <h1 className='header__title'>{title}</h1>
    </header>
  );
}