import React from 'react';
import './SocialIcons.css';

interface SocialIconsProps {
  className?: string;
  /** 'white' (default) or 'blue' to select the icon variant files */
  color?: 'white' | 'blue';
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '', color = 'white' }) => {
  const suffix = color === 'blue' ? 'blue' : 'white';

  return (
    <div className={className}>
      <a
        href="https://x.com/UNALOficial"
        aria-label="X (Twitter)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/src/assets/images/icon_twiter_${suffix}.svg`} alt="X" />
      </a>
      <a
        href="https://www.facebook.com/UNALOficial/?locale=es_LA"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/src/assets/images/icon_facebook_${suffix}.svg`} alt="Facebook" />
      </a>
      <a
        href="https://www.linkedin.com/school/universidadnacionaldecolombia/posts/?feedView=all"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/src/assets/images/icon_linkedin_${suffix}.svg`} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default SocialIcons;
