export const portfolioProjects = [
    {
        projectId: 'commitr-session-tracker',
        category: 'fullstack',
        shortDesc: 'Developer focus tracker with GitHub-style activity heatmap',
        type: 'Fullstack',
        year: '2025',
        thumbWord: 'FOCUS',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0d1220 100%)',
        highlights: [
            { title: 'Session Engine', detail: 'Real-time tracking with idle, active and paused state management' },
            { title: 'Activity Heatmap', detail: '365-day GitHub-style contribution heatmap for focus visualization' },
            { title: 'Project Scoping', detail: 'Color-coded labeling with per-project contribution breakdowns' },
            { title: 'Auth Layer', detail: 'Per-user data isolation with clean authentication flow' },
        ],
        title: 'Commitr: Developer Focus & Session Tracker',
        description:
            'Full-stack productivity application built for developers who treat deep work as a engineering discipline. ' +
            'Implements a session-based time tracking engine with project scoping, color-coded labeling, and real-time state management across idle, active and paused session states. ' +
            'Features a Stats module with a GitHub-style 365-day activity heatmap, weekly/monthly/yearly bar chart aggregations and per-project contribution breakdowns — ' +
            'giving engineers a longitudinal view of their focus patterns. ' +
            'Architected with a mobile-first responsive layout, settings management for session defaults, and a clean auth layer with per-user data isolation.',
        keywords: ['React.js', 'Node.js', 'PostgreSQL', 'Data Visualization', 'Fullstack'],
        images: [
            'commitr-home.png',
            'commitr-mobile-showcase.png',
            'commitr-stats-contrib.png',
            'commitr-stats-summary.png',
        ],
        live_url: 'https://commitr.nknext.dev/',
        github: 'https://github.com/Maester-Khris/commitr'
    },
    {
        projectId: 'ai-evaluator-observability',
        category: 'ai',
        shortDesc: 'Agentic RAG evaluation suite with HITL dashboard',
        type: 'AI System',
        year: '2024',
        thumbWord: 'AGENT',
        thumbGradient: 'linear-gradient(135deg,#080f0c 0%,#0c1a10 100%)',
        highlights: [
            { title: 'Agentic RAG', detail: 'Multi-step reasoning loops with self-correction for hallucination reduction' },
            { title: 'Hybrid Retrieval', detail: 'Qdrant semantic + PostgreSQL relational for precision recall' },
            { title: 'HITL Dashboard', detail: 'Human-in-the-loop RLHF feedback with Zustand state management' },
            { title: 'Observability', detail: 'Per-step evaluation traces with latency and quality scoring' },
        ],
        title: 'AI Evaluator: Agentic Observability Platform',
        description:
            'A high-fidelity evaluation suite designed to bridge the gap between experimental LLM outputs and production-grade reliability. ' +
            'Engineered an Agentic RAG architecture that moves beyond zero-shot prompting by implementing multi-step reasoning loops, ' +
            'self-correction mechanisms for hallucination reduction, and a hybrid retrieval strategy using Qdrant (semantic) and PostgreSQL (relational). ' +
            'Features a custom-built HITL (Human-in-the-Loop) dashboard to facilitate RLHF, using Zustand for low-latency state management across complex evaluation traces.',
        keywords: ['Agentic Workflows', 'Qdrant Vector DB', 'LangGraph', 'Zustand', 'Python'],
        images: [
            'aievaluator.png',
        ],
        live_url: 'https://ai-evaluator-mk72409rm-nkops-projects.vercel.app',
        github: 'https://github.com/Maester-Khris/AI-Evaluator'
    },
    {
        projectId: 'postair-content-sharing',
        category: 'backend',
        shortDesc: 'Sub-50ms p99 content distribution with Transactional Outbox',
        type: 'Backend System',
        year: '2024',
        thumbWord: 'STREAM',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0a1020 100%)',
        highlights: [
            { title: 'Redis Streams', detail: 'Decoupled I/O from event loop — sub-50ms p99 under load' },
            { title: 'Transactional Outbox', detail: 'Guaranteed consistency across MongoDB and Kafka' },
            { title: 'Thundering Herd', detail: 'Back-pressure + async messaging prevents cascade failures' },
            { title: 'Atomic State', detail: 'React Context optimized for lean re-render cycles' },
        ],
        title: 'Postair: High-Throughput Content Engine',
        description:
            'An enterprise-grade content distribution platform architected to solve the "thundering herd" problem in real-time sharing. ' +
            'Utilizes a non-blocking Node.js core with Redis Streams to decouple heavy I/O operations from the main event loop, ensuring sub-50ms p99 latency under load. ' +
            'Implemented the Transactional Outbox pattern to guarantee data consistency across MongoDB and Kafka, and optimized frontend delivery using React Context for atomic auth state and efficient re-render cycles.' +
            'reducing p99 latency by 48% through aggressive caching and lean query optimization.',
        keywords: ['Node.js', 'Redis Streams', 'EDA', 'MongoDB', 'Performance Optimization'],
        images: [
            'ng-postair.png',
        ],
        live_url: 'https://postair.nknext.dev/',
        github: 'https://github.com/Maester-Khris/Angular-state-management'
    },
    {
        projectId: 'ai-healthcare-city-monitor',
        category: 'cloud',
        shortDesc: 'Real-time ER congestion prediction across Toronto hospitals',
        type: 'Cloud ML',
        year: '2024',
        thumbWord: 'PREDICT',
        thumbGradient: 'linear-gradient(135deg,#0c0814 0%,#140d20 100%)',
        highlights: [
            { title: 'SageMaker', detail: 'Real-time ambulance telemetry fed to AWS SageMaker inference endpoints' },
            { title: 'Dynamic Scheduling', detail: 'Planners reallocate staff using live congestion scores' },
            { title: 'Leaflet Maps', detail: 'Hospital heatmap with real-time updates across Toronto' },
            { title: 'Event-driven', detail: 'Streaming telemetry pipeline for low-latency model calls' },
        ],
        title: 'AI Healthcare City Monitor',
        description:
            'End‑to‑end platform that predicts emergency‑room congestion across Toronto hospitals. '
            + 'Combines real‑time ambulance telemetry, AWS SageMaker inference, and Leaflet maps to help city planners reallocate staff dynamically.',
        keywords: ['AI', 'AWS Cloud ML deployment', 'Dynamic scheduling', 'Leaflet Map'],
        images: [
            'city_health_map.png',
        ],
        live_url: 'https://medicoord.nknext.dev/',
        github: 'https://github.com/Maester-Khris/ai-healthtech-coordinator'
    },
    {
        projectId: 'ai-healthcare-ml',
        category: 'cloud',
        shortDesc: 'Gemini 2.5 Flash fine-tuned on Vertex AI for severity triage',
        type: 'ML Deployment',
        year: '2024',
        thumbWord: 'FINETUNE',
        thumbGradient: 'linear-gradient(135deg,#0c0814 0%,#140d20 100%)',
        highlights: [
            { title: 'LLM Fine-tuning', detail: 'Gemini 2.5 Flash fine-tuned on 237 de-identified symptom narratives' },
            { title: 'Vertex AI', detail: 'Autoscaling endpoint with min-replica to prevent cold starts' },
            { title: 'Data Augmentation', detail: 'GPT-generated paraphrases balanced minority severity classes' },
            { title: 'Compliance', detail: 'VPC-SC + vertex encryption — private perimeter for HIPAA/PIPEDA' },
        ],
        title: 'AI Healthcare sickness severity classification',
        description: `<p>I designed and deployed a patient‑sickness–severity classifier that interprets short, free‑text symptom descriptions and assigns one of four urgency levels: "routine", "moderate", "severe" or "critical". By fine‑tuning Google's Gemini 2.5 Flash on a tightly curated medical dataset and serving the model on GCP Vertex AI, the solution enables real‑time triage inside tele‑health workflows.</p>
            <p><strong>Custom Dataset</strong></p>
            <ul>
            <li>Collected 237 de‑identified symptom narratives sourced from prior consultations.</li>
            <li>Each record was manually labelled by clinicians with one of four severity classes.</li>
            <li>Performed text normalisation and removed protected health information to respect HIPAA and PIPEDA rules.</li>
            </ul>
            <p><strong>Model Development</strong></p>
            <ul>
            <li>Started from the lightweight <strong>Gemini 2.5 Flash</strong> checkpoint hosted on Vertex AI Model Garden.</li>
            <li>Fine‑tuned using supervised instruction‑tuning; the prompt template shows a symptom sentence followed by a special <code>&lt;class&gt;</code> token.</li>
            <li>Applied stratified 80‑20 split and early‑stopping to avoid over‑fitting on the small corpus.</li>
            </ul>
            <p><strong>Deployment Pipeline</strong></p>
            <ul>
            <li>Packaged the fine‑tuned checkpoint as a custom model artifact and uploaded it to Vertex AI.</li>
            <li>Created an <strong>Endpoint</strong> with automatic scaling and integrated Stackdriver logging for auditability.</li>
            <li>Wrapped prediction logic in a Cloud Function exposed as a REST endpoint; the function cleans incoming text, calls the Vertex endpoint, and maps logits to human‑readable severity labels.</li>
            <li>Used Cloud Endpoints API Key + IAM Service Account to secure both internal and external calls.</li>
            </ul>
            <p><strong>Key Challenges & Solutions</strong></p>
            <ul>
            <li><strong>Small dataset</strong> – Augmented minority classes with GPT‑generated paraphrases until class distribution was balanced.</li>
            <li><strong>Regulatory compliance</strong> – Implemented vertex‑level encryption and VPC‑SC to keep traffic inside the private perimeter.</li>
            <li><strong>Cold‑start latency</strong> – Enabled min‑replica autoscaling on Vertex AI to maintain one warm pod at all times.</li>
            </ul>
            <p><strong>Next Steps</strong></p>
            <ul>
            <li>Append confidence scores to predictions for downstream UI colour‑coding.</li>
            <li>Introduce continual‑learning jobs that retrain weekly on newly triaged cases.</li>
            <li>Add Cloud Monitoring dashboards that trigger on spikes in "critical" predictions.</li>
            </ul>
            <p>The result is a production‑grade, low‑latency service that helps clinicians prioritise patient care while meeting stringent privacy and performance requirements.</p>
            `,
        keywords: ['GCP', 'Vertex AI', 'LLM Fine-tuning', 'Ml Model deployment'],
        images: ['vertexai.png', 'llm_finetuning.png', 'aicoordinator_arch.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/ai-healthtech-coordinator/tree/main/fine_tuning_training'
    },
    {
        projectId: 'firo-financial-csr-bot',
        category: 'ai',
        shortDesc: 'Gen-AI assistant for banking CSR reps with confidence scores',
        type: 'Conversational AI',
        year: '2024',
        thumbWord: 'CONVERSE',
        thumbGradient: 'linear-gradient(135deg,#080f0c 0%,#0c1a10 100%)',
        highlights: [
            { title: 'Fine-tuned Model', detail: 'Trained on 50k anonymized chats for banking domain accuracy' },
            { title: 'Source Citations', detail: 'Real-time confidence display with citations in React UI' },
            { title: 'Dialogflow CX', detail: 'Multi-turn conversation management with intent branching' },
            { title: 'Vertex AI', detail: 'GCP deployment with Vertex AI for scalable inference' },
        ],
        title: 'Firo: Financial CSR Bot',
        description:
            'Gen‑AI assistant for customer‑support reps in banking. Fine‑tuned on 50k anonymized chats, '
            + 'deployed with Vertex AI and Dialogflow CX. React‑based front‑end provides real‑time confidence and source citations.',
        keywords: ['AWS Bedrock', 'React.js'],
        images: ['bot.png'],
        live_url: 'https://financial-csr-aibot-47pg.vercel.app/',
        github: 'https://github.com/Maester-Khris/financial-csr-aibot'
    },
    {
        projectId: 'ml-text-classifier',
        category: 'data',
        shortDesc: 'Finance topic classifier on 50k transcripts with SBERT',
        type: 'Data Science',
        year: '2024',
        thumbWord: 'CLASSIFY',
        thumbGradient: 'linear-gradient(135deg,#14090a 0%,#200d0c 100%)',
        highlights: [
            { title: 'SBERT Embeddings', detail: '768-D vectors with SVC, Linear SVM and LR comparison' },
            { title: 'Class Imbalance', detail: 'Synonym replacement + paraphrasing augmented minority classes' },
            { title: 'Zero-shot Labels', detail: 'sentence-transformers generated fine-grained finance topics' },
            { title: 'PII Governance', detail: 'Names, accounts, emails tokenised before any processing' },
        ],
        title: 'Firo ML: User interaction topic classification',
        description: `<p> I built an end‑to‑end topic‑classification service that tags free‑form customer messages with precise business areas, streamlining triage in a highly regulated financial‑services environment.</p>
            <p><strong>Data Acquisition</strong></p>
            <ul>
            <li>Started from a Kaggle corpus of transcribed user interactions, each carrying a generic topic label.</li>
            <li>Many of those labels were unsuitable for finance, so they served only as a rough initial scaffold.</li>
            </ul>
            <p><strong>Main Challenges & Mitigations</strong></p>
            <ul>
            <li><strong>Too few domain‑relevant classes</strong> – I expanded the label set with zero‑shot classification via sentence‑transformers to create fine‑grained finance topics such as <em>Debit Card Disputes</em> and <em>Investment Queries</em>.</li>
            <li><strong>Severe class imbalance</strong> – Minority classes were boosted using data‑augmentation techniques implemented with an open‑source Python library for synonym replacement and paraphrasing.</li>
            <li><strong>Data‑governance constraints</strong> – All message text was anonymised before processing; names, account numbers and emails were tokenised to preserve privacy.</li>
            </ul>
            <p><strong>Modelling Workflow</strong></p>
            <ul>
            <li>Embedded each anonymised sentence with a compact Sentence‑BERT encoder (768‑D vectors).</li>
            <li>Trained multiple classifiers: SVC, Linear SVM, Logistic Regression, Random Forest and HistGradientBoosting.</li>
            <li>Selected the top performer through a naïve "best‑accuracy wins" vote; Linear SVM took the crown in the current run.</li>
            </ul>
            <p><strong>Key Takeaways</strong></p>
            <ul>
            <li>Label quality mattered more than exotic model tuning; zero‑shot expansion delivered the biggest accuracy jump.</li>
            <li>Responsible AI was non‑negotiable; the tokenisation pipeline ensured no client PII ever left the secure perimeter.</li>
            <li>A lean selection strategy gave faster iteration freedom while leaving room for ensembles later on.</li>
            </ul>
            <p><strong>Next Steps</strong></p>
            <ul>
            <li>Add confidence‑weighted routing so low‑score predictions auto‑escalate to human agents.</li>
            <li>Implement a nightly continual‑learning loop that retrains on mis‑routed tickets and fresh data.</li>
            <li>Ship an explainability dashboard (SHAP or LIME) to keep compliance teams in the loop.</li>
            </ul>
            <p>The result is a production‑ready classifier that meets accuracy targets while upholding stringent financial‑data standards.</p>
            `,
        keywords: ['Data Science', 'Machine Learning', 'NLP', 'Topic Classification', 'ML Model Deployment'],
        images: ['multiclass classification.png', 'eda1.png', 'eda2.png', 'model_deployment.png'],
        live_url: 'https://colab.research.google.com/drive/1Rshf8DBmcvw6QUJ_T-KettrUG8WgxewU?usp=sharing',
        github: 'https://github.com/Maester-Khris/financial-csr-aibot/blob/main/notebooks'
    },
    {
        projectId: 'remote-system-monitoring',
        category: 'cloud',
        shortDesc: 'Streaming server metrics dashboard on Django + K8s + CodePipeline',
        type: 'DevOps',
        year: '2023',
        thumbWord: 'MONITOR',
        thumbGradient: 'linear-gradient(135deg,#0c0814 0%,#140d20 100%)',
        highlights: [
            { title: 'Real-time Metrics', detail: 'Django backend streams health data to React dashboard via SSE' },
            { title: 'Kubernetes', detail: 'Containerized workloads orchestrated on K8s cluster' },
            { title: 'CI/CD', detail: 'AWS CodePipeline automates build, test and deploy stages' },
            { title: 'Docker', detail: 'Fully containerized backend and frontend services' },
        ],
        title: 'Remote System Monitoring',
        description:
            'Python‑Django back end streaming server health metrics to a React dashboard. '
            + 'CI/CD with AWS CodePipeline, containerized via Docker and orchestrated on Kubernetes.',
        keywords: ['Python', 'Django', 'Kubernetes', 'Docker', 'React.js', 'AWS CodePipeline'],
        images: ['remote_monitoring_arch.png'],
        live_url: 'https://react-client-seven.vercel.app/monitoring',
        github: 'https://github.com/Maester-Khris/remote-monitoring'
    },
    {
        projectId: 'taskalert-full-monitoring',
        category: 'fullstack',
        shortDesc: 'Angular 19 microfrontend with native federation and NgRx',
        type: 'Fullstack',
        year: '2024',
        thumbWord: 'FEDERATE',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0d1220 100%)',
        highlights: [
            { title: 'Microfrontend', detail: 'Angular 19 native federation for runtime remote loading' },
            { title: 'NgRx', detail: 'Centralized store synchronized across federated micro-apps' },
            { title: 'MongoDB', detail: 'Document store for flexible task and user data modeling' },
            { title: 'No Build Coupling', detail: 'Remotes loaded at runtime without build-time dependencies' },
        ],
        title: 'Taskalert Full UI',
        description:
            'Python‑Django back end streaming server health metrics to a React dashboard. '
            + 'CI/CD with AWS CodePipeline, containerized via Docker and orchestrated on Kubernetes.',
        keywords: ['Angular 19', 'Microfrontend', 'Native federation', 'NgRx', 'MongoDB'],
        images: ['taskalert_front.png'],
        live_url: '',
        github: ''
    },
    {
        projectId: 'public-powerbi-dashboard',
        category: 'data',
        shortDesc: 'Power BI dashboard with storytelling on public dataset',
        type: 'Data Visualization',
        year: '2025',
        thumbWord: 'ANALYSE',
        thumbGradient: 'linear-gradient(135deg,#14090a 0%,#200d0c 100%)',
        highlights: [
            { title: 'Power BI', detail: 'Interactive dashboard with drill-down and cross-filter visuals' },
            { title: 'DAX Measures', detail: 'Custom calculated columns and time-intelligence measures' },
            { title: 'Storytelling', detail: 'Narrative structure guiding stakeholders through insights' },
            { title: 'Public Dataset', detail: 'Open data with cleaning pipeline and normalization' },
        ],
        title: 'Power BI Dashboard on Public Dataset',
        description: ` <p class="mb--30">
                                        <iframe title="learn_visuals_next" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0852ec94-f01b-445e-9f6d-b6e4cf04b6cb&autoAuth=true&ctid=a59642f3-f516-4e5d-9a8b-3ba6bdd55283" frameborder="0" allowFullScreen="true"></iframe>
                                    </p>
                                    <div class="alert alert-warning" role="alert">
                                        <i class="bi bi-exclamation-triangle-fill"></i> Notes: The dashboard is not yet publicly available due to some data access policy limitation on the tenant. We are working to make the visualization available for the public. In between you can access the files in the github repository.
                                    </div>`,
        keywords: ['DATA ANALYSIS', 'POWER BI', 'VISUALIZATION'],
        images: ['powerbi_dashboard.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/Powerbi-dashboard'
    },
    {
        projectId: 'skillrater-reactive-springboot',
        category: 'backend',
        shortDesc: 'Reactive Spring Boot with SSE and multi-threaded live voting',
        type: 'Backend System',
        year: '2023',
        thumbWord: 'REACTIVE',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0a1020 100%)',
        highlights: [
            { title: 'Spring WebFlux', detail: 'Non-blocking reactive pipeline with Reactor Sinks and Mono' },
            { title: 'Server-Sent Events', detail: 'Real-time vote updates streamed to all connected clients' },
            { title: 'Concurrency', detail: 'Multi-threaded producers simulate concurrent user load' },
            { title: 'Flyway + MySQL', detail: 'Versioned schema migrations with atomic transaction handling' },
        ],
        title: 'Reactive Springboot Skillrater App',
        description: ` We designed a web app that allows users or guest to decide which
            Language/Framerwork/Tools is the best by participating to a live perpetual vote.
            To simulate data coming from multiple sources in a real-time fashion way, we
            implemented a multi-threaded environment where threads produce new vote on
            existing resources.
            This project implements real-time
            data updates using asynchronous client data submission, leveraging Axios for
            robust client-server communication. Also it employs server-sent events through
            reactive programming and best practices for concurrency management utilizing
            Spring boot Reactor Sinks and Mono.fromRunnable
            APIs to create a an asynchronous non-blocking web-thread producer for efficient
            event handling. <br>
            <strong>Main tech stack</strong>: Java 8, Springboot, SpringWebFLux, Flyway,
            Mysql, Server Sent Event, Websocket, Docker, Github Action`,
        keywords: ['JAVA', 'SPRINGBOOT', 'Rest API', 'Docker', 'MySQL'],
        images: ['skillrater.png'],
        live_url: 'https://spring-skillrater.onrender.com/',
        github: 'https://github.com/Maester-Khris/java-spring-reactive-rater'
    },
    {
        projectId: 'insight-hub-microservices',
        category: 'backend',
        shortDesc: 'Microservices issue tracker with Kafka, Resilience4J and LDAP',
        type: 'Distributed System',
        year: '2023',
        thumbWord: 'MICRO',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0a1020 100%)',
        highlights: [
            { title: 'Circuit Breakers', detail: 'Spring Cloud + Resilience4J for fault-tolerant service mesh' },
            { title: 'Kafka', detail: 'Async event bus for cross-service data synchronization' },
            { title: 'LDAP Auth', detail: 'Dockerized LDAP for centralized identity and access management' },
            { title: 'SQL Server', detail: 'Microsoft SQL Server with T-SQL stored procedures' },
        ],
        title: 'Insight Hub: Springboot Microservices',
        description: ` The Issue Tracker project is an advanced solution aimed at effectively managing
            software issues
            and project progress through a modern microservices architecture, which enhances
            both scalability
            and maintainability. The system ensures high availability and security through
            resilience patterns and a centralized authentication mechanism with
            Docker-deployed LDAP, while relying on a robust tech stack that includes Spring
            Boot, Microsoft SQL Server, and various testing frameworks to guarantee
            reliability.<br>
            <ul>
                <li> Main Challenge: Managing real-time data synchronization and ensuring high
                    availability amidst user load fluctuations.</li>
                <li> Approach Adopted: Utilization of microservices architecture with resilience
                    patterns and centralized authentication.</li>
                <li> Popular Tools Involved: Docker, LDAP, Spring Boot 3, Kafka, Microsoft SQL
                    Server.</li>
                <li>
                    <strong>Main tech stack</strong>: Java 8, Springboot, Spring Cloud,
                    Microsoft SQL Server, Light Active Directory, Docker, Resilience4J, Jenkins,
                    Junit
                </li>
            </ul>`,
        keywords: ['SPRINGBOOT', 'MSSQL', 'T‑SQL', 'LDAP', 'KAFKA'],
        images: ['insighthub.png'],
        live_url: '',
        github: ''
    },
    {
        projectId: 'taskalert-frontend',
        category: 'fullstack',
        shortDesc: 'MEAN stack task manager with NgRx and PusherJS notifications',
        type: 'Fullstack',
        year: '2023',
        thumbWord: 'NGRX',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0d1220 100%)',
        highlights: [
            { title: 'NgRx State', detail: 'Centralized task state synchronized across multiple devices' },
            { title: 'PusherJS', detail: 'Real-time push notifications for deadline reminders' },
            { title: 'Angular Material 3', detail: 'Material Design component library for responsive UI' },
            { title: 'MongoDB Atlas', detail: 'Full-text search with Atlas search indexes' },
        ],
        title: 'Taskalert v2: Frontend Application',
        description: ` The Taskalert project is an innovative real-time notes reminder application
            designed to enhance user engagement and productivity. Built using the MEAN stack
            (MongoDB, NodeJS, Express, Angular) and Angular Material 3, the app leverages
            PusherJS for dynamic push notifications, ensuring timely reminders and seamless
            communication.
            <ul>
                <li> Full Stack Application: Developed with Angular and Angular Material 3 for a
                    responsive front end.</li>
                <li> Dynamic Backend: RESTful API for CRUD operations and BREAD methods. It also
                    supports MongoDB Atlas text search.</li>
                <li> Advanced Feature: Centralized State Management of user tasks state accross
                    multiple devices using NgRx</li>
                <li><strong>Main tech stack</strong>: Angular, Angular Material, Http
                    Interceptor, NgRx, Netlify </li>
            </ul>`,
        keywords: ['ANGULAR', 'ANGULAR MATERIAL', 'NETLIFY'],
        images: ['taskalert_front.png'],
        live_url: 'https://taskalertmaterial.netlify.app/',
        github: 'https://github.com/Maester-Khris/Taskalertv2'
    },
    {
        projectId: 'taskalert-backend',
        category: 'backend',
        shortDesc: 'Django REST backend with RabbitMQ and WebSocket channels',
        type: 'Backend API',
        year: '2023',
        thumbWord: 'REST',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0a1020 100%)',
        highlights: [
            { title: 'Django REST', detail: 'CRUD + BREAD API with drf_spectacular OpenAPI docs' },
            { title: 'Django Channels', detail: 'WebSocket layer for collaborative real-time editing' },
            { title: 'RabbitMQ', detail: 'Message broker for async notification fanout' },
            { title: 'MongoEngine', detail: 'ODM layer for MongoDB document modeling in Python' },
        ],
        title: 'Taskalert v2: Backend Application',
        description: ` The Taskalert project is an innovative real-time notes reminder application
            designed to enhance user engagement and productivity. Built using the MEAN stack
            (MongoDB, NodeJS, Express, Angular) and Angular Material 3, the app leverages
            PusherJS for dynamic push notifications, ensuring timely reminders and seamless
            communication.
            <ul>
                <li> Full Stack Application: Developed with Angular and Angular Material 3 for a
                    responsive front end.</li>
                <li> Dynamic Backend: RESTful API for CRUD operations and BREAD methods. It also
                    supports MongoDB Atlas text search.</li>
                <li> Advanced Feature, Collaborative Task Editing: we plan to implement RabbitMQ
                    as a message broker, which will facilitate real-time synchronization of text
                    edits. Additionally, Django Channels combined with WebSockets will allow for
                    instant updates across the front-end application</li>
                <li><strong>Main tech Stack</strong>: Python, Django, DjangoRest, Django
                    Channels, drf_spectacular, MongoDB, MongoEngine, PyMongo, RabbitMQ</li>
            </ul>`,
        keywords: ['PYTHON', 'DJANGO', 'MONGODB', 'RABBITMQ'],
        images: ['taskalert_backend.png'],
        live_url: 'https://nkml.pythonanywhere.com/',
        github: 'https://github.com/Maester-Khris/Taskalertv2_django_backend'
    },
    {
        projectId: 'ai-chat-filter',
        category: 'ai',
        shortDesc: 'Kafka-powered AI agent monitoring live chat for policy compliance',
        type: 'AI Pipeline',
        year: '2023',
        thumbWord: 'FILTER',
        thumbGradient: 'linear-gradient(135deg,#080f0c 0%,#0c1a10 100%)',
        highlights: [
            { title: 'Apache Kafka', detail: 'Node.js producer → Django consumer for real-time message streaming' },
            { title: 'AI Moderation', detail: 'Intelligent compliance agent on live chat message streams' },
            { title: 'Scale', detail: 'Designed to handle millions of concurrent chat messages' },
            { title: 'Pipeline', detail: 'End-to-end from ingestion to policy decision in under 100ms' },
        ],
        title: 'Python AI Real‑Time Chat Message Filtering',
        description: `The "AI Chat Monitor" project addresses the need for intelligent monitoring in
            live communication services, such as chat applications. While these services are often free
            for personal use, challenges arise in multi-participant environments where
            compliance
            with platform policies is critical. Relying solely on human agents can lead to
            issues
            like fatigue and limited processing capacity, especially when handling millions
            of chat messages.
            To tackle this, we propose an intelligent agent designed to monitor
            conversations and ensure adherence to platform rules.`,
        keywords: ['PYTHON', 'DJANGO', 'NODE.JS', 'APACHE KAFKA'],
        images: ['django_nodejs.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/AI-Chat-Monitor'
    },
    {
        projectId: 'python-async-scraper',
        category: 'backend',
        shortDesc: 'Async Django scraper with Selenium for dynamic JS-rendered sites',
        type: 'Data Engineering',
        year: '2023',
        thumbWord: 'SCRAPE',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0a1020 100%)',
        highlights: [
            { title: 'ASGI + Daphne', detail: 'Non-blocking async architecture for concurrent scraping' },
            { title: 'Selenium', detail: 'Chrome Driver for JS-rendered Angular and React sites' },
            { title: 'BeautifulSoup', detail: 'Static page extraction with CSS selector precision' },
            { title: 'WebSocket Progress', detail: 'Django Channels streams scraping status to client' },
        ],
        title: 'Python Asynchronous Web Data Scraper',
        description: ` This project aims to develop an asynchronous web scraper using Python with the
            Django framework,
            leveraging Daphne and ASGI for non-blocking operations. The scrape utilize
            Beautiful Soup
            for extracting static data and Selenium with Chrome Driver for dynamic websites,
            particularly
            those built with client-side rendering frameworks like Angular. Future
            enhancements will include
            the integration of Celery to improve performance through background task
            processing. <br>
            <strong>Main tech stack</strong>:
            Python, Django, Django Channels, Websocket, Daphne, BeautifulSoup, Selenium,
            Thread`,
        keywords: ['Python', 'Django', 'ASGI', 'Selenium'],
        images: ['scrapper.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/django-web-worker'
    },
    {
        projectId: 'advanced-nlp-text-processing',
        category: 'ai',
        shortDesc: 'BERT-based text summarization and contextual keyword augmentation',
        type: 'NLP Research',
        year: '2023',
        thumbWord: 'BERT',
        thumbGradient: 'linear-gradient(135deg,#080f0c 0%,#0c1a10 100%)',
        highlights: [
            { title: 'Extractive Summary', detail: 'Multilingual BERT for content-preserving text summarization' },
            { title: 'Keyword Augmentation', detail: 'AutoSeq2Seq architecture for contextual synonym replacement' },
            { title: 'Next Word Prediction', detail: 'BERT NWP for context-aware text expansion' },
            { title: 'Flask API', detail: 'Flasgger-documented REST API serving NLP pipeline endpoints' },
        ],
        title: 'Python Advanced NLP Text Processing',
        description: ` Text Ninja is a strategic enhancement designed to complement the custom
            conversational AI agent, Gemini, addressing two significant challenges:
            cognitive overload and overgeneralization in responses. As part of the Snappy
            project, Text Ninja aims to improve the interaction quality when Gemini operates
            in active chatbot mode during conversations.
            To tackle these issues, Text Ninja incorporates two main modules: Text
            Summarization and Text Contextualization.
            <ul>
                <li><strong>Text Summarization</strong>: This module employs an extractive
                    approach utilizing a multilingual
                    pre-trained BERT neural network model.</li>
                <li><strong>Text Contextualization</strong>: Inspired by NLP text augmentation
                    techniques, this module performs
                    contextualized keyword data augmentation.This is achieved using a
                    transformer-based neural network with an
                    AutoSeqtoSeq architecture and a multilingual pre-trained BERT model for Next
                    Word Prediction tasks.</li>
                <li><strong>Main tech stack</strong>:
                    Python, Flask, Flasgger, Spacy, Bert LLM, AutoSeq2Seq </li>
            </ul>`,
        keywords: ['Python', 'Flask', 'Daphne', 'BERT LLM', 'NLP', 'SpaCy'],
        images: ['textninja.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/NLP-ML-Text-Generation'
    },
    {
        projectId: 'mobile-ui-figma',
        category: 'fullstack',
        shortDesc: 'High-fidelity Figma prototype with mobile interaction patterns',
        type: 'UI/UX Design',
        year: '2023',
        thumbWord: 'DESIGN',
        thumbGradient: 'linear-gradient(135deg,#080b14 0%,#0d1220 100%)',
        highlights: [
            { title: 'High-fidelity', detail: 'Production-ready prototype with full component library' },
            { title: 'Interactions', detail: 'Micro-animations and transition patterns for mobile UX' },
            { title: 'Design System', detail: 'Cohesive tokens, spacing, and typography scales' },
            { title: 'User Flows', detail: 'End-to-end onboarding to core feature flows' },
        ],
        title: 'Mobile Application UI & Interaction Design',
        description: `This project centers on designing the user interface (UI) and interaction
            patterns for a
            mobile application.
            Using Figma, a leading design tool, the project involves crafting visually
            appealing and
            user-friendly designs
            that enhance the overall user experience. The focus is on creating intuitive
            layouts,
            interactive elements, and
            cohesive visual styles that ensure seamless and engaging interactions on mobile
            devices.
            The end result is a polished, high-fidelity design prototype that guides the
            development
            of a compelling mobile application.`,
        keywords: ['FIGMA'],
        images: ['portfolio-05.jpg', 'ui_design1.png', 'ui_design2.png', 'figma_design1.png'],
        live_url: '',
        github: ''
    }
];
