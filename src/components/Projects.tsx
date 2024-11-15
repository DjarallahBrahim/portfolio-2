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
        'Kafka',
        'React',
        'Docker',
        'GCP',
        'Github Action',
        'Kubernetes',
      ],
      github: 'https://github.com/DjarallahBrahim?tab=repositories',
      demo: 'https://github.com/DjarallahBrahim?tab=repositories',
      image: './JobStream.png',
    },
  ];

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
          Projets Personnels
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Découvrez mes projets personnels et mes contributions à la communauté
          des développeurs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-card-foreground truncate">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-card-foreground hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-card-foreground/80 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs"
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
