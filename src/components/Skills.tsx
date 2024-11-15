import React from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaCheckCircle,
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

// Helper function to split skills into up to 2 columns with max 4 skills per column
const splitSkillsIntoTwoColumns = (skills: string[]) => {
  if (skills.length <= 4) {
    return [skills];
  }
  return [skills.slice(0, 4), skills.slice(4)];
};

const Skills = () => {
  return (
    <section className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-4xl font-semibold text-center text-card-foreground mb-8 bg-gradient-to-r from-primary-400 to-primary-200 text-transparent bg-clip-text fade-in">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 fade-in">
        {Object.entries(skillCategories).map(([category, skills]) => {
          const columns = splitSkillsIntoTwoColumns(skills);
          return (
            <div key={category} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                {categoryIcons[category as keyof typeof categoryIcons]}
                <h3 className="text-xl font-semibold text-card-foreground">{category}</h3>
              </div>
              <div className="flex gap-8">
                {columns.map((col, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {col.map(skill => (
                      <div key={skill} className="flex items-center gap-2">
                        <span className="mr-3 text-blue-600 text-lg">•</span>
                        <p className="text-white text-l">{skill}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
