import { Component } from '@angular/core';

export enum LinkType {
  Resume = 'Resume',
  Github = 'Github',
  Linkedin = 'Linkedin',
  Mail = 'Mail',
  
}

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  // Simple key-value map
   LinkType = LinkType;
  private links: { [key in LinkType]: string } = {
    // [LinkType.Resume]: 'https://shorturl.at/UgTl4',
    [LinkType.Resume]: 'assets/Resume.pdf',

    [LinkType.Github]: 'https://github.com/rachitkhandelwal41',
    [LinkType.Linkedin]: 'https://www.linkedin.com/in/rachit-khandelwal21',
    [LinkType.Mail]: 'mailto:raxkh41@gmail.com'
  };

  // Redirect function
  open(type: LinkType) {
    
    const link = this.links[type];
    if (link) window.open(link, '_blank');
  }
}
