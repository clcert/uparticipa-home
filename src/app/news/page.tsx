import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function News() {
  const articlesDirectory = path.join(process.cwd(), 'public/articles');
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      image: data.image,
      resume: data.resume,
    };
  });

  return (
    <section className='section'>
      <div className="container mt-5">
        <h1 className="title has-text-centered">Noticias</h1>
        <div className="columns is-multiline">
          {articles.reverse().map((article) => (
            <div key={article.id} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <Image src={article.image} alt={article.title} fill={true} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">
                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                  </p>
                  <p className="subtitle is-6">{new Date(article.date).toLocaleDateString('es-CL', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                  <div className="content">{article.resume}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}