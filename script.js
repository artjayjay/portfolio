// ================ DYNAMIC CONTENT VARIABLES ================
// Personal Information
const personalInfo = {
  name: "Arturo Dela Cruz",
  title: "Creative FrontEnd Backend Developer",
  tagline: "Creative Frontend Backend Developer",
  avatar: "profile_pic.png",
  location: "Philippines",
  email: "arturomeprof@gmail.com",
  phone: "+639922471654",
  social: {
    github: "https://github.com/artjayjay",
    linkedin: "https://linkedin.com/in/arturo-dela-cruz-464b58271",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/arturomeprof?igsh=NG9iOW0zNDE4eTZn",
    codepen: "https://codepen.io/yourusername",
  },
};

// Typing Animation Phrases
const typingPhrases = [
  `Hi, my name is ${personalInfo.name}.`,
  "Welcome to my portfolio.",
  `I'm a ${personalInfo.title.toLowerCase()}.`,
  "Let's build something amazing!",
];

// Projects Data with Status
const projects = [
  {
    title: "Online Karaoke version 1",
    description: `A karaoke application built with Python and FastAPI, 
      featuring a song browser, queue management, and a 
      player with scoring functionality.`,
    image: "projects/karaokeimg.png",
    technologies: [
      "Python",
      "Sqlite",
      "Html5",
      "Scss",
      "Javascript",
      "FastAPI",
    ],
    demoLink: "#",
    codeLink: "#",
    status: "completed",
  },
  {
    title: "Voting System",
    description: `A secure and transparent voting system designed to prevent spoilers 
      and ensure fair voting processes.`,
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Project+2",
    technologies: [
      "VB.net",
      "MySQL",
      "Python",
      "Sqlite",
      "Html5",
      "Scss",
      "Javascript",
      "FastAPI",
    ],
    demoLink: "#",
    codeLink: "#",
    status: "in-progress",
  },
  {
    title: "Enrollment System",
    description: `A capstone project designed to streamline the 
    enrollment process for students, ensuring efficiency and accuracy.`,
    image: "projects/enrollment_system.png",
    technologies: [
      "Python",
      "Sqlite",
      "Html5",
      "Scss",
      "Javascript",
      "FastAPI",
    ],
    demoLink: "#",
    codeLink: "#",
    status: "in-progress",
  },
];

const allprojects = [
  {
    title: "Online Karaoke version 1",
    description: `A karaoke application built with Python and FastAPI, 
          featuring a song browser, queue management, and a 
          player with scoring functionality.`,
    image: "projects/karaokeimg.png",
    technologies: ["Python", "Sqlite", "Html", "Scss", "Javascript", "FastAPI"],
    demoLink: "#",
    codeLink: "#",
    status: "completed",
  },
  {
    title: "Voting System",
    description: `A secure and transparent voting system designed to prevent spoilers 
          and ensure fair voting processes.`,
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Project+2",
    technologies: [
      "VB.net",
      "MySQL",
      "Python",
      "Sqlite",
      "Html",
      "Scss",
      "Javascript",
      "FastAPI",
    ],
    demoLink: "#",
    codeLink: "#",
    status: "in-progress",
  },
  {
    title: "Enrollment System",
    description: `A capstone project designed to streamline the 
        enrollment process for students, ensuring efficiency and accuracy.`,
    image: "projects/enrollment_system.png",
    technologies: ["Python", "Sqlite", "Html", "Scss", "Javascript", "FastAPI"],
    demoLink: "#",
    codeLink: "#",
    status: "future",
  },
  {
    title: "Dance Move Detection System",
    description: `A Just Dance-inspired project that uses AI to detect 
    and compare dance moves to a predefined choreography.`,
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Project+4",
    technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "FastAPI"],
    demoLink: "#",
    codeLink: "#",
    status: "future",
  },
  {
    title: "AI-Powered CCTV System",
    description: `A CCTV system integrated with AI for 
    real-time object detection and facial recognition.`,
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Project+5",
    technologies: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi"],
    demoLink: "#",
    codeLink: "#",
    status: "future",
  },
  {
    title: "Smart Home Assistant",
    description: `A Raspberry Pi-based smart home assistant that integrates AI, 
    Docker, and IoT to automate household tasks such as water pressure regulation, 
    electricity control, CCTV monitoring, and media entertainment.`,
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Project+6",
    technologies: [
      "Raspberry Pi",
      "Docker",
      "Python",
      "AI (OpenCV, TensorFlow)",
      "Home Assistant",
      "Jellyfin",
      "MQTT",
    ],
    demoLink: "#",
    codeLink: "#",
    status: "future",
  },
  {
    title: "Customer Service Softphone App",
    description: `A client or customer service application with softphone 
    capabilities for receiving inbound and making outbound calls. 
    It has multichannel communication functionalities such as phone chat email sms etc, 
    integrated with a phone provider's business portal API. Designed for 
    both retail and tech companies, it also features a ticketing system for 
    efficient issue tracking and resolution.`,
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Project+7",
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "Asterisk PBX",
      "WebRTC",
      "Phone Provider API (e.g., Vonage, Plivo, or custom provider)",
      "SQLite/PostgreSQL",
    ],
    demoLink: "#",
    codeLink: "#",
    status: "future",
  },
];

