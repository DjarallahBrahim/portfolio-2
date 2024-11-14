import React from 'react';
import { Code2, Globe, Database, Cloud, BarChart } from 'lucide-react';

const SkillCategory = ({
  title,
  icon: Icon,
  skills,
}: {
  title: string;
  icon: any;
  skills: string[];
}) => (
  <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-primary-400" />
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['Javascript', 'TypeScript', 'React', 'Vue.js'],
    },
    {
      title: 'Backend',
      icon: Code2,
      skills: ['Java', 'Spring boot', 'Hibernete', 'Kafka', 'Node.js'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MySql', 'MongoDB', 'ElasticSearch'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        'Openshift',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Helm',
        'Terraform',
        'Ansible',
        'GCP',
      ],
    },
    {
      title: 'Monitoring & Analytics',
      icon: BarChart,
      skills: ['Grafana', 'Prometheus', 'Kibana'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-semibold bg-clip-text">
          Skills & Technologies
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and the tools I
          work with
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
