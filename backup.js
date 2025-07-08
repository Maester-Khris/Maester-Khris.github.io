const portfolioProjects = [
  {
    projectId: 'ai-healthcare-city-monitor',           // unique slug for routing / modal look‑up
    title: 'AI Healthcare City Monitor',
    description:
      'End‑to‑end platform that predicts emergency‑room congestion across Toronto hospitals. '
      + 'Combines real‑time ambulance telemetry, AWS SageMaker inference, and Leaflet maps to help city planners reallocate staff dynamically.',
    keywords: ['AI', 'AWS Cloud ML deployment', 'Dynamic scheduling', 'Leaflet Map'],
    images: [
      'city_health_map.png',
    ],
    live_url: 'https://ai-healthcare-monitor.example.com',
    github: 'https://github.com/youruser/ai-city-monitor'
  },

  {
    projectId: 'firo-financial-csr-bot',
    title: 'Firo: Financial CSR Bot',
    description:
      'Gen‑AI assistant for customer‑support reps in banking. Fine‑tuned on 50k anonymized chats, '
      + 'deployed with Vertex AI and Dialogflow CX. React‑based front‑end provides real‑time confidence and source citations.',
    keywords: ['AI', 'LLM Fine‑tuning', 'Vertex AI', 'GCP', 'DialogFlow', 'React.js'],
    images: ['bot.png'],
    live_url: '',
    github: 'https://github.com/youruser/firo-csr-bot'
  },

  {
    projectId: 'remote-system-monitoring',
    title: 'Remote System Monitoring',
    description:
      'Python‑Django back end streaming server health metrics to a React dashboard. '
      + 'CI/CD with AWS CodePipeline, containerized via Docker and orchestrated on Kubernetes.',
    keywords: ['Python', 'Django', 'Kubernetes', 'Docker', 'React.js', 'AWS CodePipeline'],
    images: ['remote_monitoring_arch.png'],
    live_url: 'https://remote-monitor.example.com',
    github: 'https://github.com/youruser/remote-system-monitor'
  },

  {
    projectId: 'taskalert-full-monitoring',
    title: 'Taskalert Full UI',
    description:
      'Python‑Django back end streaming server health metrics to a React dashboard. '
      + 'CI/CD with AWS CodePipeline, containerized via Docker and orchestrated on Kubernetes.',
    keywords: ['Angular 19', 'Microfrontend', 'Native federation', 'NgRx', 'MongoDB'],
    images: ['remote_monitoring_arch.png'],
    live_url: 'https://remote-monitor.example.com',
    github: 'https://github.com/youruser/remote-system-monitor'
  },


  {
    projectId: 'public-powerbi-dashboard',
    title: 'Power BI Dashboard on Public Dataset',
    description:
      'Interactive Power BI report showcasing COVID‑19 vaccination trends. Demonstrates data modelling, calculated tables, and custom visuals.',
    keywords: ['DATA ANALYSIS', 'POWER BI', 'VISUALIZATION'],
    images: ['powerbi_dashboard.png'],
    live_url: '',
    github: ''
  },

  {
    projectId: 'skillrater-reactive-springboot',
    title: 'Reactive Springboot Skillrater App',
    description:
      'Gamified employee skill assessment built with Spring WebFlux, Dockerized MySQL, and a Vue.js admin panel. Supports 5k RPS with constant‑time rating queries.',
    keywords: ['JAVA', 'SPRINGBOOT', 'Rest API', 'Docker', 'MySQL'],
    images: ['skillrater.png'],
    live_url: 'https://skillrater.example.com',
    github: 'https://github.com/youruser/skillrater'
  },

  {
    projectId: 'insight-hub-microservices',
    title: 'Insight Hub: Springboot Microservices',
    description:
      'Micro‑service suite for real‑time analytics in manufacturing. Uses Kafka for event streaming, LDAP for SSO, and MSSQL for OLTP storage.',
    keywords: ['SPRINGBOOT', 'MSSQL', 'T‑SQL', 'LDAP', 'KAFKA'],
    images: ['insighthub.png'],
    live_url: '',
    github: 'https://github.com/youruser/insight-hub'
  },

  {
    projectId: 'taskalert-frontend',
    title: 'Taskalert v2: Frontend Application',
    description:
      'Angular 14 SPA with Material UI theme. Implements offline caching, notifications, and Netlify edge functions for realtime updates.',
    keywords: ['ANGULAR', 'ANGULAR MATERIAL', 'NETLIFY'],
    images: ['taskalert_front.png'],
    live_url: 'https://taskalert.netlify.app',
    github: ''
  },

  {
    projectId: 'taskalert-backend',
    title: 'Taskalert v2: Backend Application',
    description:
      'Event‑driven Django API with MongoDB persistence and RabbitMQ message broker. Provides websocket push for task status changes.',
    keywords: ['PYTHON', 'DJANGO', 'MONGODB', 'RABBITMQ'],
    images: ['taskalert_backend.png'],
    live_url: '',
    github: 'https://github.com/youruser/taskalert-backend'
  },

  {
    projectId: 'ai-chat-filter',
    title: 'Python AI Real‑Time Chat Message Filtering',
    description:
      'Hybrid Django / Node.js pipeline that classifies chat toxicity in < 50 ms using a custom BERT distilled model and Apache Kafka streams.',
    keywords: ['PYTHON', 'DJANGO', 'NODE.JS', 'APACHE KAFKA'],
    images: ['django_nodejs.png'],
    live_url: '',
    github: ''
  },

  {
    projectId: 'python-async-scraper',
    title: 'Python Asynchronous Web Data Scraper',
    description:
      'High‑throughput scraper using Django Channels (ASGI), Selenium Grid, and Redis queues—capable of 1 M pages/day with polite rate‑limiting.',
    keywords: ['Python', 'Django', 'ASGI', 'Selenium'],
    images: ['scrapper.png'],
    live_url: 'https://scraper.example.com',
    github: 'https://github.com/youruser/async-scraper'
  },

  {
    projectId: 'advanced-nlp-text-processing',
    title: 'Python Advanced NLP Text Processing',
    description:
      'Microservice exposes BERT‑based keyword extraction and sentiment APIs, integrated with SpaCy pipelines and served via Flask+Daphne.',
    keywords: ['Python', 'Flask', 'Daphne', 'BERT LLM', 'NLP', 'SpaCy'],
    images: ['textninja.png'],
    live_url: '',
    github: ''
  },

  {
    projectId: 'mobile-ui-figma',
    title: 'Mobile Application UI & Interaction Design',
    description:
      'Figma prototype for a social fitness app—includes dark mode, micro‑interaction animations, and WCAG‑compliant colour palette.',
    keywords: ['FIGMA'],
    images: ['portfolio-05.jpg'],
    live_url: 'https://figma.com/@mobile-ui-demo',
    github: ''
  }
];

