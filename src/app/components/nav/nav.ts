import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'nav',        
  imports: [CommonModule],   
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  isMenuOpen = false;
  navigateToSection(event: Event, sectionId: string) {
  event.preventDefault();      // Prevent default jump to section
  this.isMenuOpen = false;     // Close the menu
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to section
  }
}


}
