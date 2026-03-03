'use client';

import { useState, useCallback } from 'react';

const defaultState = {
  sectionOrder: [
    'contact',
    'summary',
    'experience',
    'projects',
    'skills',
    'education',
    'interests',
  ],
  contact: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
    linkedin: '',
    github: '',
  },
  summary: '',
  experience: [],
  projects: [],
  skills: [],
  education: [],
  interests: [],
  photo: null,
};

export function useResumeState() {
  const [resume, setResume] = useState(defaultState);

  const updateContact = useCallback((field, value) => {
    setResume((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  }, []);

  const updateSummary = useCallback((value) => {
    setResume((prev) => ({ ...prev, summary: value }));
  }, []);

  const updatePhoto = useCallback((value) => {
    setResume((prev) => ({ ...prev, photo: value }));
  }, []);

  const setSectionOrder = useCallback((order) => {
    setResume((prev) => ({ ...prev, sectionOrder: order }));
  }, []);

  // Generic list helpers
  const addItem = useCallback((section, item) => {
    setResume((prev) => ({
      ...prev,
      [section]: [...prev[section], item],
    }));
  }, []);

  const updateItem = useCallback((section, index, updatedItem) => {
    setResume((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? updatedItem : item
      ),
    }));
  }, []);

  const removeItem = useCallback((section, index) => {
    setResume((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  }, []);

  const loadSampleData = useCallback(() => {
    setResume({
      sectionOrder: [
        'contact',
        'summary',
        'experience',
        'projects',
        'skills',
        'education',
        'interests',
      ],
      contact: {
        name: 'Mehedi Hasan',
        title: 'Software Engineer | Full-Stack Developer',
        email: 'mehedihasansumit@gmail.com',
        phone: '+8801776912033',
        location: 'Dhaka, Bangladesh',
        portfolio: 'https://my-portfolio-inky-six-61.vercel.app',
        linkedin: 'linkedin.com/in/mehedi-hasan-103621210',
        github: 'github.com/mehedihasansumit',
      },
      summary:
        'Software Engineer with 4+ years of experience building scalable backend systems and full-stack web applications. Promoted to Team Lead at V2 Technologies where I own 10+ production microservices powering GrameenPhone\u2019s field operations CRM used by thousands of agents daily. Core strengths in Node.js, Nest.js, React, Next.js, PostgreSQL, and Redis. Track record of delivering measurable impact \u2014 60% faster API responses, 3\u20134x build time reduction, and platforms adopted by 30+ organizations. Strong communicator who bridges technical and business teams.',
      experience: [
        {
          title: 'Software Engineer \u2014 Team Lead',
          company: 'V2 Technologies Limited',
          period: 'Nov 2024 \u2013 Present',
          responsibilities: [
            'Own and lead development of 10+ production microservices for GrameenPhone\u2019s enterprise CRM, serving thousands of field agents across Bangladesh with 99.5%+ uptime',
            'Designed event-driven notification system with Socket.io, reducing agent response time to campaign updates from minutes to under 3 seconds',
            'Integrated Google BigQuery analytics pipeline processing millions of field activity records, enabling data-driven campaign decisions and automated Excel reporting',
            'Built a real-time audit platform (Shinsa AI) with lease-based concurrency control and dynamic form engine, eliminating double-assignment conflicts and reducing audit cycle time by 35%',
            'Developed CircleBD social media platform from scratch \u2014 Express.js + TypeScript backend with HLS video streaming, AWS S3 storage, and Redis-backed content delivery',
            'Mentor 3 junior developers through structured code reviews, pair programming, and sprint retrospectives; improved team velocity by 25%',
          ],
        },
        {
          title: 'Software Engineer',
          company: 'Elitbuzz Technologies Limited',
          period: 'Aug 2022 \u2013 Nov 2024',
          responsibilities: [
            'Built a multi-tenant school management SaaS from the ground up (Next.js, Prisma, MySQL), growing it to 30+ institutions and 10,000+ daily active student records',
            'Reduced API response times by 60% through PostgreSQL query optimization, Redis caching layers, and strategic database indexing',
            'Led Next.js v13 \u2192 v14 migration for a high-traffic e-commerce platform, cutting build times by 3\u20134x and improving Core Web Vitals scores',
            'Architected an internationalized photo gallery SaaS (React + Next.js) with SSR/ISR for the European market, scoring 95+ on Lighthouse',
            'Designed multi-tenant database schemas with row-level isolation, supporting school management, SMS, and e-commerce modules on shared infrastructure',
            'Containerized 8+ services with Docker and set up CI/CD pipelines via GitHub Actions, reducing deployment time from 30 minutes to under 5 minutes',
          ],
        },
      ],
      projects: [
        {
          name: 'GrameenPhone ECRM',
          url: 'https://cockpit-stg.gpl.how/',
          description: '10+ microservice CRM for Bangladesh\u2019s largest telecom, managing campaigns, agents, notifications, and reporting.',
          features: [
            'Campaign analytics via Google BigQuery processing millions of records with automated Excel exports',
            'RBAC with device-binding auth, SMS OTP, and Socket.io real-time notifications across web and Android',
            'Training backend (Nest.js + Drizzle ORM) with AWS S3 content delivery and Redis caching',
          ],
        },
        {
          name: 'Music Distribution SaaS',
          url: '',
          description: 'Platform for labels and artists to upload, manage, and distribute music/video to global streaming services.',
          features: [
            'NestJS backend with PostgreSQL, Redis, Bull queues, and Stripe payment integration',
            'Hierarchical role-based ownership (admin, master user, artist, label) with permission validation',
            'B2B API integration for ANS Digital (VEVO/YouTube) with multipart streaming uploads up to 5GB',
          ],
        },
        {
          name: 'Edu360 \u2014 School SaaS',
          url: 'https://admin.edu360.com.bd/',
          description: 'Multi-tenant platform powering 30+ institutions with 10,000+ daily active student records.',
          features: [
            'Owned 60% of full-stack development with multi-tenant data isolation and hierarchical RBAC',
            'White-label website generator enabling schools to launch branded portals with custom domains',
          ],
        },
      ],
      skills: [
        {
          category: 'Languages',
          items: ['JavaScript (ES6+)', 'TypeScript', 'Go', 'Python'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'Express.js', 'Nest.js', 'Fiber (Go)', 'REST APIs', 'WebSockets', 'Socket.io', 'Bull Queues'],
        },
        {
          category: 'Frontend',
          items: ['React', 'Next.js (SSR/SSG/ISR)', 'Vite', 'TanStack Query/Router', 'Redux Toolkit', 'Tailwind CSS', 'Radix UI', 'ShadCN UI', 'Three.js', 'GSAP'],
        },
        {
          category: 'Databases',
          items: ['PostgreSQL', 'MySQL', 'Redis', 'Google BigQuery', 'Drizzle ORM', 'Prisma ORM', 'Sequelize'],
        },
        {
          category: 'Cloud & DevOps',
          items: ['AWS S3/SES', 'Docker', 'Podman', 'Nginx', 'PM2', 'Git', 'GitHub Actions', 'Bitbucket', 'Sentry', 'Linux'],
        },
        {
          category: 'Payments & APIs',
          items: ['Stripe', 'Swagger/OpenAPI', 'Zod', 'Joi', 'JWT Auth', 'RBAC'],
        },
      ],
      education: [
        {
          degree: 'B.Sc. in Computer Science & Engineering',
          institution: 'Green University of Bangladesh',
          period: '2018 \u2013 2022',
        },
        {
          degree: 'Diploma in Marine Engineering',
          institution: 'Shyamoli Ideal Polytechnic Institute',
          period: '2013 \u2013 2018',
        },
      ],
      interests: ['System Design & Microservices', 'Open-Source Contributions', 'AI & Automation', 'Travel'],
      photo: null,
    });
  }, []);

  const resetData = useCallback(() => {
    setResume(defaultState);
  }, []);

  return {
    resume,
    updateContact,
    updateSummary,
    updatePhoto,
    setSectionOrder,
    addItem,
    updateItem,
    removeItem,
    loadSampleData,
    resetData,
  };
}
