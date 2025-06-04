// Create the main app container
const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

// Configuration object
const config = {
  colors: {
    primary: '#3498db',
    secondary: '#2c3e50',
    light: '#f4f4f4',
    dark: '#333',
    white: '#fff'
  },
  styles: {
    shadow: '0 5px 15px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    transition: 'all 0.3s ease'
  }
};

// Utility functions
const createElement = (tag, attributes = {}, children = []) => {
  const element = document.createElement(tag);
  Object.assign(element, attributes);
  children.forEach(child => element.appendChild(child));
  return element;
};

const addStyles = (element, styles) => {
  Object.assign(element.style, styles);
};

// Components
const Header = () => {
  const header = createElement('header');
  
  const container = createElement('div', { className: 'container' }, [
    createElement('h1', { textContent: 'Caesar Caimal' }),
    createElement('p', { 
      className: 'tagline',
      textContent: 'Web Developer & Python Programmer' 
    })
  ]);
  
  header.appendChild(container);
  
  addStyles(header, {
    background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`,
    color: config.colors.white,
    textAlign: 'center',
    padding: '3rem 0',
    position: 'relative',
    overflow: 'hidden'
  });
  
  return header;
};

const AboutSection = () => {
  const section = createElement('section', { id: 'about' });
  
  section.appendChild(createElement('h2', { textContent: 'Tentang Saya' }));
  
  const paragraphs = [
    'Halo! Nama saya Caesar Caimal. Saya adalah seorang pengembang web dengan keahlian khusus dalam HTML dan Python.',
    'Saya memiliki passion dalam menciptakan solusi digital yang kreatif dan efisien. Dengan kemampuan coding yang kuat dan pemahaman mendalam tentang pengembangan web, saya selalu berusaha memberikan hasil terbaik dalam setiap proyek.'
  ];
  
  paragraphs.forEach(text => {
    section.appendChild(createElement('p', { textContent: text }));
  });
  
  addStyles(section, {
    padding: '2rem',
    background: config.colors.white,
    margin: '1.5rem 0',
    borderRadius: config.styles.borderRadius,
    boxShadow: config.styles.shadow,
    transition: config.styles.transition
  });
  
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'translateY(-5px)';
    section.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = '';
    section.style.boxShadow = config.styles.shadow;
  });
  
  return section;
};

const Skill = ({ title, description, level }) => {
  const skill = createElement('div', { className: 'skill' });
  
  const icon = createElement('i', { className: 'fas fa-code coding-icon' });
  const titleElement = createElement('h3', {}, [icon]);
  titleElement.appendChild(document.createTextNode(title));
  
  skill.appendChild(titleElement);
  skill.appendChild(createElement('p', { textContent: description }));
  
  const skillLevel = createElement('div', { className: 'skill-level' });
  const skillLevelBar = createElement('div', { className: `skill-level-bar ${level}` });
  skillLevel.appendChild(skillLevelBar);
  
  skill.appendChild(skillLevel);
  
  addStyles(skill, {
    background: config.colors.light,
    padding: '1.5rem',
    borderRadius: config.styles.borderRadius,
    position: 'relative',
    transition: config.styles.transition
  });
  
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'translateY(-3px)';
  });
  
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = '';
  });
  
  return skill;
};

const SkillsSection = () => {
  const section = createElement('section', { id: 'skills' });
  section.appendChild(createElement('h2', { textContent: 'Skill Saya' }));
  
  const skillsContainer = createElement('div', { className: 'skills-container' });
  
  const skills = [
    {
      title: 'HTML/CSS',
      description: 'Saya memiliki penguasaan yang sangat baik dalam HTML dan CSS, mampu membuat website yang responsif, aksesibel, dan estetik.',
      level: 'expert'
    },
    {
      title: 'Python',
      description: 'Pengalaman luas dalam pengembangan dengan Python, termasuk scripting, otomatisasi, dan pengembangan web dengan framework seperti Django dan Flask.',
      level: 'expert'
    },
    {
      title: 'JavaScript',
      description: 'Pengalaman dalam membangun aplikasi web interaktif dengan JavaScript modern (ES6+), termasuk React dan Node.js.',
      level: 'advanced'
    }
  ];
  
  skills.forEach(skillData => {
    skillsContainer.appendChild(Skill(skillData));
  });
  
  section.appendChild(skillsContainer);
  
  addStyles(skillsContainer, {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem'
  });
  
  return section;
};

// Main app rendering
const renderApp = () => {
  app.appendChild(Header());
  
  const container = createElement('div', { className: 'container' });
  container.appendChild(AboutSection());
  container.appendChild(SkillsSection());
  
  app.appendChild(container);
  
  addStyles(app.querySelector('.container'), {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  });
};

// Initialize the app
document.addEventListener('DOMContentLoaded', renderApp);