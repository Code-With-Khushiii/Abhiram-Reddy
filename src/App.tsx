import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Analyst with 4+ years delivering marketing and eCommerce analytics using SQL, Snowflake, Tableau, Looker, Power BI and Google Analytics to build reliable full-funnel reporting and KPI dashboards. Improved conversion performance by 15% through A/B testing and attribution analysis, and cut reporting turnaround by 30% by optimizing Snowflake SQL extraction and dashboard-ready datasets. Reduced manual reporting effort by 50% by automating recurring dashboards and maintaining data dictionaries and analytics documentation, enabling faster decisions for non-technical stakeholders.";

  const experience = [
    {
      company: "Socialight Media",
      role: "Data Analyst",
      location: "Hyderabad ,India",
      dates: "Jun. 2020 – Jun. 2024",
      highlights: [
        "Analyzed performance across 6+ marketing channels (paid search, paid social, email, SMS, organic, referral) and 3 funnel stages (acquisition → conversion → retention) to surface trend drivers and improve weekly optimization decisions.",
        "Implemented pixel tracking and event instrumentation for 25+ key events (view content, add-to-cart, checkout, purchase) across 3+ ad platforms, improving attribution completeness and reducing 'unknown' conversions by 20-30%.",
        "Built and maintained 8-12 Tableau dashboards covering 30+ KPIs (CTR, CVR, CAC, ROAS, AOV, LTV, revenue), supporting weekly and monthly performance reviews for 10-15 stakeholders.",
        "Designed and executed 20+ A/B tests across landing pages, creatives, and audience segments, delivering a 15% conversion-rate lift on targeted campaigns and improving test win-rate through structured hypothesis tracking.",
        "Developed Snowflake SQL datasets and reusable reporting views for 50+ recurring metrics, cutting data pull/refresh turnaround by 30% and improving report consistency across teams.",
        "Automated 10+ recurring reports and dashboard update pipelines, reducing manual reporting time by 50% and shortening weekly reporting cycles from hours to minutes.",
        "Standardized KPI definitions and maintained a data dictionary with 100+ fields/metrics, reducing metric conflicts by 25% and improving traceability for analytics documentation.",
        "Delivered executive-ready insights in weekly cross-functional reviews, translating attribution, cohort, and experiment results into 5-10 prioritized actions per month adopted in campaign planning and budget allocation."
      ]
    }
  ];

  const projects = [
    {
      title: "FraudSense - AI-Powered Early Fraud Pattern Detection",
      subtitle: "Jan. 2025 – Present",
      category: "Fraud Detection Analytics",
      introduction: "Built a hybrid fraud detection pipeline using SQL + Snowflake + event tracking to enable early anomaly detection across behavioral signals.",
      problem: "Organizations face increasing fraud risks with high volumes of false positives, creating alert fatigue for investigators and delayed detection of actual threats.",
      objective: "Develop an AI-powered fraud detection system that achieves high precision while reducing false positives to improve investigator efficiency.",
      methodology: [
        "Built hybrid fraud detection pipeline using SQL + Snowflake + event tracking.",
        "Engineered behavioral features including rolling spend, merchant velocity, and repeat-device patterns.",
        "Validated detection thresholds through rigorous A/B testing.",
        "Implemented early anomaly detection across multiple behavioral signals."
      ],
      results: [
        "Achieved 92% precision on benchmark datasets.",
        "Reduced alert noise by 45% through feature engineering.",
        "Improved investigator case review speed by 20%."
      ],
      conclusion: "Successfully demonstrated end-to-end fraud analytics capabilities combining technical implementation with measurable business impact on detection accuracy and operational efficiency."
    },
    {
      title: "CareCostIQ - Healthcare Utilization & Cost Optimization Analytics",
      subtitle: "Aug. 2024 – Feb. 2025",
      category: "Healthcare Analytics",
      introduction: "Analyzed 1M+ patient records to identify utilization and cost drivers, delivering actionable recommendations for healthcare expense optimization.",
      problem: "Healthcare organizations struggle with rising costs and lack visibility into utilization patterns that drive departmental expenses.",
      objective: "Analyze patient records to identify cost drivers and deliver data-driven recommendations to reduce healthcare expenses while maintaining quality of care.",
      methodology: [
        "Analyzed 1M+ patient records using Python + SQL + Google Analytics.",
        "Identified utilization patterns and cost drivers across departments.",
        "Built automated KPI reporting with Tableau + Power BI dashboards.",
        "Implemented scheduled refresh workflows for real-time insights."
      ],
      results: [
        "Delivered recommendations supporting 15% reduction in departmental expenses.",
        "Cut manual reporting by 50 hours/week through automation.",
        "Improved operational productivity by 25% with self-service dashboards."
      ],
      conclusion: "Demonstrated expertise in healthcare analytics, large-scale data processing, and business intelligence automation to drive cost optimization outcomes."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Analytics & BI',
      skills: ['SQL', 'Snowflake', 'Tableau', 'Looker', 'Power BI', 'Google Analytics', 'Dashboard Development', 'KPI Reporting', 'Data Visualization']
    },
    {
      icon: TrendingUp,
      title: 'Tracking & Experimentation',
      skills: ['Pixel Tracking', 'Event Tracking', 'Attribution Modeling', 'A/B Testing', 'KPI Measurement', 'Customer Lifetime Value (LTV)', 'Data Hygiene', 'Hypothesis Testing']
    },
    {
      icon: Users,
      title: 'Reporting & Governance',
      skills: ['Dashboard Development', 'Reporting Automation', 'Full-Funnel Reporting', 'Recurring Reporting', 'Analytics Documentation', 'Data Dictionary Maintenance', 'Metric Definitions', 'Data Governance']
    },
    {
      icon: Lightbulb,
      title: 'Marketing & eCommerce Analytics',
      skills: ['Shopify Analytics', 'Klaviyo Analytics', 'Marketing Performance Analysis', 'eCommerce KPIs', 'Channel Efficiency Analysis', 'Consumer Behavior Analysis', 'Conversion Optimization', 'Funnel Analysis']
    }
  ];

  const education = [
    {
      school: "Stevens Institute of Technology",
      degree: "Master of Science in Business Intelligence & Analytics",
      location: "Hoboken, NJ",
      dates: "May 2025",
      details: "Advanced coursework in business intelligence, data analytics, and strategic decision-making."
    },
    {
      school: "Anurag University",
      degree: "Bachelor of Technology in Information Technology",
      location: "Hyderabad, India",
      dates: "Completed",
      details: "Foundation in information technology, database systems, and software development."
    }
  ];

  const certifications = [];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              ABHIRAM REDDY GUNUTULA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Abhiram Reddy Gunutula"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              ABHIRAM REDDY GUNUTULA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Data Analyst | Business Intelligence | SQL | Snowflake | Tableau
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              HOBOKEN, NJ, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'CONVERSION IMPROVEMENT', value: '15%', detail: 'Through A/B Testing' },
              { label: 'REPORTING EFFICIENCY', value: '50%', detail: 'Manual Effort Reduction' },
              { label: 'DATA TURNAROUND', value: '30%', detail: 'Faster SQL Extraction' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data Analyst specializing in marketing and eCommerce analytics. Bridging technical data expertise with business strategy to deliver actionable insights and measurable outcomes across full-funnel reporting and KPI optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Full-Funnel Analytics',
                detail: 'Analyze performance across 6+ marketing channels and 3 funnel stages (acquisition → conversion → retention) to surface trend drivers and improve weekly optimization decisions. Built 8-12 Tableau dashboards covering 30+ KPIs.'
              },
              {
                icon: Rocket,
                title: 'Data Automation',
                detail: 'Automated 10+ recurring reports and dashboard pipelines, reducing manual reporting time by 50%. Developed Snowflake SQL datasets for 50+ recurring metrics, cutting data turnaround by 30% and improving report consistency.'
              },
              {
                icon: Lightbulb,
                title: 'Experimentation & Attribution',
                detail: 'Designed and executed 20+ A/B tests delivering 15% conversion-rate lift. Implemented pixel tracking across 3+ ad platforms, reducing "unknown" conversions by 20-30%. Standardized KPI definitions with 100+ field data dictionary.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              4+ years delivering marketing and eCommerce analytics across full-funnel reporting, KPI dashboards, and data automation.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Fraud detection analytics and healthcare cost optimization projects demonstrating advanced analytics capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or project documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Analytics, business intelligence, and marketing technology expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss data analytics opportunities, business intelligence initiatives, or marketing analytics projects.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+12014014248"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (201) 401-4248
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/abhiram-reddy-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:abhiramreddy604@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                abhiramreddy604@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Abhiram Reddy Gunutula · Data Analytics & Business Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;