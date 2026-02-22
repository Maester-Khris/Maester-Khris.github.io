export const portfolioProjects = [
    {
        projectId: 'ai-evaluator-observability',
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
        live_url: 'https://angular-state-management-5jrw2uoc9-nkops-projects.vercel.app',
        github: 'https://github.com/Maester-Khris/Angular-state-management'
    },
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
        live_url: 'https://ai-healthtech-coordinator.vercel.app/',
        github: 'https://github.com/Maester-Khris/ai-healthtech-coordinator'
    },
    {
        projectId: 'ai-healthcare-ml',           // unique slug for routing / modal look‑up
        title: 'AI Healthcare sickness severity classification',
        description: `<p>I designed and deployed a patient‑sickness–severity classifier that interprets short, free‑text symptom descriptions and assigns one of four urgency levels: “routine”, “moderate”, “severe” or “critical”. By fine‑tuning Google’s Gemini 2.5 Flash on a tightly curated medical dataset and serving the model on GCP Vertex AI, the solution enables real‑time triage inside tele‑health workflows.</p>
            <p><strong>Custom Dataset</strong></p>
            <ul>
            <li>Collected 237 de‑identified symptom narratives sourced from prior consultations.</li>
            <li>Each record was manually labelled by clinicians with one of four severity classes.</li>
            <li>Performed text normalisation and removed protected health information to respect HIPAA and PIPEDA rules.</li>
            </ul>
            <p><strong>Model Development</strong></p>
            <ul>
            <li>Started from the lightweight <strong>Gemini 2.5 Flash</strong> checkpoint hosted on Vertex AI Model Garden.</li>
            <li>Fine‑tuned using supervised instruction‑tuning; the prompt template shows a symptom sentence followed by a special <code>&lt;class&gt;</code> token.</li>
            <li>Applied stratified 80‑20 split and early‑stopping to avoid over‑fitting on the small corpus.</li>
            </ul>
            <p><strong>Deployment Pipeline</strong></p>
            <ul>
            <li>Packaged the fine‑tuned checkpoint as a custom model artifact and uploaded it to Vertex AI.</li>
            <li>Created an <strong>Endpoint</strong> with automatic scaling and integrated Stackdriver logging for auditability.</li>
            <li>Wrapped prediction logic in a Cloud Function exposed as a REST endpoint; the function cleans incoming text, calls the Vertex endpoint, and maps logits to human‑readable severity labels.</li>
            <li>Used Cloud Endpoints API Key + IAM Service Account to secure both internal and external calls.</li>
            </ul>
            <p><strong>Key Challenges & Solutions</strong></p>
            <ul>
            <li><strong>Small dataset</strong> – Augmented minority classes with GPT‑generated paraphrases until class distribution was balanced.</li>
            <li><strong>Regulatory compliance</strong> – Implemented vertex‑level encryption and VPC‑SC to keep traffic inside the private perimeter.</li>
            <li><strong>Cold‑start latency</strong> – Enabled min‑replica autoscaling on Vertex AI to maintain one warm pod at all times.</li>
            </ul>
            <p><strong>Next Steps</strong></p>
            <ul>
            <li>Append confidence scores to predictions for downstream UI colour‑coding.</li>
            <li>Introduce continual‑learning jobs that retrain weekly on newly triaged cases.</li>
            <li>Add Cloud Monitoring dashboards that trigger on spikes in “critical” predictions.</li>
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
        title: 'Firo: Financial CSR Bot',
        description:
            'Gen‑AI assistant for customer‑support reps in banking. Fine‑tuned on 50k anonymized chats, '
            + 'deployed with Vertex AI and Dialogflow CX. React‑based front‑end provides real‑time confidence and source citations.',
        keywords: ['AWS Bedrock', 'React.js'],
        images: ['bot.png'],
        live_url: 'https://financial-csr-aibot-47pg.vercel.app/',
        github: 'https://github.com/Maester-Khris/financial-csr-aibot'
    },
    {
        projectId: 'ml-text-classifier',
        title: 'Firo ML: User interaction topic classification',
        description: `<p> I built an end‑to‑end topic‑classification service that tags free‑form customer messages with precise business areas, streamlining triage in a highly regulated financial‑services environment.</p>
            <p><strong>Data Acquisition</strong></p>
            <ul>
            <li>Started from a Kaggle corpus of transcribed user interactions, each carrying a generic topic label.</li>
            <li>Many of those labels were unsuitable for finance, so they served only as a rough initial scaffold.</li>
            </ul>
            <p><strong>Main Challenges & Mitigations</strong></p>
            <ul>
            <li><strong>Too few domain‑relevant classes</strong> – I expanded the label set with zero‑shot classification via sentence‑transformers to create fine‑grained finance topics such as <em>Debit Card Disputes</em> and <em>Investment Queries</em>.</li>
            <li><strong>Severe class imbalance</strong> – Minority classes were boosted using data‑augmentation techniques implemented with an open‑source Python library for synonym replacement and paraphrasing.</li>
            <li><strong>Data‑governance constraints</strong> – All message text was anonymised before processing; names, account numbers and emails were tokenised to preserve privacy.</li>
            </ul>
            <p><strong>Modelling Workflow</strong></p>
            <ul>
            <li>Embedded each anonymised sentence with a compact Sentence‑BERT encoder (768‑D vectors).</li>
            <li>Trained multiple classifiers: SVC, Linear SVM, Logistic Regression, Random Forest and HistGradientBoosting.</li>
            <li>Selected the top performer through a naïve “best‑accuracy wins” vote; Linear SVM took the crown in the current run.</li>
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
        title: 'Remote System Monitoring',
        description:
            'Python‑Django back end streaming server health metrics to a React dashboard. '
            + 'CI/CD with AWS CodePipeline, containerized via Docker and orchestrated on Kubernetes.',
        keywords: ['Python', 'Django', 'Kubernetes', 'Docker', 'React.js', 'AWS CodePipeline'],
        images: ['remote_monitoring_arch.png'],
        live_url: 'https://react-client-seven.vercel.app/monitoring',
        github: 'https://github.com/Maester-Khris/remote-monitoring'
    },
    {
        projectId: 'taskalert-full-monitoring',
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
        title: 'Power BI Dashboard on Public Dataset',
        description: ` <p class="mb--30">
                                        <iframe title="learn_visuals_next" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0852ec94-f01b-445e-9f6d-b6e4cf04b6cb&autoAuth=true&ctid=a59642f3-f516-4e5d-9a8b-3ba6bdd55283" frameborder="0" allowFullScreen="true"></iframe>
                                    </p>
                                    <div class="alert alert-warning" role="alert">
                                        <i class="bi bi-exclamation-triangle-fill"></i> Notes: The dashboard is not yet publicly available due to some data access policy limitation on the tenant. We are working to make the visualization available for the public. In between you can access the files in the github repository.
                                    </div>`,
        keywords: ['DATA ANALYSIS', 'POWER BI', 'VISUALIZATION'],
        images: ['powerbi_dashboard.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/Powerbi-dashboard'
    },
    {
        projectId: 'skillrater-reactive-springboot',
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
        title: 'Taskalert v2: Frontend Application',
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
        title: 'Taskalert v2: Backend Application',
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
        title: 'Python AI Real‑Time Chat Message Filtering',
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
        keywords: ['Python', 'Flask', 'Daphne', 'BERT LLM', 'NLP', 'SpaCy'],
        images: ['textninja.png'],
        live_url: '',
        github: 'https://github.com/Maester-Khris/NLP-ML-Text-Generation'
    },
    {
        projectId: 'mobile-ui-figma',
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