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

}
