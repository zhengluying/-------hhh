import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, getCategory, getMediaFiles } from '../data/categories.js';

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cat = getCategory(slug);
  const [filter, setFilter] = useState('all');
  const [zoomed, setZoomed] = useState(null);
  const videoRefs = useRef({});
  const zoomedVideoRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!cat) {
    return (
      <div className="category-error">
        <h2>页面未找到</h2>
        <p style={{ color: 'rgba(240,236,232,0.4)', marginBottom: 8 }}>该分类暂无内容</p>
        <button onClick={() => { try { navigate('/'); } catch(e) { window.location.href = '/'; } }}>返回首页</button>
      </div>
    );
  }

  const items = getMediaFiles(slug).filter(item => filter === 'all' || item.type === filter);
  const otherCategories = categories.filter(c => c.slug !== slug);

  return (
    <div className="category-page">
      <div className="category-header" style={{ background: cat.color }}>
        <button className="back-btn" onClick={() => { try { navigate('/'); } catch(e) { window.location.href = '/'; } }}>
          &larr; 返回首页
        </button>
        <div className="category-header-content">
          <span className="category-icon">{cat.icon}</span>
          <h1 style={{ color: cat.accent }}>{cat.name}</h1>
          <p className="category-subtitle" style={{ color: cat.accent + '99' }}>{cat.subtitle}</p>
          <p className="category-desc" style={{ color: cat.accent }}>{cat.desc}</p>
          <p className="category-count" style={{ color: cat.accent + '88' }}>{items.length} 个作品</p>
        </div>
      </div>

      <div className="category-filter-bar">
        <button
          className={'filter-btn' + (filter === 'all' ? ' active' : '')}
          onClick={() => setFilter('all')}
          style={filter === 'all' ? { background: cat.accent + '20', color: cat.accent, borderColor: cat.accent + '40' } : {}}
        >全部</button>
        <button
          className={'filter-btn' + (filter === 'video' ? ' active' : '')}
          onClick={() => setFilter('video')}
          style={filter === 'video' ? { background: cat.accent + '20', color: cat.accent, borderColor: cat.accent + '40' } : {}}
        >视频</button>
        <button
          className={'filter-btn' + (filter === 'image' ? ' active' : '')}
          onClick={() => setFilter('image')}
          style={filter === 'image' ? { background: cat.accent + '20', color: cat.accent, borderColor: cat.accent + '40' } : {}}
        >图片</button>
      </div>

      <div className="category-gallery">
        {items.length === 0 ? (
          <div className="empty-state">
            <p style={{ fontSize: 15, marginBottom: 4 }}>暂无作品</p>
            <p style={{ fontSize: 13, opacity: 0.6 }}>换个筛选条件试试</p>
          </div>
        ) : (
          items.map((item, i) => (
            <div
              key={i}
              className={'gallery-item ' + (item.type === 'video' ? 'is-video' : 'is-image')}
              onClick={() => {
                  setZoomed(item);
              }}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    ref={el => { videoRefs.current[item.src] = el; }}
                    src={item.src}
                    poster={item.poster || undefined}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play().catch(() => {})}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                  <div className="gallery-play-icon">&#9654;</div>
                  <div className="gallery-item-overlay">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <img src={item.src} alt={item.name} loading="lazy" />
                  <div className="gallery-item-overlay">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Other categories navigation */}
      {otherCategories.length > 0 && (
        <div className="category-nav-section">
          <div className="container" style={{ paddingBottom: 80 }}>
            <h3 className="category-nav-title">其他分类</h3>
            <div className="category-nav-grid">
              {otherCategories.map(c => (
                <div
                  key={c.slug}
                  className="category-nav-card"
                  onClick={() => navigate('/category/' + c.slug)}
                >
                  <span className="category-nav-icon">{c.icon}</span>
                  <div>
                    <h4>{c.name}</h4>
                    <p>{c.desc}</p>
                  </div>
                  <span className="category-nav-arrow">&rarr;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Zoom overlay */}
      {zoomed && (
        <div className="zoom-overlay" onClick={() => { if (zoomedVideoRef.current) { zoomedVideoRef.current.pause(); } setZoomed(null); }}>
          <button className="zoom-close" onClick={() => { if (zoomedVideoRef.current) { zoomedVideoRef.current.pause(); } setZoomed(null); }}>&times;</button>
          {zoomed.type === 'video' ? (
            <video
              ref={zoomedVideoRef}
              src={zoomed.src}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            />
          ) : (
          <img src={zoomed.src} alt={zoomed.name} onClick={(e) => e.stopPropagation()} />
          )}
        </div>
      )}
    </div>
  );
}

