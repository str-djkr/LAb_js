// src/News.js
import React, { useState, useEffect } from 'react';

const fetchData = async (templatePath) => {
  const response = await fetch(templatePath);
  const html = await response.text();
  return html;
};

const News = () => {
  const [template, setTemplate] = useState('');

  useEffect(() => {
    const loadTemplate = async () => {
      const html = await fetchData('/News.html');
      setTemplate(html);
    };

    loadTemplate();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: template }} />;
};

export default News;