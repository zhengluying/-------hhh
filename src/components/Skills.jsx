import { useNavigate } from 'react-router-dom';

const skills = [
  {
    title: '3D 建模',
    slug: '3d',
    desc: '擅长三维模型制作与材质贴图，能够独立完成从建模到渲染的全流程',
    icon: '3d', color: 'rgba(69, 123, 157, 0.12)', tags: ['Blender', 'Maya', '3ds Max', 'Substance'],
  },
  {
    title: 'AI 设计',
    slug: 'ai',
    desc: '熟练运用 Midjourney、Stable Diffusion 等 AI 工具进行创意视觉生成与风格探索',
    icon: 'ai', color: 'rgba(42, 157, 143, 0.12)', tags: ['Midjourney', 'Stable Diffusion', 'ComfyUI', 'AI 视频'],
  },
  {
    title: 'UE5',
    slug: 'ue',
    desc: '在 Unreal Engine 5 中进行场景搭建、材质编辑与实时渲染',
    icon: 'ue', color: 'rgba(107, 143, 58, 0.12)', tags: ['Unreal Engine', '蓝图', '光照', '材质'],
  },
  {
    title: 'AE',
    slug: 'ae',
    desc: '使用 After Effects 完成动态图形、MG 动画与视觉特效设计',
    icon: 'ae', color: 'rgba(199, 125, 255, 0.12)', tags: ['After Effects', 'Premiere', '动态图形', '特效合成'],
  },
];

export default function Skills() {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    if (slug) navigate('/category/' + slug);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">作品分类</h2>
        <p className="section-subtitle">PORTFOLIO</p>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              key={i}
              className="skill-card"
              style={{ animationDelay: (i * 0.08) + 's', cursor: s.slug ? 'pointer' : 'default' }}
              onClick={() => handleClick(s.slug)}
            >
              <div className="skill-icon" style={{ background: s.color, color: '#c9a96e' }}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map((t, j) => <span key={j} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
