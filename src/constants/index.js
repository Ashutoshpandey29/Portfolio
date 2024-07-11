import { meta, shopify, starbucks, tesla} from "../assets/images";
import city from "../assets/images/city.svg";
import data from "../assets/images/data.svg";
import doctor from "../assets/images/doctor.svg";   
import food from "../assets/images/food.svg";
import llvm from "../assets/images/llvm.svg";
import student from "../assets/images/student.svg";
import iiis from "../assets/images/iiis.png";
import iiitg from "../assets/images/iiitg.png";
import aws from "../assets/images/AWS.jpg";
import c from "../assets/images/c.svg";
import docker from "../assets/images/docker.jpg";
import java from "../assets/images/java.jpg";
import linux from "../assets/images/linux.jpg";
import python from "../assets/images/python.jpg";
import mongo from "../assets/images/mongo.jpg";
import sql from "../assets/images/sql.jpg";
import psql from "../assets/images/psql.jpg";
import sk from "../assets/images/sk.jpg";
import tf from "../assets/images/tf.jpg";
import pytorch from "../assets/images/pytorch.jpg";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

import serb from "../assets/images/serb.png";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Languages",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Languages",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Languages",
    },
    {
        imageUrl: tf,
        name: "TensorFlow",
        type: "Machine Learning",
    },
    {
        imageUrl: sk,
        name: "SKlearn",
        type: "Machine Learning",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "Machine Learning",
    },
    {
        imageUrl: sql,
        name: "MySQL",
        type: "Databases",
    },
    {
        imageUrl: psql,
        name: "PostgreSQL",
        type: "Databases",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Computing",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Container",
    },
    {
        imageUrl: linux,
        name: "LINUX",
        type: "OS",
    },
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "IIITG and SERB",
        icon: serb,
        iconBg: "#accbe1",
        date: "November 2023 - April 2024",
        points: [
            "Project titled ”Security and Privacy Preserved Automatic Health Emergency Detection and MSP Selection in IoT Based Smart Healthcare System.",
            "Spearheading the development of the UI and encryption algorithm.",
            "Designed a solution recommending healthcare facilities using WBAN model,MDRQ tree, and Homomorphic encryption with OAEP (SHA-256).",
        ],
    },
    {
        title: "Research",
        company_name: "IIIS Delhi",
        icon:iiis,
        iconBg: "#fbc3bc",
        date: "December 2023 – January 2024",
        points: [
            "Researched and applied Fuzzy TOPSIS method to optimize requirement selection for a Movie Ticket Booking System.",
            "Identified and categorized over 60 requirements, prioritizing them during software development.",
        ],
    },
    {
        title: "PRESIDENT-SGC",
        company_name: "IIIT GUWAHATI",
        icon: iiitg,
        iconBg: "#9fe2bf",
        date: "August 2023 – July 2024",
        points: [
            "Responsible for maintaining the technical, cultural and sports domains of Student's Gymkhana Council of IIITG.",
            "Successfully conducted 5 major fests, managing multiple teams and efficiently completing the tasks.",
            "Led a team of 50 coordinators across different domains, conducting various events, competitions etc",
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
   
   
];
