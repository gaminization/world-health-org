import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whoLogo from './assets/who-logo.png';
import './News.css';

function News({ darkMode, toggleDarkMode, language, changeLanguage }) {
  const [expandedArticle, setExpandedArticle] = useState(null);
  
  const translations = {
    en: {
      title: 'Latest News',
      home: 'Home',
      projects: 'Projects',
      volunteering: 'Volunteering',
      healthPredictor: 'Health Predictor',
      news: 'News',
      mode: 'MODE',
      language: 'Language',
      readMore: 'Continue reading →',
      date: 'Date',
      category: 'Category',
      backToList: '← Back to news list',
      fullArticle: 'Full Article'
    },
    es: {
      title: 'Últimas Noticias',
      home: 'Inicio',
      projects: 'Proyectos',
      volunteering: 'Voluntariado',
      healthPredictor: 'Predictor de Salud',
      news: 'Noticias',
      mode: 'MODO',
      language: 'Idioma',
      readMore: 'Continuar leyendo →',
      date: 'Fecha',
      category: 'Categoría',
      backToList: '← Volver a la lista de noticias',
      fullArticle: 'Artículo Completo'
    },
    fr: {
      title: 'Dernières Actualités',
      home: 'Accueil',
      projects: 'Projets',
      volunteering: 'Bénévolat',
      healthPredictor: 'Prédicteur de Santé',
      news: 'Actualités',
      mode: 'MODE',
      language: 'Langue',
      readMore: 'Continuer la lecture →',
      date: 'Date',
      category: 'Catégorie',
      backToList: '← Retour à la liste des actualités',
      fullArticle: 'Article Complet'
    }
  };

  const t = translations[language];

  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: {
        en: 'WHO Launches New Initiative to Combat Antimicrobial Resistance',
        es: 'La OMS lanza nueva iniciativa para combatir la resistencia a los antimicrobianos',
        fr: 'L\'OMS lance une nouvelle initiative pour lutter contre la résistance aux antimicrobiens'
      },
      summary: {
        en: 'The World Health Organization has announced a global initiative to address the growing threat of antimicrobial resistance, which poses a significant risk to modern medicine and public health worldwide.',
        es: 'La Organización Mundial de la Salud ha anunciado una iniciativa global para abordar la creciente amenaza de la resistencia a los antimicrobianos, que representa un riesgo significativo para la medicina moderna y la salud pública en todo el mundo.',
        fr: 'L\'Organisation mondiale de la Santé a annoncé une initiative mondiale pour faire face à la menace croissante de la résistance aux antimicrobiens, qui pose un risque important pour la médecine moderne et la santé publique dans le monde entier.'
      },
      fullArticle: {
        en: 'The World Health Organization has announced a global initiative to address the growing threat of antimicrobial resistance, which poses a significant risk to modern medicine and public health worldwide. The initiative will focus on improving awareness of antimicrobial resistance, strengthening surveillance and research, optimizing the use of antimicrobial medicines, and ensuring sustainable investment in new medicines, diagnostic tools, vaccines, and other interventions. WHO Director-General emphasized that antimicrobial resistance is one of the most urgent health challenges of our time, threatening to undo a century of medical progress. The initiative will bring together governments, private sector partners, civil society organizations, and academic institutions to develop and implement effective strategies to combat this global health threat. Member states have committed to developing national action plans aligned with the global initiative, with support from WHO regional and country offices.',
        es: 'La Organización Mundial de la Salud ha anunciado una iniciativa global para abordar la creciente amenaza de la resistencia a los antimicrobianos, que representa un riesgo significativo para la medicina moderna y la salud pública en todo el mundo. La iniciativa se centrará en mejorar la conciencia sobre la resistencia a los antimicrobianos, fortalecer la vigilancia y la investigación, optimizar el uso de medicamentos antimicrobianos y garantizar una inversión sostenible en nuevos medicamentos, herramientas de diagnóstico, vacunas y otras intervenciones. El Director General de la OMS enfatizó que la resistencia a los antimicrobianos es uno de los desafíos de salud más urgentes de nuestro tiempo, amenazando con deshacer un siglo de progreso médico. La iniciativa reunirá a gobiernos, socios del sector privado, organizaciones de la sociedad civil e instituciones académicas para desarrollar e implementar estrategias efectivas para combatir esta amenaza para la salud global. Los estados miembros se han comprometido a desarrollar planes de acción nacionales alineados con la iniciativa global, con el apoyo de las oficinas regionales y nacionales de la OMS.',
        fr: 'L\'Organisation mondiale de la Santé a annoncé une initiative mondiale pour faire face à la menace croissante de la résistance aux antimicrobiens, qui pose un risque important pour la médecine moderne et la santé publique dans le monde entier. L\'initiative se concentrera sur l\'amélioration de la sensibilisation à la résistance aux antimicrobiens, le renforcement de la surveillance et de la recherche, l\'optimisation de l\'utilisation des médicaments antimicrobiens et la garantie d\'un investissement durable dans de nouveaux médicaments, outils de diagnostic, vaccins et autres interventions. Le Directeur général de l\'OMS a souligné que la résistance aux antimicrobiens est l\'un des défis de santé les plus urgents de notre époque, menaçant d\'annuler un siècle de progrès médical. L\'initiative réunira des gouvernements, des partenaires du secteur privé, des organisations de la société civile et des institutions académiques pour développer et mettre en œuvre des stratégies efficaces pour combattre cette menace pour la santé mondiale. Les États membres se sont engagés à élaborer des plans d\'action nationaux alignés sur l\'initiative mondiale, avec le soutien des bureaux régionaux et nationaux de l\'OMS.'
      },
      date: '2025-03-22',
      category: 'Global Health',
      image: 'amr-initiative.jpg'
    },
    // Add full article content to the other news items
    {
      id: 2,
      title: {
        en: 'WHO Reports Progress in Global Vaccination Efforts',
        es: 'La OMS informa sobre el progreso en los esfuerzos de vacunación global',
        fr: 'L\'OMS fait état de progrès dans les efforts de vaccination mondiale'
      },
      summary: {
        en: 'A new report from the World Health Organization shows significant progress in global vaccination coverage, with more children receiving life-saving vaccines than ever before. However, challenges remain in reaching the most vulnerable populations.',
        es: 'Un nuevo informe de la Organización Mundial de la Salud muestra un progreso significativo en la cobertura de vacunación global, con más niños recibiendo vacunas que salvan vidas que nunca antes. Sin embargo, persisten desafíos para llegar a las poblaciones más vulnerables.',
        fr: 'Un nouveau rapport de l\'Organisation mondiale de la Santé montre des progrès significatifs dans la couverture vaccinale mondiale, avec plus d\'enfants recevant des vaccins salvateurs que jamais auparavant. Cependant, des défis subsistent pour atteindre les populations les plus vulnérables.'
      },
      fullArticle: {
        en: 'A new report from the World Health Organization shows significant progress in global vaccination coverage, with more children receiving life-saving vaccines than ever before. However, challenges remain in reaching the most vulnerable populations. The report indicates that global immunization coverage has reached 85%, a historic high, with substantial gains in previously underserved regions. The success is attributed to coordinated international efforts, increased funding, and innovative approaches to vaccine delivery in remote areas. Despite this progress, approximately 20 million children worldwide still miss out on basic vaccines each year, primarily in conflict zones, remote rural areas, and urban slums. The COVID-19 pandemic initially disrupted routine immunization services, but most countries have now recovered and strengthened their vaccination programs. WHO is working with partners to implement targeted strategies to reach zero-dose children and close persistent equity gaps in immunization coverage. The report also highlights the successful introduction of new vaccines, including those for malaria, dengue, and HPV, into national immunization programs in low and middle-income countries.',
        es: 'Un nuevo informe de la Organización Mundial de la Salud muestra un progreso significativo en la cobertura de vacunación global, con más niños recibiendo vacunas que salvan vidas que nunca antes. Sin embargo, persisten desafíos para llegar a las poblaciones más vulnerables. El informe indica que la cobertura de inmunización global ha alcanzado el 85%, un máximo histórico, con ganancias sustanciales en regiones previamente desatendidas. El éxito se atribuye a esfuerzos internacionales coordinados, mayor financiamiento y enfoques innovadores para la entrega de vacunas en áreas remotas. A pesar de este progreso, aproximadamente 20 millones de niños en todo el mundo todavía se pierden las vacunas básicas cada año, principalmente en zonas de conflicto, áreas rurales remotas y barrios marginales urbanos. La pandemia de COVID-19 inicialmente interrumpió los servicios de inmunización de rutina, pero la mayoría de los países ahora se han recuperado y han fortalecido sus programas de vacunación. La OMS está trabajando con socios para implementar estrategias dirigidas a llegar a los niños con cero dosis y cerrar las brechas persistentes de equidad en la cobertura de inmunización. El informe también destaca la exitosa introducción de nuevas vacunas, incluidas las de malaria, dengue y VPH, en los programas nacionales de inmunización en países de ingresos bajos y medios.',
        fr: 'Un nouveau rapport de l\'Organisation mondiale de la Santé montre des progrès significatifs dans la couverture vaccinale mondiale, avec plus d\'enfants recevant des vaccins salvateurs que jamais auparavant. Cependant, des défis subsistent pour atteindre les populations les plus vulnérables. Le rapport indique que la couverture vaccinale mondiale a atteint 85%, un niveau historiquement élevé, avec des gains substantiels dans les régions auparavant mal desservies. Le succès est attribué à des efforts internationaux coordonnés, à un financement accru et à des approches innovantes pour la livraison de vaccins dans les zones reculées. Malgré ces progrès, environ 20 millions d\'enfants dans le monde ne reçoivent toujours pas les vaccins de base chaque année, principalement dans les zones de conflit, les zones rurales reculées et les bidonvilles urbains. La pandémie de COVID-19 a initialement perturbé les services de vaccination de routine, mais la plupart des pays ont maintenant récupéré et renforcé leurs programmes de vaccination. L\'OMS travaille avec des partenaires pour mettre en œuvre des stratégies ciblées pour atteindre les enfants à dose zéro et combler les écarts persistants d\'équité dans la couverture vaccinale. Le rapport souligne également l\'introduction réussie de nouveaux vaccins, notamment contre le paludisme, la dengue et le VPH, dans les programmes nationaux de vaccination des pays à revenu faible et intermédiaire.'
      },
      date: '2025-03-15',
      category: 'Immunization',
      image: 'vaccination-progress.jpg'
    },
    // Continue with the other articles...
  ];

  // Format date based on language
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (language === 'en') {
      return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    } else if (language === 'es') {
      return new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    } else if (language === 'fr') {
      return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    }
  };

  const handleReadMore = (articleId) => {
    setExpandedArticle(articleId);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="logo">
          <img src={whoLogo} alt="WHO Logo" className="who-logo" />
          <span>World Health Organization</span>
        </div>
        <nav>
          <Link to="/" className="nav-item">{t.home}</Link>
          <Link to="/projects" className="nav-item">{t.projects}</Link>
          <Link to="/volunteering" className="nav-item">{t.volunteering}</Link>
          <Link to="/health-predictor" className="nav-item">{t.healthPredictor}</Link>
          <Link to="/news" className="nav-item active">{t.news}</Link>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? '☀️' : '🌙'} {t.mode}
          </button>
          <div className="language-selector">
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">🇬🇧 EN</option>
              <option value="es">🇪🇸 ES</option>
              <option value="fr">🇫🇷 FR</option>
            </select>
          </div>
        </nav>
      </header>

      <main className="news-container">
        <h1>{t.title}</h1>
        
        {expandedArticle ? (
          // Full article view
          <div className="expanded-article">
            <button 
              className="back-button" 
              onClick={() => setExpandedArticle(null)}
            >
              {t.backToList}
            </button>
            
            {newsArticles.filter(article => article.id === expandedArticle).map(article => (
              <div key={article.id} className="full-article">
                <div className="article-image-container full-width">
                  <div className="article-image-placeholder"></div>
                </div>
                <h2>{article.title[language]}</h2>
                <div className="article-meta">
                  <span className="article-date">{t.date}: {formatDate(article.date)}</span>
                  <span className="article-category">{t.category}: {article.category}</span>
                </div>
                <div className="article-full-content">
                  <p>{article.fullArticle[language]}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Article list view
          <div className="news-articles">
            {newsArticles.map((article) => (
              <div key={article.id} className="news-article">
                <div className="article-image-container">
                  <div className="article-image-placeholder"></div>
                </div>
                <div className="article-content">
                  <h2>{article.title[language]}</h2>
                  <div className="article-meta">
                    <span className="article-date">{t.date}: {formatDate(article.date)}</span>
                    <span className="article-category">{t.category}: {article.category}</span>
                  </div>
                  <p className="article-summary">{article.summary[language]}</p>
                  <button 
                    className="read-more-link"
                    onClick={() => handleReadMore(article.id)}
                  >
                    {t.readMore}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default News;
