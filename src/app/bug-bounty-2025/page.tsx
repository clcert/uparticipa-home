export default function BugBounty2025() {

    const formUrl = "https://forms.gle/RfEhtYZrW46BGBFN7";
    const termsUrl = "#terms-title";

    return (
        <div>
            <section className="hero is-light" aria-labelledby="bug-bounty-title">
                <div className="hero-body pb-0 mt-4">
                    <div className="container">
                        <figure>
                            <img src="/images/bug-bounty-2025/banner.png" alt="Banner Bug Bounty" style={{ maxHeight: '270px' }} />
                        </figure>
                    </div>
                </div>
            </section>

            <section className="section pb-0">
                <div className="container">
                    <div className="columns">
                        {/* Desktop / wide screens: sticky sidebar menu */}
                        <aside className="column is-hidden-mobile">
                            <nav className="menu box" aria-label="Índice del programa" style={{ position: 'sticky', top: '1.5rem' }}>
                                <p className="menu-label">Secciones</p>
                                <ul className="menu-list">
                                    <li><a href="#summary-title">Resumen</a></li>
                                    <li><a href="#desc-title">Descripción General</a></li>
                                    <li><a href="#audience-title">Sobre las/los Hackers</a></li>
                                    <li><a href="#deploy-title">Despliegue del Sistema</a></li>
                                    <li><a href="#dates-title">Fechas del Programa</a></li>
                                    <li><a href="#cats-title">Categorías de Vulnerabilidades</a></li>
                                    <li><a href="#reports-title">Envío de Reportes</a></li>
                                    <li><a href="#ceremony-title">Ceremonia de Premiación</a></li>
                                    {/* <li><a href="#source-code-title">Código Fuente</a></li> */}
                                    <li><a href="#terms-title">Términos y Condiciones</a></li>
                                    <li><a href="#sponsors-title">Patrocinadores</a></li>
                                    <li><a href="#sponsors-title">Contacto</a></li>
                                </ul>
                            </nav>
                        </aside>

                        <div className="is-hidden-tablet column">
                            {/* Mobile: compact horizontal menu */}
                            <div className="is-hidden-tablet mb-4">
                                <div className="buttons has-addons is-flex-wrap-wrap">
                                    <a className="button is-small" href="#summary-title">Resumen</a>
                                    <a className="button is-small" href="#desc-title">Descripción</a>
                                    <a className="button is-small" href="#audience-title">Hackers</a>
                                    <a className="button is-small" href="#deploy-title">Despliegue</a>
                                    <a className="button is-small" href="#dates-title">Fechas</a>
                                    <a className="button is-small" href="#cats-title">Categorías</a>
                                    <a className="button is-small" href="#reports-title">Reportes</a>
                                    <a className="button is-small" href="#ceremony-title">Ceremonia</a>
                                    {/* <a className="button is-small" href="#source-code-title">Código</a> */}
                                    <a className="button is-small" href="#terms-title">Términos</a>
                                    <a className="button is-small" href="#sponsors-title">Patrocinadores</a>
                                    <a className="button is-small" href="#sponsors-title">Contacto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container content">
                    <div className="box" role="region" aria-labelledby="summary-title">
                        <h3 id="summary-title" className="title is-4">
                            Resumen
                        </h3>
                        <h4 className="is-5">🚪 Acceso a Elecciones</h4>
                        <h5 className="is-6">Enlaces de Acceso</h5>
                        <ol>
                            <li><b>Elección Simple:</b> <a href="https://bugbounty2025.uparticipa.cl/psifos/api/app/simple/vote" target="_blank"><code>https://bugbounty2025.uparticipa.cl/psifos/api/app/simple/vote</code></a></li>
                            <li><b>Elección Masiva:</b> <a href="https://bugbounty2025.uparticipa.cl/psifos/api/app/massive/vote" target="_blank"><code>https://bugbounty2025.uparticipa.cl/psifos/api/app/massive/vote</code></a></li>
                            <li><b>Elección con Opciones Excluyentes:</b> <a href="https://bugbounty2025.uparticipa.cl/psifos/api/app/exclusive/vote" target="_blank"><code>https://bugbounty2025.uparticipa.cl/psifos/api/app/exclusive/vote</code></a></li>
                        </ol>
                        <h5 className="is-6">🔐 Credenciales de Acceso</h5>
                        <ul>
                            <li><b>Votante</b><br /> usuario: <code>testXX</code> (donde XX es un número entre 01 y 50)<br /> contraseña: <code>clcert1234</code></li>
                        </ul>
                        <h4 className="is-5">📝 Envío de Reportes</h4>
                        <a className="button is-link is-light" href={formUrl} target="_blank" rel="noopener noreferrer">Ir al Formulario de Envío</a>


                    </div>

                    <div className="box" role="region" aria-labelledby="desc-title">
                        <h3 id="desc-title" className="title is-4">
                            📄 Descripción General
                        </h3>
                        <p>
                            El Programa <span className="has-text-weight-bold">Bug Bounty UParticipa 2025</span> del proyecto <a href="https://uparticipa.cl" target="_blank">UParticipa</a> (de ahora
                            en adelante, “el programa”) es un concurso para
                            <span className="has-text-weight-bold"> encontrar y reportar
                                vulnerabilidades que puedan existir en la plataforma 
                                UParticipa</span>.
                            El concurso está abierto a
                            personas pertenecientes a la comunidad de la Universidad de
                            Chile (estudiantes, académicos/as, funcionarios/as y alumni),
                            interesados/as en el área de Ciberseguridad (de ahora en adelante,
                            “hackers”).
                        </p>
                        <p>
                            Las vulnerabilidades reportadas serán asociadas a una cierta
                            categoría, asociada al área del sistema de votación electrónico
                            que potencialmente afectaría. En el programa se premiarán las
                            mejores vulnerabilidades encontradas por cada categoría, las
                            cuales serán puntuadas y decididas por un jurado externo al equipo
                            de UParticipa.
                        </p>
                    </div>

                    <div className="box" role="region" aria-labelledby="audience-title">
                        <h3 id="audience-title" className="title is-4">
                            👩🏻‍💻 Sobre las/los Hackers
                        </h3>
                        <p>
                            El público objetivo del programa son miembros de la comunidad de
                            la Universidad de Chile, en particular estudiantes,
                            académicos/as, funcionarios/as y alumni de la Casa de Bello. Por
                            la naturaleza del programa, se espera que las personas participantes sean
                            personas con conocimientos en áreas como
                            Ciberseguridad, Hacking Ético y Criptografía Aplicada.
                        </p>
                        <p>
                            Para participar del programa, y poder enviar un reporte, las personas
                            deben tener una dirección de correo electrónico institucional de la Universidad de Chile.
                        </p>
                        <p>
                            Al momento de enviar un reporte, no es necesario indicar los datos personales
                            del (de la) autor(a) o hacker. Al finalizar el concurso, sin embargo,
                            se van a solicitar a las/los ganadores/as algunos datos como nombre, estamento y unidad académica
                            para poder entregar el premio durante la ceremonia
                            de premiación.
                        </p>
                    </div>

                    <div className="box" role="region" aria-labelledby="deploy-title">
                        <h3 id="deploy-title" className="title is-4">
                            🌐 Despliegue del Sistema
                        </h3>
                        <p>
                            El sistema de UParticipa tendrá un despliegue específico para este programa,
                            el cual correrá la versión más actualizada del software desarrollado. Este
                            despliegue está realizado utilizando el servicio cloud de <a href="https://www.hetzner.com/" target="_blank">Hetzner Online.</a>
                        </p>
                        <div>
                            El despliegue realizado posee 3 elecciones, las cuales están configuradas para que
                            se asemejen a elecciones con configuraciones muy cercanas a la realidad. Las elecciones
                            tienen las siguientes características:
                            <ol className="mt-2">
                                <li><b>Elección Simple:</b> es una elección con dos preguntas: una de opción única (el votante puede
                                    escoger solamente una opción entre las candidaturas) y otra de opción múltiple (el votante puede
                                    escoger hasta tres opciones entre las candidaturas).
                                </li>
                                <li><b>Elección Masiva:</b> es una elección con una única pregunta, la cual posee una lista masiva de
                                    candidaturas (se utiliza este tipo de elección cuando se tiene más de 20 candidaturas).
                                    Además, el votante puede escoger hasta 6 opciones entre las candidaturas.
                                </li>
                                <li><b>Elección con Opciones Excluyentes:</b> es una elección con una única pregunta, la cual
                                    posee opciones excluyentes, es decir, donde solamente se puede marcar una preferencia por grupo
                                    al que pertenece cada opción.</li>
                            </ol>
                            Las elecciones desplegadas tienen las siguientes características comunes:
                            <ul>
                                <li>El padrón se compone de 50 votantes. Los nombres de usuario de los votantes son <code>testXX</code> (XX de 01 a 50).
                                    En la plataforma de autenticación, existen cuentas de usuario <code>testXX</code> (XX de 51 a 99) que <b>NO</b> están
                                    en el padrón</li>
                                <li>Cada elección se renovará cada 3 o 4 días, lo cual implica que la elección
                                    se eliminará y se configurará una, con las mismas características, pero totalmente
                                    nueva, lo que significa que los votos y estado de la elección se eliminan completamente.
                                </li>
                                <li>Cada elección tendrá un único Custodio de Clave, cuyas credenciales no serán
                                    entregadas de manera pública.
                                </li>
                                <li>Las elecciones no serán escrutadas de manera pública. Si algún/alguna hacker necesita
                                    conocer el escrutinio de alguna elección, deberá comunicarlo directamente al equipo de UParticipa.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <p>
                            El acceso a las elecciones desplegadas están disponible en los siguientes enlaces:
                            </p>
                            <ol>
                                <li><b><a href="https://bugbounty2025.uparticipa.cl/psifos/api/app/simple/vote" target="_blank">Elección Simple</a></b></li>
                                <li><b><a href="https://bugbounty2025.uparticipa.cl/psifos/api/app/massive/vote" target="_blank">Elección Masiva</a></b></li>
                                <li><b><a href="https://bugbounty2025.uparticipa.cl/psifos/api/app/exclusive/vote" target="_blank">Elección con Opciones Excluyentes</a></b></li>
                            </ol>
                        </div>
                    </div>

                    <div className="box" role="region" aria-labelledby="dates-title">
                        <h3 id="dates-title" className="title is-4">
                            🗓 Fechas del Programa
                        </h3>
                        <div className="">
                            <div className="mb-2">
                                <div className="notification is-info" role="note">
                                    <p><strong>INICIO:</strong> miércoles 29 de octubre a las 09:00 h</p>
                                    <p><strong>FIN:</strong> viernes 30 de noviembre a las 17:00 h</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="notification is-info" role="note">
                                    <strong>CHARLA DE LANZAMIENTO (online):</strong> jueves 30 de
                                    octubre a las 16:30 h
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="notification is-info" role="note">
                                    <strong>CEREMONIA DE PREMIACIÓN (presencial):</strong> miércoles 10 de
                                    diciembre a las 12:00 h
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box" role="region" aria-labelledby="cats-title">
                        <h3 id="cats-title" className="title is-4">
                            👾 Categorías de Vulnerabilidades
                        </h3>
                        <p>
                            Las vulnerabilidades reportadas se dividirán en alguna de las
                            siguientes categorías, de las cuales se premiará la mejor vulnerabilidad reportada
                            en cada categoría (se entregarán 4 premios en total):
                        </p>
                        <ul>
                            <li><strong>Confidencialidad del Voto:</strong> vulnerabilidades que
                                permiten conocer las preferencias que marcó algún otro votante, o bien,
                                que el propio votante pueda demostrar cómo votó a otra persona.</li>
                            <li><strong>Escalamiento de Privilegios (Votantes y/o Administrador): </strong>
                                vulnerabilidades que permiten a un votante o usuario externo ingresar al
                                panel de administrador, o bien, le permita votar a algún usuario externo que no esté
                                en el padrón de la elección.</li>
                            <li><strong>Integridad de los Resultados:</strong> vulnerabilidades que afecten
                                que el resultado reportado por el sistema, no corresponde a la suma de todos los votos válidos
                                emitidos durante la jornada electoral.</li>
                            <li><strong>Ingeniería Criptográfica:</strong> cualquier vulnerabilidad que explote
                                alguna mala implementación o diseño en las primitivas criptográficas utilizadas
                                por la plataforma (funciones de hash, esquemas de encriptación, generación de ZKP, entre otras).</li>
                        </ul>
                    </div>

                    <div className="box" role="region" aria-labelledby="reports-title">
                        <h3 id="reports-title" className="title is-4">
                            📝 Envío de Reportes
                        </h3>
                        <p>
                            Los reportes se enviarán a través de un formulario dispuesto para
                            ello. Un mismo hacker puede enviar más de un reporte. Un reporte refiere
                            al detalle de una sola vulnerabilidad, y la manera en que se puede explotar
                            y replicar. No se puede enviar, en un mismo reporte, más de una vulnerabilidad
                            encontrada. Si la vulnerabilidad tiene diferentes maneras de explotarse y/o replicarse,
                            se pueden enviar varios reportes (a medida que se vayan encontrando esas diveras maneras),
                            pero finalmente se evaluará como un solo reporte extendido.
                        </p>

                        {formUrl ? (
                            <p>
                                <a
                                    className="button is-link is-light"
                                    href={formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ir al formulario de envío
                                </a>
                            </p>
                        ) : (
                            <div className="notification is-warning">
                                <strong>Nota:</strong> En este archivo no se incluye el enlace
                                al formulario ni a los Términos y Condiciones.
                            </div>
                        )}

                        {termsUrl && (
                            <p style={{ marginTop: 8 }}>
                                <a href={termsUrl} rel="noopener noreferrer">
                                    Ver Términos y Condiciones
                                </a>
                            </p>
                        )}
                    </div>

                    <div
                        className="box"
                        role="region"
                        aria-labelledby="ceremony-title"
                    >
                        <h3 id="ceremony-title" className="title is-4">
                            🏅 Ceremonia de Premiación
                        </h3>
                        <p>
                            Se realizará una Ceremonia de Premiación el día miércoles 10 de
                            diciembre de 2025 en el Departamento de Ciencias de la Computación
                            de la Universidad de Chile (Beauchef #851). En dicha Ceremonia se
                            entregarán los premios de los reportes ganadores en cada una de las categorías,
                            además de que se realizará un <b>Conversatorio de Vulnerabilidades y Desafíos UParticipa</b>, 
                            donde se comentará sobre las vulnerabilidades encontradas, y las
                            actualizaciones que se planificarán para poder solucionarlas. Se
                            contactará de antemano a las/los hackers que hayan ganado, para que
                            puedan asistir a la Ceremonia.
                        </p>
                        <h5 className="is-6">Premios</h5>
                        <p>
                            A cada reporte ganador, en cada una de las categorías, se le entregará un premio, el cual se definirá en los próximos días.
                        </p>
                    </div>

                    {/* <div
                        className="box"
                        role="region"
                        aria-labelledby="source-code-title"
                    >
                        <h3 id="source-code-title" className="title is-4">
                            📖 Código Fuente
                        </h3>
                        <p>
                            El software de UParticipa es open source, y el software se denomina <code>Psifos Voting</code>. 
                            El código fuente de los distintos módulos que conforman el software está disponible en los siguientes repositorios de GitHub:
                        </p>
                        <ul>
                            <li><a href="https://github.com/clcert/psifos-frontend" target="_blank">Psifos Voting Frontend</a></li>
                            <li><a href="https://github.com/clcert/psifos-backend-op" target="_blank">Psifos Voting Backend Operativo</a></li>
                            <li><a href="https://github.com/clcert/psifos-backend-info" target="_blank">Psifos Voting Backend Informativo</a></li>
                        </ul>
                        
                    </div> */}

                    <div className="box" role="region" aria-labelledby="terms-title">
                        <h3 id="terms-title" className="title is-4">
                            🤝 Términos y Condiciones
                        </h3>
                        <h4>1. Eligibilidad del Reporte</h4>
                        <ul>
                            <li>
                                Si una vulnerabilidad es reportada por más de un/una hacker,
                                solo se le contabilizará al primer envío recepcionado.
                            </li>
                            <li>
                                La vulnerabilidad reportada debe demostrar un impacto de seguridad
                                en la plataforma UParticipa, utilizando los recursos disponibles en
                                el presente programa (credenciales, nivel de autorización y tipo
                                de elecciones).
                            </li>
                            <li>
                                Múltiples explotaciones y problemas causados por una única vulnerabilidad
                                subyacente, se considerará como un solo reporte (el cual puede extenderse,
                                enviando varias respuestas al formulario).
                            </li>
                            <li>
                                Se espera y solicita que las/los participantes (hackers) no divulguen públicamente una vulnerabilidad encontrada
                                antes de que el reporte sea recibido y se te otorgue el permiso para divulgarla.
                            </li>
                            <li>
                                Todo reporte de vulnerabilidades debe proporcionar explicaciones detalladas con pasos reproducibles. Si el reporte
                                no es lo suficientemente detallado para reproducir el problema por parte de los organizadores, no será elegible
                                para ser premiado.
                            </li>
                        </ul>
                        <h4>2. Activos</h4>
                        <ul>
                            <li>
                                <code>https://bugbounty2025.uparticipa.cl/*</code>
                            </li>
                        </ul>
                        <h4>3. Fuera de alcance (out of scope)</h4>
                        <h5>3.1. Dominios</h5>
                        <ul>
                            <li>Cualquier dominio que no esté listado en la sección &quot;Activos&quot; está fuera del
                                alcance del programa.
                            </li>
                            <li>
                                En particular, estará fuera del alcance el servicio Participa UChile:
                                <code>https://participa.uchile.cl/*</code> y <code>https://psifos-participa.uchile.cl/*</code>
                            </li>
                            <li>
                                El portal de autenticación de CLCERT: <code>https://auth.labs.clcert.cl/*</code>
                            </li>
                        </ul>
                        <h5>3.2. Aplicación Web</h5>
                        Los siguientes ataques se consideran fuera del alcance para el concurso.
                        <ul>
                            <li>Toma de control de cuentas pre-autenticación / Ocupación de OAuth (OAuth squatting).</li>
                            <li>Self-XSS que no puede ser utilizado para explotar a otros usuarios.</li>
                            <li>Mensajes/archivos/listados de directorios detallados (verbose) sin divulgar información sensible.</li>
                            <li>Configuración incorrecta de CORS en endpoints no sensibles.</li>
                            <li>Falta de encabezados de seguridad.</li>
                            <li>Cross-site Request Forgery (CSRF) sin impacto o con bajo impacto.</li>
                            <li>Presencia del atributo de autocompletar en formularios web.</li>
                            <li>Reverse tabnabbing.</li>
                            <li>Omitir límites de tasa (rate-limits) o la no existencia de los mismos.</li>
                            <li>Violaciones de buenas prácticas (complejidad de contraseña, expiración, reutilización, etc.).</li>
                            <li>Clickjacking sin impacto demostrado o con interacción de usuario poco realista.</li>
                            <li>Inyección de CSV.</li>
                            <li>Tokens filtrados a terceros</li>
                            <li>Inyección de contenido sin poder modificar el HTML.</li>
                            <li>Enumeración de nombres de usuario/correo electrónico.</li>
                            <li>Contrabando de solicitudes HTTP (HTTP Request Smuggling) sin impacto demostrado.</li>
                            <li>Ataques de homógrafos.</li>
                            <li>XMLRPC habilitado.</li>
                            <li>Captura de banners/Divulgación de versiones.</li>
                            <li>No eliminar los metadatos de los archivos.</li>
                            <li>Same-site scripting.</li>
                            <li>Toma de control de subdominio (Subdomain takeover) sin llegar a tomar control del subdominio.</li>
                            <li>SSRF ciego sin impacto de negocio demostrado (los pingbacks no son suficientes).</li>
                            <li>Inyección de encabezado Host sin impacto de negocio demostrado.</li>
                        </ul>
                        <h5>3.3. General</h5>
                        Los siguientes ataques teóricos o vulnerabilidades se consideran fuera del alcance para el concurso.
                        <ul>
                            <li>Problemas de seguridad teóricos sin escenarios de explotación realistas o superficies de ataque, o problemas que requerirían interacciones complejas del usuario final para ser explotados.</li>
                            <li>Spam, ingeniería social e intrusión física.</li>
                            <li>Ataques DoS/DDoS o ataques de fuerza bruta.</li>
                            <li>Vulnerabilidades que solo funcionan en software que ya no recibe actualizaciones de seguridad.</li>
                            <li>Ataques que requieren acceso físico a la computadora/dispositivo de una víctima, ataques de intermediario (man-in-the-middle) o cuentas de usuario comprometidas.</li>
                            <li>Las vulnerabilidades de día cero descubiertas recientemente en activos dentro del alcance, dentro de los 14 días posteriores a la publicación de un parche o mitigación, pueden ser reportadas, pero generalmente no son elegibles para ser premiadas.</li>
                            <li>Reportes que indican que el software está desactualizado/vulnerable sin una prueba de concepto.</li>
                        </ul>
                        <h5>3.4. Vulnerabilidades Conocidas</h5>
                        El sistema tiene vulnerabilidades conocidas, las cuales de ser reportadas no serán consideradas. Ellas son
                        <ul>
                            <li><b>Ballot Stuffing:</b> esta vulnerabilidad hace relación a la posibilidad de que el
                                administrador del sistema pueda enviar votos a nombre de votantes válidos. Esta
                                vulnerabilidad comúnmente se soluciona exigiendo a que los votantes deban enviar
                                firmados sus votos. El contexto actual en que está desplegado el sistema de
                                UParticipa (comunidad de la Universidad de Chile), no permite aplicar esta solución
                                debido a la inexistencia de una infraestructura de clave pública (PKI). Además, el
                                modelo de seguridad permite depositar confianza en que el administrador se comportará
                                de manera honesta.
                            </li>
                            <li><b>Malware en dispositivo y Coerción:</b> una vulnerabilidad común en sistemas de votación
                                electrónica remota es la posibilidad de que se instale malware malicioso en los dispositivos
                                de los votantes, y así alterar o revelar las preferencias marcadas. Así mismo, la votación
                                remota habilita la opción de que un ataque de coerción sea exitoso, es decir, realizar algún
                                tipo de acción que obligue a un votante a votar por alguna preferencia específica. Esto tiene
                                que ver con compra/venta de votos, o presiones indebidas.</li>
                            <li className="pb-2"><b>Robo de Credenciales: </b>si se realiza un ataque de phishing, podrían robarse las credenciales
                                de un votante, o del administrador, y realizar acciones de manera indebida.</li>
                            <i>NOTA: el equipo de UParticipa maneja una lista interna de otras vulnerabilidades conocidas,
                                las cuales no se revelarán durante el programa, debido a que espera que las/los hackers puedan
                                encontrarlas y reportarlas. De todas maneras, independientemente si son encontradas o no,
                                el equipo de UParticipa se compromete a revelar
                                dicha lista al momento de finalizar el programa, y así transparentar la información
                                que maneja sobre el sistema.</i>
                            
                        </ul>
                    </div>

                    <div
                        className="box"
                        role="region"
                        aria-labelledby="sponsors-title"
                    >
                        <h3 id="sponsors-title" className="title is-4">
                            🤩 Patrocinadores
                        </h3>
                        <p>
                            UParticipa agradece el patrocinio y apoyo de las siguientes entidades para la realización del Programa Bug Bounty UParticipa 2025:
                        </p>
                        <div className="columns">
                            <div className="column">
                                <figure>
                                    <img src="/images/bug-bounty-2025/logo-nic-chile.png" alt="Logo NIC Chile" style={{ maxHeight: '270px' }} />
                                </figure>
                                <div className="has-text-centered">
                                <code><a href="https://nic.cl/" target="_blank">https://nic.cl/</a></code>
                                </div>
                            </div>
                            <div className="column">
                                <figure>
                                    <img src="/images/bug-bounty-2025/logo-dreamlab.png" alt="Logo NIC Chile" style={{ maxHeight: '270px' }} />
                                </figure>
                                <div className="has-text-centered">
                                    <code><a href="https://dreamlab.net/es/" target="_blank">https://dreamlab.net/es/</a></code>
                                </div>
                            </div>
                        </div>
                        <p>
                            Gracias a su apoyo, es posible incentivar a la comunidad universitaria a involucrarse en la
                            mejora continua de la plataforma UParticipa, y así fortalecer la seguridad del sistema de votación electrónica.
                        </p>
                    </div>

                    <div
                        className="box"
                        role="region"
                        aria-labelledby="contact-title"
                    >
                        <h3 id="contact-title" className="title is-4">
                            ☎️ Contacto
                        </h3>
                        <p>Para cualquier consulta u observación sobre el programa, enviar un correo a: <code>participa [at] uchile [dot] cl</code></p>
                    </div>

                    <div className="box has-text-centered" role="region" aria-labelledby="final-message-title">
                        <span className="is-size-4"><b>¡Mucho éxito y entretención para l@s Hackers!<br/>¿Estaremos preparad@s para sus ataques?</b></span>
                    </div>

                </div>
            </section>
        </div>
    );
}
