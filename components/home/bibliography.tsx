import React from 'react';

interface BibliographyProps {
  imageSrc: string;
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
}

const Bibliography: React.FC<BibliographyProps> = ({ imageSrc, period, title, company, companyUrl, description }) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row items-center bg-yellow-400 shadow-lg p-6 rounded-lg max-w-4xl mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt="Profile Picture"
          className="rounded-lg shadow-md object-cover"
          style={{ width: '200px', height: '200px' }}
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-1 md:text-2xl text-center">{period}</h2>
        <h3 className="ml-2 text-1xl font-semibold mb-2 md:text-2xl text-center">{title}</h3>
        <h3 className="ml-2 text-1xl font-semibold mb-2 md:text-xl text-center hover:underline"><a href={companyUrl} rel="noreferrer" target="_blank">{company}</a></h3>
        <p className="ml-2 text-black text-base text-center">{description}</p>
      </div>
    </div>
  );
};

export default Bibliography;
