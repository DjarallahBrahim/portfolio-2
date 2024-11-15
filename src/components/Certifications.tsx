import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Certified Kubernetes Application Developer',
      issuer: 'linux foundation',
      date: '2024',
      url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
      image: './ckad.png',
    },
    {
      name: 'Preparing for Your Associate Cloud Engineer Journey',
      issuer: 'Google cloudskillsboost',
      date: '2024',
      url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
      image: './ACJ.png',
    },
    {
      name: 'Google Cloud Fundamentals: Core Infrastructure',
      issuer: 'Google cloudskillsboost',
      date: '2024',
      url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
      image: './GCFCI.png',
    },
    {
      name: 'Deploy Kubernetes Applications on Google Cloud',
      issuer: 'Google cloudskillsboost',
      date: '2024',
      url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
      image: './KAGC.png',
    },
    {
      name: 'Build Infrastructure with Terraform on Google Cloud',
      issuer: 'Google cloudskillsboost',
      date: '2024',
      url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
      image: './BIWT.png',
    },
    {
      name: 'Managing Cloud Infrastructure with Terraform',
      issuer: 'Google cloudskillsboost',
      date: '2024',
      url: 'https://www.cloudskillsboost.google/public_profiles/9e01a091-79af-49b7-85af-3a3b346caed8',
      image: './CIT.png',
    },
    {
      name: 'Apache Kafka for Event-Driven Spring Boot Microservices',
      issuer: 'Udemy',
      date: '2024',
      url: 'https://www.udemy.com/course/apache-kafka-for-spring-boot-microservices/',
      image: './kafka.jpg',
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-400 to-primary-200 text-transparent bg-clip-text">
          Certifications & Badges
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
        Certifications professionnelles et réalisations qui valident mon expertise 📜
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <div className="h-32 bg-background/50 relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 bg-card p-2 rounded-full shadow-md">
                  <Award className="w-6 h-6 text-primary-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-card-foreground/80 mb-2">{cert.issuer}</p>
                <p className="text-sm text-card-foreground/60">{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
