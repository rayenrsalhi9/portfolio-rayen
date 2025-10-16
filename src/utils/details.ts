export const projectDetails = [
  {
    id: "projectroom",
    title: "ProjectRoom",
    overview:
      "ProjectRoom is a modern AI-powered collaboration platform built to help teams, students, and startups manage projects, assign tasks, and track progress — all in one place. It integrates AI for intelligent task generation, Supabase for real-time collaboration and authentication, and a sleek React + Tailwind UI for a smooth, responsive experience across all devices.",
    objectives: [
      "Create a unified space where teams can manage projects, assign tasks, and monitor progress effortlessly.",
      "Leverage AI to automatically generate and categorize tasks from project descriptions.",
      "Enable real-time collaboration with instant updates and notifications.",
      "Ensure data security and access control using Supabase authentication and RLS policies.",
      "Deliver a clean, modern UI with responsive design and dark mode support."
    ],
    keyFeatures: [
      "AI-Powered Task Generation – Automatically create structured task lists from project descriptions using OpenAI.",
      "Realtime Collaboration – Stay synchronized with live updates, notifications, and team activity timelines.",
      "Smart Notifications – Receive instant alerts for new assignments, approaching deadlines, and status changes.",
      "Task Submission & Review – Members can upload deliverables, and admins can approve or request revisions.",
      "Visual Analytics – Interactive charts and dashboards to visualize progress and completion rates.",
      "Role-Based Access Control – Define admin and collaborator roles with appropriate permissions.",
      "Dark/Light Mode – Seamless theme switching across the entire platform.",
      "Responsive Design – Fully optimized for desktop, tablet, and mobile use."
    ],
    technologies: [
      "React 19",
      "TypeScript 5",
      "Supabase (Auth, Database, Realtime, Storage, RLS)",
      "OpenAI API",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Recharts",
      "Vite"
    ],
    architecture:
      "The frontend is built with React and TypeScript, styled using Tailwind CSS and shadcn/ui for a consistent and accessible design system. Supabase serves as the backend, handling PostgreSQL database operations, real-time updates, authentication, file storage, and role-based security through Row Level Security (RLS). The OpenAI API powers intelligent task generation, while Recharts delivers interactive visual analytics. The app is built and served via Vite for fast performance.",
    setup: [
      "Clone the repository and install dependencies using `npm install`.",
      "Create a `.env` file with Supabase and OpenAI API keys.",
      "Start the development server with `npm run dev`.",
      "Configure Supabase authentication, RLS policies, and storage for project and task data."
    ],
    usage: [
      "Sign up or log in with your email and password to access your workspace.",
      "Create a project or join one using an invite code.",
      "Use AI-powered task generation to automatically create a task list.",
      "Assign tasks to team members using drag-and-drop functionality.",
      "Track project progress through charts and visual analytics.",
      "Receive notifications for deadlines, updates, and submissions."
    ],
    security: [
      "Supabase Row Level Security (RLS) enforces access control to ensure data privacy.",
      "Authentication handled through Supabase Auth with JWT-based sessions.",
      "All user inputs sanitized using DOMPurify to prevent XSS attacks.",
      "Environment variables securely manage API keys and configurations.",
      "Strict TypeScript mode ensures compile-time safety and validation."
    ],
    links: {
      liveUrl: "",
      githubUrl: "https://github.com/rayenrsalhi9/project-manager"
    },
    images: [
      "/projectroom/about-dark.png",
      "/projectroom/about.png",
      "/projectroom/assign-task.png",
      "/projectroom/auth-error.png",
      "/projectroom/bar-chart.png",
      "/projectroom/clear-tasks.png",
      "/projectroom/create-project.png",
      "/projectroom/create-task-form.png",
      "/projectroom/create-tasks.png",
      "/projectroom/dashboard-filters.png",
      "/projectroom/dashboard.png",
      "/projectroom/error-element.png",
      "/projectroom/home-page-dark.png",
      "/projectroom/home-page.png",
      "/projectroom/join-project.png",
      "/projectroom/login-dark.png",
      "/projectroom/login.png",
      "/projectroom/member-dashboard.png",
      "/projectroom/members-dark.png",
      "/projectroom/mobile-navbar.png",
      "/projectroom/mobile-screen.png",
      "/projectroom/notification.png",
      "/projectroom/notifications-bell-dark.png",
      "/projectroom/notifications-bell.png",
      "/projectroom/notifications.png",
      "/projectroom/page-not-found.png",
      "/projectroom/pie-chart-1.png",
      "/projectroom/pie-chart-dark-2.png",
      "/projectroom/pie-chart-dark.png",
      "/projectroom/pie-chart.png",
      "/projectroom/profile.png",
      "/projectroom/progress-dark.png",
      "/projectroom/progress.png",
      "/projectroom/project-details.png",
      "/projectroom/project-gpt.png",
      "/projectroom/project-not-found.png",
      "/projectroom/project-timeline.png",
      "/projectroom/signup-dark.png",
      "/projectroom/signup.png",
      "/projectroom/submission-approval.png",
      "/projectroom/submission-assigned-task.png",
      "/projectroom/submission-rejection.png",
      "/projectroom/submission-review.png",
      "/projectroom/submissions-filter.png",
      "/projectroom/submissions-list.png",
      "/projectroom/submissions.png",
      "/projectroom/submitted-file-view.png",
      "/projectroom/task-deadline.png",
      "/projectroom/task-submission.png",
      "/projectroom/tasks-assignment.png",
      "/projectroom/timeline-dark.png",
      "/projectroom/upload-file.png"
    ]
  },
  {
    id: "castgpt",
    title: "CastGPT - AI Podcast Recommender",
    overview:
      "CastGPT is an AI-powered chatbot that helps users discover podcasts through natural language conversations. By combining OpenAI’s GPT model with Supabase pgvector and local embedding generation using Ollama, it delivers personalized, intelligent recommendations that feel human and conversational.",
    objectives: [
      "Create a chatbot capable of understanding user preferences for podcast discovery.",
      "Integrate vector-based semantic search using pgvector and embeddings.",
      "Provide real-time, responsive chat interactions with a smooth UI.",
      "Leverage AI responsibly through secured API connections."
    ],
    keyFeatures: [
      "AI Chat Interface - Conversational interface powered by OpenAI GPT models.",
      "Smart Podcast Recommendations - Uses vector similarity to find semantically related episodes.",
      "Local Embedding Generation - Generates embeddings using Ollama and BAAI/bge-m3.",
      "Supabase + pgvector Integration - Efficient vector search and storage.",
      "Modern UI - Responsive and elegant interface built with Tailwind CSS and shadcn/ui."
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "OpenAI API",
      "Supabase pgvector",
      "Ollama",
      "LangChain.js",
      "Vite"
    ],
    architecture:
      "CastGPT’s architecture combines a React-based frontend with a Supabase backend for vector storage and search. The chatbot logic runs client-side, connecting securely to the OpenAI API for conversational responses and Ollama for local embedding generation. Data is semantically matched via Supabase pgvector.",
    setup: [
      "Clone the repository and install dependencies using `npm install`.",
      "Set up `.env` with your OpenAI API key and Supabase credentials.",
      "Enable the `pgvector` extension in Supabase.",
      "Run SQL setup scripts located in `src/sql/` for embeddings and similarity search.",
      "Start the app with `npm run dev`."
    ],
    usage: [
      "Type your preferences or podcast genres into the chat.",
      "CastGPT responds with relevant podcast recommendations and descriptions.",
      "Supports follow-up questions and ongoing conversation context."
    ],
    security: [
      "Environment variables are used for API keys.",
      "No sensitive data is exposed in client-side code.",
      "Supabase handles secure storage and access control for vector data."
    ],
    links: {
      liveUrl: "",
      githubUrl: "https://github.com/rayenrsalhi9/cast-gpt"
    },
    images: [
      "/castgpt/cast-gpt.png",
      "/castgpt/cast-gpt-2.png",
      "/castgpt/cast-gpt-3.png",
      "/castgpt/mobile-conv.png",
      "/castgpt/mobile-empty.png",
    ]
  },
  {
    id: "matchymatch",
    title: "MatchyMatch - Memory Card Game",
    overview:
      "MatchyMatch is a responsive memory card game designed to test and improve focus, memory, and pattern recognition. Built with React, it uses efficient state management to track matched pairs and smooth animations for a fun experience. A comprehensive test suite ensures performance and reliability.",
    objectives: [
      "Create an engaging and interactive web game that reinforces memory and logic.",
      "Demonstrate strong React state management and UI responsiveness.",
      "Ensure code reliability through automated testing."
    ],
    keyFeatures: [
      "Interactive Gameplay - Flip and match cards with smooth transitions.",
      "Dynamic State Management - Efficient React state logic for real-time updates.",
      "Responsive Design - Works perfectly on all devices.",
      "Victory Animation - Confetti effect on game completion.",
      "Testing Suite - Includes Vitest and React Testing Library for component-level testing."
    ],
    technologies: [
      "React 19",
      "CSS3 (Grid & Transforms)",
      "React Confetti",
      "Vitest",
      "React Testing Library"
    ],
    setup: [
      "Clone the repository and install dependencies with `npm install`.",
      "Start the development server using `npm run dev`.",
      "Play directly in your browser and test logic with `npm run test`."
    ],
    usage: [
      "Flip cards to reveal images.",
      "Try to match pairs with as few moves as possible.",
      "Celebrate with confetti when all pairs are matched!"
    ],
    testing: [
      "Vitest and React Testing Library ensure consistent component behavior.",
      "Unit and integration tests validate core logic and user interactions."
    ],
    links: {
      liveUrl: "https://matchee.netlify.app/",
      githubUrl: "https://github.com/rayenrsalhi9/matchy"
    },
    images: [
      "/matchy-match.png"
    ]
  },
  {
    id: "quizzly",
    title: "Quizzly - Interactive Quiz Application",
    overview:
      "Quizzly is an interactive quiz application that delivers trivia questions dynamically from the Open Trivia Database API. It provides real-time scoring, feedback on answers, and accessibility features to ensure a smooth experience for all users.",
    objectives: [
      "Create an engaging trivia experience that adapts to user responses.",
      "Demonstrate React state management and API integration.",
      "Ensure a responsive and accessible UI for all device types."
    ],
    keyFeatures: [
      "Dynamic Question Fetching - Retrieves questions from an external API in real time.",
      "Instant Feedback - Provides immediate visual responses to selected answers.",
      "Score Tracking - Tracks and displays real-time user progress.",
      "Responsive Layout - Fully optimized for mobile and desktop.",
      "Accessible Design - Keyboard navigation and ARIA support."
    ],
    technologies: [
      "React 19",
      "CSS3",
      "Open Trivia API",
      "clsx"
    ],
    setup: [
      "Clone the repository and run `npm install`.",
      "Start the app with `npm run dev`.",
      "Play quizzes directly in your browser."
    ],
    usage: [
      "Answer questions and track your score.",
      "Restart quizzes to improve your results.",
      "Enjoy fast, dynamic question loading with smooth transitions."
    ],
    links: {
      liveUrl: "https://quizzlee.netlify.app/",
      githubUrl: "https://github.com/rayenrsalhi9/quizzly"
    },
    images: [
      "quizzly.png"
    ]
  },
  {
    id: "assembly-endgame",
    title: "Assembly: Endgame - Word Guess Game",
    overview:
      "Assembly: Endgame is a modern word guessing game with a programming theme. Players must guess words correctly within limited attempts to stop Assembly from taking over the programming world. Built with React and TypeScript, the game emphasizes accessibility, responsive design, and modular architecture.",
    objectives: [
      "Deliver a fun, accessible word guessing game with a programming narrative.",
      "Showcase clean React component structure and state management.",
      "Implement accessibility-first and responsive design principles."
    ],
    keyFeatures: [
      "Word Guessing Mechanics – Classic hangman-style gameplay with a tech twist.",
      "Programming Language Theme – Languages die as wrong guesses accumulate.",
      "Dynamic Feedback – Victory confetti, defeat messages, and visual indicators.",
      "Accessibility Support – Full keyboard navigation and ARIA integration.",
      "Responsive UI – Designed for all screen sizes with adaptive elements."
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Confetti",
      "CSS3"
    ],
    architecture:
      "The project follows a modular component architecture, featuring reusable UI components for keyboard input, status panels, and animations. TypeScript provides strong typing and safety, while Vite optimizes builds for performance.",
    setup: [
      "Clone the repository and install dependencies using `npm install`.",
      "Start the app with `npm run dev`.",
      "Play instantly at `http://localhost:5173`."
    ],
    usage: [
      "Start a new game and guess letters to reveal the hidden word.",
      "Avoid running out of attempts — or Assembly wins!",
      "Restart anytime with the New Game button."
    ],
    links: {
      liveUrl: "https://word-guess-react.netlify.app/",
      githubUrl: "https://github.com/rayenrsalhi9/word-guess-ts"
    },
    images: [
      "/assembly-endgame.png"
    ]
  }
]