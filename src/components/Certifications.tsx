import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

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

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 3);

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-400 to-primary-200 text-transparent bg-clip-text leading-relaxed py-1">
          Certifications & Badges
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Certifications professionnelles et réalisations qui valident mon expertise 📜
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-[400px] flex flex-col"
            >
              <div className="h-[70%] bg-background/50 relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 right-4 bg-card p-2 rounded-full shadow-md">
                  <Award className="w-6 h-6 text-[#FFD93D]" />
                </div>
              </div>

              <div className="p-6 h-[30%] flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">
                  {cert.name}
                </h3>
                <div>
                  <p className="text-card-foreground/80 text-sm">{cert.issuer}</p>
                  <p className="text-sm text-card-foreground/60">{cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary-400/10 hover:bg-primary-400/20 text-primary-400 font-medium transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
