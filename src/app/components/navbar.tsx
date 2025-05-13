import Image from 'next/image'
import Link from 'next/link'
import UParticipaLogo from '../../../public/logotipo.png'
import xIcon from '../../../public/svgs/brands/x-twitter.svg'
import instagramIcon from '../../../public/svgs/brands/instagram.svg'
import githubIcon from '../../../public/svgs/brands/github.svg'
import youtubeIcon from '../../../public/svgs/brands/youtube.svg'
import envelopeIcon from '../../../public/svgs/solid/envelope.svg'

export default function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-spaced is-success" role="navigation" aria-label="main navigation">
      <div className='container'>
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            <figure className='image'>
              <Image alt="Logo UParticipa" src={UParticipaLogo} />
            </figure>
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" href="/#faq">
              FAQ
            </Link>
            
            <Link className="navbar-item" href="https://docs.uparticipa.cl/docs/prologue/intro/" target='_blank'>
              Documentación
            </Link>

            <Link className="navbar-item" href="/news">
              Noticias
            </Link>

            <Link className="navbar-item" href="/team">
              Equipo
            </Link>

          </div>
          <div className='navbar-end'>
            <a className='navbar-item'>
              <figure className='image'>
                <Image src={xIcon} alt='X Icon' style={{ filter: 'invert(100%)' }} />
              </figure>
            </a>
            <a className='navbar-item'>
              <figure className='image'>
                <Image src={instagramIcon} alt='Instagram Icon' style={{ filter: 'invert(100%)' }} />
              </figure>
            </a>
            <a className='navbar-item'>
              <figure className='image'>
                <Image src={githubIcon} alt='Github Icon' style={{ filter: 'invert(100%)' }} />
              </figure>
            </a>
            <a className='navbar-item'>
              <figure className='image'>
                <Image src={youtubeIcon} alt='Youtube Icon' style={{ filter: 'invert(100%)' }} />
              </figure>
            </a>
            <a className='navbar-item'>
              <figure className='image'>
                <Image src={envelopeIcon} alt='Envelope Icon' style={{ filter: 'invert(100%)' }} />
              </figure>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}