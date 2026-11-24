const recentProjects = [
  {
    slug: "rapid-mind",
    title: "RAPID-MIND",
    category: "Information Systems",
    description:
      "An offline-first decision-support prototype for coordinating disaster mental health response.",
    status: "Prototype",
    featured: true,
    cover: "health",
    image: {
      path: "images/portfolio/rapid-mind.png",
      alt: "rapid-mind",
      width: 1282,
      height: 908,
    },
    stack: [
      "Vibe Coding",
      "Laravel",
      "Vue.js",
      "TypeScript",
      "PostGIS",
      "Inertia.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker Compose",
      "IndexedDB",
      "Dexie",
      "PWA",
      "Laravel Reverb",
      "MapLibre",
    ],
    repository: "https://github.com/afrizaldwi/rapid-mind",
    context:
      "Disaster response teams need to record field assessments during unreliable connectivity and share relevant case updates with clinical staff.",
    solution:
      "Give volunteers, healthcare staff and administrators separate workflows, with local capture for supported volunteer tasks and server-side coordination when connectivity returns.",
    features: [
      "Offline capture and an outbox for assessment submissions",
      "Healthcare review, referral and dispatch workflows",
      "Administrative summaries, a map with case markers and role-scoped live updates",
    ],
    architecture:
      "Laravel serves the Vue and Inertia application. A service worker enables the offline shell, while Dexie manages IndexedDB storage. PostgreSQL and PostGIS support spatial data, MapLibre renders the map, and Laravel Reverb distributes scoped updates.",
    challenges:
      "Reconciling offline submissions and restricting who can view a case or receive its updates across roles and facilities.",
    limitations:
      "The project handoff records conditional local demo acceptance. Cross-role acceptance remains incomplete, and clinical decisions stay with healthcare staff.",
  },
  {
    slug: "flash-sale-ecommerce",
    title: "Flash Sale E-Commerce",
    category: "Cloud & Backend Engineering",
    description:
      "An experimental commerce backend for concurrent checkout, database replication, and recovery drills.",
    status: "Coursework experiment",
    featured: true,
    cover: "server",
    image: {
      path: "images/portfolio/flashsale.png",
      alt: "flashsale",
      width: 1282,
      height: 908,
    },
    stack: [
      "Vibe Coding",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker Compose",
      "Nginx",
      "k6",
    ],
    repository: "https://github.com/afrizaldwi/flashsale-system-server",
    context:
      "A flash sale can send overlapping purchase attempts and retries to a limited pool of inventory.",
    solution:
      "Keep checkout writes atomic on the primary database and make repeated checkout requests safe with idempotency keys.",
    features: [
      "Transactional checkout and inventory consistency checks",
      "Replica reads with primary fallback for supported endpoints",
      "Separate experiments for Nginx load balancing, autoscaling, and database backup and recovery",
    ],
    architecture:
      "An Express API writes to the PostgreSQL primary. Selected reads can use a streaming replica. Dedicated Docker Compose environments support Nginx routing and k6 workload generation.",
    challenges:
      "Maintaining inventory consistency when several requests compete for stock, and reconciling acknowledged checkouts during the recovery experiment.",
    limitations:
      "Scaling and recovery evidence applies to specific laboratory scenarios and configurations.",
  },
  {
    slug: "basecamp-kost",
    title: "Basecamp Kost Management System",
    category: "Full-Stack Development",
    description:
      "A boarding-house management system for tenants, rooms, billing, and day-to-day reports.",
    featured: true,
    cover: "building",
    image: {
      path: "images/portfolio/basecamp-kost.png",
      alt: "Basecamp Kost homepage showing the boarding house and its amenities",
      width: 1282,
      height: 908,
    },
    stack: ["Vibe Coding", "PHP", "Laravel", "Nginx", "Docker Compose"],
    repository: "https://github.com/afrizaldwi/basecamp-kost",
    context:
      "Boarding-house administrators track residents, room assignments, rent deadlines, and operational issues.",
    solution:
      "Centralize those records and workflows in one management system.",
    features: [
      "Resident, room, and lease extension records",
      "Billing, invoices, and payment deadline notifications",
      "Complaint reporting and guest logs",
    ],
    architecture:
      "The repository documents a Laravel API gateway behind Nginx, with Docker Compose for local setup.",
  },
  {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "Data Analytics & Machine Learning",
    description:
      "An image classification coursework pipeline combining CNN embeddings and engineered image features.",
    status: "Coursework experiment",
    cover: "image",
    stack: ["Vibe Coding", "Python", "Jupyter Notebook", "CNN", "SVM"],
    repository: "https://github.com/afrizaldwi/BDA_Project",
    context:
      "The coursework explores how different image representations contribute to classifying small color images.",
    solution:
      "Extract learned representations in separate notebooks, combine them with descriptors, and use the resulting feature vectors to train a classifier.",
    features: [
      "CNN embedding extraction from RGB and grayscale representations",
      "Feature combinations using HOG, LBP, HSV, and RGB statistics",
      "SVM training and evaluation notebooks",
    ],
    architecture:
      "Jupyter notebooks separate embedding extraction, feature combination, training, and evaluation. Saved arrays and run manifests carry features and run metadata between stages.",
    challenges:
      "Aligning feature rows with their labels and keeping training and evaluation inputs distinct across runs.",
  },
  {
    slug: "waste-data-analytics",
    title: "Waste Data Analytics Dashboard",
    category: "Data Analytics & Visualization",
    description:
      "An interactive dashboard for exploring waste generation and management in Indonesia.",
    cover: "chart",
    image: {
      path: "images/portfolio/waste-data-dashboard.png",
      alt: "flashsale",
      width: 1282,
      height: 908,
    },
    stack: ["Vibe Coding", "Python", "Streamlit", "Pandas", "Plotly"],
    repository: "https://github.com/afrizaldwi/streamlit-dashboard-data-sampah",
    context:
      "Waste-management indicators vary across years, provinces, and municipalities. A dashboard makes them easier to compare.",
    solution:
      "Turn tabular waste records into an interactive view of amounts generated, amounts managed, and gaps in handling.",
    features: [
      "Waste indicators organized by year, province, and municipality",
      "Interactive Plotly charts for comparing waste measures",
      "Province map when matching geographic data is available",
    ],
    architecture:
      "Streamlit serves the interface, Pandas loads and processes the CSV data, and Plotly renders charts and the optional GeoJSON choropleth.",
    challenges:
      "Preparing numerical columns and matching province names across tabular and geographic data.",
  },
];

export default recentProjects;
