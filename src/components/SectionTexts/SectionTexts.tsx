import React from 'react';
import './SectionTexts.css';

interface SectionTextsProps {
  title?: string;
  subtitleMobile?: string;
  subtitleDesktop?: string;
}

const SectionTexts: React.FC<SectionTextsProps> = ({title, subtitleMobile,subtitleDesktop ,}) => {
  return (
    <div className="section__texts">
      <h2 className="section__title">{title}</h2>
      <h4 className="section__subtitle mobile">{subtitleMobile}</h4>
      <h4 className="section__subtitle desktop">{subtitleDesktop}</h4>
    </div>
  );
};

export default SectionTexts;
