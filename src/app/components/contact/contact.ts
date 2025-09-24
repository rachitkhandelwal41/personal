import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  onSubmit(){
    window.location.href = "mailto:raxkh41@gmail.com";
    alert("Your Request has been Submitted");
  }
}
