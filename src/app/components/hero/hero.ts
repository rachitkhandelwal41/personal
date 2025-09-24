// hero.component.ts
import { Component, OnInit } from '@angular/core';

import { GetData1 } from '../../service/get-data1';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  imports:[CommonModule]
})
export class Hero implements OnInit {

  techStack:any= [];
  skills:any = [];

  constructor(private heroDataService: GetData1) {}

  ngOnInit(): void {
    this.techStack = this.heroDataService.getTechStack();
    this.skills = this.heroDataService.getSkills();
  }
}
