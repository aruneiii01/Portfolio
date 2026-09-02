import Image from "next/image";
import Link from "next/link";
import ProfileOutline from "@/components/ProfileOutline";
import NetworkBackground from "@/components/NetworkBackground";

const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

export default function Home() {

  const cardClass = `
    group
    p-6
    bg-cyan-950/20
    border border-cyan-500/20
    rounded-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-[1.03]
    hover:bg-cyan-900/30
    hover:border-cyan-400/60
    hover:shadow-xl
    hover:shadow-cyan-500/20
  `;

  const headingClass = `
    text-cyan-400
    mb-4
    tracking-widest
    uppercase
    text-xs
    border-b border-cyan-800
    pb-2
    transition-all duration-300
    group-hover:text-cyan-300
    group-hover:border-cyan-500
  `;

  return (
    <>
      <NetworkBackground />

    <div className="relative min-h-screen bg-[#050510]/70 text-cyan-50 font-mono overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            ARUN PRAKASH S
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Philosophy / Approach */}
        <section id="philosophy" className="pt-8 pb-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>

              {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/me.jpg`}
                alt="Profile"
                fill
                priority
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
            </div>   

            {/* Right column */}
            <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
              I'm an AI & Machine Learning engineering student passionate about building intelligent, scalable, and real-world software solutions. My experience spans machine learning, deep learning, time-series forecasting, backend development, and AI deployment, with hands-on work using Python, PyTorch, FastAPI, Docker, React, and SQL. Currently, I'm working as a 
               <strong className="text-fuchsia-400 font-bold"> Healthcare AI Deployment Intern</strong> where I work with AI-powered patient monitoring systems, Raspberry Pi gateways, wearable sensors, APIs, and cloud-based platforms to bring AI solutions into real-world healthcare environments. I'm particularly interested in AI engineering, MLOps, intelligent systems, and scalable software architecture, and I enjoy turning AI concepts into practical solutions that can create meaningful impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
              {/* Box 1 */}
              <div className={cardClass}>
                <h3 className={headingClass}>
                  TECH_STACK
                </h3>

                <ul className="space-y-2 text-cyan-200/70">
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    Python / TypeScript / SQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    FastAPI / React / Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    PyTorch / Docker / PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    Git / GitHub
                  </li>
                </ul>
              </div>

              {/* Box 2 */}
              <div className={cardClass}>
                <h3 className={headingClass}>
                  SPECIALIZATIONS
                </h3>

                <ul className="space-y-2 text-cyan-200/70">
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    Artificial Intelligence &amp; Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    Backend API Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    CI/CD Pipelines &amp; Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    Scalable Software Systems
                  </li>
                </ul>
              </div>

              {/* Box 3 */}
              <div className={cardClass}>
                <h3 className={headingClass}>
                  CURRENTLY_EXPLORING
                </h3>

                <ul className="space-y-2 text-cyan-200/70">
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    Large Language Models (LLMs)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    RAG &amp; Vector Databases
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    MLOps &amp; Cloud Deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-fuchsia-500">›</span>
                    AI Agents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // PROJECTS
            </h2>
            <span className="text-xs font-mono text-cyan-700">Here are the projects I worked on, complete with descriptions.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard 
              title="PATCHTST_PHM_FRAMEWORK_FOR
              _RUL_IN_TURBOFAN_ENGINES"
              description="A intelligent predictive maintenance system developed to estimate the Remaining Useful Life (RUL) of turbofan aircraft engines using the NASA C-MAPSS dataset. The project employs the PatchTST deep learning model for accurate RUL prediction, integrates SHAP for model explainability, and uses an LLM to generate maintenance explanations and recommendations. An interactive R Shiny dashboard allows users to upload engine data, visualize predictions, and access AI-assisted maintenance insights, providing a complete end-to-end PHM solution."
              tags={["PYTHON", "R", "PYTORCH", "LLM", "PATCHTST", "SHAP"]}
              color="cyan"
              href="#"
            />
            {/* Project 2 */}
            <ProjectCard 
              title="ATMOSMOOD_PIPELINE"
              description="A containerized AI-powered application that integrates real-time weather data, sentiment analysis, workflow automation, and interactive visualization into a single platform. Built using FastAPI, PostgreSQL, Apache Airflow, React (Vite), and Docker, the project demonstrates a complete end-to-end data pipeline, from data collection and machine learning inference to storage, automation, and user-friendly visualization."
              tags={["PYTHON", "DOCKER", "FASTAPI", "PYDANTIC", "POSTGRESQL", "REST APIs"]}
              color="fuchsia"
              href="#"
            />
            {/* Project 3 */}
            <ProjectCard 
              title="DAILY LABOUR FINDING SYSTEM"
              description="MERN stack web application that connects daily wage workers with employers. It enables employers to post job opportunities, search for workers based on their skills, and manage hiring efficiently. Workers can create profiles, update their availability, and apply for suitable jobs. The platform features secure authentication, role-based access, and a responsive interface, making the hiring process faster, more transparent, and accessible for both employers and labourers."
              tags={["REACT.JS", "MONGODB", "EXPRESS", "NODE.JS", "HTML", "CSS"]}
              color="purple"
              href="#"
            />
            {/* Project 4 */}
            <ProjectCard
              title="AI_SYSTEMS_ENGINEER_ASSISTANT"
              subtitle="Currently_Building"
              description="A multimodal, multi-agent AI platform that helps monitor, analyze, and manage cloud infrastructure. It leverages LLMs, RAG, machine learning, Docker, and Kubernetes to understand logs, metrics, documents, and screenshots, perform anomaly detection and root cause analysis, and provide intelligent remediation recommendations. Built using a microservices architecture, the system demonstrates modern AI Engineering, MLOps, and cloud-native development practices for real-world infrastructure management."
              tags={["PYTHON", "LANGGRAPH", "DOCKER", "POSTGRESQL", "CHROMADB", "OLLAMA"]}
              color="yellow"
              href="#"
            />
          </div>
        </section>



        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">CONNECT</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              Interested in working together or building something impactful?
              <br />
              I'm always open to new ideas, opportunities, and collaborations.
            </p>
            <div className="flex flex-col items-center gap-6">
                <a
                  href={`${basePath}/ARUN PRAKASH S CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300"
                >
                  DOWNLOAD CV
                </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com/aruneiii01" label="GITHUB" />
                <SocialLink href="https://www.linkedin.com/in/arun-prakash-s-016136429" label="LINKEDIN" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-200/60 border-t border-cyan-900/20">
        <p className="font-mono">
          &gt; Designed & Developed by{" "}
         <span className="text-cyan-400">Arun Prakash S.</span>
        </p>
      </footer>
    </div>
    </>
  );
}


function ProjectCard({ title, subtitle, description, tags, color, href }: { title: string, subtitle?: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3
            style={{ whiteSpace: "pre-line" }}
            className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}
          >
            {title}
          </h3>

          {subtitle && (
            <p className="text-xs text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <ArrowUpRightIcon
          className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`}
        />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
