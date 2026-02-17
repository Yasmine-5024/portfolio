export const portfolioData = {
    personal: {
        name: "Yasaman Akhoundzadeh Basti",
        title: "AI Engineer & Full-Stack Developer",
        location: "Oshawa, ON, Canada",
        email: "yasaman.akhoundzadehbasti@ontariotechu.net",
        phone: "437-858-8059",
        github: "https://github.com/Yasmine-5024",
        linkedin: "https://linkedin.com/in/yasaman-a-basti",
        bio: "Master's student in Computer Science (HCI & ML) at Ontario Tech University. I build multi-agent AI systems, LLM-powered workflows, and full-stack research tools. Published at ACM CUI 2025. Passionate about building intelligent systems at the intersection of AI reasoning and human-centered design.",
    },
    sections: {
        about: "I am a Master's student in Computer Science (HCI & ML) at Ontario Tech University, focusing on building intelligent systems that bridge the gap between complex AI capabilities and human needs. My work involves designing multi-agent AI systems and LLM-powered workflows to solve real-world problems in research and data analysis.",
    },
    projects: [
        {
            title: "CitePeek / CiteView",
            description: "An interactive PDF research assistant that transforms inline citations into clickable elements with AI-powered multi-level analysis (Surface, Compare, Viz, Results). Features a dual-sidebar architecture, multi-agent pipeline using CrewAI and LangGraph, semantic graph visualization with D3.js, and persistent caching with SQLite.",
            techStack: ["React", "TypeScript", "Flask", "GPT-4", "CrewAI", "LangGraph", "GROBID", "FAISS", "D3.js"],
            link: "#",
            github: null,
            image: "/project_abstract_ai.webp",
            badge: "Published at ACM CUI 2025",
        },
        {
            title: "FigureView",
            description: "AI-powered system that detects figure references in academic PDFs, localizes visual assets using YOLOv8 layout detection, and generates context-grounded explanations through a LangGraph multi-agent workflow.",
            techStack: ["React", "FastAPI", "LangGraph", "LangChain", "YOLOv8", "PyMuPDF", "GPT-4o-mini"],
            link: null,
            github: "https://github.com/Yasmine-5024/FigureView",
            image: "/project_abstract_vision.webp",
        },
        {
            title: "PaperAssist",
            description: "Multi-agent system that converts PDF research papers into structured study notes, flashcards, glossaries, and summaries with a self-correcting quality check loop.",
            techStack: ["React", "FastAPI", "LangGraph", "LangChain", "PyMuPDF", "GPT-4o-mini"],
            link: null,
            github: "https://github.com/Yasmine-5024/PaperReading",
            image: "/project_abstract_nlp.webp",
        },
        {
            title: "Pothole Segmentation",
            description: "Deep learning model using YOLOv9 for real-time pothole detection and segmentation. Achieved mAP50 of 0.807 and Mask mAP50 of 0.825.",
            techStack: ["PyTorch", "YOLOv9"],
            link: null,
            github: null,
            image: "/project_abstract_vision.webp",
        },
        {
            title: "Amazon Reviews Sentiment Analysis",
            description: "Sentiment classification on Amazon reviews using Logistic Regression and BERT transformer embeddings.",
            techStack: ["Python", "Keras", "BERT", "Scikit-learn"],
            link: null,
            github: null,
            image: "/project_abstract_nlp.webp",
        },
    ],
    experience: [
        {
            role: "Research Assistant",
            company: "UXID Lab, Ontario Tech University",
            Website: "https://uxid.ca/",
            period: "Jan 2025 – Present",
            description: [
                "Designed agentic pipeline using CrewAI and LangChain for citation retrieval and cross-paper analysis",
                "Built hybrid NLP systems with FAISS and GPT-4 for contextual reasoning",
                "Conducted 12-participant user study achieving 97.9% task accuracy"
            ]
        },
        {
            role: "Teaching Assistant",
            company: "Database Systems & Scientific Data Analysis",
            period: "Sep 2024 – Present",
            description: [
                "Delivered tutorials on SQL and data analysis to 100+ students",
                "Supported Python and R-based statistical workflows"
            ]
        },
        {
            role: "Teaching Assistant",
            company: "Software Systems Dev & Integration – Java",
            period: "Sep 2024 – Present",
            description: [
                "Guided students through Java development, design patterns, and system architecture"
            ]
        },
        {
            role: "Teaching Assistant",
            company: "University of Guilan (Compiler Design & AI)",
            period: "Jan 2023 – Jun 2023",
            description: [
                "Mentored students in compiler construction and artificial intelligence concepts"
            ]
        },
    ],
    education: [
        {
            degree: "MSc Computer Science",
            school: "Ontario Tech University",
            period: "Sep 2024 - Present",
            details: "GPA: 4.12 | Focus: HCI & Master's Thesis on AI Agents"
        },
        {
            degree: "BSc Computer Engineering",
            school: "University of Guilan",
            period: "Sep 2019 - Jun 2022",
            details: "Focus: Artificial Intelligence & Software Engineering"
        }
    ],
    publication: {
        citation: "Basti, Y. A. (2025). CitePeek: Contextual Citation Exploration Within Research Papers. ACM CUI 2025.",
        doi: "https://doi.org/10.1145/3719160.3737639",
        badge: "Accepted at ACM CUI 2025",
    },
    skills: {
        languages: ["Python", "JavaScript/TypeScript", "C++", "Java", "SQL"],
        ai_ml: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "YOLO", "BERT", "FAISS"],
        llm_agents: ["LangChain", "LangGraph", "CrewAI", "OpenAI API", "GPT-4"],
        web: ["React", "FastAPI", "Flask", "Node.js", "REST APIs"],
        tools: ["Docker", "Git", "Linux", "SQLite", "GROBID"],
    },
};
