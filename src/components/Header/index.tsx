//import o css
import './header.css'

// Crio o component/função Header
// export - para ser usado em outros componentes
export function Header() {
  return (
    <header className='header__wrapper'>
      <h1 className='header__title'>Header</h1>
    </header>
  );
}