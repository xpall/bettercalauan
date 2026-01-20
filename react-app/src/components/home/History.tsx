'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItem {
  year: string;
  content: React.ReactNode;
}

interface HistoryCard {
  icon: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  { 
    year: '1572', 
    content: <>Captain <strong>Juan de Salcedo</strong> passed through Laguna and Tayabas on his way to Bicol, taking notice of Calauan&apos;s fertile soil.</> 
  },
  { 
    year: '1582', 
    content: <>Spanish authorities established a town government two kilometers from present Poblacion, in what is now <strong>Barrio Mabacan</strong>. The town was named <em>Calauan</em> from Tagalog word <em>kalawang</em> (rust).</> 
  },
  { 
    year: '1703', 
    content: <>Following an <strong>epidemic in 1694</strong>, town was relocated from its original site in <strong>Barrio Mabacan</strong> to its present location at fork of three roads leading to San Pablo, Santa Cruz, and Manila.</> 
  },
  { 
    year: '1800s', 
    content: <>When <strong>Bay</strong> was designated as provincial capital of Laguna, Calauan became a sitio of Bay and served as a passage for merchants traveling to Southern Luzon.</> 
  },
  { 
    year: '1812', 
    content: <>A wealthy Spaniard named <strong>Iñigo</strong> bought large tracts of land in Calauan, which became known as <strong>Hacienda Calauan</strong>. The estate would later be inherited by his descendants, Roxas family.</> 
  },
  { 
    year: '1897', 
    content: <><strong>Basilio Geiroza</strong> (Cabesang Basilio) and his men routed a battalion of <em>guardia civiles</em> in a five-hour battle in Barrio Cupangan (now Lamot I) during Philippine Revolution.</> 
  },
  { 
    year: '1902', 
    content: <>With establishment of civilian authority, Americans assigned <strong>Mariano Marfori</strong> as first <em>presidente</em> of Calauan.</> 
  },
  { 
    year: '1926', 
    content: <><strong>Hacienda Calauan</strong> financed the construction of a hospital, with Mariano O. Marfori Jr. serving as hospital director.</> 
  },
  { 
    year: '1939', 
    content: <>By request of President <strong>Manuel L. Quezon</strong>, Doña Margarita Roxas vda. de Soriano subdivided Hacienda Calauan and sold it to the tenants.</> 
  },
  { 
    year: '1945', 
    content: <>Filipino guerrillas, including the <strong>HUKBALAHAP</strong>, <strong>Hunters ROTC</strong>, and <strong>Marking Guerrillas</strong>, liberated Calauan from Japanese occupation as part of the Laguna liberation campaigns during World War II.</> 
  },
];

const historyCards: HistoryCard[] = [
  {
    icon: 'bi-droplet-fill',
    title: 'Origin of Name',
    description: 'Calauan derives from "kalawang" (rust). Legend says rusty-colored water seeped from holes dug for the church foundation, or from Macalawang Spring where rust-colored lumps surfaced.',
  },
  {
    icon: 'bi-person-fill',
    title: 'Calaueños',
    description: 'Residents of Calauan are called Calaueños. The town is home to industrious farmers who cultivate the fertile lands at the foothills of Mount Kalisungan.',
  },
  {
    icon: 'bi-star-fill',
    title: 'Patron Saints',
    description: 'San Isidro Labrador (St. Isidore the Laborer), patron of farmers, was installed as patron saint in 1787 along with San Roque, reflecting the town\'s rich agricultural heritage.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Land for the Farmers',
    description: 'In 1939, at the request of President Manuel L. Quezon, Hacienda Calauan was subdivided and sold to tenant farmers, ending decades of vast landholdings under the Roxas heirs.',
  },
  {
    icon: 'bi-signpost-split-fill',
    title: 'Crossroads of the South',
    description: 'The town sits at a strategic fork of three roads-leading southwest to San Pablo, southeast to Santa Cruz, and north to Manila-making it a key passage for merchants traveling to Southern Luzon.',
  },
  {
    icon: 'bi-tropical-storm',
    title: 'Sweet Laguna Pineapple',
    description: 'Calauan is known as the "Home of the Sweet Laguna Pineapple." The Pinya Festival is celebrated every May 15, coinciding with the feast of San Isidro Labrador.',
  },
];

export default function History() {
  const { t } = useLanguage();

  return (
    <section className="section history-section">
      <div className="container">
        <div className="home-stats-v2-header">
          <h2><i className="bi bi-book" aria-hidden="true" /> {t('home-brief-history')}</h2>
        </div>
        <div className="history-content">
          <div className="history-timeline">
            {timeline.map((item, index) => (
              <div 
                key={item.year} 
                className="timeline-item" 
                data-year={item.year}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="history-summary">
            {historyCards.map((card) => (
              <div key={card.title} className="history-card">
                <div className="history-card-icon">
                  <i className={`bi ${card.icon}`} />
                </div>
                <div className="history-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .history-section { background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%); }
        .history-section .home-stats-v2-header h2 { display: flex; align-items: center; gap: 10px; }
        .history-section .home-stats-v2-header h2 :global(i) { color: var(--color-primary); }
        .history-content { display: grid; grid-template-columns: 1fr 340px; gap: 32px; align-items: start; }
        .history-timeline { position: relative; padding-left: 28px; }
        .history-timeline::before { content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(180deg, var(--color-primary) 0%, rgba(0,50,160,0.2) 100%); border-radius: 2px; }
        .timeline-item { position: relative; padding-bottom: 20px; opacity: 0; animation: fadeInUp 0.5s ease forwards; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-marker { position: absolute; left: -28px; top: 4px; width: 14px; height: 14px; background: var(--color-bg); border: 3px solid var(--color-primary); border-radius: 50%; transition: all 0.3s ease; z-index: 1; }
        .timeline-item:hover .timeline-marker { background: var(--color-primary); transform: scale(1.2); box-shadow: 0 0 0 4px rgba(0,50,160,0.15); }
        .timeline-content { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 16px 18px; transition: all 0.3s ease; }
        .timeline-item:hover .timeline-content { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateX(4px); }
        .timeline-year { display: inline-block; background: var(--color-primary); color: white; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 8px; }
        .timeline-content :global(p) { font-size: 0.875rem; color: var(--color-text); margin: 0; line-height: 1.6; }
        .timeline-content :global(p strong) { color: var(--color-primary); }
        .timeline-content :global(p em) { font-style: italic; color: var(--color-text-light); }
        .history-summary { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 100px; }
        .history-card { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 20px; display: flex; gap: 14px; align-items: flex-start; transition: all 0.3s ease; }
        .history-card:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateY(-2px); }
        .history-card-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .history-card-icon :global(i) { color: white; font-size: 1.25rem; }
        .history-card-content h4 { font-size: 0.9375rem; font-weight: 600; color: var(--color-text); margin: 0 0 6px 0; }
        .history-card-content p { font-size: 0.8125rem; color: var(--color-text-light); margin: 0; line-height: 1.5; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .history-content { grid-template-columns: 1fr; } .history-summary { position: static; flex-direction: row; flex-wrap: wrap; } .history-card { flex: 1 1 280px; } }
        @media (max-width: 575px) { .history-summary { flex-direction: column; } .history-card { flex: 1 1 100%; } }
      `}</style>
    </section>
  );
}