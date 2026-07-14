import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';
import logo from '../assets/ENextLogo.png';

function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__social">
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="YouTube">
            <YoutubeIcon />
          </a>
        </div>
        <img src={logo} alt="EmpowerNext" className="site-footer__logo" />
        <span className="site-footer__tagline">YOU ARE NEXT.</span>
      </div>
      <p className="site-footer__copyright">
        &copy; 2025 EmpowerNext Youth Ministry. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;