// Services Data
const services = [
  {
    title: "Web Development",
    description: `Custom website development from simple landing pages 
    to complex web applications using modern technologies.`,
    icon: "fas fa-laptop-code",
    technologies: ["HTML5", "CSS3", "JavaScript", "SCSS", "Python"],
  },
  {
    title: "FrontEnd Development",
    description: `Build dynamic, responsive, and user-friendly web 
    interfaces that suit to your organizational needs.`,
    icon: "fas fa-solid fa-desktop",
    technologies: ["HTML5", "CSS3", "JavaScript", "SCSS", "Python", "C#"],
  },
  {
    title: "Backend Development",
    description: `Robust server-side solutions, API development, 
    and database architecture for your applications.`,
    icon: "fas fa-server",
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Cloud",
      "AI",
    ],
  },
  {
    title: "IT Support Technical / Non Technical Consulting",
    description: `Available 24/7 to assist you with any questions regarding technology stack, secure architecture 
    decisions, and best practices for your project.`,
    icon: "fas fa-solid fa-headset",
    technologies: [
      "Phone",
      "Email",
      "Chat",
      "System Design",
      "Code Review",
      "Optimization",
    ],
  },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    text: `Arturo delivered our project ahead of 
    schedule and with exceptional quality. His attention to 
    detail and problem-solving skills were impressive throughout the project.`,
    author: "Alfred John Estonilo",
    title: "Audio Visual Technical Support, Geoplan",
    avatar: "https://placehold.co/80x80/1a1a2e/ffffff?text=AE",
  },
  {
    id: 2,
    text: `Working with Arturo on our project was a pleasure. 
    He consistently provided innovative solutions and his communication was excellent. 
    Highly recommended!`,
    author: "Angelyn Balquiedra",
    title: "Customer Service Representative, Anbosi Philippines",
    avatar: "https://placehold.co/80x80/1a1a2e/ffffff?text=AB",
  },
  {
    id: 3,
    text: `Arturo's technical expertise helped us make crucial 
    decisions for our project. His expertise saved us months of development 
    time and potential costly mistakes.`,
    author: "Carmichael Ortiz",
    title: "IT Programmer, AP Printing and Packaging Inc.",
    avatar: "https://placehold.co/80x80/1a1a2e/ffffff?text=CO",
  },
];

