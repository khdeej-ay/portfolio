export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
}

export const DATA = {
  HEADER: {
    NAME: "Syeda Khadeeja",
    PRONOUN: "she/her",
    HEADLINE: "Creative Computing Student · Web Developer",
    RESUME: "/resume.pdf",
    EMAIL: "mailto:s.khdeej@gmail.com",
    GITHUB: "https://github.com/khdeej-ay",
    LINKEDIN: "https://www.linkedin.com/in/khdeej",
  },

  ABOUT_ME: {
    INTRO:
      "I'm a final-year Creative Computing student and a self-described multipotentialite — someone who thrives across disciplines rather than specialising in just one. Over the past 3 years, I've built a range of frontend and full-stack web projects, designed Figma prototypes, developed Android applications, and recently started exploring machine learning. Right now, I'm building a startup as part of my university coursework, while also dipping into cybersecurity and physical computing. Outside of tech, I'm passionate about reading, crocheting, cooking, and baking.",
  },

  EXPERIENCE: {
    "Real Estate Client": {
      WEBSITE: "#",
      POSITION: "Frontend Developer",
      LOCATION: "Freelance",
      DURATION: "Jan 2025 – Jun 2025",
      DESCRIPTION: [
        "Led frontend development for a full-stack responsive real estate website, building interactive pages with React.js and React Router.",
        "Implemented dynamic property listings, responsive image galleries, and contact forms with a strong focus on layout consistency across mobile, tablet, and desktop.",
        "Manually tested and iterated on responsive behaviour across all major device sizes to ensure a polished user experience.",
      ],
      TECH_STACK: ["React.js", "React Router", "CSS", "Responsive Design"],
    },
    "Hacktoberfest 2024": {
      WEBSITE: "https://hacktoberfest.com",
      POSITION: "Open Source Contributor",
      LOCATION: "Remote",
      DURATION: "Oct 2024",
      DESCRIPTION: [
        "Contributed to 4 open-source GitHub repositories, resolving frontend and API integration bugs, enhancing UI components, and updating technical documentation.",
      ],
      TECH_STACK: ["Git", "GitHub", "JavaScript", "Documentation"],
    },
    "ISIP": {
      WEBSITE: "#",
      POSITION: "Media & Design Taskforce Member",
      LOCATION: "On-site",
      DURATION: "May 2024 – Dec 2024",
      DESCRIPTION: [
        "Collaborated with the project manager to redesign the organisation chart on FigJam, improving clarity and structure for over 50 team members.",
        "Sourced 30+ high-quality stock images for the organisation's website and worked closely with the web development team to enhance visual appeal and functionality.",
      ],
      TECH_STACK: ["FigJam", "Figma", "Canva"],
    },
    "A Level Tutor": {
      WEBSITE: "#",
      POSITION: "Private Tutor",
      LOCATION: "On-site",
      DURATION: "Jun 2022 – May 2024",
      DESCRIPTION: [
        "Provided personalised tutoring in Mathematics, Physics, and Chemistry, helping students achieve at least a one-grade improvement.",
        "Guided students through past paper practice, boosting critical thinking and problem-solving skills — resulting in a 15% average increase in test scores within 3 months.",
      ],
      TECH_STACK: ["Mathematics", "Physics", "Chemistry"],
    },
  },

  PROJECTS: {
    "Shelves – Book Tracking App": {
      DESCRIPTION: [
        "A full-stack MERN book tracking app where users can search any title via the Google Books API, save books to custom shelves, and track their reading progress — all with a responsive, mobile-first UI.",
        "Shelf data is persisted in MongoDB, with protected routes and JWT-based authentication ensuring each user's library remains private and secure.",
        "Built with a clean component architecture in React and styled with Tailwind CSS, with bcrypt handling password hashing and Express.js powering the REST API.",
      ],
      TECH_STACK: ["React.js", "React Router", "Node.js", "MongoDB", "Express.js", "Tailwind", "bcrypt", "JWT"],
    },
    "Munch – Recipe Web App": {
      DESCRIPTION: [
        "A full-stack recipe discovery app built with the MERN stack, letting users search by ingredient or name, browse by category, and generate a random recipe when they can't decide what to cook.",
        "Features a user authentication system with MongoDB-backed session storage, allowing logged-in users to save and revisit their favourite recipes across sessions.",
        "Deployed on Vercel with a mobile-first Tailwind CSS layout and React Router handling smooth multi-page navigation throughout the app.",
      ],
      TECH_STACK: ["React.js", "React Router", "Node.js", "MongoDB", "Express.js", "Tailwind", "SCSS"],
    },
    "Hybrid Book Recommendation System": {
      DESCRIPTION: [
        "A Python recommendation engine that blends content-based filtering (TF-IDF on descriptions) with unsupervised KMeans clustering, using category overlap scoring to surface more relevant results.",
        "Wrapped in a Gradio interface with live search, adjustable top-N output, and automatic book cover fetching — making the model accessible without any command-line setup.",
        "Evaluated recommendation quality using Jaccard similarity between suggested and actual book categories, demonstrating measurable improvement over a single-method baseline.",
      ],
      TECH_STACK: ["Python", "Scikit-learn", "Pandas", "NumPy", "Gradio", "TF-IDF", "KMeans"],
    },
    "Plntd. Clone": {
      DESCRIPTION: [
        "A multi-page, fully responsive front-end clone of the Plntd. plant e-commerce brand, built from scratch with HTML, SCSS, and Bootstrap — manually tested across mobile, tablet, and desktop breakpoints.",
        "Includes rich interactive components: an Owl Carousel product slider, parallax hero sections, collapsible navigation, and smooth accordion FAQs, all wired with vanilla JavaScript.",
        "Features layered CSS animations including clip-path reveals, fade-ins, scroll-triggered effects, and hover transitions — with close attention to motion design and visual polish.",
      ],
      TECH_STACK: ["HTML", "SCSS", "Bootstrap", "JavaScript", "Owl Carousel"],
    },
    "Vellum – Digital Journalling Platform": {
      NOTE: "Ongoing",
      DESCRIPTION: [
        "A minimal digital journalling platform designed around distraction-free writing — clean layout, no clutter, just a space to think and reflect.",
        "Built with React on the frontend and Supabase on the backend, with row-level security ensuring each user's entries are fully private.",
        "Currently implementing a rich text editor, tagging system, and mood tracking — with a focus on thoughtful UX over feature bloat.",
      ],
      TECH_STACK: ["React", "Supabase"],
    },
    "RGB Color Guessing Game": {
      DESCRIPTION: [
        "A browser-based colour guessing game that challenges players to match a colour swatch to its RGB value — testing colour perception and pattern recognition in a fun, replayable format.",
        "Built with vanilla HTML, CSS, and JavaScript, with dynamic difficulty levels that adjust the number of colour options and the visual similarity between distractors.",
        "Tracks score and streaks across rounds, with randomised RGB generation and instant visual feedback on correct and incorrect guesses.",
      ],
      TECH_STACK: ["HTML", "CSS", "JavaScript"],
    },
  },

  OTHER_PROJECTS: {
    "Vending Machine Utility App": {
      DESCRIPTION: [
        "Created an interactive vending machine app using Python and OOP principles, simulating real-world purchase and payment processes.",
        "Implemented nested dictionaries for product categories, ASCII art interface, and modular functions for transactions, stock tracking, and receipt generation.",
      ],
      TECH_STACK: ["Python", "OOP"],
    },
    "Snact. – Restaurant Finder App": {
      DESCRIPTION: ["Designed a Figma prototype for a restaurant finder mobile app."],
      TECH_STACK: ["Figma"],
    },
    "Pet Matching App": {
      DESCRIPTION: ["Built a native Android pet matching application."],
      TECH_STACK: ["Android Studio", "Java", "Kotlin"],
    },
    "Recipe Note-Taking App": {
      DESCRIPTION: ["Built a native Android app for saving and organising personal recipes."],
      TECH_STACK: ["Android Studio", "Java", "Kotlin"],
    },
    "Life Expectancy Prediction": {
      DESCRIPTION: ["Explored regression techniques to predict life expectancy using public health datasets on Kaggle."],
      TECH_STACK: ["Python", "Kaggle", "Scikit-learn", "Pandas"],
    },
    "Breast Cancer Classification": {
      DESCRIPTION: ["Built a classification model to predict breast cancer diagnosis using supervised learning on Kaggle."],
      TECH_STACK: ["Python", "Kaggle", "Scikit-learn"],
    },
    "Sproutman": {
      DESCRIPTION: ["Developed a small game in Unity."],
      TECH_STACK: ["Unity"],
    },
    "Back to Camp & Red and Snow": {
      DESCRIPTION: [
        "Created two visual novels — Back to Camp (Bitsy) and Red & Snow (Twine) — as narrative game projects.",
      ],
      TECH_STACK: ["Bitsy", "Twine"],
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
      DURATION: "Expected 2025",
      GPA: "",
      HIGHLIGHT: "Academic Excellence Award — multiple semesters",
    },
  },
};
