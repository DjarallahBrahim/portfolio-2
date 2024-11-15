import React from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaChartLine,
} from 'react-icons/fa';

const skillCategories = {
  Backend: ['Java', 'Spring boot', 'Kafka', 'Node.js'],
  'Cloud & DevOps': [
    'Openshift',
    'Docker',
    'Kubernetes',
    'Helm',
    'Terraform',
    'Ansible',
    'CI/CD',
  ],
  Frontend: ['Javascript', 'TypeScript', 'React'],
  Database: ['PostgreSQL', 'MySQL', 'ElasticSearch'],
  'Monitoring & Analytics': ['Grafana', 'Prometheus', 'Kibana'],
} as const;

const categoryIcons = {
  Frontend: <FaCode size={24} />,
  Backend: <FaServer size={24} />,
  Database: <FaDatabase size={24} />,
  'Cloud & DevOps': <FaCloud size={24} />,
  'Monitoring & Analytics': <FaChartLine size={24} />,
} as const;

const Skills = () => {
  return (
    <section className="py-0">
      <div className="container mx-auto px-4 fade-in">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-400 to-primary-200 text-transparent bg-clip-text leading-relaxed py-1">
          Skills & Technologies
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Technologies et outils que j'utilise au quotidien 🛠️
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div 
              key={category} 
              className="bg-card p-6 rounded-xl border border-primary-400/10 hover:border-primary-400/20 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-400/10 text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 group/skill"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary-400/50 group-hover/skill:bg-primary-400 transition-colors duration-300" />
                    <span className="text-foreground/70 group-hover/skill:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
