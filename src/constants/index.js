import city from "../assets/images/city.svg";
import data from "../assets/images/data.svg";
import doctor from "../assets/images/doctor.svg";
import food from "../assets/images/food.svg";
import llvm from "../assets/images/llvm.svg";
import student from "../assets/images/student.svg";
import briefcase from "../assets/images/briefcase.svg";
import shoppingCart from "../assets/images/shopping-cart.svg";
import networkGraph from "../assets/images/network-graph.svg";
import {
    contact,
    github,
    linkedin,
    summiz,
} from "../assets/icons";

export const skillGroups = [
    {
        title: "Languages",
        items: ["C++", "Python", "Java", "TypeScript", "JavaScript", "SQL"],
    },
    {
        title: "AI / Machine Learning",
        items: ["Recommendation Systems", "Learning-to-Rank", "LightGBM", "Optuna", "DistilBERT", "Transformers", "PyTorch", "TensorFlow", "Scikit-learn", "Embeddings", "LLMs", "Google Gemini", "Prompt Engineering", "LangGraph"],
    },
    {
        title: "Search & Information Retrieval",
        items: ["Semantic Search", "Vector Search", "Dense Retrieval", "ANN", "HNSW", "BM25", "Reciprocal Rank Fusion", "RAG", "Ranking Systems", "Qdrant", "Elasticsearch"],
    },
    {
        title: "Backend & Distributed Systems",
        items: ["FastAPI", "Spring Boot", "Node.js", "NestJS", "Flask", "REST APIs", "Microservices", "Data Pipelines", "Background Workers", "Async Processing"],
    },
    {
        title: "Databases & Messaging",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "S3", "SQS", "Kafka", "RabbitMQ"],
    },
    {
        title: "Frontend",
        items: ["React.js", "Next.js", "Redux", "jQuery", "HTML5", "CSS3", "SSR"],
    },
    {
        title: "Cloud & Infrastructure",
        items: ["AWS", "GCP", "Azure", "Docker", "Linux", "NGINX", "Grafana", "Kibana", "CI/CD"],
    },
    {
        title: "Software Engineering",
        items: ["Data Structures & Algorithms", "System Design", "Performance Optimization", "Unit Testing", "Integration Testing", "Observability", "Telemetry", "Production Debugging"],
    },
];

export const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "InfoEdge",
        icon: briefcase,
        iconBg: "#accbe1",
        date: "May 2026 – Present",
        points: [
            "Built a hybrid retrieval and ranking system for 400K+ candidates combining dense ANN search, BM25, and RRF fusion with recruiter preference signals; cut recommendation latency from 4s to 500ms via parallel retrieval and optimized scoring.",
            "Trained and evaluated Learning-to-Rank models on recruiter interaction and candidate-job fit signals to improve ranking quality for recommendations and applicant ordering.",
            "Developed job/candidate embedding pipelines (Gemini, MySQL, S3, SQS, Qdrant) generating retrieval and similarity vectors for 500K+ candidate skill documents.",
            "Fine-tuned a DistilBERT classifier on 30,863 labeled job records, reaching 79.5% accuracy and 0.751 macro-F1 for job category prediction.",
            "Designed OpportunityOS, a FastAPI/LangGraph/Gemini/Next.js sales-intelligence platform surfacing competitor hiring signals for outreach.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "InfoEdge",
        icon: briefcase,
        iconBg: "#fbc3bc",
        date: "Jul 2025 – May 2026",
        points: [
            "Built Gemini-powered job-posting assistance generating descriptions and structured metadata from title, skills, salary, and experience.",
            "Added Server-Side Rendering to 4 major legacy jQuery/React pages, improving crawlability and cutting page-load time by 20%.",
            "Built an internal cron-monitoring platform tracking scheduled-job health and syncing operational data to S3 for centralized observability.",
            "Built a voice-agent prototype automating product demos across 4 sales offerings at an internal AI hackathon.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "InfoEdge",
        icon: briefcase,
        iconBg: "#9fe2bf",
        date: "Jan 2025 – Jun 2025",
        points: [
            "Built full-stack modules for the Boomerang alumni-rehiring platform (React, Redux, NestJS, MongoDB, RabbitMQ, S3) covering profiles, referrals, applications, and async enrichment workers.",
            "Developed internal admin workflows for company/user management, statistics, and bulk-upload validation for operations teams.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ashutoshpandey29',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ashutosh-pandey-2780211b4/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'BERT SQUAD',
        description: 'Developed a Question Answering System using BERT and SQuAD dataset leveraging the power of transformers to provide accurate answers to the questions.',
        link: 'https://github.com/Ashutoshpandey29/BERT_Squad',
    },
    {
        iconUrl: doctor,
        theme: 'btn-back-yellow',
        name: 'WBAN HEALTHCARE',
        description: 'Web Application developed during my internship to provide a secure and privacy preserved automatic health emergency detection and MSP selection in IoT based smart healthcare system.',
        link: 'https://github.com/Ashutoshpandey29/WBAN_HEALTHCARE',
    },
    {
        iconUrl: student,
        theme: 'btn-back-red',
        name: 'Student Profile Management System',
        description: 'Developed a web application that allows admin to manage student grades, personal information and students can view their transcripts and analyze their performance.',
        link: 'https://github.com/ArcXzost/student-grading-system/tree/ashutosh_ui',
    },
    {
        iconUrl: food,
        theme: 'btn-back-green',
        name: 'Deep Learning based Crop Classification',
        description: 'Employed Dynamic image segmentation and Convolutional Neural Networks to classify crops in satellite images, aiding in precision agriculture.',
        link: 'https://www.kaggle.com/code/ashutosh2914/deeplabv3-3d-for-crop-mapping/edit',
    },
    {
        iconUrl: llvm,
        theme: 'btn-back-blue',
        name: 'LLVM Secure Not Secure Partitions',
        description: 'Designed and built a C++ program using LLVM to partition secure and non-secure code sections, enhancing security in embedded systems.',
        link: 'https://github.com/ArcXzost/llvm-secure-partitioning',
    },

    {
        iconUrl: data,
        theme: 'btn-back-black',
        name: 'English to SQL converter',
        description: 'Developed a GUI application that converts English queries to SQL queries, simplifying database querying for non-technical users.',
        link: 'https://github.com/Ashutoshpandey29/English_to_SQL_converter',
    },

    {
        iconUrl: city,
        theme: 'btn-back-pink',
        name: 'Property Networks',
        description: 'Built a GUI application that uses a graph database to manage properties, landlords, and tenants, streamlining property management.',
        link: 'https://github.com/Ashutoshpandey29/PROPERTY_NETWORKS/tree/master',
    },
    {
        iconUrl: shoppingCart,
        theme: 'btn-back-blue',
        name: 'FlipSmart',
        description: 'Architected a multi-service AI shopping assistant with a React/Three.js 3D frontend and Node.js/Flask backends, integrating Gemini, Azure STT, and Google Cloud TTS for real-time conversational recommendations with viseme/morph-target facial animation.',
        link: 'https://github.com/Ashutoshpandey29/FlipSmart',
    },
    {
        iconUrl: networkGraph,
        theme: 'btn-back-green',
        name: 'FundSpy',
        description: 'Built a graph-based transaction monitoring system using a custom DFS cycle-detection algorithm to identify circular fund transfers, deployed as a Flask application on AWS Elastic Beanstalk with Scikit-learn classifier inference.',
        link: 'https://github.com/Ashutoshpandey29/FUND_SPY',
    },
];
