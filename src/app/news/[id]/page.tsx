import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';

type ArticleProps = {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const articlesDirectory = path.join(process.cwd(), 'public/articles');
    const filenames = fs.readdirSync(articlesDirectory);
    
    return filenames.map((filename) => ({
        id: filename.replace('.md', '')
    }))
}

export default async function ArticlePage({ params }: ArticleProps) {
    const { id } = await params;
    const filePath = path.join(process.cwd(), 'public/articles', `${id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return (
        <section className='section'>
            <div className="container mt-5">
                <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                    <ul>
                        <li><Link href={"/news"}>Noticias</Link></li>
                        <li className="is-active"><a href="#" aria-current="page">{data.title}</a></li>
                    </ul>
                </nav>
                <h1 className="title">{data.title}</h1>
                <p className="subtitle">{new Date(data.date).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <figure className="image is-square m-auto" style={{ width: "500px", maxWidth: "100%", border: "2px solid black" }}>
                    <Image src={data.image} alt={data.title} fill={true} />
                </figure>
                <div className="content mt-5">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
}