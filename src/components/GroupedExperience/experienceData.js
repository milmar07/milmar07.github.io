// src/components/GroupedExperience/experienceData.js

export const experienceGroups = [
  {
    company: "Cryptomine.rs",
    skills: [
      {
        id: "laravel-backend",
        label: "Laravel (PHP)",
        icon: "/icons/laravel.png",
        story:
          "At Cryptomine.rs, I built the backend using Laravel, structuring it with MVC principles and RESTful routing. I implemented access policies, scheduled tasks, and complex Eloquent queries to manage crypto trading logic and user operations. Laravel's ecosystem allowed us to rapidly iterate while maintaining scalability and security."
      },
      {
        id: "postgresql-db",
        label: "PostgreSQL",
        icon: "/icons/postgresql.png",
        story:
          "PostgreSQL powered our structured data — users, orders, transactions. I optimized indexes and schema design for fast lookups and consistent performance, and created automated scripts for backups and data integrity validation."
      },
      {
        id: "rest-api",
        label: "RESTful API",
        icon: "/icons/api.png",
        story:
          "I developed secure REST APIs to handle user sessions, market orders, and data syncing with the frontend. I implemented proper versioning, validation, and authentication to ensure stable and predictable behavior."
      },
      {
        id: "frontend-js",
        label: "JavaScript (ES6+)",
        icon: "/icons/javascript.png",
        story:
          "Rewrote legacy code in modern JavaScript, utilizing async/await, modules, arrow functions, and fetch API. This increased maintainability, speed, and browser compatibility across our dynamic crypto UI."
      },
      {
        id: "react-ui",
        label: "React.js",
        icon: "/icons/react.png",
        story:
          "I integrated React into our dashboard for real-time trading data, using hooks, component state, and WebSocket support. The SPA structure improved responsiveness and UX for heavy data views."
      },
      {
        id: "bootstrap-css",
        label: "CSS3 & Bootstrap",
        icon: "/icons/css-bootstrap.png",
        story:
          "I designed and customized mobile-first layouts using Bootstrap’s grid and CSS3 media queries. This ensured that our crypto exchange interface worked seamlessly across all devices."
      },
      {
        id: "docker-devops",
        label: "Docker & DevOps",
        icon: "/icons/docker.png",
        story:
          "I containerized Laravel and PostgreSQL with Docker Compose, creating reproducible dev and production environments. This reduced deployment time, improved onboarding, and eliminated environment drift."
      },
      {
        id: "git-github",
        label: "Git & GitHub",
        icon: "/icons/github.png",
        story:
          "I managed the project lifecycle with Git, setting up clear branching strategies and CI hooks via GitHub Actions for code linting and deployment. This improved team collaboration and release consistency."
      }
    ]
  },
  {
    company: "University of Bern",
    skills: [
      {
        id: "flask-python",
        label: "Flask (Python)",
        icon: "/icons/python.png",
        story:
          "Flask served as our backend for handling sensor input and serving analytics endpoints. I built modular blueprints for sensor ingestion, real-time parsing, and PostgreSQL insertion, with focus on stability and clarity."
      },
      {
        id: "node-express",
        label: "Node.js & Express",
        icon: "/icons/nodejs.png",
        story:
          "Node.js powered our dynamic dashboard APIs and Express acted as our middleware for authentication, logging, and dynamic sensor route resolution. It served SSR React pages and data APIs."
      },
      {
        id: "postgresql-data",
        label: "PostgreSQL (Time-series)",
        icon: "/icons/postgresql.png",
        story:
          "I engineered a spatial-aware schema in PostgreSQL for micro-climate sensor data. Using indexed time and geolocation fields, we supported efficient retrieval of CO₂, temp, humidity for live mapping and analytics."
      },
      {
        id: "mqtt-comm",
        label: "MQTT",
        icon: "/icons/mqtt.png",
        story:
          "I implemented MQTT as a broker and subscriber model to collect sensor data with ultra-low latency. A Node-RED bridge normalized messages and passed them to our Python analytics pipelines."
      },
      {
        id: "rest-auth",
        label: "REST API + Auth (JWT, OAuth)",
        icon: "/icons/jwt-oauth.png",
        story:
          "Secure authentication was built with OAuth2 flows and JWT access tokens. Users, admins, and researchers had different scopes and lifetimes, with robust refresh token support and access tracing."
      },
      {
        id: "react-dashboard",
        label: "React.js Frontend",
        icon: "/icons/react.png",
        story:
          "React was used for the Smart City dashboard. We integrated charts, maps, and filters using D3.js and chart.js. Real-time updates allowed stakeholders to monitor climate anomalies live in Bern."
      },
      {
        id: "ci-cd-devops",
        label: "CI/CD + Heroku",
        icon: "/icons/cicd.png",
        story:
          "GitHub Actions handled automated tests and Docker builds. Heroku deployed each successful build to staging, with Slack notifications and log streaming integrated into our workflow."
      },
      {
        id: "docker-setup",
        label: "Docker Microservices",
        icon: "/icons/docker.png",
        story:
          "I containerized Flask, Node.js, PostgreSQL, and MQTT, defining resource constraints and network bridges. This ensured resilience and consistency in lab and cloud deployments alike."
      },
      {
        id: "iota-rust",
        label: "IOTA & Rust",
        icon: "/icons/iota-rust.png",
        story:
          "I prototyped a Rust-based smart contract for logging hashed sensor data into the IOTA Tangle. This enabled immutable, decentralized verification of micro-climate datasets for open access and compliance."
      }
    ]
  }
];
