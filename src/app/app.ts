import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { About } from './components/about/about';
import { Hero } from './components/hero/hero';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
@Component({
  selector: 'app-root',
  imports: [Nav,About,Hero,Experience,Projects,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected readonly title = signal('Personal_Portfolio');
}
