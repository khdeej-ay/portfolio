export interface IProjectData {
  IMAGE?: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  LINK?: string;
  SHORT_DESCRIPTION?: string;
  DESCRIPTION: string;
  NOTE?: string;
  FEATURES?: string[];
  TAGS: string[];
}

export interface IOtherProjectData {
  SHORT_DESCRIPTION: string;
  TAGS: string[];
}

export const DATA = {
  HEADER: {
    NAME: "Syeda Khadeeja",
    PRONOUN: "she/her",
    HEADLINE: "Full-Stack Developer",
    RESUME: "/resume.pdf",
    EMAIL: "mailto:s.khdeej@gmail.com",
    GITHUB: "https://github.com/khd33j",
    LINKEDIN: "https://www.linkedin.com/in/khdeej",
  },

  ABOUT_ME: {
    INTRO:
      "I'm a final-year Creative Computing student and a self-described multipotentialite — someone who thrives across disciplines rather than specialising in just one. Over the past 3 years, I've built a range of frontend and full-stack web projects, designed Figma prototypes, developed Android applications, and recently started exploring machine learning. Right now, I'm building a startup as part of my university coursework, while also dipping into cybersecurity and physical computing. Outside of tech, I'm passionate about reading, crocheting, cooking, and baking.",
  },

  EXPERIENCE: {
    "Real Estate Client": {
      WEBSITE: "",
      POSITION: "Frontend Developer",
      LOCATION: "Freelance",
      DURATION: "Jan 2025 – Jun 2025",
      DESCRIPTION: [
        "Led frontend development for a full-stack responsive real estate website, building interactive pages with React.js and React Router.",
        "Implemented dynamic property listings, filterable image galleries, and contact form, while maintaining the layout consistency across all breakpoints.",
        "Conducted thorough cross-device testing on mobile, tablet, and desktop throughout the build cycle, catching and resolving layout inconsistencies before delivery.",
      ],
      TECH_STACK: ["React.js", "React Router", "CSS", "Responsive Design", "Node.js", "MongoDB", "Express.js", "Git & GitHub", "Vercel"],
    },
    "Hacktoberfest 2024": {
      WEBSITE: "https://hacktoberfest.com",
      POSITION: "Open Source Contributor",
      LOCATION: "Remote",
      DURATION: "Oct 2024",
      DESCRIPTION: [
        "Completed 4 accepted pull requests across open-source repositories, tackling frontend bugs, improving UI components, fixing API integration issues, and updating outdated technical documentation.",
        "Navigated unfamiliar codebases independently, quickly understanding project conventions and contributing meaningful fixes within tight timelines.",
        "Strengthened collaborative workflow skills — writing clear commit messages, responding to maintainer feedback, and iterating on PRs to meet contribution standards.",
      ],
      TECH_STACK: ["Git", "GitHub", "React.js", "JavaScript", "Documentation"],
    },
    "ISIP": {
      WEBSITE: "https://www.isip.foundation/",
      POSITION: "Media & Design Taskforce Member",
      LOCATION: "On-site",
      DURATION: "May 2024 – Dec 2024",
      DESCRIPTION: [
        "Collaborated with the project manager to redesign the organisation chart on FigJam, improving clarity and structure for over 50 team members.",
        "Curated and sourced 30+ high-quality stock images for the organisation's website and worked closely with the web development team to enhance visual appeal and functionality.",
      ],
      TECH_STACK: ["FigJam", "Figma", "Canva", "Unsplash", "Pexels"],
    },
    "A Level Tutor": {
      WEBSITE: "",
      POSITION: "Private Tutor",
      LOCATION: "On-site",
      DURATION: "Jun 2022 – May 2024",
      DESCRIPTION: [
        "Provided personalised tutoring in Mathematics, Physics, and Chemistry, helping students achieve at least a one-grade improvement.",
        "Designed structured past paper sessions focused on exam technique and critical thinking, resulting in a 15% score increase within 3 months.",
      ],
      TECH_STACK: ["Mathematics", "Physics", "Chemistry"],
    },
  },

  PROJECTS: {
    "Vellum": {
      IMAGE: "/projects/vellum.png",
      NOTE: "Ongoing",
      SHORT_DESCRIPTION: "A minimal digital journalling platform built for distraction-free writing and reflection.",
      DESCRIPTION:
        "Vellum is a clean, focused journalling platform designed around the idea that writing should feel effortless. Built with React and Supabase, it uses row-level security to keep every user's entries completely private. Currently being expanded with a rich text editor, tagging system, and mood tracking — with a deliberate focus on thoughtful UX over feature bloat.",
      FEATURES: [
        "Distraction-free writing environment",
        "Private entries with row-level security",
        "Rich text editor (in progress)",
        "Tagging system and mood tracking (in progress)",
      ],
      TAGS: ["React", "Supabase", "PostgreSQL"],
    },
    "Shelves": {
      IMAGE: "/projects/shelves.png",
      SHORT_DESCRIPTION: "A full-stack book tracking app where users can organise their reading life across custom shelves.",
      DESCRIPTION:
        "Shelves is a MERN stack app that lets users search any book title via the Google Books API, save them to custom shelves, and track their reading progress. Built with a clean React component architecture and styled with Tailwind CSS, it features JWT-based authentication and bcrypt password hashing to keep each user's library private and secure.",
      FEATURES: [
        "Google Books API search integration",
        "Custom shelves and reading progress tracking",
        "JWT authentication with protected routes",
        "Responsive, mobile-first UI",
      ],
      TAGS: ["React.js", "React Router", "Node.js", "Express.js", "MongoDB", "Tailwind", "JWT", "bcrypt"],
    },
    "Oasis": {
      IMAGE: "/projects/oasis.png",
      SHORT_DESCRIPTION: "A full-stack real estate website built for a freelance client, featuring property listings and a contact form.",
      DESCRIPTION:
        "Oasis is a responsive real estate website developed as a freelance project. Built with React and React Router, it features dynamic property listings, a filterable image gallery powered by Swiper.js, and a contact form backed by a Node.js/Express/MongoDB stack. Delivered with thorough cross-device testing across mobile, tablet, and desktop to ensure layout consistency throughout.",
      FEATURES: [
        "Dynamic property listings",
        "Filterable image gallery with Swiper.js",
        "Contact form with backend persistence",
        "Fully responsive across all breakpoints",
      ],
      TAGS: ["React.js", "React Router", "CSS", "JavaScript", "Swiper.js", "Node.js", "Express.js", "MongoDB"],
    },
    "Munch": {
      IMAGE: "/projects/munch.png",
      SHORT_DESCRIPTION: "A full-stack recipe discovery app with search, categories, and a random recipe generator.",
      DESCRIPTION:
        "Munch is a MERN stack recipe app that lets users search by ingredient or dish name, browse by category, and get a random recipe when inspiration is lacking. It includes a user authentication system with MongoDB-backed session storage, so logged-in users can save and revisit their favourite recipes. Deployed on Vercel with a mobile-first Tailwind layout and smooth React Router navigation.",
      FEATURES: [
        "Search recipes by ingredient or name",
        "Category browsing and random recipe generator",
        "Save favourite recipes across sessions",
        "User authentication with session storage",
      ],
      TAGS: ["React.js", "React Router", "Node.js", "Express.js", "MongoDB", "Tailwind", "SCSS"],
    },
    "Plntd.": {
      IMAGE: "/projects/plntd.png",
      SHORT_DESCRIPTION: "A fully responsive multi-page front-end clone of the Plntd. plant e-commerce brand.",
      DESCRIPTION:
        "A hand-built front-end clone of the Plntd. plant e-commerce brand, recreated from scratch using HTML, SCSS, and Bootstrap. It includes an Owl Carousel product slider, parallax hero sections, collapsible navigation, and accordion FAQs — all wired with vanilla JavaScript. Layered CSS animations cover clip-path reveals, fade-ins, scroll-triggered effects, and hover transitions, with close attention to motion design and visual polish.",
      FEATURES: [
        "Owl Carousel product slider",
        "Parallax hero sections",
        "Clip-path and scroll-triggered CSS animations",
        "Manually tested across mobile, tablet, and desktop",
      ],
      TAGS: ["HTML", "SCSS", "Bootstrap", "JavaScript", "Owl Carousel"],
    },
    "RGB Game": {
      IMAGE: "/projects/rgb.png",
      SHORT_DESCRIPTION: "A browser-based colour guessing game that challenges players to match a swatch to its RGB value.",
      DESCRIPTION:
        "A fun, replayable colour guessing game where players identify a colour swatch from its RGB value. Built with vanilla HTML, CSS, and JavaScript, it features dynamic difficulty levels that adjust the number of options and the visual similarity between distractors. Score and streak tracking, randomised RGB generation, and instant visual feedback keep each round snappy and engaging.",
      FEATURES: [
        "Dynamic difficulty levels",
        "Score and streak tracking",
        "Randomised RGB generation",
        "Instant visual feedback",
      ],
      TAGS: ["HTML", "CSS", "JavaScript"],
    },
  },

  OTHER_PROJECTS: {
    Applications: {
      "Recipe Note-Taking App": {
        SHORT_DESCRIPTION: "A native Android app for saving and organising personal recipes.",
        TAGS: ["Android Studio", "Java", "Kotlin"],
      },
      "Pet Matching App": {
        SHORT_DESCRIPTION: "A native Android app that matches users with pets based on their preferences and lifestyle.",
        TAGS: ["Android Studio", "Java", "Kotlin"],
      },
      "Vending Machine App": {
        SHORT_DESCRIPTION:
          "An interactive terminal-based vending machine simulator built with Python, featuring ASCII art, colours, and OOP — simulating real purchase and payment flows with stock tracking and receipt generation.",
        TAGS: ["Python", "OOP"],
      },
      "Trivio": {
        SHORT_DESCRIPTION:
          "A customisable trivia quiz app built with Tkinter and the Open Trivia DB API. Users pick their category, difficulty, question count, and type — then play through a themed GUI with True/False and MCQ support.",
        TAGS: ["Python", "Tkinter", "OpenTriviaDB API", "OOP", "Figma"],
      },
    },
    "ML Projects": {
      "Hybrid Book Recommendation System": {
        SHORT_DESCRIPTION:
          "A Python recommendation engine blending TF-IDF content filtering with KMeans clustering, wrapped in a Gradio interface with live search, adjustable output, and automatic book cover fetching.",
        TAGS: ["Python", "Scikit-learn", "Pandas", "NumPy", "Gradio", "TF-IDF", "KMeans"],
      },
      "Life Expectancy Prediction": {
        SHORT_DESCRIPTION: "A regression model exploring predictors of life expectancy using public health datasets on Kaggle.",
        TAGS: ["Python", "Kaggle", "Scikit-learn", "Pandas"],
      },
      "Breast Cancer Classification": {
        SHORT_DESCRIPTION: "A supervised classification model predicting breast cancer diagnosis from clinical features.",
        TAGS: ["Python", "Kaggle", "Scikit-learn"],
      },
      "Disciplinary": {
        SHORT_DESCRIPTION:
          "A Dialogflow-powered productivity chatbot that tackles procrastination, burnout, and focus issues. Offers five services: solving productivity problems, building to-do lists, running focus timers, explaining study techniques like Pomodoro and the Eisenhower Matrix, and sharing motivational content.",
        TAGS: ["Dialogflow", "Conversational AI", "NLP"],
      },
    },
    "Mini Games": {
      "Sproutman": {
        SHORT_DESCRIPTION: "A small game developed in Unity.",
        TAGS: ["Unity"],
      },
      "Red and Snow": {
        SHORT_DESCRIPTION: "A narrative visual novel built in Twine.",
        TAGS: ["Twine"],
      },
      "Snake Game": {
        SHORT_DESCRIPTION: "A classic Snake game rebuilt in p5.js with a custom visual design.",
        TAGS: ["p5.js", "JavaScript"],
      },
      "Audio Visualizer": {
        SHORT_DESCRIPTION: "A p5.js audio visualizer with custom tweaks to the visual output and behaviour.",
        TAGS: ["p5.js", "JavaScript"],
      },
      "Back to Camp": {
        SHORT_DESCRIPTION: "A short narrative game built in Bitsy.",
        TAGS: ["Bitsy"],
      },
    },
    "Design & Prototypes": {
      "University Website Redesigns": {
        SHORT_DESCRIPTION:
          "Two university website redesigns — one produced in Canva, and one built as a fully interactive prototype in Figma.",
        TAGS: ["Figma", "Canva", "UI Design", "Prototyping"],
      },
      "Snact.": {
        SHORT_DESCRIPTION: "A Figma prototype for a restaurant finder mobile app.",
        TAGS: ["Figma", "UI Design", "Prototyping"],
      },
      "First Class Trophy": {
        SHORT_DESCRIPTION:
          "A physical trophy prototype designed for a Creative Computing award. The icosahedron form was chosen to represent the intersection of code, design, and art — built from lightweight materials as part of an ideation and UX design module.",
        TAGS: ["Physical Prototype", "Ideation", "UX Design"],
      },
    },
  },

  SKILLS: {
    "Languages": ["HTML", "CSS", "JavaScript", "Python", "Kotlin", "C++"],
    "Frameworks & Libraries": ["React", "Next.js (learning)", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "SCSS", "NumPy", "Pandas", "Scikit-learn"],
    "Databases & Auth": ["MongoDB", "Supabase", "JWT", "bcrypt"],
    "Tools & Platforms": ["Git", "GitHub", "Figma", "Canva", "Postman", "Android Studio", "Unity", "Bitsy", "Twine", "CapCut", "Arduino (learning)", "TypeScript (learning)"],
    "Certifications": [
      "DataCamp – data science & Python certifications",
      "CISCO – Introduction to Cybersecurity",
      "LinkedIn Learning – frontend & design courses",
    ],
  },

  EDUCATION: {
    "Bath Spa University": {
      DEGREE: "BSc (Hons) Creative Computing",
      LOCATION: "Bath, UK",
      DURATION: "Expected 2026",
      GPA: "",
      HIGHLIGHT: "Academic Excellence Award — multiple semesters",
    },
  },
};
