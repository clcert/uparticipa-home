import Image from "next/image";

type TeamMember = {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Alejandro Hevia', email: "ahevia [at] dcc.uchile.cl", role: 'Coordinador Académico', imageUrl: '/images/ahevia.jpg' },
  { name: 'Camilo Gómez', email: "cjgomez [at] uchile.cl", role: 'Coordinador Operativo', imageUrl: '/images/cgomez.jpg' },
  { name: 'Cristobal Jaramillo', email: "cistobal.jaramillo [at] ug.uchile.cl", role: 'Coordinador de Desarrollo', imageUrl: '/images/cjaramillo.jpg' },
];

export default function Team() {
  return (
    <section className="section">
      <div className="container mt-5">
        <h1 className="title has-text-centered">Equipo</h1>
        <div className="columns is-multiline">
          {teamMembers.map((member, index) => (
            <div key={index} className="column is-one-quarter">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <Image src={member.imageUrl} alt={member.name} width={500} height={500} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-size-4">{member.name}</p>
                      <p className="subtitle is-6 mb-0">{member.role}</p>
                      <p className="subtitle is-6">{member.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
