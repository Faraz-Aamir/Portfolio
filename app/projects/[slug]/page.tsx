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
  tagline: string;
}> = {
  'e-commerce-website': {
    name: 'E-COMMERCE WEBSITE',
    description:
      'A full-stack e-commerce platform built from the ground up with a modern tech stack. Features include a dynamic product catalog, secure user authentication, an admin panel for inventory management, and a streamlined checkout process. The application is designed with responsive layouts and optimized for performance across all devices.',
    category: 'WEB DEVELOPMENT',
    year: '2026',
    tech: 'Next.js, TypeScript, Supabase, PostgreSQL',
    role: 'Full-Stack Developer',
    link: 'https://aamirfabrics-nine.vercel.app/',
    image: '/images/project-ecommerce.png',
    tagline: 'THE NEXT-GEN ONLINE SHOPPING EXPERIENCE',
  },
  'dld-alarm-network': {
    name: 'DLD ALARM NETWORK',
    description:
      'A hardware-based priority alarm system designed to monitor 8 independent safety zones simultaneously. The system uses a priority encoder (74LS148) to identify the highest-priority active alarm, a decoder (74LS138) to route the alarm signal, and NE555 timers to generate distinct audible/visual alerts. Built entirely from discrete digital logic ICs on a breadboard.',
    category: 'HARDWARE / DIGITAL LOGIC',
    year: '2026',
    tech: '74LS148, 74LS138, NE555 Timer, LEDs',
    role: 'Hardware Engineer',
    link: 'https://github.com/Faraz-Aamir/Industrial-Multi-Zone-Critical-Alarm-Network',
    image: '/images/project-dld.jpeg',
    tagline: 'INDUSTRIAL MULTI-ZONE CRITICAL ALARM SYSTEM',
  },
  'network-sniffer': {
    name: 'NETWORK SNIFFER',
    description:
      'A Python-based network packet sniffer for real-time traffic analysis and monitoring. Captures and dissects network packets, displaying detailed information including source/destination IPs, protocols, ports, TTL values, and TCP flags. Features colorized terminal output, protocol breakdown statistics, and top talker analysis.',
    category: 'CYBERSECURITY',
    year: '2026',
    tech: 'Python, Scapy, Colorama',
    role: 'Developer',
    link: 'https://github.com/Faraz-Aamir/CodeAlpha_Basic_Network_Sniffer',
    image: '/images/project-sniffer.jpeg',
    tagline: 'REAL-TIME NETWORK PACKET ANALYSIS',
  },
  'phishing-awareness': {
    name: 'PHISHGUARD',
    description:
      'An interactive cybersecurity training platform designed to educate users about phishing attacks. Features real-world phishing examples, attack type breakdowns, interactive quizzes, and practical tips for staying safe online. Built with a dark-themed UI emphasizing key statistics like 3.4B daily phishing emails and $4.9M average breach costs.',
    category: 'CYBERSECURITY',
    year: '2026',
    tech: 'HTML5, CSS3, JavaScript',
    role: 'Developer',
    link: 'https://github.com/Faraz-Aamir/Phishing_Awareness_Module',
    image: '/images/project-phishguard.png',
    tagline: 'INTERACTIVE PHISHING AWARENESS TRAINING',
  },
  'code-alpha': {
    name: 'CODE ALPHA',
    description:
      'A robust C++ based Online Judge (OJ) platform designed similar to LeetCode. Users can attempt C++ programming challenges, write their solutions in an integrated environment, and have their code evaluated against rigorous test cases. It features automated compilation, execution, and result verification to provide immediate feedback on whether the solution is accepted or has errors.',
    category: 'SOFTWARE ENGINEERING',
    year: '2026',
    tech: 'C++, Object-Oriented Programming, Data Structures',
    role: 'Backend Developer',
    link: '#',
    image: '/images/project-codealpha.png',
    tagline: 'C++ ONLINE JUDGE PLATFORM',
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
