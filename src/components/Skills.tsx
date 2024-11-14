import React from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaChartLine,
} from 'react-icons/fa';

const skillCategories: Record<
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Cloud & DevOps'
  | 'Monitoring & Analytics',
  string[]
> = {
  Frontend: ['Javascript', 'TypeScript', 'React'],
  Backend: ['Java', 'Spring boot', 'Kafka', 'Node.js'],
  Database: ['postgresql', 'mysql', 'ElasticSearch'],
  'Cloud & DevOps': [
    'Openshift',
    'docker',
    'kubernetes',
    'Helm',
    'Terraform',
    'Ansible',
    'CI/CD',
  ],
  'Monitoring & Analytics': ['Grafana', 'Prometheus', 'Kibana'],
};

const categoryIcons: Record<
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Cloud & DevOps'
  | 'Monitoring & Analytics',
  JSX.Element
> = {
  Frontend: <FaCode className="text-primary-400" />,
  Backend: <FaServer className="text-primary-400" />,
  Database: <FaDatabase className="text-primary-400" />,
  'Cloud & DevOps': <FaCloud className="text-primary-400" />,
  'Monitoring & Analytics': <FaChartLine className="text-primary-400" />,
};

const Skills = () => {
  return (
    <section
      className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <h2 className="text-2xl font-semibold text-center text-card-foreground mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              {categoryIcons[category as keyof typeof categoryIcons]}
              <h3 className="text-xl font-semibold text-card-foreground">{category}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {skills.map(skill => (
                <p
                  key={skill}
                  className="text-white text-sm"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
