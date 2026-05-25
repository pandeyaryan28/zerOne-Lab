export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
  details: string[];
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "unicare",
    client: "UniCare",
    category: "Healthcare",
    title: "Healthcare OS: Revolutionizing Medical Data Flow",
    tagline: "Seamless Patient and Doctor Portals on unicare.space and doctors.unicare.space",
    metric: "100% Digital",
    metricLabel: "In active pilot clinics",
    challenge: "Fragmented medical records spread across paper files, WhatsApp, emails, and traditional hospital systems lead to repetitive diagnostics, slow consultation prep times, and fragmented clinical insights.",
    solution: "We engineered a lightweight Healthcare OS from the ground up: a secure Patient Layer for instantly storing, organizing, and sharing structured history via web links/QR codes, and a fast, intuitive Doctor Layer for clinicians to consume structured histories during live consultations.",
    outcome: "Now deployed in active test clinics under unicare.space and doctors.unicare.space, showing immediate improvements in diagnostic repetition and clinical speed, with plans to integrate pharmacy and lab partners next.",
    details: [
      "Two-way encrypted patient records transfer",
      "Integrated QR-based clinic check-in",
      "Optimized, distraction-free doctor dashboard",
      "Scalable data ingestion pipelines for historical documents"
    ],
    link: "https://unicare.space"
  },
  {
    id: "intugine",
    client: "Intugine Technologies",
    category: "AI & Data",
    title: "AI-Powered Role-Based Data Retrieval",
    tagline: "Conversational intelligence for operational logistics",
    metric: "0s Wait Time",
    metricLabel: "For operational data queries",
    challenge: "Operational teams, dispatch managers, and executives had to rely on database administrators or complex custom BI pipelines to query critical logistical flow data, slowing decision-making.",
    solution: "Implemented a semantic role-based AI data-retrieval engine. The model securely maps permissions and structure, allowing natural language queries that yield role-customized charts, statuses, and logs.",
    outcome: "Staff can query databases inside their standard chat tools and instantly receive tailored answers complying strictly with their role and clearance level, entirely bypassing the BI queue.",
    details: [
      "Role-Based Access Control integration",
      "Secure database schema mapping with high-performance vectors",
      "Natural language-to-SQL semantic layer",
      "Role-customized visualizations and reporting"
    ]
  },
  {
    id: "svsfood",
    client: "SVS Food",
    category: "F&B Tech",
    title: "Full Omnichannel Infrastructure & QSR GTM",
    tagline: "Tech stack build & market validation for a Shark Tank brand",
    metric: "100% In-house",
    metricLabel: "No third-party QSR aggregator fees",
    challenge: "Transitioning a chefless Jain quick-service restaurant chain into a modern omnichannel business requires custom ordering structures, validation surveys, and targeted regional marketing engines.",
    solution: "Designed and built their robust booking and online ordering infrastructure, backed by extensive localized customer surveys and Go-To-Market strategy formulation.",
    outcome: "Successfully launched SVS Food's independent digital infrastructure, scaling self-owned orders and building strong regional franchise momentum post-Shark Tank appearance.",
    details: [
      "High-speed responsive booking engine",
      "Jain/Jain-customized ordering filters",
      "Comprehensive consumer sentiment surveys",
      "Full localized GTM playbook execution"
    ]
  },
  {
    id: "titantech",
    client: "TitanTech Investments",
    category: "Finance",
    title: "Complete Financial Digital Transformation",
    tagline: "Rebuilding legacy systems for high-speed trading",
    metric: "80% Faster",
    metricLabel: "Onboarding and 3x trade speed",
    challenge: "Slow trade executions and high onboarding friction on legacy infrastructure led to customer attrition in a highly competitive market.",
    solution: "Rebuilt the legacy backend to a highly parallel serverless structure, streamlining verification workflows and trade pipeline execution.",
    outcome: "Reduced client onboarding time by 80% and achieved 3x trade execution speeds, boosting monthly transaction volume significantly.",
    details: [
      "Legacy system refactoring and secure API layers",
      "Secure digital KYC pipeline",
      "Ultra-low latency trade queueing",
      "Real-time compliance validation"
    ]
  },
  {
    id: "luxsun",
    client: "Luxsun Energy",
    category: "Infrastructure",
    title: "Infrastructure Automation & Grid Monitoring",
    tagline: "Reducing downtime through predictive automated dispatch",
    metric: "45% Lower",
    metricLabel: "Downtime with smart dispatch",
    challenge: "Manual energy grid monitoring resulted in delayed issue detection, high maintenance dispatch overheads, and extended outages.",
    solution: "Automated grid monitoring systems using specialized IoT event ingestion, initiating an automated maintenance dispatch engine on anomaly detections.",
    outcome: "Decreased infrastructure downtime by 45% while optimizing field technician resource allocation through predictive alerts.",
    details: [
      "IoT telemetry ingestion pipeline",
      "Real-time anomaly triggers",
      "Automated service ticket routing",
      "Predictive maintenance scheduling"
    ]
  },
  {
    id: "bnbweb",
    client: "BNB Web",
    category: "Travel Tech",
    title: "Serverless Cloud Scaling at Scale",
    tagline: "Handling high-volume concurrent booking spikes flawlessly",
    metric: "10K+ Users",
    metricLabel: "Supported concurrently, 99.99% uptime",
    challenge: "Heavy booking spikes during seasonal holiday rushes overloaded legacy instances, leading to page crashes and lost booking revenues.",
    solution: "Migrated the entire reservation booking system to a highly scalable serverless cloud architecture with edge caching.",
    outcome: "Successfully handled surges of over 10K+ concurrent users with zero performance degradation and sustained a 99.99% uptime record.",
    details: [
      "Serverless framework migration",
      "Dynamic edge caching layer",
      "Database connection pool optimization",
      "Real-time availability sync"
    ]
  },
  {
    id: "glinte",
    client: "Glinte LipGloss",
    category: "E-Commerce",
    title: "D2C Conversational AI Growth Engine",
    tagline: "Scaling support capacity and recovering cart revenue automatically",
    metric: "25% Recovered",
    metricLabel: "Carts recovered & 3x support scale",
    challenge: "High shopping cart abandonment rates and strained customer support channels limited direct-to-consumer store growth.",
    solution: "Deployed a conversational AI cart recovery and support agent on WhatsApp and web, integrating with their inventory catalog.",
    outcome: "Recovered 25% of abandoned carts automatically and expanded support response capacity by 300%.",
    details: [
      "AI conversational agent deployment",
      "Automated cart abandonment checkout triggers",
      "Inventory API sync",
      "Customer lifetime value mapping"
    ]
  },
  {
    id: "fluxx",
    client: "Fluxx Media",
    category: "Media",
    title: "Content Automation & Scalable Tech Platform",
    tagline: "Eliminating manual media ops friction",
    metric: "60% Faster",
    metricLabel: "Content turnaround time",
    challenge: "Manual video processing, content delivery, and ad asset tracking created huge operational bottlenecks for media teams.",
    solution: "Developed a scalable full-stack media infrastructure and cloud automation engine for batch processing assets.",
    outcome: "Cut asset delivery times by 60% and trimmed operational overhead by 40%, freeing up creative resources.",
    details: [
      "Cloud video processing pipelines",
      "Automated asset metadata tagging",
      "Omnichannel distribution system",
      "Ad ops overhead reduction"
    ]
  },
  {
    id: "jain",
    client: "Mr. Jain",
    category: "Real Estate",
    title: "CRM + AI Revenue Automation Engine",
    tagline: "Scaling high-ticket sales without growing headcount",
    metric: "+42% Revenue",
    metricLabel: "Increase with <2m lead response time",
    challenge: "Delayed follow-ups on high-intent real estate leads allowed potential deals to go cold.",
    solution: "Designed and implemented an AI-driven lead routing and conversation agent that instantly engaged incoming inquiries.",
    outcome: "Boosted closed revenue by 42% while keeping lead response times under 2 minutes, with zero extra hires.",
    details: [
      "AI lead triaging system",
      "Instant CRM sync and notification",
      "Automated SMS/WhatsApp follow-ups",
      "Sales funnel tracking dashboards"
    ]
  },
  {
    id: "phillip",
    client: "Mr. Phillip",
    category: "Sales",
    title: "B2B Sales Automation Infrastructure",
    tagline: "Automating B2B lead enrichment and cadences",
    metric: "<60s Response",
    metricLabel: "6.4x average follow-up touches",
    challenge: "A manual and fragmented sales outbound process led to inconsistent lead follow-ups and missed pipeline targets.",
    solution: "Configured an advanced B2B sales automation engine tracking lead intent, auto-enriching data, and triggering personalized cadences.",
    outcome: "Achieved an average response time of under 60 seconds and increased follow-up frequency to a highly effective 6.4 touches per lead.",
    details: [
      "Automatic data enrichment integration",
      "Multi-channel outreach flows",
      "Intent tracking triggers",
      "Outbound performance analytics"
    ]
  },
  {
    id: "mitchell",
    client: "Sarah Mitchell",
    category: "Agency Tech",
    title: "Cross-Platform Workflow Automation",
    tagline: "Scaling digital agency operations efficiently",
    metric: "+40% Scale",
    metricLabel: "Capacity with 65% less execution time",
    challenge: "Managing multi-platform social media deliverables across dozens of clients consumed excessive manual coordination hours.",
    solution: "Automated content assembly, client approval portals, and multi-platform publishing queues into a single hub.",
    outcome: "Empowered the agency to scale its client capacity by 40% while reducing monthly manual coordination hours by 65%.",
    details: [
      "Cross-platform API orchestrations",
      "Interactive client review board",
      "Automated approval notification hooks",
      "Team task automation"
    ]
  },
  {
    id: "clarke",
    client: "Dr. James Clarke",
    category: "Healthcare",
    title: "Clinical Workflow Automation Engine",
    tagline: "Reclaiming clinical time through voice-to-chart notes",
    metric: "2 Hours Saved",
    metricLabel: "Daily & +21% consultation revenue",
    challenge: "Doctors spending hours on medical charting and administrative notes after consultations, leading to burnout and limited patient bandwidth.",
    solution: "Deployed an AI-assisted audio-to-charting clinical assistant that captures and structures session summaries instantly.",
    outcome: "Saved the clinician 2 hours daily, which was redirected to increasing consultation capacity by 21%.",
    details: [
      "HIPAA-compliant audio transcribing",
      "Medical terminology structuring",
      "Direct EHR note ingestion",
      "Patient summary export"
    ]
  },
  {
    id: "vrindavan",
    client: "Vrindavan Greens",
    category: "Hospitality",
    title: "AI Dynamic Pricing & Occupancy Engine",
    tagline: "Optimizing off-peak occupancy and high-yield returns",
    metric: "+40% Annual",
    metricLabel: "Revenue increase on optimized rates",
    challenge: "Static pricing models resulted in high seasonal vacancies and left revenue on the table during peak periods.",
    solution: "Developed a dynamic pricing algorithm adjusting pricing models in real-time based on local demand, weather, and occupancy.",
    outcome: "Increased annual booking revenues by 40% while raising off-peak booking rates to record levels.",
    details: [
      "Real-time demand forecasting model",
      "Competitor pricing tracking",
      "Dynamic room rate adjustment loops",
      "Booking channels syndication"
    ]
  },
  {
    id: "aryan",
    client: "Aryan Advertising",
    category: "Marketing",
    title: "AI-Driven Ad-Spend Allocation Engine",
    tagline: "Eliminating ad waste with budget redistribution models",
    metric: "35% Ad Waste",
    metricLabel: "Saved while maximizing returns",
    challenge: "Inefficient manual budget allocations across dozens of active campaign groups caused significant ad waste.",
    solution: "Deployed a closed-loop allocation engine analyzing performance metrics and auto-shifting budgets to high-ROI channels hourly.",
    outcome: "Reduced overall ad budget waste by 35% while sustaining lead volume across platforms.",
    details: [
      "Closed-loop budget optimization API",
      "Hourly platform ROI calculation",
      "Automatic budget shifting rules",
      "Multi-attribution reports"
    ]
  }
];
