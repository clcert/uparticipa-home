import Image from 'next/image'
import UParticipaLogo from '../../public/logo.png'
import ElectionsResume from './electionsResume';
import Faq from './faq';

export default function Home() {
  return (
    <div>
      
      <section className="section is-medium">
        <div className="container">
          <div className='has-text-centered my-4'>
              <Image alt="Logo UParticipa" src={UParticipaLogo} />
          </div>
          <h1 className="title has-text-centered">SEGURIDAD • TRANSPARENCIA • VERIFICACIÓN</h1>
        </div>
      </section>

      <ElectionsResume />
      <Faq />

    </div>
  );
}
