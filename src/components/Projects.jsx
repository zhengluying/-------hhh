import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories.js';

export default function Projects() {
  const [visible, setVisible] = useState({});
  const navigate = useNavigate();
  const [mediaLoaded, setMediaLoaded] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, [entry.target.dataset.index]: true }));
        }
      });
    }, { threshold: 0.1 });
    const els = document.querySelectorAll('.category-module-observe');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (slug) => {
    navigate('/category/' + slug);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">精选项目</h2>
        <p className="section-subtitle">SELECTED PROJECTS</p>
        <div className="category-modules-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.slug}
              className={'category-module category-module-observe'}
              data-index={i}
              onClick={() => handleClick(cat.slug)}
            >
              <div className="category-module-bg" style={{ backgroundColor: cat.color }}>
                <video
                  src={cat.bgVideo}
                  poster={cat.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="category-module-video"
                  onCanPlay={() => setMediaLoaded(prev => ({ ...prev, [cat.slug]: true }))}
                />
              </div>
              <div className="category-module-overlay" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)' }} />
              <div className="category-module-content">
                <div className="category-module-count">{cat.count} 个作品</div>
                <h3 className="category-module-name">{cat.name}</h3>
                <div className="category-module-subtitle">{cat.subtitle}</div>
                <p className="category-module-desc">{cat.desc}</p>
                <span className="category-module-arrow" style={{ color: cat.accent }}>浏览作品 &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
