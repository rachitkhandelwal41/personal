// about.ts
import { Component, OnInit } from '@angular/core';
import { GetData1 } from '../../service/get-data1';
import { CommonModule } from '@angular/common';


export enum LinkType {
  Resume = 'Resume',
  Github = 'Github',
  Linkedin = 'Linkedin',
  Mail = 'Mail',
}

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports:[CommonModule],
})
export class About implements OnInit {
  LinkType = LinkType;

  // Make links public if you want to access in template
  public links!: { [key in LinkType]: string };

  constructor(private getData1Service: GetData1) {}

  ngOnInit(): void {
    // Get links from service
    this.links = this.getData1Service.getLinks();
  }

  open(type: LinkType) {
    const link = this.links[type];
    if (link) window.open(link, '_blank');
  }
}
