import "./footer.css"

interface FooterProps{
  brand: string;
  copyright?: string;
} 

export function Footer({brand, copyright}: FooterProps) {
  return (
    <>
      <footer className="footer__wrapper">
        <div className="footer__content">
          <h4 className="footer__brand">{brand}</h4>
          <p className="footer__copyright">{copyright}</p>
        </div>
      </footer>
    </>
  )
}