import React from 'react';
import '../../styles/LandingPage.css';

const footerLabels = [
  {
    name: 'Contact Us',
    link: 'https://github.com/suvelocity/challengeme',
  },
  {
    name: '|',
  },

  {
    name: 'FAQ',
    link: 'https://suvelocity.github.io/challengeme',
  },
  {
    name: '|',
  },
  {
    name: 'Reviews',
    link: 'https://github.com/suvelocity/challengeme/issues',
  },
  {
    name: '|',
  },
  {
    name: 'Legal Stuff',
    link: 'https://github.com/suvelocity/challengeme',
  },
];

export default function Footer({ color = 'white' }) {
  return (
    <section
      className="Landing-page-Footer"
      style={{ color, borderTop: `1px solid ${color}` }}
    >
      <div className="Landing-page-Footer-Labels" style={{ color }}>
        {footerLabels.map((label, index) => {
          if (label.name !== '|') {
            return (
              <a
                key={label.name}
                style={{ color }}
                href={label.link}
                target="_blank"
                rel="noopener noreferrer"
                className="Landing-page-Footer-Single-Label"
              >
                {label.name}
              </a>
            );
          }
          return (
            <span
              key={index + label.name}
              className="Landing-page-Footer-Single-Label"
              style={{ color }}
            >
              {label.name}
            </span>
          );
        })}
      </div>
      <p> Copyright © 2020 suvelocity, All rights reserved. </p>
    </section>
  );
}
