import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  techStack = [
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-400' },
    { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'text-white' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-300' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-300' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-300' },
  ];

  skills = [
    'Full-Stack Architecture',
    ' Leadership',
    'Performance Optimization',
    'System Design',
    'Curiosity',
    'Problem Solving',
  ];

}
