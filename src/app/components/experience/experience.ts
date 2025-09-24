// experience.component.ts
import { Component, OnInit } from '@angular/core';

import { GetData1 } from '../../service/get-data1';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
  imports:[CommonModule]
})
export class Experience implements OnInit {
  
  experiences: any = [];

  constructor(private getData: GetData1) {}

  ngOnInit(): void {
    this.experiences = this.getData.getExperiences();
  }
}
