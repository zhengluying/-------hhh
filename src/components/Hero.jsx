import { useEffect } from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-video" src="/hero-bg.mp4" autoPlay muted loop playsInline />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Luying <span>Zheng</span></h1>
        <a href="#projects" className="hero-btn">浏览作品</a>
      </div>
      <div className="hero-scroll">&darr;</div>
    </section>
  );
}
