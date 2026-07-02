export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">个人简介</h2>
        <p className="section-subtitle">ABOUT</p>
        <div className="about-grid">
          <div className="about-text">
            <h2>郑璐滢</h2>
            <p className="bio">
              专注于视觉设计与品牌塑造，熟练运用 AI 设计工具、三维建模与虚幻引擎等前沿技术。
              擅长将艺术审美与技术能力相结合，创作出兼具视觉冲击力与品牌辨识度的设计作品。
              不断探索 AI 与设计融合的新可能，致力于为用户带来惊喜的视觉体验。
            </p>
            <div className="about-contact">
              <div className="contact-item">
                <strong>邮箱</strong>
                2310652510@qq.com
              </div>
              <div className="contact-item">
                <strong>电话</strong>
                18312932623
              </div>
              <div className="contact-item">
                <strong>微信</strong>
                zzlylylyly
              </div>
              <div className="contact-item">
                <strong>服务范围</strong>
                品牌/视觉/AI 设计
              </div>
            </div>
            <div className="stats">
              <div className="stat-card">
                <div className="number">50+</div>
                <div className="label">完成项目</div>
              </div>
              <div className="stat-card">
                <div className="number">3+</div>
                <div className="label">年经验</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
