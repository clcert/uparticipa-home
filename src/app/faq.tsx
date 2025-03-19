import Image from 'next/image'
import angleDownIcon from '../../public/svgs/solid/angle-down.svg'
import Script from 'next/script'

export default function Faq() {
  return (
    <div className="container my-6" id="faq">
      <h1 className="title has-text-centered my-6">Preguntas Frecuentes</h1>
      <div className="columns is-multiline">
        <SingleFaq
          question="1. ¿Cómo se autentican los usuarios?"
          answer="Todos los votantes de Participa UChile deben contar 
          con una cuenta UChile (cuenta Pasaporte o mi.uchile) puesto 
          que es la única manera de autenticarse en el sistema."
        />
        <SingleFaq
          question="2. ¿En qué elecciones se utiliza el sistema Participa UChile?"
          answer="Participa UChile está orientado a elecciones de bajo perfil en un contexto universitario, 
          como por ejemplo, elecciones de directores de unidades académicas, consejeros, representantes de 
          funcionarios y elecciones estudiantiles locales.
          Cuando la elección es de alto perfil, como por ejemplo, elecciones de cargos públicos de nivel 
          nacional (presidente y representantes, etc.), la votación electrónica remota es aún un desafío 
          con muchas interrogantes y riesgos significativos. La recomendación de la comunidad experta 
          internacional para dicho contexto es no utilizar votación remota pues no se conoce un sistema 
          hoy en día que garantice seguridad a un nivel adecuado. Participa UChile no es la excepción."
        />
        <SingleFaq
          question="3. ¿Qué seguridad provee Participa UChile?"
          answer="Participa UChile es una adaptación del sistema Helios Voting, propuesto por Ben Adida (2008). 
          Helios ha sido utilizado por entidades como la International Association for Cryptographic Research, 
          y la U. de Louvain-Le Neuve (Bélgica).
          Participa UChile, tal como Helios, utiliza algoritmos matemáticos para mejorar la seguridad del sistema. 
          El sistema permite, por ejemplo, garantizar el secreto del voto encriptando los votos con una clave secreta 
          dividida entre varios custodios. De hecho, el sistema nunca revela (desencripta) algún voto individual sino 
          sólo el resultado final, para lo cual se requiere la cooperación activa de los custodios. Adicionalmente, 
          cualquier persona, sea un participante en la elección o un mero observador pasivo, puede auditar la elección, 
          esto es, verificar matemáticamente que el resultado es consistente con los votos encriptados emitidos."
        />
        <SingleFaq
          question="4. ¿En qué se diferencia Participa UChile de un sistema de votación cerrado?"
          answer="Los algoritmos criptográficos del sistema Participa UChile permiten evidenciar 
          intentos externos o internos de manipulación de votos o del total. Otros sistemas cerrados 
          son opacos y sólo entregan el resultado sin mayor explicación. En ellos, tanto el secreto 
          de un voto individual como la integridad del resultado final depende exclusivamente del 
          administrador del sistema informático. Los votantes y la comunidad deben depositar su 
          confianza en el accionar correcto del administrador, sin posibilidad de confirmar si la 
          confianza es merecida o no. Si bien Participa UChile no elimina completamente dicha confianza, 
          la minimiza significativamente, dándole herramientas al votante para confirmar si es merecida o no."
        />
        <SingleFaq
          question="5. ¿Cómo puedo verificar que mi voto ha sido recibido por Participa UChile?"
          answer="Cada votante, al concluir la selección de sus preferencias y enviar la papeleta 
          con su voto encriptado, recibe un código serial identificador de la papeleta. Este 
          código no revela su voto ni permite revelarlo a un tercero, pero sí permite identificar 
          la papeleta encriptada dentro de la lista de papeletas encriptadas recibidas por el servidor."
        />
        <SingleFaq
          question="6. ¡El sistema permite votar más de una vez! ¿Es un error o falla?"
          answer="El sistema permite que, cualquier votante, luego de haber votado pueda ingresar 
          nuevamente y reiniciar el proceso de votación, emitiendo un nuevo voto que reemplaza al 
          voto anterior. El sistema nunca almacena más de un voto por votante. Si bien para un 
          votante puede parecer que emite un segundo voto, eso no es efectivo, pues efectivamente 
          está reemplazando su voto. En particular, no puede darse el caso que un mismo votante tenga 
          dos votos o más, siempre tendrá a lo más un voto. Esta funcionalidad es intencional y, si 
          bien no existe en un sistema de votación de “lápiz y papel”, es posible de implementar de 
          forma segura en un sistema electrónico. Es una medida estándar de mitigación parcial contra 
          el problema de la coerción. Si bien no es perfecta, es simple de implementar y en entornos 
          de baja coerción se considera razonablemente efectiva. Para la tranquilidad de todas y todos, 
          podemos aclarar que no es una característica errónea o en necesidad de arreglo, pues no viola 
          la unicidad del voto."
        />
      </div>
      <Script
        type="text/javascript"
        src="js/toggleCard.js"
      />
    </div>
  )
}

function SingleFaq({ question, answer }) {
  return (
    <div className="column is-full">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{question}</p>
          <button className="card-header-icon card-toggle" aria-label="more options">
            <span className="icon">
              <Image src={angleDownIcon} alt="more-info" />
            </span>
          </button>
        </header>
        <div className="card-content is-hidden">
          <div className="content">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}