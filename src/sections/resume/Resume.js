import React from 'react';

const Resume = () => {
  const personalInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, State',
  };

  const education = [
    {
      institution: 'University of Example',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      year: '2015',
    },
    {
      institution: 'Example College',
      degree: 'Associate Degree',
      major: 'Web Development',
      year: '2013',
    },
  ];

  const experience = [
    {
      company: 'ABC Company',
      position: 'Software Engineer',
      startDate: '2016',
      endDate: 'Present',
      responsibilities: [
        'Developed and maintained web applications',
        'Collaborated with cross-functional teams',
        'Participated in code reviews and testing',
      ],
    },
    {
      company: 'XYZ Corporation',
      position: 'Web Developer',
      startDate: '2014',
      endDate: '2016',
      responsibilities: [
        'Designed and implemented user interfaces',
        'Optimized website performance',
        'Worked closely with clients to meet project requirements',
      ],
    },
  ];

  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>
      <p>Address: {personalInfo.address}</p>

      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.institution}</h3>
          <p>{edu.degree} in {edu.major}</p>
          <p>Graduated: {edu.year}</p>
        </div>
      ))}

      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.position}</h3>
          <p>{exp.company}</p>
          <p>{exp.startDate} - {exp.endDate}</p>
          <ul>
            {exp.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
