import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectDetailClient from './ProjectDetailClient';

const projectsData: Record<string, {
  name: string;
  description: string;
  category: string;
  year: string;
  tech: string;
  role: string;
  link: string;
  image: string;
}> = {
  'e-commerce-website': {
    name: 'E-COMMERCE WEBSITE',
    description:
      'A full-stack e-commerce platform built from the ground up with a modern tech stack. Features include a dynamic product catalog, secure user authentication, an admin panel for inventory management, and a streamlined checkout process. The application is designed with responsive layouts and optimized for performance across all devices.',
    category: 'WEB DEVELOPMENT',
    year: '2024',
    tech: 'Next.js, TypeScript, Supabase, PostgreSQL',
    role: 'Full-Stack Developer',
    link: 'https://aamirfabrics-nine.vercel.app/',
    image: '/images/project-ecommerce.jpg',
  },
  'smart-attend-ai': {
    name: 'SMART ATTEND AI',
    description:
      'An intelligent attendance tracking system powered by facial recognition technology. The application uses computer vision and machine learning algorithms to automatically identify and log student attendance in real-time. Built with Python and integrated with a web-based dashboard for administrators to monitor attendance records and generate reports.',
    category: 'AI & AUTOMATION',
    year: '2024',
    tech: 'Python, OpenCV, TensorFlow, Flask',
    role: 'Developer',
    link: '#',
    image: '/images/project-smartattend.jpg',
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — Faraz Aamir`,
    description: project.description.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
