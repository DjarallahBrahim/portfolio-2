import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Worldline - Contact - BNP BGL',
      position: 'Ingénieur DevOps & Backend',
      period: '01/2022 - Present',
      description:
        "Dans le cadre du projet de développement de la solution Contact-BGL, j'ai contribué à la mise en place d'une architecture robuste et évolutive sur OpenShift, tout en automatisant les déploiements et en développant des microservices. Voici un aperçu de mes missions principales :",

      achievements: [
        'Déploiement de la solution Contact-Produit sur OpenShift en collaboration avec le support produit',
        'Automatisation du processus de déploiement via GitLab-CI et Helm',
        'Conception et développement d’un microservice en Spring Boot consommant des messages JSON depuis Kafka pour l’envoi de notifications SMS via une API tierce, garantissant robustesse et fiabilité',
        'Développement d’un microservice en Spring Boot pour l’analyse des événements d’activité des agents à partir des messages Kafka, avec stockage en base de données pour la génération de rapports',
        'Analyse, conception et développement de services personnalisés pour le client, incluant des API REST et services de reporting, ainsi que la dockerisation des services avec Docker',
        'Maintenance continue de la solution, incluant corrections de bugs et améliorations',
        'Développer des interfaces front end en Angular/TypeScript',
        'Gestion des montées de version mineures et majeures de la solution Contact-BGL',
        'Coordination avec les équipes techniques du client pour assurer la communication et la résolution des problèmes',
        'Formation des stagiaires et alternants, et organisation d’ateliers de formation pour le client BGL sur la solution Contact',
        'Supervision d’équipe : animation des sprints, daily meetings, et suivi des tâches',
      ],
      technologies: [
        'Springboot',
        'Java',
        'Kafka',
        'Angular',
        'Docker',
        'Helm',
        'Kubernetes',
        'Openshift',
        'Mysql & PostgreSql',
      ],
    },
    {
      company: 'Worldline - Contact - BNL',
      position: 'Ingénieur DevOps',
      period: '08/2024 - 11/2024',
      description:
        "Dans le cadre de l'optimisation des workflows de déploiement et de la migration de l'application Contact Legacy, j'ai contribué à améliorer les pipelines CI/CD et les processus de conteneurisation, tout en pilotant la migration vers un environnement OpenShift. Voici un aperçu de mes missions principales :",
      achievements: [
        "Déploiement et gestion de machines virtuelles à l'aide de Terraform pour la gestion de ressources et instances, playbooks Ansible pour appliquer des configurations sur ces instances",
        "Création et maintenance de rôles Ansible pour l'installation et la configuration de services sur des machines virtuelles",
        "Suivi et résolution des problèmes d'infrastructure Openshift/VM en utilisant des outils de monitoring Prometheus + Grafana",
        'Optimisation et amélioration des pipelines GitLab Cl , dockerfile ',
        'Amélioration des processus de Dockerisation des services personnalisés ( dockerFile/ gitlabci)',
        "Pilotage de la migration de l'ancienne version de Contact Legacy vers un environnement OpenShift (Docker, Helm, terraform, Ansible, Gitlab ci ).",
      ],
      technologies: ['React', 'TypeScript', 'SASS', 'Redux'],
    },
    {
      company: 'Worldline - Contact - LCL',
      position: 'Full Stack Developer',
      period: '01/2024 - 08/2024',
      description:
        "Dans le cadre du projet de déploiement de la solution Contact-LCL, j'ai participé à la gestion de l'équipe pour assurer la qualité des livrables tout en développant des services personnalisés et en déployant la solution sur OpenShift. Voici un aperçu de mes missions principales :",
      achievements: [
        'Participation au pilotage de l’équipe pour garantir la qualité des livrables : organisation des sprints, création de tâches sur JIRA, revue de code et revue technique',
        'Déploiement de la solution Contact-LCL sur OpenShift',
        'Conception, développement et livraison de services personnalisés pour le client, utilisant Spring Boot, Angular, Maven, Kafka, Node.js, Docker, et Helm',
        'Implémentation d’un service de reconnaissance vocale avec Nuance, développé en Spring Boot, Maven, et Docker, déployé et conforme aux exigences spécifiques du client',
        'Gestion des montées de version mineures et majeures de la solution Contact-LCL',
        'Développer des interfaces front end en Angular/TypeScript , incluant notamment une interface utilisateur pour un service qui contrôle les flux, les numéros associés aux contacts, ainsi que la disponibilité des agents et des agences.',
      ],
      technologies: [
        'Springboot',
        'Java',
        'Kafka',
        'Angular',
        'Docker',
        'Helm',
        'Kubernetes',
        'Openshift',
        'Mysql & PostgreSql',
      ],
    },
    {
      company: 'Worldline - Smartpush EDF/ENEDIS',
      position: 'Full Stack Developer',
      period: '01/2024 - 08/2024',
      description:
        'Dans le cadre de l’amélioration de la solution SmartPush pour l’envoi massif de SMS, e-mails et appels, j’ai contribué à la migration vers OpenShift, à la modernisation technologique, et au développement de services sécurisés. Voici un aperçu de mes principales missions:',
      achievements: [
        'Migration vers OpenShift, incluant la conteneurisation de tous les services et la création de templates Helm',
        'Développement d’un service d’authentification SAML 2.0 avec Spring Security',
        'Migration vers des versions plus récentes de Java, Spring, Elasticsearch, et Angular',
        'Conception, développement et livraison de services et API REST, incluant des fonctionnalités de reporting et d’authentification, avec Angular et Java (Spring Boot, Spring Batch, Spring Security, Hibernate)',
      ],
      technologies: [
        'Springboot',
        'Angular',
        'Docker',
        'Helm',
        'Kubernetes',
        'Openshift',
        'Mysql & PostgreSql',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-semibold bg-clip-text">
          Professional Experience
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My journey in the tech industry and the impactful projects I've worked
          on
        </p>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-200" />

              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-100" />

              <div className="bg-card  rounded-xl shadow-lg p-6 ml-8">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-primary-200" />
                  <h3 className="text-xl font-semibold text-gray-100">
                    {exp.position}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="text-primary-250 font-medium">{exp.company}</p>
                  <p className="text-gray-200 text-sm">{exp.period}</p>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, aidx) => (
                    <p key={aidx} className="text-gray-100 mb-4">
                      <span className="mr-3 text-blue-600 text-lg">•</span>
                      {achievement}
                    </p>
                  ))}
                </div>

                <div className="flex mt-5 flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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

export default Experience;