/* ---------- Helper: build Bootstrap carousel ---------- */
function buildCarousel(project) {
  if (project.images.length === 1) {
    return `<img src="assets/img/${project.images[0]}"
                 class="img-fluid rounded mb-4 w-100"
                 alt="${project.title}" />`;
  }

  const id = `${project.projectId}-carousel`;
  const indicators = project.images.map((_, i) => `
    <button type="button" data-bs-target="#${id}"
            data-bs-slide-to="${i}"
            ${i === 0 ? 'class="active"' : ''}
            aria-label="Slide ${i + 1}"></button>
  `).join('');

  const slides = project.images.map((img, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="assets/img/${img}" class="d-block w-100" alt="${project.title} slide ${i + 1}">
    </div>
  `).join('');

  return `
    <div id="${id}" class="carousel slide mb-4" data-bs-ride="carousel">
      <div class="carousel-indicators">${indicators}</div>
      <div class="carousel-inner rounded">${slides}</div>
      <button class="carousel-control-prev" type="button"
              data-bs-target="#${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
              data-bs-target="#${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded",()=>{
  /* ---------- Revised portfolio data model (example content) ---------- */
  const grid = document.getElementById('portfolio-list');
  const modalRoot = document.getElementById('modals-root');

  /* ---------- Where to inject the cards ---------- */
  // const container = document.getElementById('portfolio-list'); // <div id="portfolio-list" class="row"></div>
  // if (!container) return; // failsafe

  /* ---------- Build & inject markup ---------- */
  // portfolioProjects.forEach(project => {
  //   const col = document.createElement('div');
  //   col.className = 'col-lg-4 col-md-4 portfolio-item isotope-item filter-web';

  //   col.innerHTML = `
  //     <div class="portfolio-card">
  //       <div class="portfolio-image">
  //         <img src="assets/img/${project.images[0]}" class="img-fluid" alt="${project.title}" loading="lazy">
  //         <div class="portfolio-overlay">
  //           <div class="portfolio-actions">
  //             <a href="assets/img/${project.images[0]}" class="glightbox preview-link" data-gallery="portfolio-gallery-web">
  //               <i class="bi bi-eye"></i>
  //             </a>
  //             ${project.live_url
  //               ? `<a href="${project.live_url}" class="details-link" target="_blank" rel="noopener">
  //                   <i class="bi bi-box-arrow-up-right"></i>
  //                 </a>`
  //               : '' /* ↩️ render nothing when live_url is empty */
  //             }
  //           </div>
  //         </div>
  //       </div>
  //       <div class="portfolio-content">
  //         <span class="category">${project.keywords.join(', ')}</span>
  //         <h3>${project.title}</h3>
  //       </div>
  //     </div>
  //   `;

  //   container.appendChild(col);
  // });


  portfolioProjects.forEach(project => {
    /* ----- Card ----- */
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';

    col.innerHTML = `
      <div class="portfolio-card">
        <div class="ratio ratio-16x9">
          <img src="assets/img/${project.images[0]}"
               class="img-fluid object-fit-cover w-100"
               alt="${project.title}" loading="lazy" />
        </div>

        <div class="portfolio-overlay">
          <div class="portfolio-actions">
            <a href="#"
               data-bs-toggle="modal"
               data-bs-target="#${project.projectId}-modal"
               title="View details">
               <i class="bi bi-eye"></i>
            </a>
          </div>
        </div>

        <div class="p-3">
          <span class="text-secondary small">${project.keywords.slice(0, 3).join(' · ')}</span>
          <h5 class="mt-1 mb-0 fw-semibold">${project.title}</h5>
        </div>
      </div>
    `;
    grid.appendChild(col);

    /* ----- Modal ----- */
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = `${project.projectId}-modal`;
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title">${project.title}</h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body pt-0">
            ${buildCarousel(project)}
            <p class="lh-lg">${project.description}</p>
          </div>

          <div class="modal-footer border-0 pt-0">
            ${project.github
              ? `<a href="${project.github}" target="_blank"
                    class="btn btn-outline-dark">
                    <i class="bi bi-github me-2"></i>GitHub
                 </a>` : ''}
            ${project.live_url
              ? `<a href="${project.live_url}" target="_blank"
                    class="btn btn-primary">
                    <i class="bi bi-box-arrow-up-right me-2"></i>Live Demo
                 </a>` : ''}
          </div>
        </div>
      </div>
    `;
    modalRoot.appendChild(modal);
  });
});
