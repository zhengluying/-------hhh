export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>一起 <span>创造</span> 吧</h2>
        <p>如果你有兴趣合作，或者只是想打个招呼，随时联系我</p>
        <div className="contact-details">
          <div className="contact-detail-item">
            <span className="contact-detail-icon">&#9993;</span>
            2310652510@qq.com
          </div>
          <div className="contact-detail-item">
            <span className="contact-detail-icon">&#9990;</span>
            18312932623
          </div>
          <div className="contact-detail-item">
            <span className="contact-detail-icon">&#64;</span>
            zzlylylyly
          </div>
        </div>
        <div className="contact-links">
          <a href="mailto:2310652510@qq.com" className="contact-link primary">发送邮件</a>
          <a href="#" className="contact-link outline">微信号: zzlylylyly</a>
          <a href="#" className="contact-link outline">站酷</a>
          <a href="#" className="contact-link outline">Behance</a>
        </div>
        <p className="contact-footer-text">&copy; 2026 郑璐滢 · All Rights Reserved</p>
      </div>
    </section>
  );
}
