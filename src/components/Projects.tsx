import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'JobStream : publier et trouver des emplois',
      description:
        "JobStream permet aux entreprises de partager des offres d'emploi et événements. Ces annonces sont envoyées via un producteur Kafka, puis un consommateur Kafka les traite et déclenche l'envoi d'emails aux utilisateurs. L'application est hébergée sur Google Cloud Platform pour une diffusion rapide et fiable.",
      tech: [
        'Spring Boot',
        'KAfka',
        'React',
        'Docker',
        'GCP',
        'Github action',
        'Kubernetes',
      ],
      github: 'https://github.com/DjarallahBrahim?tab=repositories',
      demo: 'https://github.com/DjarallahBrahim?tab=repositories',
      image: './JobStream.png',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
          Personal Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my personal projects and contributions to the developer
          community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-card-foreground hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-card-foreground/80 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
