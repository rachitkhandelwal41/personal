import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Experiences {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  highlight: string;
}
@Component({
  selector: 'experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})

export class Experience {
 experiences: Experiences[] = [
    {
      period: "2025 — Present",
      title: "Associate Software Engineer",
      company: "Biz2x",
      description: "Learning core technologies involved in banking and lending.",
      technologies: ["TypeScript", "Angular", "Node.js", "PostgreSQL"],
      highlight: "Learned Angular and Node.js while gaining an understanding of lending processes, including workflows involving LOS (Loan Origination System), LMS (Loan Management System), and LCS (Loan Collection System).",
    }
  ];
}
