import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
projects = [
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

}
