// src/Home.js
import React, { useEffect, useState } from 'react';

const fetchData = async (templatePath) => {
  const response = await fetch(templatePath);
  const html = await response.text();
  return html;
};

const Home = () => {
  const [template, setTemplate] = useState('');

  useEffect(() => {
    const loadTemplate = async () => {
      const html = await fetchData('/Home.html');
      setTemplate(html);
    };

    loadTemplate();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: template }} />;
};

export default Home;