// About Me Data
const aboutMe = {
  profile: [
    `I'm a passionate Frontend Backend Developer with diverse experience in IT support, 
    customer service, and technical configuration. My journey through different tech roles 
    has given me a unique perspective on creating user-friendly applications.`,
    `I specialize in JavaScript and Python frameworks and enjoy solving complex problems with clean, 
    efficient code. My background in customer-facing roles helps me build applications with 
    excellent user experiences.`,
  ],
  skills: {
    frontend: [
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "SCSS",
      "Editing Softwares",
    ],
    backend: ["FastAPI", "C#", "Python", "Zig", "Golang"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Sqlite"],
    tools: ["Git & GitHub", "Docker", "REST APIs", "Cloud", "Raspberry Pi"],
  },
  experience: [
    {
      period: "2024",
      position: "Configuration Specialist",
      company: "ITM8",
      responsibilities: [
        "Configured mainly patch monitoring and backup of Implementation assets",
        "Investigating Assets that misconfigured and find a way to resolve the issue",
        "Collaborated with different teams to help the investigation",
      ],
    },
    {
      period: "2019 - 2021",
      position: "Customer Service Representative",
      company: "Amazon",
      responsibilities: [
        "Resolved customer inquiries and retail issues",
        "Walked through the customer to help assist in their issue",
        "Maintained customer retention",
      ],
    },
    {
      period: "2017 - 2019",
      position: "IT Assistant/Office Clerk",
      company: "Kolora Ink and Chemical Corporation",
      responsibilities: [
        "Provided technical support for office systems",
        "Managed hardware and software installations",
        "Assisted with accounting office jobs",
      ],
    },
  ],
  goals: [
    "I'm seeking a full-time position as a Backend and Frontend Developer where I can contribute my technical skills and grow as a professional.",
    "My long-term goals include:",
    [
      "Mastering modern Python framework (fastapi)",
      "Developing expertise in api technologies",
      "Contributing to open source projects",
      "Mentoring junior developers",
    ],
  ],
};

// Helper function to format status text
function formatStatus(status) {
  const statusMap = {
    completed: "Completed",
    "in-progress": "In Progress",
    future: "Future Project",
  };
  return statusMap[status] || status;
}

// ================ DOM CONTENT LOADED ================
document.addEventListener("DOMContentLoaded", function () {
  // Set personal information
  document.querySelector(".avatar").src = personalInfo.avatar;
  document.querySelector(".contact-method a[href^='mailto']").textContent =
    personalInfo.email;
  document.querySelector(
    ".contact-method a[href^='mailto']"
  ).href = `mailto:${personalInfo.email}`;
  document.querySelector(".contact-method a[href^='tel']").textContent =
    personalInfo.phone;
  document.querySelector(
    ".contact-method a[href^='tel']"
  ).href = `tel:${personalInfo.phone.replace(/\D/g, "")}`;
  document.querySelector(".contact-method p").textContent =
    personalInfo.location;
  document.querySelector(".tagline").textContent = personalInfo.tagline;

  // Set social links
  document.querySelector(".social-icons a[aria-label='GitHub']").href =
    personalInfo.social.github;
  document.querySelector(".social-icons a[aria-label='LinkedIn']").href =
    personalInfo.social.linkedin;
  document.querySelector(".social-icons a[aria-label='Twitter']").href =
    personalInfo.social.twitter;
  document.querySelector(".social-icons a[aria-label='Instagram']").href =
    personalInfo.social.instagram;
  document.querySelector(".social-icons a[aria-label='CodePen']").href =
    personalInfo.social.codepen;

  // Typing Animation
  const textElement = document.getElementById("typed-text");
  const cursorElement = document.querySelector(".cursor");

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = typingPhrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);
    textElement.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(type, 100 + Math.random() * 50);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      }
      setTimeout(type, isDeleting ? 1000 : 500);
    }
  }

  setTimeout(type, 1000);

  // Generate Projects with Status
  const projectsGrid = document.querySelector(".projects-grid");
  projectsGrid.innerHTML = ""; // Clear existing projects

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-status status-${
          project.status
        }">Status: ${formatStatus(project.status)}</div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${
            project.demoLink
          }" target="_blank" class="project-link">Live Demo</a>
          <a href="${
            project.codeLink
          }" target="_blank" class="project-link">Code</a>
        </div>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });

  // Generate Services
  const servicesGrid = document.querySelector(".services-grid");
  servicesGrid.innerHTML = ""; // Clear existing services

  services.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    serviceCard.innerHTML = `
      <div class="service-icon">
        <i class="${service.icon}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="service-tech">
        ${service.technologies.map((tech) => `<span>${tech}</span>`).join("")}
      </div>
    `;

    servicesGrid.appendChild(serviceCard);
  });

  // Generate Testimonials
  const testimonialsGrid = document.getElementById("testimonials-grid");
  testimonialsGrid.innerHTML = testimonials
    .map(
      (testimonial) => `
  <div class="testimonial-card">
    <div class="testimonial-content">
      <div class="quote-icon">
        <i class="fas fa-quote-left"></i>
      </div>
      <p class="testimonial-text">${testimonial.text}</p>
    </div>
    <div class="testimonial-author">
      <img src="${testimonial.avatar}" alt="${testimonial.author}" class="author-avatar">
      <div class="author-info">
        <h4>${testimonial.author}</h4>
        <p class="author-title">${testimonial.title}</p>
      </div>
    </div>
  </div>
`
    )
    .join("");

  // Generate About Me Content
  // Profile
  const aboutText = document.querySelector(".about-text");
  aboutText.innerHTML = aboutMe.profile.map((p) => `<p>${p}</p>`).join("");

  // Skills
  const skillsGrid = document.querySelector(".skills-grid");
  skillsGrid.innerHTML = `
    <div class="skill-category">
      <h4>Frontend</h4>
      <ul>
        ${aboutMe.skills.frontend.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
    <div class="skill-category">
      <h4>Backend</h4>
      <ul>
        ${aboutMe.skills.backend.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
    <div class="skill-category">
      <h4>Database</h4>
      <ul>
        ${aboutMe.skills.database.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
    <div class="skill-category">
      <h4>Tools</h4>
      <ul>
        ${aboutMe.skills.tools.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
  `;

  // Experience
  const timeline = document.querySelector(".timeline");
  timeline.innerHTML = aboutMe.experience
    .map(
      (exp) => `
    <div class="timeline-item">
      <div class="timeline-date">${exp.period}</div>
      <div class="timeline-content">
        <h4>${exp.position}</h4>
        <p class="company">${exp.company}</p>
        <ul>
          ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");

  // Goals
  const goalsContent = document.querySelector(".goals-content");
  goalsContent.innerHTML = `
    <p>${aboutMe.goals[0]}</p>
    <p>${aboutMe.goals[1]}</p>
    <ul>
      ${aboutMe.goals[2].map((goal) => `<li>${goal}</li>`).join("")}
    </ul>
  `;

  // Rest of your existing JavaScript code (parallax, navigation, etc.)
  // Optional parallax effect
  const bgImage = document.querySelector(".svg-bg-image");
  if (bgImage) {
    window.addEventListener("mousemove", function (e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      bgImage.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
    });
  }

  // Navigation click animation
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add click animation
      this.classList.add("nav-click-animate");
      setTimeout(() => {
        this.classList.remove("nav-click-animate");
      }, 300);
    });
  });

  // Intersection Observer for section animations
  const sections = document.querySelectorAll("#work, #about");
  const projectCards = document.querySelectorAll(".project-card");
  const aboutCards = document.querySelectorAll(
    ".about-card, .skills-card, .experience-card, .goals-card"
  );

  const observerOptions = {
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-entrance");
      }
    });
  }, observerOptions);

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("project-bounce");
      }
    });
  }, observerOptions);

  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-entrance");
      }
    });
  }, observerOptions);

  // Observe sections
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Observe projects
  projectCards.forEach((project) => {
    projectObserver.observe(project);
  });

  // Observe about cards
  aboutCards.forEach((card) => {
    aboutObserver.observe(card);
  });

  // Smooth scroll for anchor links with offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// Add this to your existing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    overlay.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");
  });

  overlay.addEventListener("click", function () {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
    this.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  });

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
        overlay.classList.remove("is-active");
        document.body.classList.remove("no-scroll");
      }
    });
  });
});
