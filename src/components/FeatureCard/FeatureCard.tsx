import React from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description, className = '' }) => {
  return (
    <div className={`section__information__card ${className}`.trim()}>
      <div className="section__item">
        <img src={iconSrc} alt={title} />
      </div>
      <h3 className="section__infromation__title">{title}</h3>
      <p className="section__infromation__paragraf">{description}</p>
    </div>
  );
};

export default FeatureCard;
