import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

type Tesista = {
  name: string;
  title: string;
  url: string;
  year: int;
}

type FormerMember = {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alejandro Hevia', role: 'Coordinador Académico', imageUrl: '/images/ahevia.jpg' },
  { name: 'Camilo Gómez', role: 'Coordinador General', imageUrl: '/images/cgomez.jpg' },
  { name: 'Cristobal Jaramillo', role: 'Ingeniero de Desarrollo e Investigación', imageUrl: '/images/cjaramillo.jpg' },
  { name: 'Fernanda Pérez', role: 'Asistente Operativa', imageUrl: '/images/fperez.png' },
  { name: 'Vicente Daie', role: 'Ingeniero DevSecOps', imageUrl: '/images/vdaie.jpeg' },
];

const tesistas: Tesista[] = [
  { name: 'Tomás Alvarado Pizarro', title: 'Pentesting en Software de Votación Electronica, Participa Uchile', url: '', year: 2025 },
  { name: 'Fernanda Macías Herrera', title: 'Implementación de módulo de selección por ranking para el sistema de votación electrónica en la Plataforma Participa UChile', url: 'https://repositorio.uchile.cl/handle/2250/194753', year: 2023}
]

const formerMembers: FormerMember[] = [
  { name: 'Catalina Burgos', role: 'Diseñadora UI/UX'},
  { name: 'Ricardo Peralta', role: 'Ingeniero de Desarrollo e Investigación'},
  { name: 'Eduardo Riveros', role: 'Ingeniero de Seguridad'},
  { name: 'Fernanda Macías', role: 'Ingeniera de Desarrollo e Investigación'},
  { name: 'Clemente Paredes', role: 'Ingeniero de Desarrollo'},
  { name: 'Raúl De La Fuente', role: 'Ingeniero de Desarrollo e Investigación'},
  { name: 'Marta Aplablaza', role: 'Periodista'},
  { name: 'Elías Moreno', role: 'Ingeniero de Desarrollo'},
  { name: 'Catalina Maturana', role: 'Coordinadora de Planificación y Finanzas'}
]

export default function Team() {
  return (
    <section className="section">
      <div className="container mt-5">
        <h1 className="title has-text-centered">Equipo</h1>
        <div className="columns is-multiline">
          {teamMembers.map((member, index) => (
            <div key={index} className="column is-one-fifth">
              <div className="card member-card">
                <div className="card-image">
                  <figure className="image is-square">
                    <Image src={member.imageUrl} alt={member.name} width={200} height={250} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-size-4">{member.name}</p>
                      <p className="subtitle is-6 mb-0">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      <div className="container mt-6">
        <h1 className="title has-text-centered">Tesistas y Memoristas</h1>
        <div className="content">
          <ul>
            {tesistas.map((tesista, index) => (
              <li key={index}>                
                <b>{tesista.name}</b>: <a href={tesista.url} target="_blank" rel="noopener noreferrer">{tesista.title} ({tesista.year})</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-6">
        <h1 className="title has-text-centered">Miembros Históricos</h1>
        <div className="content">
          <ul>
            {formerMembers.map((member, index) => (
              <li key={index}>                
                <b>{member.name}</b> ({member.role})
              </li>
            ))}
          </ul>
        </div>
      </div>

      </div>
    </section>
  );
};
