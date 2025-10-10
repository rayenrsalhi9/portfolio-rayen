export const projectDetails = [
  {
    id: "sales-tracker",
    title: "Sales Tracker",
    overview:
      "Sales Tracker is a secure, real-time web application for monitoring sales performance and analytics. It features live dashboards that automatically update as new data is added, helping teams stay informed and make data-driven decisions. The app prioritizes security and access control, leveraging Supabase’s authentication and Row Level Security (RLS) to ensure each user only accesses their own data.",
    objectives: [
      "Provide an intuitive dashboard for tracking daily, weekly, and monthly sales performance.",
      "Ensure real-time synchronization between the client and the database.",
      "Implement secure authentication and fine-grained data access using Supabase RLS.",
      "Offer a visually engaging experience through charts and analytics."
    ],
    keyFeatures: [
      "🔐 **Email/Password Authentication** – Users can securely sign up, log in, and access personalized sales data.",
      "📊 **Realtime Analytics** – Sales performance data updates instantly without page reloads.",
      "🧩 **Interactive Charts** – Built with Recharts for a clear visual overview of sales trends.",
      "🛡️ **Database Security with RLS** – Enforced access policies ensure that each user’s data remains private.",
      "⚙️ **Responsive UI** – Works seamlessly across desktops, tablets, and mobile devices."
    ],
    technologies: [
      "React 19",
      "Recharts",
      "Supabase (Auth, Realtime, RLS)",
      "CSS3"
    ],
    architecture:
      "The frontend is built with React for dynamic UI and state management. Supabase serves as the backend, handling authentication, real-time database updates, and RLS-based access control. Recharts provides data visualization, while CSS3 ensures a clean, responsive interface.",
    setup: [
      "Clone the repository and run `npm install` to install dependencies.",
      "Create a `.env` file with Supabase URL and public anon key.",
      "Start the development server with `npm run dev`.",
      "Set up Supabase authentication and configure RLS policies for user-specific data access."
    ],
    usage: [
      "Sign up or log in using your email and password.",
      "Add or update your sales entries.",
      "View real-time performance through interactive charts and summaries."
    ],
    security: [
      "Supabase RLS ensures users can only access their own sales records.",
      "All database interactions are authenticated via secure API keys.",
      "Session tokens and environment variables are properly managed."
    ],
    links: {
      liveUrl: "...",
      githubUrl: "..."
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "💬 **AI Chat Interface** – Conversational interface powered by OpenAI GPT models.",
      "🎧 **Smart Podcast Recommendations** – Uses vector similarity to find semantically related episodes.",
      "⚡ **Local Embedding Generation** – Generates embeddings using Ollama and BAAI/bge-m3.",
      "📡 **Supabase + pgvector Integration** – Efficient vector search and storage.",
      "🎨 **Modern UI** – Responsive and elegant interface built with Tailwind CSS and shadcn/ui."
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
      githubUrl: "..."
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
      "🎮 **Interactive Gameplay** – Flip and match cards with smooth transitions.",
      "💡 **Dynamic State Management** – Efficient React state logic for real-time updates.",
      "📱 **Responsive Design** – Works perfectly on all devices.",
      "🎉 **Victory Animation** – Confetti effect on game completion.",
      "🧪 **Testing Suite** – Includes Vitest and React Testing Library for component-level testing."
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
      liveUrl: "",
      githubUrl: ""
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
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
      "🧠 **Dynamic Question Fetching** – Retrieves questions from an external API in real time.",
      "⚡ **Instant Feedback** – Provides immediate visual responses to selected answers.",
      "📊 **Score Tracking** – Tracks and displays real-time user progress.",
      "📱 **Responsive Layout** – Fully optimized for mobile and desktop.",
      "♿ **Accessible Design** – Keyboard navigation and ARIA support."
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
      liveUrl: "...",
      githubUrl: "..."
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
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
      "🎯 **Word Guessing Mechanics** – Classic hangman-style gameplay with a tech twist.",
      "💻 **Programming Language Theme** – Languages ‘die’ as wrong guesses accumulate.",
      "✨ **Dynamic Feedback** – Victory confetti, defeat messages, and visual indicators.",
      "♿ **Accessibility Support** – Full keyboard navigation and ARIA integration.",
      "📱 **Responsive UI** – Designed for all screen sizes with adaptive elements."
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
      liveUrl: "",
      githubUrl: ""
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
]