import { Injectable } from '@angular/core';
import { LinkType } from '../components/about/about';
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}
export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  highlight: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetData1 {
   private links: { [key in LinkType]: string } = {
    [LinkType.Resume]: 'assets/Resume.pdf',
    [LinkType.Github]: 'https://github.com/rachitkhandelwal41',
    [LinkType.Linkedin]: 'https://www.linkedin.com/in/rachit-khandelwal21',
    [LinkType.Mail]: 'mailto:raxkh41@gmail.com'
  };

  constructor() { }

 

  private experiences: Experience[] = [
      {
        period: "2025 — Present",
        title: "Associate Software Engineer",
        company: "Biz2x",
        description: "Learning core technologies involved in banking and lending.",
        technologies: ["TypeScript", "Angular", "Node.js", "PostgreSQL"],
        highlight: "Learned Angular and Node.js while gaining an understanding of lending processes, including workflows involving LOS (Loan Origination System), LMS (Loan Management System), and LCS (Loan Collection System).",
      }
    ];
  
    
     private techStack = [
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-400' },
    { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'text-white' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-300' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-300' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-300' },
  ];

  private skills = [
    'Full-Stack Architecture',
    ' Leadership',
    'Performance Optimization',
    'System Design',
    'Curiosity',
    'Problem Solving',
  ];

  private projects: Project[] = [
      {
        title: "Expense Tracker",
        description:
          "A MERN stack expense tracker with JWT auth, RESTful APIs, and Chart.js visualizations. Features budgeting with real-time alerts.",
        image: "assets/expense.png",
        technologies: [
          "React",
          "Tailwind CSS",
          "TypeScript",
          "Express",
          "MongoDB",
          "Node.js",
          "Render",
          "Vercel",
          "Recoil",
          "JWT",
          "Chart.js"
        ],
        github: "https://github.com/rachitkhandelwal41/Expense_tracker",
        live: "https://expense-tracker2-two.vercel.app/"
      },
      {
        title: "Task Manager",
        description:
          "Full-stack task manager with user auth, CRUD operations, and deployed on AWS with secure CDN and SSL.",
        image: "assets/task.png",
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "Recoil",
          "AWS EC2",
          "Nginx",
          "AWS S3",
          "CloudFront",
          "SSL"
        ],
        github: "https://github.com/rachitkhandelwal41/Payments_App",
        live: "https://task.rachitkhandelwall.tech/"
      },
      {
        title: "Payments Page",
        description:
          "Secure payments dashboard with JWT auth, recipient selection, atomic transactions, and built with React and Express.",
        image: "assets/payments.png",
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "Zod",
          "Vercel",
          "Recoil",
          "Render"
        ],
        github: "https://github.com/rachitkhandelwal41/Payments_App",
        live: "https://payments-app-sigma.vercel.app/"
      }
    ];
  
    getProjects(): Project[] {
      return this.projects;
    }
    getLinks(): { [key in LinkType]: string } {
    return this.links;
  }
  getExperiences(): Experience[] {
      return this.experiences;
    }
    getTechStack() {
    return this.techStack;
  }

  getSkills() {
    return this.skills;
  }
}
